const GRADE_POINTS = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

const PASSING_GRADES = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'];

const AVAILABLE_COURSES = {
    'Computer Science': [
        { id: 'CPSC231', name: 'Introduction to Computer Science', credits: 3, prerequisite: [] },
        { id: 'CPSC233', name: 'Object-Oriented Programming', credits: 3, prerequisite: ['CPSC231'] },
        { id: 'CPSC331', name: 'Data Structures and Algorithms', credits: 3, prerequisite: ['CPSC233', 'MATH271'] },
        { id: 'MATH211', name: 'Linear Methods I', credits: 3, prerequisite: [] },
        { id: 'MATH271', name: 'Discrete Mathematics', credits: 3, prerequisite: [] },
    ],
    'Mathematics': [
        { id: 'MATH211', name: 'Linear Methods I', credits: 3, prerequisite: [] },
        { id: 'MATH271', name: 'Discrete Mathematics', credits: 3, prerequisite: [] },
        { id: 'MATH311', name: 'Advanced Calculus', credits: 3, prerequisite: ['MATH211'] },
        { id: 'MATH331', name: 'Abstract Algebra', credits: 3, prerequisite: ['MATH271'] },
    ],
    'Physics': [
        { id: 'PHYS211', name: 'Classical Mechanics', credits: 3, prerequisite: [] },
        { id: 'PHYS221', name: 'Electromagnetism', credits: 3, prerequisite: ['PHYS211'] },
        { id: 'PHYS311', name: 'Quantum Mechanics', credits: 3, prerequisite: ['PHYS221'] },
    ]
};

const MAJOR_REQUIREMENTS = {
    'Computer Science': ['CPSC231', 'CPSC233', 'CPSC331'],
    'Mathematics': ['MATH211', 'MATH271', 'MATH311', 'MATH331'],
    'Physics': ['PHYS211', 'PHYS221', 'PHYS311']
};

let courses = [];
let requiredCourses = [];
let maxDPlusAllowed = 2; // Default value
let draggedCourseId = null;
let gpaChart = null;
let gpaLineChart = null;

function initializeCoursesForMajor(major) {
    courses = AVAILABLE_COURSES[major].map(course => ({
        ...course,
        term: 'Fall',
        year: 1,
        completed: false,
        grade: null,
        required: MAJOR_REQUIREMENTS[major].includes(course.id)
    }));
    requiredCourses = courses.filter(course => course.required);
    
    // Ensure the year filter dropdown has options for years 1-4
    updateYearFilterOptions();
}
function updateYearFilterOptions() {
    const yearFilter = document.getElementById('year-filter');
    // Clear existing options except the "All Years" option
    while (yearFilter.options.length > 1) {
        yearFilter.remove(1);
    }
    
    // Add options for years 1-4
    for (let i = 1; i <= 4; i++) {
        const yearOption = document.createElement('option');
        yearOption.value = i;
        yearOption.textContent = `Year ${i}`;
        yearFilter.appendChild(yearOption);
    }
    
    // Add options for any years beyond 4 that exist in the courses
    const existingYears = [...new Set(courses.map(course => course.year))];
    existingYears.filter(year => year > 4).forEach(year => {
        const yearOption = document.createElement('option');
        yearOption.value = year;
        yearOption.textContent = `Year ${year}`;
        yearFilter.appendChild(yearOption);
    });
}

function renderCourses() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedYear = document.getElementById('year-filter').value;
    const selectedTerm = document.getElementById('term-filter').value;
    const statusFilter = document.getElementById('status-filter').value;

    const filtered = courses.filter(course => {
        const matchesSearch = course.id.toLowerCase().includes(searchTerm) || 
                            course.name.toLowerCase().includes(searchTerm);
        const matchesYear = selectedYear === 'all' || course.year === parseInt(selectedYear);
        const matchesTerm = selectedTerm === 'all' || course.term === selectedTerm;
        const matchesStatus = statusFilter === 'all' || 
                            (statusFilter === 'completed' && course.completed) ||
                            (statusFilter === 'incomplete' && !course.completed);
        
        return matchesSearch && matchesYear && matchesTerm && matchesStatus;
    });

    const yearSections = document.getElementById('year-sections');
    yearSections.innerHTML = '';

    if (selectedYear === 'all') {
        // Find all years that exist in the data, or should exist by default
        const defaultYears = [1, 2, 3, 4];
        const courseYears = [...new Set(courses.map(course => course.year))];
        const additionalYears = courseYears.filter(year => !defaultYears.includes(year) && year > 4).sort((a, b) => a - b);
        const allYears = [...defaultYears, ...additionalYears];
        
        allYears.forEach(year => {
            const yearCourses = filtered.filter(course => course.year === year);
            
            // Create section for all years (1-4 by default and any added years)
            const yearSection = document.createElement('div');
            yearSection.className = 'year-section';
            yearSection.innerHTML = `
                <h3>Year ${year}</h3>
            `;
            const termGrid = document.createElement('div');
            termGrid.className = 'grid';
            ['Fall', 'Winter', 'Spring', 'Summer'].forEach(term => {
                const termContainer = document.createElement('div');
                termContainer.className = 'term-container';
                termContainer.dataset.term = term;
                termContainer.dataset.year = year;
                termContainer.ondrop = handleDrop;
                termContainer.ondragover = allowDrop;
                termContainer.innerHTML = `
                    <div class="term-header">
                        <span>${term} Term</span>
                        ${canAddCourse(year, term) ? `
                            <div class="add-course-button" onclick="addCourseToTerm(${year}, '${term}')">
                                <span class="material-symbols-outlined">add</span>
                            </div>
                        ` : ''}
                    </div>
                `;
                const termCourses = yearCourses.filter(course => course.term === term);
                termCourses.forEach(course => {
                    termContainer.appendChild(createCourseCard(course));
                });
                termGrid.appendChild(termContainer);
            });
            yearSection.appendChild(termGrid);
            yearSections.appendChild(yearSection);
        });
    } else {
        // Display courses for the selected year
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';
        yearSection.innerHTML = `
            <h3>Year ${selectedYear}</h3>
        `;
        const termGrid = document.createElement('div');
        termGrid.className = 'grid';
        ['Fall', 'Winter', 'Spring', 'Summer'].forEach(term => {
            const termContainer = document.createElement('div');
            termContainer.className = 'term-container';
            termContainer.dataset.term = term;
            termContainer.dataset.year = selectedYear;
            termContainer.ondrop = handleDrop;
            termContainer.ondragover = allowDrop;
            termContainer.innerHTML = `
                <div class="term-header">
                    <span>${term} Term</span>
                    ${canAddCourse(selectedYear, term) ? `
                        <div class="add-course-button" onclick="addCourseToTerm(${selectedYear}, '${term}')">
                            <span class="material-symbols-outlined">add</span>
                        </div>
                    ` : ''}
                </div>
            `;
            const termCourses = filtered.filter(course => course.term === term);
            termCourses.forEach(course => {
                termContainer.appendChild(createCourseCard(course));
            });
            termGrid.appendChild(termContainer);
        });
        yearSection.appendChild(termGrid);
        yearSections.appendChild(yearSection);
    }

    // Show the "Add Year" button only if we're in "All Years" view
    const addYearButton = document.getElementById('add-year-button');
    addYearButton.style.display = selectedYear === 'all' ? 'block' : 'none';

    updateCreditCounter();
    updateDPlusCounter();
    updateGPAChart();
    renderRequiredCourses();
}

function createCourseCard(course) {
    const card = document.createElement('div');
    let statusClass = '';
    if (course.completed) {
        statusClass = PASSING_GRADES.includes(course.grade) ? 'completed' : 'failed';
    } else if (course.prerequisite.length > 0 && !course.prerequisite.every(prereq => 
        courses.find(c => c.id === prereq && c.completed && PASSING_GRADES.includes(c.grade)))) {
        statusClass = 'requirement-not-met';
    } else {
        statusClass = 'in-progress';
    }
    card.className = `course-card ${statusClass}`;
    card.draggable = true;
    card.dataset.id = course.id;
    card.ondragstart = (e) => {
        draggedCourseId = course.id;
        e.dataTransfer.setData('text/plain', course.id);
    };

    const dPlusWarning = course.grade === 'D+' && course.prerequisite.length > 0 ?
        `<div style="color: #dc2626; font-size: 0.875rem; margin-top: 0.5rem;">
            Warning: D+ grade cannot be used as a prerequisite.
        </div>` : '';

    card.innerHTML = `
        <div class="course-header">
            <div>
                <h4>${course.id}</h4>
                <p style="color: #6b7280; font-size: 0.875rem;">${course.name}</p>
            </div>
            <span class="badge">${course.credits} Credits</span>
        </div>
        ${course.prerequisite.length ? `
            <div style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">
                Prerequisites: ${course.prerequisite.join(', ')}
            </div>
        ` : ''}
        ${dPlusWarning}
        <div class="course-actions">
            <button onclick="toggleCompletion('${course.id}')">
                ${course.completed ? 'Completed' : 'Mark Complete'}
            </button>
            ${course.completed ? `
                <input type="text" class="grade-input" placeholder="Grade" 
                    value="${course.grade || ''}" 
                    onchange="updateGrade('${course.id}', this.value)">
            ` : ''}
            <button onclick="deleteCourse('${course.id}')">Delete</button>
        </div>
    `;

    return card;
}

function toggleCompletion(id) {
    courses = courses.map(course => 
        course.id === id ? { ...course, completed: !course.completed } : course
    );
    
    // Update required courses if the toggled course is a required one
    const major = document.getElementById('major-select').value;
    if (MAJOR_REQUIREMENTS[major].includes(id)) {
        renderRequiredCourses();
    }
    
    renderCourses();
}

function updateGrade(id, grade) {
    if (grade === 'D+' && countDPlusGrades() >= maxDPlusAllowed) {
        alert(`You have already used the maximum allowed D+ grades (${maxDPlusAllowed}).`);
        return;
    }
    
    courses = courses.map(course => 
        course.id === id ? { ...course, grade } : course
    );

    // Automatically mark as completed if the grade is C- or above
    if (PASSING_GRADES.includes(grade)) {
        courses = courses.map(course => 
            course.id === id ? { ...course, completed: true } : course
        );
    }

    // Update required courses if the grade-updated course is a required one
    const major = document.getElementById('major-select').value;
    if (MAJOR_REQUIREMENTS[major].includes(id)) {
        renderRequiredCourses();
    }
    
    renderCourses();
}

function countDPlusGrades() {
    return courses.filter(course => course.grade === 'D+').length;
}

function updateDPlusCounter() {
    const dPlusCount = countDPlusGrades();
    document.getElementById('d-plus-counter').textContent = `${dPlusCount}/${maxDPlusAllowed} D+ Grades`;
}

function updateCreditCounter() {
    const total = courses.reduce((sum, course) => course.completed ? sum + course.credits : sum, 0);
    document.getElementById('credit-counter').textContent = `${total}/120 Credits`;
}

function showCreditBreakdown() {
    const breakdown = {
        '100': { major: 0, other: 0 },
        '200': { major: 0, other: 0 },
        '300': { major: 0, other: 0 },
        '400': { major: 0, other: 0 },
        '500': { major: 0, other: 0 }
    };

    const major = document.getElementById('major-select').value;
    const majorPrefix = major === 'Computer Science' ? 'CPSC' : 
                       major === 'Mathematics' ? 'MATH' : 
                       major === 'Physics' ? 'PHYS' : '';

    courses.filter(course => course.completed).forEach(course => {
        const level = course.id.match(/\d+/)[0].charAt(0) + '00';
        if (course.id.startsWith(majorPrefix)) {
            breakdown[level].major += course.credits;
        } else {
            breakdown[level].other += course.credits;
        }
    });

    const breakdownBody = document.getElementById('credit-breakdown-body');
    breakdownBody.innerHTML = '';
    Object.keys(breakdown).forEach(level => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${level}</td>
            <td>${breakdown[level].major}</td>
            <td>${breakdown[level].other}</td>
            <td>${breakdown[level].major + breakdown[level].other}</td>
        `;
        breakdownBody.appendChild(row);
    });

    // Update the major credits header
    document.getElementById('major-credits-header').textContent = `${major} Credits`;

    const modal = document.getElementById('credit-breakdown-modal');
    modal.style.display = 'flex';
}

function closeCreditBreakdownModal() {
    const modal = document.getElementById('credit-breakdown-modal');
    modal.style.display = 'none';
}

function updateGPAChart() {
    const completedCourses = courses.filter(course => course.completed && course.grade);
    const totalCredits = completedCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalPoints = completedCourses.reduce((sum, course) => 
        sum + (GRADE_POINTS[course.grade] || 0) * course.credits, 0);
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

    document.getElementById('current-gpa').textContent = gpa;

    const ctx = document.getElementById('gpaChart').getContext('2d');
    if (gpaChart) gpaChart.destroy();

    gpaChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Completed Credits', 'Remaining Credits'],
            datasets: [{
                data: [totalCredits, 120 - totalCredits],
                backgroundColor: ['#C8102E', '#e5e7eb'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: { enabled: true }
            }
        }
    });

    const lineCtx = document.getElementById('gpaLineChart').getContext('2d');
    if (gpaLineChart) gpaLineChart.destroy();

    const gpaHistory = calculateGPAHistory();
    gpaLineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: gpaHistory.map((_, i) => `Term ${i + 1}`),
            datasets: [{
                label: 'GPA',
                data: gpaHistory,
                borderColor: '#C8102E',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4.0
                }
            }
        }
    });
}

function calculateGPAHistory() {
    const completedCourses = courses.filter(course => course.completed && course.grade);
    const gpaHistory = [];
    let cumulativePoints = 0;
    let cumulativeCredits = 0;

    completedCourses.forEach(course => {
        cumulativePoints += (GRADE_POINTS[course.grade] || 0) * course.credits;
        cumulativeCredits += course.credits;
        gpaHistory.push((cumulativePoints / cumulativeCredits).toFixed(2));
    });

    return gpaHistory;
}

function canAddCourse(year, term) {
    const major = document.getElementById('major-select').value;
    const availableCourses = AVAILABLE_COURSES[major].filter(course => 
        !courses.some(c => c.id === course.id)
    );
    return availableCourses.length > 0;
}
function addYear() {
    const years = [...new Set(courses.map(course => course.year))];
    const maxYear = years.length > 0 ? Math.max(...years) : 4; // Default to 4 if no courses
    const newYear = maxYear + 1;
    
    // Make sure we can't add years less than 5
    if (newYear < 5) {
        alert("Years 1-4 are already available by default.");
        return;
    }

    // Check if the previous year has at least one course
    const previousYearCourses = courses.filter(course => course.year === maxYear);
    if (previousYearCourses.length === 0) {
        alert(`Cannot add Year ${newYear} because Year ${maxYear} is empty. Please add at least one course to Year ${maxYear} first.`);
        return;
    }

    // Prompt the user for confirmation
    const confirmAdd = confirm(`Are you sure you want to add Year ${newYear}?`);
    if (!confirmAdd) {
        return;
    }

    // Check for available courses
    const major = document.getElementById('major-select').value;
    const availableCourses = AVAILABLE_COURSES[major].filter(course => 
        !courses.some(c => c.id === course.id)
    );

    if (availableCourses.length === 0) {
        alert("No available courses to add to the new year. Cannot create a new year without available courses.");
        return;
    }

    // Update year-filter dropdown to include the new year
    const yearFilter = document.getElementById('year-filter');
    const newYearOption = document.createElement('option');
    newYearOption.value = newYear;
    newYearOption.textContent = `Year ${newYear}`;
    yearFilter.appendChild(newYearOption);
    
    // Set the filter to "All Years" to show all years including the new one
    yearFilter.value = 'all';
    
    // Render the courses to show the new year
    renderCourses();
    
    // Automatically scroll to the new year section
    setTimeout(() => {
        const newYearSection = document.querySelector(`.year-section h3:contains('Year ${newYear}')`);
        if (newYearSection) {
            newYearSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

function addCourseToTerm(year, term) {
    const major = document.getElementById('major-select').value;
    const availableCourses = AVAILABLE_COURSES[major].filter(course => 
        !courses.some(c => c.id === course.id)
    );

    if (availableCourses.length === 0) {
        alert("No available courses to add.");
        return;
    }

    // Check if the term container already has a course selection dropdown
    const termContainer = document.querySelector(`.term-container[data-year="${year}"][data-term="${term}"]`);
    const existingDropdown = termContainer.querySelector('.course-selection-container');
    
    if (existingDropdown) {
        // If a dropdown already exists, remove it
        termContainer.removeChild(existingDropdown);
        return;
    }

    // Create a container for the dropdown and button
    const selectionContainer = document.createElement('div');
    selectionContainer.className = 'course-selection-container';
    
    const dropdown = document.createElement('select');
    dropdown.className = 'course-dropdown';
    dropdown.innerHTML = `
        <option value="">Select a course</option>
        ${availableCourses.map(course => `
            <option value="${course.id}">${course.id} - ${course.name}</option>
        `).join('')}
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'selection-buttons';
    
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Add';
    confirmButton.className = 'confirm-button';
    confirmButton.onclick = () => {
        const courseId = dropdown.value;
        if (!courseId) {
            alert("Please select a course.");
            return;
        }

        const course = AVAILABLE_COURSES[major].find(c => c.id === courseId);
        if (!course) {
            alert("Invalid course selection.");
            return;
        }

        const isRequired = MAJOR_REQUIREMENTS[major].includes(courseId);
        
        courses.push({
            id: courseId,
            name: course.name,
            credits: course.credits,
            prerequisite: course.prerequisite,
            term,
            year: parseInt(year),
            completed: false,
            grade: null,
            required: isRequired
        });
        
        // Remove the selection container after adding the course
        termContainer.removeChild(selectionContainer);
        
        updateRequiredCourses();
        renderCourses();
    };
    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'cancel-button';
    cancelButton.onclick = () => {
        // Remove the selection container when canceled
        termContainer.removeChild(selectionContainer);
    };
    
    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    
    selectionContainer.appendChild(dropdown);
    selectionContainer.appendChild(buttonContainer);
    
    termContainer.appendChild(selectionContainer);
}

function deleteCourse(id) {
    // Remove the course with the specified id
    courses = courses.filter(course => course.id !== id);
    
    // Update the required courses list
    updateRequiredCourses();
    
    // Force a UI refresh
    renderCourses();
}

function updateRequiredCourses() {
    const major = document.getElementById('major-select').value;
    requiredCourses = courses.filter(course => MAJOR_REQUIREMENTS[major].includes(course.id));
}


function setDPlusLimit() {
    const limit = parseInt(document.getElementById('d-plus-limit').value);
    if (isNaN(limit) || limit < 0) {
        alert("Invalid D+ limit. Please enter a positive number.");
        return;
    }
    maxDPlusAllowed = limit;
    document.getElementById('max-d-plus').textContent = limit;
    renderCourses();
}

function generateSharableLink() {
    const data = {
        courses,
        maxDPlusAllowed,
        requiredCourses
    };
    const encodedData = btoa(JSON.stringify(data));
    const link = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
    prompt("Share this link to save your progress:", link);
}

function loadFromSharableLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    if (data) {
        const decodedData = JSON.parse(atob(data));
        courses = decodedData.courses;
        maxDPlusAllowed = decodedData.maxDPlusAllowed;
        requiredCourses = decodedData.requiredCourses || [];
        document.getElementById('max-d-plus').textContent = maxDPlusAllowed;
        
        // Update year filter options to include all years from loaded data
        updateYearFilterOptions();
        
        renderCourses();
    }
}

function allowDrop(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    const term = e.target.closest('.term-container').dataset.term;
    const year = e.target.closest('.term-container').dataset.year;
    courses = courses.map(course => 
        course.id === draggedCourseId ? { ...course, term, year: parseInt(year) } : course
    );
    renderCourses();
    draggedCourseId = null;
}

function updateMajor() {
    const major = document.getElementById('major-select').value;
    initializeCoursesForMajor(major);
    requiredCourses = courses.filter(course => MAJOR_REQUIREMENTS[major].includes(course.id));
    renderRequiredCourses();
    renderCourses();
}

function renderRequiredCourses() {
    const requiredCoursesList = document.getElementById('required-courses-list');
    requiredCoursesList.innerHTML = '';

    const major = document.getElementById('major-select').value;
    const requiredCourseIds = MAJOR_REQUIREMENTS[major];
    
    requiredCourseIds.forEach(courseId => {
        const course = courses.find(c => c.id === courseId);
        
        // If the course exists in the courses array
        if (course) {
            const courseDiv = document.createElement('div');
            courseDiv.className = `required-course${course.completed ? ' completed' : ''}${course.grade && !PASSING_GRADES.includes(course.grade) ? ' failed' : ''}`;
            courseDiv.innerHTML = `
                <span>${course.id} - ${course.name}</span>
                ${course.grade ? `<span>Grade: ${course.grade}</span>` : ''}
            `;
            requiredCoursesList.appendChild(courseDiv);
        } else {
            // If the course is required but not added yet
            const availableCourse = AVAILABLE_COURSES[major].find(c => c.id === courseId);
            if (availableCourse) {
                const courseDiv = document.createElement('div');
                courseDiv.className = 'required-course not-added';
                courseDiv.innerHTML = `
                    <span>${availableCourse.id} - ${availableCourse.name}</span>
                    <span class="not-added-label">Not Added</span>
                `;
                requiredCoursesList.appendChild(courseDiv);
            }
        }
    });
}

// The initialization code should include a call to ensure years 1-4 exist
function initialize() {
    // Initialize courses for the default major (Computer Science)
    initializeCoursesForMajor('Computer Science');
    
    // Update year filter options
    updateYearFilterOptions();
    
    // Render courses to show years 1-4
    renderCourses();
    
    // Try to load from sharable link if available
    loadFromSharableLink();
}

// Event listeners
document.getElementById('search').addEventListener('input', renderCourses);
document.getElementById('year-filter').addEventListener('change', renderCourses);
document.getElementById('term-filter').addEventListener('change', renderCourses);
document.getElementById('status-filter').addEventListener('change', renderCourses);

// Initialize courses for the default major (Computer Science)
initializeCoursesForMajor('Computer Science');
renderCourses();