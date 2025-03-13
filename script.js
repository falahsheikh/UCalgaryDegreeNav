const GRADE_POINTS = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

const PASSING_GRADES = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'];

const AVAILABLE_COURSES = {
    'Computer Science': [
        { id: 'CPSC231', name: 'Introduction to Computer Science', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1},
        { id: 'CPSC233', name: 'Object-Oriented Programming', credits: 3, prerequisite: ['CPSC231'], defaultTerm: 'Winter', defaultYear: 1 },
        { id: 'CPSC251', name: 'Introduction to Computer Systems', credits: 3, prerequisite: ['CPSC231'], defaultTerm: 'Winter', defaultYear: 1 },
        { id: 'CPSC331', name: 'Data Structures and Algorithms', credits: 3, prerequisite: ['CPSC233'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'CPSC351', name: 'Computer Networks', credits: 3, prerequisite: ['CPSC251'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'CPSC355', name: 'Computer Architecture', credits: 3, prerequisite: ['CPSC251'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'CPSC413', name: 'Design and Analysis of Algorithms', credits: 3, prerequisite: ['CPSC331'], defaultTerm: 'Fall', defaultYear: 3 },
        { id: 'CPSC449', name: 'Programming Paradigms', credits: 3, prerequisite: ['CPSC331'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'CPSC457', name: 'Operating Systems', credits: 3, prerequisite: ['CPSC355'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'SENG300', name: 'Software Engineering', credits: 3, prerequisite: ['CPSC233'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'MATH211', name: 'Linear Methods I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH249', name: 'Introductory Calculus', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH265', name: 'Calculus I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'PHIL279', name: 'Logic I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'PHIL314', name: 'Information Technology Ethics', credits: 3, prerequisite: ['PHIL279'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'CPSC235', name: 'Introduction to Computer Science for Computer Science Majors II', credits: 3, prerequisite: ['CPSC233'] },
        { id: 'CPSC313', name: 'Introduction to Computability', credits: 3, prerequisite: ['CPSC235', 'MATH271'] },
        { id: 'CPSC319', name: 'Data Structures, Algorithms, and Their Applications', credits: 3, prerequisite: ['CPSC231', 'MATH271'] },
        { id: 'CPSC329', name: 'Explorations in Information Security and Privacy', credits: 3, prerequisite: ['CPSC231'] },
        { id: 'CPSC359', name: 'Computing Machinery II', credits: 3, prerequisite: ['CPSC355'] },
        { id: 'CPSC418', name: 'Introduction to Cryptography', credits: 3, prerequisite: ['CPSC319', 'MATH271'] },
        { id: 'CPSC441', name: 'Computer Networks', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC481', name: 'Human-Computer Interaction I', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC501', name: 'Advanced Programming Techniques', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC525', name: 'Principles of Computer Security', credits: 3, prerequisite: ['CPSC329'] },
        { id: 'CPSC526', name: 'Network Systems Security', credits: 3, prerequisite: ['CPSC329'] },
        { id: 'CPSC531', name: 'Systems Modelling and Simulation', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC535', name: 'Introduction to Image Processing and Computer Vision', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC567', name: 'Foundations of Multi-Agent Systems', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'MATH271', name: 'Discrete Mathematics', credits: 3, prerequisite: ['MATH30'] },
        { id: 'MATH311', name: 'Linear Methods II', credits: 3, prerequisite: ['MATH211'] },
        { id: 'MATH375', name: 'Introduction to Numerical Methods', credits: 3, prerequisite: ['MATH211', 'MATH267'] },
        { id: 'PHYS211', name: 'Mechanics', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'PHYS221', name: 'Electricity and Magnetism', credits: 3, prerequisite: ['PHYS211', 'MATH211'] },
        { id: 'PHYS341', name: 'Classical Mechanics I', credits: 3, prerequisite: ['PHYS211', 'MATH211'] },
        { id: 'ENGG201', name: 'Behaviour of Liquids, Gases and Solids', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG202', name: 'Engineering Statics', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG225', name: 'Fundamentals of Electrical Circuits and Machines', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG233', name: 'Engineering Principles and Professionalism', credits: 3, prerequisite: [] },
        { id: 'ENGG311', name: 'Engineering Thermodynamics', credits: 3, prerequisite: ['ENGG201'] },
        { id: 'ENGG349', name: 'Engineering Mechanics - Dynamics', credits: 3, prerequisite: ['ENGG202'] },
        { id: 'ENGG407', name: 'Engineering Economics and Project Management', credits: 3, prerequisite: [] },
        { id: 'CHEM201', name: 'General Chemistry: Structure and Bonding', credits: 3, prerequisite: ['CHEM30'] },
        { id: 'CHEM203', name: 'General Chemistry: Introduction to Chemical Reactivity', credits: 3, prerequisite: ['CHEM201'] },
        { id: 'CHEM351', name: 'Organic Chemistry I', credits: 3, prerequisite: ['CHEM203'] },
        { id: 'CHEM353', name: 'Organic Chemistry II', credits: 3, prerequisite: ['CHEM351'] },
        { id: 'BIOL241', name: 'Genetics', credits: 3, prerequisite: ['BIOL30'] },
        { id: 'BIOL311', name: 'Evolution', credits: 3, prerequisite: ['BIOL241'] },
        { id: 'BIOL331', name: 'Molecular Biology', credits: 3, prerequisite: ['BIOL241', 'CHEM203'] },
        { id: 'PSYC200', name: 'Principles of Psychology', credits: 3, prerequisite: [] },
        { id: 'PSYC203', name: 'Introduction to Research Methods in Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC312', name: 'Cognitive Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC323', name: 'Developmental Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC342', name: 'Abnormal Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'ECON201', name: 'Introduction to Microeconomics', credits: 3, prerequisite: [] },
        { id: 'ECON203', name: 'Introduction to Macroeconomics', credits: 3, prerequisite: [] },
        { id: 'ECON301', name: 'Intermediate Microeconomic Theory', credits: 3, prerequisite: ['ECON201'] },
        { id: 'ECON303', name: 'Intermediate Macroeconomic Theory', credits: 3, prerequisite: ['ECON203'] },
        { id: 'ECON357', name: 'Introduction to Econometrics', credits: 3, prerequisite: ['ECON201', 'ECON203', 'MATH249'] },
        { id: 'ENGL251', name: 'Introduction to Literary Studies', credits: 3, prerequisite: [] },
        { id: 'ENGL255', name: 'Introduction to Drama', credits: 3, prerequisite: [] },
        { id: 'ENGL265', name: 'Introduction to Poetry', credits: 3, prerequisite: [] },
        { id: 'ENGL393', name: 'Shakespeare', credits: 3, prerequisite: ['ENGL251'] },
        { id: 'HIST201', name: 'Introduction to Canadian History', credits: 3, prerequisite: [] },
        { id: 'HIST203', name: 'Introduction to European History', credits: 3, prerequisite: [] },
        { id: 'HIST301', name: 'History of Canada to 1867', credits: 3, prerequisite: ['HIST201'] },
        { id: 'HIST303', name: 'History of Canada Since 1867', credits: 3, prerequisite: ['HIST201'] },
        { id: 'PHIL315', name: 'Political Philosophy', credits: 3, prerequisite: ['PHIL279'] },
        { id: 'PHIL317', name: 'Philosophy of Science', credits: 3, prerequisite: ['PHIL279'] },
        { id: 'SOCI201', name: 'Introduction to Sociology', credits: 3, prerequisite: [] },
        { id: 'SOCI301', name: 'Classical Sociological Theory', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI303', name: 'Contemporary Sociological Theory', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI331', name: 'Sociology of the Family', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI345', name: 'Sociology of Gender', credits: 3, prerequisite: ['SOCI201'] }
    ],
    'Mathematics': [
        { id: 'MATH211', name: 'Linear Methods I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH249', name: 'Introductory Calculus', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH265', name: 'Calculus I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH267', name: 'Calculus II', credits: 3, prerequisite: ['MATH249', 'MATH265'], defaultTerm: 'Winter', defaultYear: 1 },
        { id: 'MATH271', name: 'Discrete Mathematics', credits: 3, prerequisite: [], defaultTerm: 'Winter', defaultYear: 1 },
        { id: 'MATH311', name: 'Linear Methods II', credits: 3, prerequisite: ['MATH211'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'MATH315', name: 'Algebra I', credits: 3, prerequisite: ['MATH271'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'MATH335', name: 'Analysis I', credits: 3, prerequisite: ['MATH267', 'MATH271'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'MATH367', name: 'Multivariable Calculus', credits: 3, prerequisite: ['MATH267', 'MATH211'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'MATH375', name: 'Differential Equations for Engineers', credits: 3, prerequisite: ['MATH267'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'MATH376', name: 'Ordinary Differential Equations', credits: 3, prerequisite: ['MATH267'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'MATH431', name: 'Algebra II', credits: 3, prerequisite: ['MATH315'], defaultTerm: 'Fall', defaultYear: 3 },
        { id: 'MATH435', name: 'Analysis II', credits: 3, prerequisite: ['MATH335'], defaultTerm: 'Fall', defaultYear: 3 },
        { id: 'MATH516', name: 'Senior Project', credits: 3, prerequisite: [], defaultTerm: 'Winter', defaultYear: 4 },
        { id: 'MATH518', name: 'Honours Thesis', credits: 3, prerequisite: [], defaultTerm: 'Winter', defaultYear: 4 },
        { id: 'CPSC217', name: 'Introduction to Computer Science for Multidisciplinary Studies', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'STAT321', name: 'Introduction to Probability', credits: 3, prerequisite: ['MATH267'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'STAT323', name: 'Introduction to Statistical Inference', credits: 3, prerequisite: ['STAT321'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'STAT517', name: 'Statistical Project', credits: 3, prerequisite: [], defaultTerm: 'Winter', defaultYear: 4 },
        { id: 'CPSC235', name: 'Introduction to Computer Science for Computer Science Majors II', credits: 3, prerequisite: ['CPSC233'] },
        { id: 'CPSC313', name: 'Introduction to Computability', credits: 3, prerequisite: ['CPSC235', 'MATH271'] },
        { id: 'CPSC319', name: 'Data Structures, Algorithms, and Their Applications', credits: 3, prerequisite: ['CPSC231', 'MATH271'] },
        { id: 'CPSC329', name: 'Explorations in Information Security and Privacy', credits: 3, prerequisite: ['CPSC231'] },
        { id: 'CPSC359', name: 'Computing Machinery II', credits: 3, prerequisite: ['CPSC355'] },
        { id: 'CPSC418', name: 'Introduction to Cryptography', credits: 3, prerequisite: ['CPSC319', 'MATH271'] },
        { id: 'CPSC441', name: 'Computer Networks', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC481', name: 'Human-Computer Interaction I', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC501', name: 'Advanced Programming Techniques', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC525', name: 'Principles of Computer Security', credits: 3, prerequisite: ['CPSC329'] },
        { id: 'CPSC526', name: 'Network Systems Security', credits: 3, prerequisite: ['CPSC329'] },
        { id: 'CPSC531', name: 'Systems Modelling and Simulation', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC535', name: 'Introduction to Image Processing and Computer Vision', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC567', name: 'Foundations of Multi-Agent Systems', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'PHYS211', name: 'Mechanics', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'PHYS221', name: 'Electricity and Magnetism', credits: 3, prerequisite: ['PHYS211', 'MATH211'] },
        { id: 'PHYS341', name: 'Classical Mechanics I', credits: 3, prerequisite: ['PHYS211', 'MATH211'] },
        { id: 'ENGG201', name: 'Behaviour of Liquids, Gases and Solids', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG202', name: 'Engineering Statics', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG225', name: 'Fundamentals of Electrical Circuits and Machines', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG233', name: 'Engineering Principles and Professionalism', credits: 3, prerequisite: [] },
        { id: 'ENGG311', name: 'Engineering Thermodynamics', credits: 3, prerequisite: ['ENGG201'] },
        { id: 'ENGG349', name: 'Engineering Mechanics - Dynamics', credits: 3, prerequisite: ['ENGG202'] },
        { id: 'ENGG407', name: 'Engineering Economics and Project Management', credits: 3, prerequisite: [] },
        { id: 'CHEM201', name: 'General Chemistry: Structure and Bonding', credits: 3, prerequisite: ['CHEM30'] },
        { id: 'CHEM203', name: 'General Chemistry: Introduction to Chemical Reactivity', credits: 3, prerequisite: ['CHEM201'] },
        { id: 'CHEM351', name: 'Organic Chemistry I', credits: 3, prerequisite: ['CHEM203'] },
        { id: 'CHEM353', name: 'Organic Chemistry II', credits: 3, prerequisite: ['CHEM351'] },
        { id: 'BIOL241', name: 'Genetics', credits: 3, prerequisite: ['BIOL30'] },
        { id: 'BIOL311', name: 'Evolution', credits: 3, prerequisite: ['BIOL241'] },
        { id: 'BIOL331', name: 'Molecular Biology', credits: 3, prerequisite: ['BIOL241', 'CHEM203'] },
        { id: 'PSYC200', name: 'Principles of Psychology', credits: 3, prerequisite: [] },
        { id: 'PSYC203', name: 'Introduction to Research Methods in Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC312', name: 'Cognitive Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC323', name: 'Developmental Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC342', name: 'Abnormal Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'ECON201', name: 'Introduction to Microeconomics', credits: 3, prerequisite: [] },
        { id: 'ECON203', name: 'Introduction to Macroeconomics', credits: 3, prerequisite: [] },
        { id: 'ECON301', name: 'Intermediate Microeconomic Theory', credits: 3, prerequisite: ['ECON201'] },
        { id: 'ECON303', name: 'Intermediate Macroeconomic Theory', credits: 3, prerequisite: ['ECON203'] },
        { id: 'ECON357', name: 'Introduction to Econometrics', credits: 3, prerequisite: ['ECON201', 'ECON203', 'MATH249'] },
        { id: 'ENGL251', name: 'Introduction to Literary Studies', credits: 3, prerequisite: [] },
        { id: 'ENGL255', name: 'Introduction to Drama', credits: 3, prerequisite: [] },
        { id: 'ENGL265', name: 'Introduction to Poetry', credits: 3, prerequisite: [] },
        { id: 'ENGL393', name: 'Shakespeare', credits: 3, prerequisite: ['ENGL251'] },
        { id: 'HIST201', name: 'Introduction to Canadian History', credits: 3, prerequisite: [] },
        { id: 'HIST203', name: 'Introduction to European History', credits: 3, prerequisite: [] },
        { id: 'HIST301', name: 'History of Canada to 1867', credits: 3, prerequisite: ['HIST201'] },
        { id: 'HIST303', name: 'History of Canada Since 1867', credits: 3, prerequisite: ['HIST201'] },
        { id: 'PHIL315', name: 'Political Philosophy', credits: 3, prerequisite: ['PHIL279'] },
        { id: 'PHIL317', name: 'Philosophy of Science', credits: 3, prerequisite: ['PHIL279'] },
        { id: 'SOCI201', name: 'Introduction to Sociology', credits: 3, prerequisite: [] },
        { id: 'SOCI301', name: 'Classical Sociological Theory', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI303', name: 'Contemporary Sociological Theory', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI331', name: 'Sociology of the Family', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI345', name: 'Sociology of Gender', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'ARHI201', name: 'Introduction to Art History', credits: 3, prerequisite: [] },
        { id: 'ARHI301', name: 'Renaissance Art', credits: 3, prerequisite: ['ARHI201'] },
        { id: 'ARHI303', name: 'Modern Art', credits: 3, prerequisite: ['ARHI201'] },
        { id: 'MUSI201', name: 'Introduction to Music Theory', credits: 3, prerequisite: [] },
        { id: 'MUSI301', name: 'Music History I', credits: 3, prerequisite: ['MUSI201'] },
        { id: 'MUSI303', name: 'Music History II', credits: 3, prerequisite: ['MUSI201'] },
        { id: 'GEOG201', name: 'Introduction to Physical Geography', credits: 3, prerequisite: [] },
        { id: 'GEOG301', name: 'Climate Change and the Environment', credits: 3, prerequisite: ['GEOG201'] },
        { id: 'GEOG303', name: 'Urban Geography', credits: 3, prerequisite: ['GEOG201'] },
        { id: 'ANTH201', name: 'Introduction to Anthropology', credits: 3, prerequisite: [] },
        { id: 'ANTH301', name: 'Cultural Anthropology', credits: 3, prerequisite: ['ANTH201'] },
        { id: 'ANTH303', name: 'Archaeology', credits: 3, prerequisite: ['ANTH201'] },
        { id: 'LING201', name: 'Introduction to Linguistics', credits: 3, prerequisite: [] },
        { id: 'LING301', name: 'Syntax and Semantics', credits: 3, prerequisite: ['LING201'] },
        { id: 'LING303', name: 'Phonetics and Phonology', credits: 3, prerequisite: ['LING201'] }
    ],
    'Physics': [
        { id: 'PHYS227', name: 'Classical Physics', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'PHYS229', name: 'Modern Physics', credits: 3, prerequisite: ['PHYS227'], defaultTerm: 'Winter', defaultYear: 1 },
        { id: 'PHYS341', name: 'Classical Mechanics I', credits: 3, prerequisite: ['PHYS227', 'MATH211', 'MATH267'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'PHYS343', name: 'Classical Mechanics II', credits: 3, prerequisite: ['PHYS341'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'PHYS355', name: 'Electromagnetic Theory I', credits: 3, prerequisite: ['PHYS227', 'MATH211', 'MATH267'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'PHYS375', name: 'Introduction to Optics and Waves', credits: 3, prerequisite: ['PHYS227'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'PHYS381', name: 'Computational Physics', credits: 3, prerequisite: ['PHYS227', 'MATH211'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'PHYS397', name: 'Applied Physics Laboratory I', credits: 3, prerequisite: ['PHYS229'], defaultTerm: 'Fall', defaultYear: 3 },
        { id: 'PHYS435', name: 'Quantum Mechanics I', credits: 3, prerequisite: ['PHYS229', 'MATH311'], defaultTerm: 'Fall', defaultYear: 3 },
        { id: 'PHYS443', name: 'Quantum Mechanics II', credits: 3, prerequisite: ['PHYS435'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'PHYS449', name: 'Statistical Mechanics', credits: 3, prerequisite: ['PHYS343', 'PHYS435'], defaultTerm: 'Fall', defaultYear: 3 },
        { id: 'PHYS451', name: 'Statistical Mechanics II', credits: 3, prerequisite: ['PHYS449'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'PHYS455', name: 'Electromagnetic Theory II', credits: 3, prerequisite: ['PHYS355'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'PHYS457', name: 'Experimental Methods', credits: 3, prerequisite: ['PHYS355', 'PHYS381'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'PHYS481', name: 'Solid State Physics', credits: 3, prerequisite: ['PHYS435'], defaultTerm: 'Fall', defaultYear: 4 },
        { id: 'PHYS497', name: 'Applied Physics Laboratory II', credits: 3, prerequisite: ['PHYS397'], defaultTerm: 'Winter', defaultYear: 3 },
        { id: 'PHYS501', name: 'Physics Research', credits: 3, prerequisite: ['PHYS457'], defaultTerm: 'Fall', defaultYear: 4 },
        { id: 'PHYS543', name: 'Quantum Mechanics III', credits: 3, prerequisite: ['PHYS443'], defaultTerm: 'Fall', defaultYear: 4 },
        { id: 'PHYS597', name: 'Senior Physics Laboratory', credits: 3, prerequisite: ['PHYS497'], defaultTerm: 'Fall', defaultYear: 4 },
        { id: 'PHYS598A', name: 'Senior Honours Research I', credits: 3, prerequisite: ['PHYS497'], defaultTerm: 'Fall', defaultYear: 4 },
        { id: 'PHYS598B', name: 'Senior Honours Research II', credits: 3, prerequisite: ['PHYS598A'], defaultTerm: 'Winter', defaultYear: 4 },
        { id: 'PHYS599', name: 'Senior Research Thesis', credits: 3, prerequisite: ['PHYS497'], defaultTerm: 'Fall', defaultYear: 4 },
        { id: 'MATH211', name: 'Linear Methods I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH249', name: 'Introductory Calculus', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH265', name: 'Calculus I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'MATH267', name: 'Calculus II', credits: 3, prerequisite: ['MATH249', 'MATH265'], defaultTerm: 'Winter', defaultYear: 1 },
        { id: 'MATH311', name: 'Linear Methods II', credits: 3, prerequisite: ['MATH211'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'MATH367', name: 'Multivariable Calculus', credits: 3, prerequisite: ['MATH267', 'MATH211'], defaultTerm: 'Fall', defaultYear: 2 },
        { id: 'MATH375', name: 'Differential Equations for Engineers', credits: 3, prerequisite: ['MATH267'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'MATH376', name: 'Ordinary Differential Equations', credits: 3, prerequisite: ['MATH267'], defaultTerm: 'Winter', defaultYear: 2 },
        { id: 'CHEM201', name: 'General Chemistry I', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'BIOL211', name: 'Principles of Cellular Biology', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'CPSC217', name: 'Introduction to Computer Science for Multidisciplinary Studies', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'DATA211', name: 'Introduction to Data Science', credits: 3, prerequisite: [], defaultTerm: 'Fall', defaultYear: 1 },
        { id: 'CPSC235', name: 'Introduction to Computer Science for Computer Science Majors II', credits: 3, prerequisite: ['CPSC233'] },
        { id: 'CPSC313', name: 'Introduction to Computability', credits: 3, prerequisite: ['CPSC235', 'MATH271'] },
        { id: 'CPSC319', name: 'Data Structures, Algorithms, and Their Applications', credits: 3, prerequisite: ['CPSC231', 'MATH271'] },
        { id: 'CPSC329', name: 'Explorations in Information Security and Privacy', credits: 3, prerequisite: ['CPSC231'] },
        { id: 'CPSC359', name: 'Computing Machinery II', credits: 3, prerequisite: ['CPSC355'] },
        { id: 'CPSC418', name: 'Introduction to Cryptography', credits: 3, prerequisite: ['CPSC319', 'MATH271'] },
        { id: 'CPSC441', name: 'Computer Networks', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC481', name: 'Human-Computer Interaction I', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC501', name: 'Advanced Programming Techniques', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC525', name: 'Principles of Computer Security', credits: 3, prerequisite: ['CPSC329'] },
        { id: 'CPSC526', name: 'Network Systems Security', credits: 3, prerequisite: ['CPSC329'] },
        { id: 'CPSC531', name: 'Systems Modelling and Simulation', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC535', name: 'Introduction to Image Processing and Computer Vision', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'CPSC567', name: 'Foundations of Multi-Agent Systems', credits: 3, prerequisite: ['CPSC319'] },
        { id: 'ENGG201', name: 'Behaviour of Liquids, Gases and Solids', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG202', name: 'Engineering Statics', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG225', name: 'Fundamentals of Electrical Circuits and Machines', credits: 3, prerequisite: ['PHYS30', 'MATH31'] },
        { id: 'ENGG233', name: 'Engineering Principles and Professionalism', credits: 3, prerequisite: [] },
        { id: 'ENGG311', name: 'Engineering Thermodynamics', credits: 3, prerequisite: ['ENGG201'] },
        { id: 'ENGG349', name: 'Engineering Mechanics - Dynamics', credits: 3, prerequisite: ['ENGG202'] },
        { id: 'ENGG407', name: 'Engineering Economics and Project Management', credits: 3, prerequisite: [] },
        { id: 'CHEM203', name: 'General Chemistry: Introduction to Chemical Reactivity', credits: 3, prerequisite: ['CHEM201'] },
        { id: 'CHEM351', name: 'Organic Chemistry I', credits: 3, prerequisite: ['CHEM203'] },
        { id: 'CHEM353', name: 'Organic Chemistry II', credits: 3, prerequisite: ['CHEM351'] },
        { id: 'BIOL241', name: 'Genetics', credits: 3, prerequisite: ['BIOL30'] },
        { id: 'BIOL311', name: 'Evolution', credits: 3, prerequisite: ['BIOL241'] },
        { id: 'BIOL331', name: 'Molecular Biology', credits: 3, prerequisite: ['BIOL241', 'CHEM203'] },
        { id: 'PSYC200', name: 'Principles of Psychology', credits: 3, prerequisite: [] },
        { id: 'PSYC203', name: 'Introduction to Research Methods in Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC312', name: 'Cognitive Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC323', name: 'Developmental Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'PSYC342', name: 'Abnormal Psychology', credits: 3, prerequisite: ['PSYC200'] },
        { id: 'ECON201', name: 'Introduction to Microeconomics', credits: 3, prerequisite: [] },
        { id: 'ECON203', name: 'Introduction to Macroeconomics', credits: 3, prerequisite: [] },
        { id: 'ECON301', name: 'Intermediate Microeconomic Theory', credits: 3, prerequisite: ['ECON201'] },
        { id: 'ECON303', name: 'Intermediate Macroeconomic Theory', credits: 3, prerequisite: ['ECON203'] },
        { id: 'ECON357', name: 'Introduction to Econometrics', credits: 3, prerequisite: ['ECON201', 'ECON203', 'MATH249'] },
        { id: 'ENGL251', name: 'Introduction to Literary Studies', credits: 3, prerequisite: [] },
        { id: 'ENGL255', name: 'Introduction to Drama', credits: 3, prerequisite: [] },
        { id: 'ENGL265', name: 'Introduction to Poetry', credits: 3, prerequisite: [] },
        { id: 'ENGL393', name: 'Shakespeare', credits: 3, prerequisite: ['ENGL251'] },
        { id: 'HIST201', name: 'Introduction to Canadian History', credits: 3, prerequisite: [] },
        { id: 'HIST203', name: 'Introduction to European History', credits: 3, prerequisite: [] },
        { id: 'HIST301', name: 'History of Canada to 1867', credits: 3, prerequisite: ['HIST201'] },
        { id: 'HIST303', name: 'History of Canada Since 1867', credits: 3, prerequisite: ['HIST201'] },
        { id: 'PHIL315', name: 'Political Philosophy', credits: 3, prerequisite: ['PHIL279'] },
        { id: 'PHIL317', name: 'Philosophy of Science', credits: 3, prerequisite: ['PHIL279'] },
        { id: 'SOCI201', name: 'Introduction to Sociology', credits: 3, prerequisite: [] },
        { id: 'SOCI301', name: 'Classical Sociological Theory', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI303', name: 'Contemporary Sociological Theory', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI331', name: 'Sociology of the Family', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'SOCI345', name: 'Sociology of Gender', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'ARHI201', name: 'Introduction to Art History', credits: 3, prerequisite: [] },
        { id: 'ARHI301', name: 'Renaissance Art', credits: 3, prerequisite: ['ARHI201'] },
        { id: 'ARHI303', name: 'Modern Art', credits: 3, prerequisite: ['ARHI201'] },
        { id: 'MUSI201', name: 'Introduction to Music Theory', credits: 3, prerequisite: [] },
        { id: 'MUSI301', name: 'Music History I', credits: 3, prerequisite: ['MUSI201'] },
        { id: 'MUSI303', name: 'Music History II', credits: 3, prerequisite: ['MUSI201'] },
        { id: 'GEOG201', name: 'Introduction to Physical Geography', credits: 3, prerequisite: [] },
        { id: 'GEOG301', name: 'Climate Change and the Environment', credits: 3, prerequisite: ['GEOG201'] },
        { id: 'GEOG303', name: 'Urban Geography', credits: 3, prerequisite: ['GEOG201'] },
        { id: 'ANTH201', name: 'Introduction to Anthropology', credits: 3, prerequisite: [] },
        { id: 'ANTH301', name: 'Cultural Anthropology', credits: 3, prerequisite: ['ANTH201'] },
        { id: 'ANTH303', name: 'Archaeology', credits: 3, prerequisite: ['ANTH201'] },
        { id: 'LING201', name: 'Introduction to Linguistics', credits: 3, prerequisite: [] },
        { id: 'LING301', name: 'Syntax and Semantics', credits: 3, prerequisite: ['LING201'] },
        { id: 'LING303', name: 'Phonetics and Phonology', credits: 3, prerequisite: ['LING201'] },
        { id: 'DATA301', name: 'Data Visualization', credits: 3, prerequisite: ['DATA211'] },
        { id: 'DATA311', name: 'Machine Learning for Data Science', credits: 3, prerequisite: ['DATA211'] },
        { id: 'DATA321', name: 'Big Data Analytics', credits: 3, prerequisite: ['DATA211'] },
        { id: 'DATA331', name: 'Data Mining', credits: 3, prerequisite: ['DATA211'] },
        { id: 'DATA341', name: 'Natural Language Processing', credits: 3, prerequisite: ['DATA211'] },
        { id: 'DATA351', name: 'Data Ethics and Privacy', credits: 3, prerequisite: ['DATA211'] },
        { id: 'ENVS201', name: 'Introduction to Environmental Science', credits: 3, prerequisite: [] },
        { id: 'ENVS301', name: 'Environmental Policy and Management', credits: 3, prerequisite: ['ENVS201'] },
        { id: 'ENVS303', name: 'Climate Change Science', credits: 3, prerequisite: ['ENVS201'] },
        { id: 'ENVS305', name: 'Sustainable Development', credits: 3, prerequisite: ['ENVS201'] },
        { id: 'ENVS307', name: 'Environmental Impact Assessment', credits: 3, prerequisite: ['ENVS201'] }
    ]
};

const MAJOR_REQUIREMENTS = {
    'Computer Science': [
        'CPSC231', 'CPSC233', 'CPSC251', 'CPSC331', 'CPSC351', 'CPSC355', 
        'CPSC413', 'CPSC449', 'CPSC457', 'SENG300', 'MATH211', 
        'MATH249', 'PHIL279', 'PHIL314'
    ],
    'Mathematics': [
        'MATH211', 'MATH249', 'MATH267', 'MATH271', 'MATH311', 
        'MATH315', 'MATH367', 'MATH376', 'STAT321', 'STAT323', 
        'CPSC217', 'MATH516'
    ],
    'Physics': [
        'PHYS227', 'PHYS229', 'PHYS341', 'PHYS343', 'PHYS355', 'PHYS375', 
        'PHYS381', 'PHYS397', 'PHYS435', 'PHYS443', 'PHYS449', 'PHYS455', 
        'PHYS457', 'PHYS497', 'PHYS501', 'MATH211', 'MATH249', 'MATH267', 
        'MATH311', 'MATH367', 'MATH376', 'CPSC217'
    ]
};

let courses = [];
let requiredCourses = [];
let maxDPlusAllowed = 2; // Default value
let draggedCourseId = null;
let gpaChart = null;
let gpaLineChart = null;

function initializeCoursesForMajor(major) {
    // Create an array of course objects from AVAILABLE_COURSES
    // Only include courses that have both defaultTerm and defaultYear
    courses = AVAILABLE_COURSES[major]
        .filter(course => course.defaultTerm !== undefined && course.defaultYear !== undefined)
        .map(course => ({
            ...course,
            term: course.defaultTerm,
            year: course.defaultYear,
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

    // Show a warning if the course has prerequisites and has been given a D/D+ grade
    const dPlusWarning = ['D+', 'D'].includes(course.grade) && course.prerequisite.length > 0 ?
    `<div style="color: #dc2626; font-size: 0.875rem; margin-top: 0.5rem;">
        Warning: ${course.grade} grade cannot be used as a prerequisite.
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

    // Add hover event listener to show the course's color and label
    card.addEventListener('mousemove', (e) => showCourseColorLabel(e, statusClass));
    card.addEventListener('mouseleave', () => hideCourseColorLabel());

    return card;
}

function showCourseColorLabel(e, statusClass) {
    // Create the color label if it doesn't exist
    let colorLabel = document.querySelector('.course-color-label');
    if (!colorLabel) {
        colorLabel = document.createElement('div');
        colorLabel.className = 'course-color-label';
        document.body.appendChild(colorLabel);
    }

    // Set the color and label based on the course's status
    const colorMap = {
        'in-progress': { color: '#fef9c3', label: 'In Progress' }, // Yellow for in-progress
        'completed': { color: '#dcfce7', label: 'Completed' },     // Green for completed
        'failed': { color: '#fee2e2', label: 'Failed' },           // Red for failed
        'requirement-not-met': { color: '#ffedd5', label: 'Requirement Not Met' } // Grey for requirement not met
    };
    const { color, label } = colorMap[statusClass];

    // Update the color label content
    colorLabel.innerHTML = `
        <div class="color-box" style="background-color: ${color};"></div>
        <span>${label}</span>
    `;

    // Position the color label next to the cursor
    const offset = 10; // Distance from the cursor
    colorLabel.style.position = 'fixed';
    colorLabel.style.top = `${e.clientY + offset}px`;
    colorLabel.style.left = `${e.clientX + offset}px`;
    colorLabel.style.display = 'flex';
    colorLabel.style.alignItems = 'center';
    colorLabel.style.gap = '8px';
}

function hideCourseColorLabel() {
    const colorLabel = document.querySelector('.course-color-label');
    if (colorLabel) {
        colorLabel.style.display = 'none';
    }
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
    const course = courses.find(c => c.id === id);
    const major = document.getElementById('major-select').value;

    // If changing from a non-D/D+ grade to a D/D+ grade
    if ((grade === 'D+' || grade === 'D') && 
        !(course.grade === 'D+' || course.grade === 'D') && 
        countDPlusGrades() >= maxDPlusAllowed) {
        alert(`You have reached the maximum allowed D/D+ grades (${maxDPlusAllowed}). This course will not count towards your degree.`);
    }

    // Update the course grade
    courses = courses.map(course => 
        course.id === id ? { ...course, grade } : course
    );

    // Automatically mark as completed if the grade is C- or above
    if (PASSING_GRADES.includes(grade)) {
        courses = courses.map(course => 
            course.id === id ? { ...course, completed: true } : course
        );
    }

    // Show a warning if the course has prerequisites and is a required course with a D/D+ grade
    if (MAJOR_REQUIREMENTS[major].includes(id) && (grade === 'D+' || grade === 'D')) {
        const hasPrerequisites = course.prerequisite && course.prerequisite.length > 0;
        if (hasPrerequisites) {
            alert(`Warning: ${course.id} (${course.name}) has prerequisites and is a required course. A grade of ${grade} cannot be used as a prerequisite.`);
        }
    }

    // Update required courses if the grade-updated course is a required one
    if (MAJOR_REQUIREMENTS[major].includes(id)) {
        renderRequiredCourses();
    }

    // Update the D+ counter and re-render the courses
    updateDPlusCounter();
    renderCourses();
}

function countDPlusGrades() {
    return courses.filter(course => course.grade === 'D' || course.grade === 'D+').length;
}

function updateDPlusCounter() {
    const dPlusCount = countDPlusGrades();
    document.getElementById('d-plus-counter').textContent = `${dPlusCount} of ${maxDPlusAllowed} D/D+ Grades`;
}

function updateCreditCounter() {
    const total = courses.reduce((sum, course) => 
        course.completed && course.grade !== 'F' ? sum + course.credits : sum, 0);
    const creditCounter = document.getElementById('credit-counter');
    
    // Set the text
    creditCounter.textContent = `${total}/120 Credits`;
    
    // Apply old-school button styling
    creditCounter.style.cursor = 'pointer';
    creditCounter.style.borderWidth = '2px';
    creditCounter.style.borderStyle = 'solid';
    creditCounter.style.borderColor = '#ffffff #808080 #808080 #ffffff';
    creditCounter.style.backgroundColor = '#d4d0c8'; 

    creditCounter.style.marginLeft = '30%';
    
    // Add hover and active states
    creditCounter.onmouseover = function() {
        this.style.backgroundColor = '#d8d4cc';
    };
    
    creditCounter.onmouseout = function() {
        this.style.backgroundColor = '#d4d0c8';
    };
    
    creditCounter.onmousedown = function() {
        this.style.borderColor = '#808080 #ffffff #ffffff #808080';
        this.style.padding = '5px 11px 3px 13px'; // Shift content slightly
    };
    
    creditCounter.onmouseup = function() {
        this.style.borderColor = '#ffffff #808080 #808080 #ffffff';
        this.style.padding = '4px 12px 4px 12px'; // Reset padding
    };
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

    courses.filter(course => course.completed && course.grade !== 'F').forEach(course => {
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

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '15px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease-in-out';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
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
    
    // Show notification
    showNotification(`Year ${newYear} has been added successfully!`);
    
    // Automatically scroll to the new year section
    setTimeout(() => {
        const newYearSection = document.querySelector(`.year-section h3:contains('Year ${newYear}')`);
        if (newYearSection) {
            newYearSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

function deleteYear() {
    const years = [...new Set(courses.map(course => course.year))];
    const maxYear = years.length > 0 ? Math.max(...years) : 4;
    
    // Don't allow deleting years 1-4
    if (maxYear <= 4) {
        alert("Cannot delete Years 1-4 as they are required by default.");
        return;
    }
    
    // Check if the year has courses
    const yearCourses = courses.filter(course => course.year === maxYear);
    if (yearCourses.length > 0) {
        const confirmDelete = confirm(`Year ${maxYear} contains ${yearCourses.length} course(s). Deleting this year will remove all courses in it. Are you sure you want to proceed?`);
        if (!confirmDelete) {
            return;
        }
        
        // Remove the courses from this year
        courses = courses.filter(course => course.year !== maxYear);
    } else {
        const confirmDelete = confirm(`Are you sure you want to delete Year ${maxYear}?`);
        if (!confirmDelete) {
            return;
        }
    }
    
    // Remove the year option from the year filter dropdown
    const yearFilter = document.getElementById('year-filter');
    const yearOption = Array.from(yearFilter.options).find(option => option.value == maxYear);
    if (yearOption) {
        yearFilter.removeChild(yearOption);
    }
    
    // Update the UI
    updateRequiredCourses();
    renderCourses();
    
    // Show notification
    showNotification(`Year ${maxYear} has been deleted successfully!`);
}

function addCourseToTerm(year, term) {
    const major = document.getElementById('major-select').value;
    
    // Get all courses from AVAILABLE_COURSES that aren't already in the courses array
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
        alert("Invalid D/D+ limit. Please enter a positive number.");
        return;
    }
    maxDPlusAllowed = limit;

    // Update the D/D+ counter
    updateDPlusCounter();

    // Update course cards with D/D+ grades
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const courseId = card.dataset.id;
        const course = courses.find(c => c.id === courseId);
        if (course && (course.grade === 'D' || course.grade === 'D+')) {
            const warningDiv = card.querySelector('.d-plus-warning');
            if (warningDiv) {
                warningDiv.textContent = `Warning: ${course.grade} grade cannot be used as a prerequisite.`;
            }
        }
    });

    // Show a confirmation message
    showNotification(`D/D+ limit updated to ${limit}.`);
}

function generateSharableLink() {
    const data = {
        courses: JSON.parse(JSON.stringify(courses)), // Deep copy to avoid reference issues
        maxDPlusAllowed,
        requiredCourses: JSON.parse(JSON.stringify(requiredCourses || [])), // Deep copy
        major: document.getElementById('major-select')?.value || 'Computer Science'
    };

    // Encode the data to base64
    const encodedData = btoa(JSON.stringify(data));

    // Generate the sharable link
    const link = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;

    // Save the current state to detect unsaved changes later
    window.linkGenerated = true;
    window.lastSavedState = JSON.stringify(data);

    // Prompt the user with the sharable link
    prompt("Share this link to save your progress:", link);
}

function loadFromSharableLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');

    if (data) {
        try {
            // Decode the data from base64
            const decodedData = JSON.parse(atob(data));

            // Validate the decoded data
            if (!decodedData || typeof decodedData !== 'object') {
                console.warn("Invalid data format in the link. Loading default state.");
                return false;
            }

            if (!decodedData.courses || !Array.isArray(decodedData.courses)) {
                console.warn("Invalid or missing 'courses' data in the link. Loading default state.");
                return false;
            }

            if (typeof decodedData.maxDPlusAllowed !== 'number') {
                console.warn("Invalid or missing 'maxDPlusAllowed' in the link. Loading default state.");
                return false;
            }

            if (!decodedData.requiredCourses || !Array.isArray(decodedData.requiredCourses)) {
                console.warn("Invalid or missing 'requiredCourses' data in the link. Loading default state.");
                return false;
            }

            if (!decodedData.major || typeof decodedData.major !== 'string') {
                console.warn("Invalid or missing 'major' data in the link. Loading default state.");
                return false;
            }

            // Apply the loaded data to the application state
            courses = decodedData.courses;
            maxDPlusAllowed = decodedData.maxDPlusAllowed;
            requiredCourses = decodedData.requiredCourses;

            // Update the major if it exists in the data
            const majorSelect = document.getElementById('major-select');
            if (majorSelect && decodedData.major) {
                majorSelect.value = decodedData.major;
            }

            // Update the D limit display
            const maxDPlusElement = document.getElementById('max-d-plus');
            if (maxDPlusElement) {
                maxDPlusElement.textContent = maxDPlusAllowed;
            }

            // Update the UI
            renderCourses();
            renderRequiredCourses();
            updateAllGraphs();

            // Save the current state to detect unsaved changes later
            window.linkGenerated = true;
            window.lastSavedState = JSON.stringify(decodedData);

            console.log("Successfully loaded data from link:", courses.length, "courses");

            // Show a success notification to the user
            showNotification("Course data loaded successfully!");
            return true;
        } catch (error) {
            console.warn("Failed to load from sharable link:", error);
            return false;
        }
    }
    return false;
}

// Ensure the loadFromSharableLink function is called AFTER the DOM is fully loaded
window.addEventListener('load', () => {
    loadFromSharableLink();
});

function hasUnsavedChanges() {
    if (!window.linkGenerated) {
        return courses.length > 0; // If we have courses but never generated a link
    }

    // Get current state to compare with last saved state
    const currentData = {
        courses: courses,
        maxDPlusAllowed: maxDPlusAllowed,
        requiredCourses: requiredCourses,
        major: document.getElementById('major-select')?.value || 'Computer Science',
    };

    // Compare as JSON strings to detect any differences
    return window.lastSavedState !== JSON.stringify(currentData);
}

function trackChanges() {
    // This function is called whenever there's a change to the course data
    
    // We need to check if we've ever generated a link first
    if (window.linkGenerated) {
        const currentData = {
            courses: courses,
            maxDPlusAllowed: maxDPlusAllowed,
            requiredCourses: requiredCourses,
            major: document.getElementById('major-select')?.value || 'Computer Science',
        };
        
        // Check if there are unsaved changes
        const hasChanges = window.lastSavedState !== JSON.stringify(currentData);
        
        // Update UI to show unsaved changes indicator
        const saveReminder = document.getElementById('save-reminder');
        if (saveReminder) {
            if (hasChanges) {
                saveReminder.classList.remove('hidden');
            } else {
                saveReminder.classList.add('hidden');
            }
        }
    }
}

// This function should be called after any course-related operation
function updateAppState() {
    renderCourses();
    renderRequiredCourses();
    updateAllGraphs();
    trackChanges(); // Check for unsaved changes
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
    updateAppState(); // Use the new combined function
    draggedCourseId = null;
}

// Window event listener for beforeunload
window.addEventListener('beforeunload', function(e) {
    // The message actually shown depends on the browser and some browsers 
    // don't allow customizing the message at all for security reasons
    const confirmationMessage = 'You have unsaved changes. Please remember to generate and save a sharable link before leaving.';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});

function updateMajor() {
    // If there are courses, show confirmation dialog
    if (courses.length > 0) {
        const confirmed = confirm("Changing your major will reset your course plan. Have you saved your current progress with a sharable link?");
        if (!confirmed) {
            // Reset the dropdown to the previous value
            const major = document.getElementById('major-select');
            const currentMajorCourses = courses.length > 0 ? courses[0].id.substring(0, 4) : 'CPSC';
            
            // Match the prefix to a major
            let previousMajor;
            if (currentMajorCourses === 'CPSC') {
                previousMajor = 'Computer Science';
            } else if (currentMajorCourses === 'MATH') {
                previousMajor = 'Mathematics';
            } else if (currentMajorCourses === 'PHYS') {
                previousMajor = 'Physics';
            } else {
                previousMajor = 'Computer Science'; // Default
            }
            
            major.value = previousMajor;
            return;
        }
    }
    
    // Proceed with updating the major
    const major = document.getElementById('major-select').value;
    initializeCoursesForMajor(major);
    requiredCourses = courses.filter(course => MAJOR_REQUIREMENTS[major].includes(course.id));
    updateAppState(); // Use the new combined function
}

function hasGeneratedLink() {
    // A simple flag that gets set when a link is generated
    return window.linkGenerated === true;
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

function initialize() {
    // Set default values
    window.linkGenerated = false;
    window.lastSavedState = null;
    
    // Initialize courses for the default major (Computer Science)
    initializeCoursesForMajor('Computer Science');
    
    // Update year filter options
    updateYearFilterOptions();
    
    // Try to load from sharable link if available
    const loadedFromLink = loadFromSharableLink();
    
    // Only render courses if not loaded from link (to avoid duplicating the render)
    if (!loadedFromLink) {
        renderCourses();
        renderRequiredCourses();
        updateAllGraphs();
    }
}

function updateAllGraphs() {
    updateGPAChart();
    updateRequirementProgressChart();
    updateCourseDistributionChart();
    updatePrerequisiteFlowChart();
}

function updateRequirementProgressChart() {
    const ctx = document.getElementById('requirementProgressChart').getContext('2d');
    
    // Get the major
    const major = document.getElementById('major-select').value;
    const requiredCourseIds = MAJOR_REQUIREMENTS[major];
    
    // Count completed required courses
    const completedRequired = courses.filter(course => 
        requiredCourseIds.includes(course.id) && 
        course.completed && 
        PASSING_GRADES.includes(course.grade)
    ).length;
    
    // Calculate percentage
    const totalRequired = requiredCourseIds.length;
    const percentComplete = Math.round((completedRequired / totalRequired) * 100);
    
    // Create or update the chart
    if (window.requirementChart) {
        window.requirementChart.destroy();
    }
    
    window.requirementChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [completedRequired, totalRequired - completedRequired],
                backgroundColor: ['#4CAF50', '#f0f0f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: { 
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} of ${totalRequired} courses`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: `Major Requirements: ${percentComplete}% Complete`,
                    font: { size: 14 }
                }
            },
            cutout: '70%'
        }
    });
    
    // Add center text with percentage
    const centerText = {
        id: 'centerText',
        afterDraw: function(chart) {
            const width = chart.width;
            const height = chart.height;
            const ctx = chart.ctx;
            
            ctx.restore();
            ctx.font = "bold 24px Arial";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = "#333";
            ctx.fillText(`${percentComplete}%`, width / 2, height / 2);
            ctx.save();
        }
    };
    
    // Add plugin if not already added
    if (!window.requirementChart.options.plugins.centerText) {
        window.requirementChart.options.plugins.centerText = true;
        window.requirementChart.register(centerText);
    }
}

function updateCourseDistributionChart() {
    const ctx = document.getElementById('courseDistributionChart').getContext('2d');
    
    // Calculate course distribution by year and term
    const distribution = {
        'Year 1': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 },
        'Year 2': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 },
        'Year 3': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 },
        'Year 4': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 }
    };
    
    // Add extra years if they exist
    const years = [...new Set(courses.map(course => course.year))];
    years.forEach(year => {
        if (year > 4) {
            distribution[`Year ${year}`] = { Fall: 0, Winter: 0, Spring: 0, Summer: 0 };
        }
    });
    
    // Count courses by year and term
    courses.forEach(course => {
        const yearKey = `Year ${course.year}`;
        if (distribution[yearKey]) {
            distribution[yearKey][course.term]++;
        }
    });
    
    // Calculate credit load for each term
    const creditLoad = {};
    Object.keys(distribution).forEach(year => {
        creditLoad[year] = {};
        Object.keys(distribution[year]).forEach(term => {
            const termCourses = courses.filter(course => 
                `Year ${course.year}` === year && course.term === term
            );
            creditLoad[year][term] = termCourses.reduce((sum, course) => sum + course.credits, 0);
        });
    });
    
    // Create datasets for the chart
    const labels = Object.keys(distribution);
    const datasets = ['Fall', 'Winter', 'Spring', 'Summer'].map((term, index) => {
        const colors = ['#2196F3', '#4CAF50', '#FFC107', '#F44336'];
        return {
            label: term,
            data: labels.map(year => creditLoad[year][term]),
            backgroundColor: colors[index]
        };
    });
    
    // Create or update the chart
    if (window.distributionChart) {
        window.distributionChart.destroy();
    }
    
    window.distributionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Credit Distribution by Term',
                    font: { size: 14 }
                },
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const yearIndex = context.dataIndex;
                            const term = context.dataset.label;
                            const year = labels[yearIndex];
                            const credits = context.raw;
                            const courseCount = distribution[year][term];
                            return `${term}: ${credits} credits (${courseCount} courses)`;
                        }
                    }
                }
            },
            scales: {
                x: { stacked: true },
                y: { 
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Credits'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

function updatePrerequisiteFlowChart() {
    const ctx = document.getElementById('prerequisiteFlowChart').getContext('2d');
    
    // Analyze prerequisites for completed courses
    const prerequisiteCompletion = {};
    const completedCourses = courses.filter(course => course.completed);
    
    completedCourses.forEach(course => {
        prerequisiteCompletion[course.id] = {
            completed: course.completed && PASSING_GRADES.includes(course.grade),
            prerequisites: course.prerequisite.map(prereqId => {
                const prereq = courses.find(c => c.id === prereqId);
                return {
                    id: prereqId,
                    completed: prereq ? (prereq.completed && PASSING_GRADES.includes(prereq.grade)) : false
                };
            })
        };
    });
    
    // Calculate prerequisite completion rate
    const prereqStats = completedCourses.map(course => {
        if (course.prerequisite.length === 0) return null;
        
        const prereqsCompleted = course.prerequisite.filter(prereqId => {
            const prereq = courses.find(c => c.id === prereqId);
            return prereq && prereq.completed && PASSING_GRADES.includes(prereq.grade);
        }).length;
        
        return {
            id: course.id,
            name: course.name,
            totalPrereqs: course.prerequisite.length,
            completedPrereqs: prereqsCompleted,
            percent: prereqsCompleted / course.prerequisite.length * 100
        };
    }).filter(stat => stat !== null);
    
    // Find courses with most complex prerequisite chains
    const coursesByPrereqCount = [...prereqStats].sort((a, b) => b.totalPrereqs - a.totalPrereqs);
    const topCourses = coursesByPrereqCount.slice(0, 5);
    
    // Create or update the chart
    if (window.prereqChart) {
        window.prereqChart.destroy();
    }
    
    window.prereqChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Prerequisite Planning', 'Course Timing', 'Requirement Completion', 'Credit Balance', 'Term Distribution'],
            datasets: [{
                label: 'Your Degree Plan',
                data: calculatePlanningMetrics(),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Degree Plan Quality Assessment',
                    font: { size: 14 }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    // Show details about highest complexity prerequisite chains
    const detailsDiv = document.getElementById('prereqFlowDetails');
    detailsDiv.innerHTML = `
        <h4>Courses with Complex Prerequisites</h4>
        <div class="prereq-details">
            ${topCourses.map(course => `
                <div class="prereq-item">
                    <div class="prereq-header">
                        <span>${course.id}</span>
                        <span>${course.completedPrereqs}/${course.totalPrereqs} prerequisites completed</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${course.percent}%;"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


// Event listeners
document.getElementById('search').addEventListener('input', renderCourses);
document.getElementById('year-filter').addEventListener('change', renderCourses);
document.getElementById('term-filter').addEventListener('change', renderCourses);
document.getElementById('status-filter').addEventListener('change', renderCourses);

// Initialize courses for the default major (Computer Science)
initializeCoursesForMajor('Computer Science');
renderCourses();