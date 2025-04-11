# University of Calgary Degree Navigator

## Project Team
- **Sheikh Falah Sheikh Hasan** (UCID: 30175335, sheikhfalah.sheikhha@ucalgary.ca)
- **Tyler Nguyen** (UCID: 30158563, tyler.nguyen@ucalgary.ca)
- **Ethan Pangilinan** (UCID: 30179143, ethan.pangilinan@ucalgary.ca)
- **Shayan Vaziri** (UCID: 30174528, shayan.vaziri@ucalgary.ca)
- **Lucas Carvalho** (UCID: 30113633, lucas.carvalho@ucalgary.ca)

## System Overview
The University of Calgary Degree Navigator is a web-based application designed to help students plan their academic journey. It provides features for:
- Course planning by term and year
- GPA tracking and visualization
- Degree requirement monitoring
- Prerequisite checking
- Credit tracking

## Implemented Features
1. **Major Selection**: Choose between Computer Science, Mathematics, or Physics programs
2. **Course Management**:
   - Add/remove courses to terms
   - Mark courses as completed with grades
   - Drag-and-drop course reorganization
3. **Academic Tracking**:
   - Credit counter (completed/total)
   - D/D+ grade counter with configurable limit
   - GPA calculation and visualization
4. **Visualizations**:
   - Pie chart showing completed vs remaining credits
   - Line chart showing GPA trend over time
5. **Degree Requirements**:
   - List of required courses for selected major
   - Visual indicators for completed requirements
6. **Customization**:
   - Background color customization
   - Sharable link generation
7. **Keyboard Shortcuts** for quick navigation

## Walkthrough Instructions

### 1. Selecting a Major
1. Open the application in your web browser
2. From the "Select Major" dropdown at the top:
   - Choose "Computer Science" (default)
   - Or select "Mathematics" or "Physics"

### 2. Adding Courses
1. Click the "+" button in any term (Fall, Winter, Spring, Summer)
2. In the course selection dropdown:
   - Type to search for courses
   - Select a course from the list
   - Click "Add" to confirm
3. For custom courses:
   - Click "Custom" in the course selection
   - Fill in course details (ID, name, credits, prerequisites)
   - Click "Save"

### 3. Managing Courses
1. To mark a course as completed:
   - Click "Mark Complete" on the course card
2. To add a grade:
   - Select a grade from the dropdown (appears after marking complete)
3. To delete a non-required course:
   - Click "Delete" on the course card

### 4. Tracking Progress
1. View your credit progress in the badge at the top (e.g., "45/120 Credits")
   - Click this badge to see a detailed credit breakdown by course level
2. View your D/D+ grade count in the adjacent badge
   - To change the limit: 
     1. Enter a new number in the "Set Maximum D/D+ Grades Allowed" field
     2. Click "Set Limit"

### 5. Using Filters
1. Search courses by typing in the search box (or press 'F' to focus)
2. Filter by:
   - Year: Use the "All Years" dropdown (or press 'Y' to toggle)
   - Term: Use the "All Terms" dropdown (or press 'T' to toggle)
   - Status: Use the "All Courses" dropdown (or press 'C' to toggle)

### 6. Adding Additional Years
1. Click "Add Year" button at the bottom of the year sections
   - Note: You can only add years beyond Year 4

### 7. Sharing Your Plan
1. Customize the background color using the color picker (top-right)
2. Click "Generate Sharable Link"
   - The link will be copied to your clipboard
   - Share this link to let others view your degree plan

### 8. Viewing Requirements
1. Scroll down to the "Required Courses" section
2. View which required courses are:
   - Completed (green)
   - Not completed (white)
   - Failed (red)
   - Not yet added (with "Not Added" label)

## Keyboard Shortcuts
- **F**: Focus search box
- **Y**: Toggle year filter dropdown
- **T**: Toggle term filter dropdown
- **C**: Toggle status filter dropdown (of courses)
- **Arrow Keys**: Navigate dropdown options when open
- **Enter**: Select dropdown option
- **Escape**: Close all dropdowns

## Data Entry Guidelines
1. **Initial Setup**:
   - Select your major first
   - The system will populate with default courses for your major

2. **As You Progress**:
   - Mark courses complete as you finish them
   - Enter your actual grades for accurate GPA calculation
   - Add custom courses for any non-standard courses

3. **Planning Ahead**:
   - Add future terms/years as needed
   - Use the prerequisite warnings to ensure proper course sequencing

## Best Features to Explore
1. **Prerequisite Warnings**:
   - The system shows warnings if you haven't completed prerequisites
   - Includes specific warnings about D/D+ grades not counting for prerequisites

2. **GPA Visualization**:
   - The pie chart shows your credit progress
   - The line chart shows your GPA trend over time

3. **Custom Course Creation**:
   - Add courses not in the default catalog
   - Specify custom prerequisites

4. **Sharable Links**:
   - Save and share your entire degree plan with a single link
   - Includes all courses, grades, and settings

5. **Responsive Design**:
   - Works on desktop and mobile devices
   - Adapts to different screen sizes
