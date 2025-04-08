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
        { id: 'MATH265', name: 'Calculus I', credits: 3, prerequisite: []} ,
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
        { id: 'SOCI345', name: 'Sociology of Gender', credits: 3, prerequisite: ['SOCI201'] },
        { id: 'COOP', name: 'Co-op Work Term', credits: 0, prerequisite: []},
        { id: 'BREAK', name: 'Break Term', credits: 0, prerequisite: []}
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
        { id: 'LING303', name: 'Phonetics and Phonology', credits: 3, prerequisite: ['LING201'] },
        { id: 'COOP', name: 'Co-op Work Term', credits: 0, prerequisite: []},
        { id: 'BREAK', name: 'Break Term', credits: 0, prerequisite: []}
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
        { id: 'ENVS307', name: 'Environmental Impact Assessment', credits: 3, prerequisite: ['ENVS201'] },
        { id: 'COOP', name: 'Co-op Work Term', credits: 0, prerequisite: []},
        { id: 'BREAK', name: 'Break Term', credits: 0, prerequisite: []}
    ]
};

const MAJOR_REQUIREMENTS = {
    'Computer Science': [
        'CPSC231', 'CPSC233', 'CPSC251', 'CPSC331', 'CPSC351', 'CPSC355', 
        'CPSC413', 'CPSC449', 'CPSC457', 'SENG300', 'MATH211', 
        'PHIL279', 'PHIL314'
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
let maxDPlusAllowed = 2; 
let draggedCourseId = null;
let gpaChart = null;
let gpaLineChart = null;

function initializeCoursesForMajor(major) {
    
    courses = [];
    
    
    const majorCourses = AVAILABLE_COURSES[major] || [];
    
    
    courses = majorCourses
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
    
    
    updateYearFilterOptions();
}

function updateYearFilterOptions() {
    const yearFilter = document.getElementById('year-filter');
    
    while (yearFilter.options.length > 1) {
        yearFilter.remove(1);
    }
    
    
    for (let i = 1; i <= 4; i++) {
        const yearOption = document.createElement('option');
        yearOption.value = i;
        yearOption.textContent = `Year ${i}`;
        yearFilter.appendChild(yearOption);
    }
    
    
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

    
    let tooltip = document.querySelector('.course-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'course-tooltip';
        document.body.appendChild(tooltip);
    }

    if (selectedYear === 'all') {
        
        const defaultYears = [1, 2, 3, 4];
        const courseYears = [...new Set(courses.map(course => course.year))];
        const additionalYears = courseYears.filter(year => !defaultYears.includes(year) && year > 4).sort((a, b) => a - b);
        const allYears = [...defaultYears, ...additionalYears];
        
        allYears.forEach(year => {
            const yearCourses = filtered.filter(course => course.year === year);
            
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
                
                const termHeader = document.createElement('div');
                termHeader.className = 'term-header';
                termHeader.innerHTML = `<span>${term} Term</span>`;
                
                if (canAddCourse(year, term)) {
                    const addButton = document.createElement('div');
                    addButton.className = 'add-course-button';
                    addButton.innerHTML = '<span class="material-symbols-outlined">add</span>';
                    addButton.onclick = () => addCourseToTerm(year, term);
                    
                    
                    addButton.addEventListener('mousemove', (e) => {
                        tooltip.textContent = 'Add courses to this term';
                        tooltip.style.display = 'block';
                        tooltip.style.top = `${e.clientY + 15}px`;
                        tooltip.style.left = `${e.clientX + 15}px`;
                    });
                    
                    addButton.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                    });
                    
                    termHeader.appendChild(addButton);
                }
                
                termContainer.appendChild(termHeader);
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
            
            const termHeader = document.createElement('div');
            termHeader.className = 'term-header';
            termHeader.innerHTML = `<span>${term} Term</span>`;
            
            if (canAddCourse(selectedYear, term)) {
                const addButton = document.createElement('div');
                addButton.className = 'add-course-button';
                addButton.innerHTML = '<span class="material-symbols-outlined">add</span>';
                addButton.onclick = () => addCourseToTerm(selectedYear, term);
                
                
                addButton.addEventListener('mousemove', (e) => {
                    tooltip.textContent = 'Add courses to this term';
                    tooltip.style.display = 'block';
                    tooltip.style.top = `${e.clientY + 15}px`;
                    tooltip.style.left = `${e.clientX + 15}px`;
                });
                
                addButton.addEventListener('mouseleave', () => {
                    tooltip.style.display = 'none';
                });
                
                termHeader.appendChild(addButton);
            }
            
            termContainer.appendChild(termHeader);
            const termCourses = filtered.filter(course => course.term === term);
            termCourses.forEach(course => {
                termContainer.appendChild(createCourseCard(course));
            });
            termGrid.appendChild(termContainer);
        });
        
        yearSection.appendChild(termGrid);
        yearSections.appendChild(yearSection);
    }


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
    let isGreyedOut = false;
    let isSpecialCourse = ['COOP', 'BREAK'].includes(course.id);
    let prereqWarning = '';

    
    if (!isSpecialCourse && course.prerequisite.length > 0) {
        const unmetPrereqs = [];
        const invalidGradePrereqs = [];
        
        course.prerequisite.forEach(prereqId => {
            const prereqCourse = courses.find(c => c.id === prereqId);
            
            if (!prereqCourse) {
                unmetPrereqs.push(prereqId);
            } else if (prereqCourse.completed) {
                if (!PASSING_GRADES.includes(prereqCourse.grade)) {
                    invalidGradePrereqs.push({
                        id: prereqId,
                        grade: prereqCourse.grade
                    });
                }
            } else {
                unmetPrereqs.push(prereqId);
            }
        });

        
        if (unmetPrereqs.length > 0 || invalidGradePrereqs.length > 0) {
            isGreyedOut = true;
            statusClass = 'requirement-not-met';
            
            
            const warningParts = [];
            
            if (unmetPrereqs.length > 0) {
                warningParts.push(`Missing prerequisites: ${unmetPrereqs.join(', ')}`);
            }
            
            if (invalidGradePrereqs.length > 0) {
                const invalidList = invalidGradePrereqs.map(p => 
                    `${p.id} (${p.grade})`).join(', ');
                warningParts.push(`Prerequisites with insufficient grades (need C- or higher): ${invalidList}`);
            }
            
            prereqWarning = warningParts.join('<br>');
        }
    }

    
    if (course.completed && !isGreyedOut) {
        statusClass = PASSING_GRADES.includes(course.grade) ? 'completed' : 'failed';
    } else if (!isGreyedOut) {
        statusClass = 'in-progress';
    }

    card.className = `course-card ${statusClass}`;
    card.draggable = true;
    card.dataset.id = course.id;
    card.ondragstart = (e) => {
        draggedCourseId = course.id;
        e.dataTransfer.setData('text/plain', course.id);
    };

    card.addEventListener('mousemove', (e) => {
        showCourseColorLabel(e, statusClass);
    });
    
    card.addEventListener('mouseleave', () => {
        hideCourseColorLabel();
    });

    
    const dPlusWarning = ['D+', 'D'].includes(course.grade) && course.prerequisite.length > 0 && !isSpecialCourse ?
        `<div class="grade-warning">
            <span class="material-symbols-outlined">warning</span>
            <span>Warning: ${course.grade} grade cannot be used as a prerequisite for other courses.</span>
        </div>` : '';

    
    const major = document.getElementById('major-select').value;
    const isRequired = MAJOR_REQUIREMENTS[major].includes(course.id);

    card.innerHTML = `
        <div class="course-header">
            <div>
                <h4>${course.id}</h4>
                <p style="color: #6b7280; font-size: 0.875rem;">${course.name}</p>
            </div>
            <span class="badge">${course.credits} Credits</span>
        </div>
        ${course.prerequisite.length && !isSpecialCourse ? `
            <div class="prerequisite-info">
                Prerequisites: ${course.prerequisite.join(', ')}
            </div>
        ` : ''}
        ${prereqWarning ? `
            <div class="prereq-warning">
                <span class="material-symbols-outlined">error</span>
                <span>${prereqWarning}</span>
            </div>
        ` : ''}
        ${dPlusWarning}
        <div class="course-actions">
            ${!isGreyedOut && !isSpecialCourse ? `
                <button onclick="toggleCompletion('${course.id}')">
                    ${course.completed ? 'Completed' : 'Mark Complete'}
                </button>
            ` : ''}
            ${course.completed && !isGreyedOut && !isSpecialCourse ? `
                <select class="grade-input" onchange="updateGrade('${course.id}', this.value)">
                    <option value="">Grade</option>
                    ${Object.keys(GRADE_POINTS).map(grade => `
                        <option value="${grade}" ${course.grade === grade ? 'selected' : ''}>${grade}</option>
                    `).join('')}
                </select>
            ` : ''}
            ${!isRequired ? `
                <button onclick="deleteCourse('${course.id}')">Delete</button>
            ` : ''}
        </div>
    `;

    return card;
}

function addPrerequisiteWarningStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .prereq-warning {
            background-color: #ffebee;
            border-left: 4px solid #f44336;
            padding: 8px;
            margin: 8px 0;
            border-radius: 4px;
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 0.875rem;
            color: #d32f2f;
        }
        
        .prereq-warning .material-symbols-outlined {
            font-size: 1rem;
            color: #d32f2f;
        }
        
        .grade-warning {
            background-color: #fff8e1;
            border-left: 4px solid #ffc107;
            padding: 8px;
            margin: 8px 0;
            border-radius: 4px;
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 0.875rem;
            color: #ff8f00;
        }
        
        .grade-warning .material-symbols-outlined {
            font-size: 1rem;
            color: #ff8f00;
        }
        
        .prerequisite-info {
            color: #6b7280;
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
        
        .course-card.requirement-not-met {
            opacity: 0.7;
            background-color: #f5f5f5;
            border: 1px dashed #ccc;
        }
        
        .course-card.requirement-not-met .course-header h4,
        .course-card.requirement-not-met .course-header p {
            color: #9e9e9e;
        }
        
        .grade-input {
            padding: 6px;
            border-radius: 4px;
            border: 1px solid #ddd;
            background-color: white;
            font-size: 11px;
            width: 80px;
            margin-top: 3px;
            height: 30px;
        }
    `;
    document.head.appendChild(style);
}

addPrerequisiteWarningStyles();


function showCourseColorLabel(e, statusClass) {
    
    if (statusClass === 'special') {
        return;
    }

    
    let colorLabel = document.querySelector('.course-color-label');
    if (!colorLabel) {
        colorLabel = document.createElement('div');
        colorLabel.className = 'course-color-label';
        document.body.appendChild(colorLabel);
    }

    
    const colorMap = {
        'in-progress': { color: '#fef9c3', label: 'In Progress' }, 
        'completed': { color: '#dcfce7', label: 'Completed' },     
        'failed': { color: '#fee2e2', label: 'Failed' },           
        'requirement-not-met': { color: '#f5f5f5', label: 'Requirement Not Met' }, 
        'special': { color: '#d3d3d3', label: 'Co-op/Break' }      
    };
    
    const { color, label } = colorMap[statusClass] || colorMap['special'];

    
    colorLabel.innerHTML = `
        <div class="color-box" style="background-color: ${color};"></div>
        <span>${label}</span>
    `;

    
    const offset = 10; 
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

function addColorLabelStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .course-color-label {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 6px 10px;
            font-size: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
            pointer-events: none;
        }
        
        .color-box {
            width: 12px;
            height: 12px;
            border-radius: 2px;
            display: inline-block;
            margin-right: 6px;
        }
    `;
    document.head.appendChild(style);
}


addColorLabelStyles();

function toggleCompletion(id) {
    const course = courses.find(c => c.id === id);
    if (['COOP', 'BREAK'].includes(course.id)) {
        alert("Co-op and Break courses cannot be marked as completed.");
        return;
    }

    courses = courses.map(course => 
        course.id === id ? { ...course, completed: !course.completed } : course
    );

    
    const major = document.getElementById('major-select').value;
    if (MAJOR_REQUIREMENTS[major].includes(id)) {
        renderRequiredCourses();
    }

    renderCourses();
}

function updateGrade(id, grade) {
    const course = courses.find(c => c.id === id);
    const major = document.getElementById('major-select').value;

    
    if ((grade === 'D+' || grade === 'D') && 
        !(course.grade === 'D+' || course.grade === 'D') && 
        countDPlusGrades() >= maxDPlusAllowed) {
        alert(`You have reached the maximum allowed D/D+ grades (${maxDPlusAllowed}). This course will not count towards your degree.`);
    }

    
    courses = courses.map(course => 
        course.id === id ? { ...course, grade } : course
    );

    
    if (PASSING_GRADES.includes(grade)) {
        courses = courses.map(course => 
            course.id === id ? { ...course, completed: true } : course
        );
    }

    
    if (MAJOR_REQUIREMENTS[major].includes(id) && (grade === 'D+' || grade === 'D')) {
        const hasPrerequisites = course.prerequisite && course.prerequisite.length > 0;
        if (hasPrerequisites) {
            alert(`Warning: ${course.id} (${course.name}) is a required course with prerequisites. A grade of ${grade} cannot be used to fulfill prerequisites for other courses.`);
        }
    }

    
    const dependentCourses = courses.filter(c => 
        c.prerequisite.includes(id) && 
        !['COOP', 'BREAK'].includes(c.id)
    );
    
    if (dependentCourses.length > 0 && !PASSING_GRADES.includes(grade)) {
        const dependentList = dependentCourses.map(c => c.id).join(', ');
        alert(`Warning: ${course.id} is a prerequisite for: ${dependentList}. A grade of ${grade} is insufficient to fulfill these prerequisites.`);
    }

    
    if (MAJOR_REQUIREMENTS[major].includes(id)) {
        renderRequiredCourses();
    }

    
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
    
    
    creditCounter.textContent = `${total}/120 Credits`;
    
    creditCounter.style.cursor = 'pointer';
    creditCounter.style.borderWidth = '2px';
    creditCounter.style.borderStyle = 'solid';
    creditCounter.style.borderColor = '#ffffff #808080 #808080 #ffffff';
    creditCounter.style.backgroundColor = '#d4d0c8'; 

    creditCounter.style.marginLeft = '30%';
    
    
    creditCounter.onmouseover = function() {
        this.style.backgroundColor = '#d8d4cc';
    };
    
    creditCounter.onmouseout = function() {
        this.style.backgroundColor = '#d4d0c8';
    };
    
    creditCounter.onmousedown = function() {
        this.style.borderColor = '#808080 #ffffff #ffffff #808080';
        this.style.padding = '5px 11px 3px 13px'; 
    };
    
    creditCounter.onmouseup = function() {
        this.style.borderColor = '#ffffff #808080 #808080 #ffffff';
        this.style.padding = '4px 12px 4px 12px'; 
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

    
    courses.filter(course => 
        course.completed && 
        course.grade !== 'F' && 
        course.credits > 0  
    ).forEach(course => {
        const levelMatch = course.id.match(/\d+/);
        if (!levelMatch) return; 
        
        const level = levelMatch[0].charAt(0) + '00';
        if (!breakdown[level]) {
            breakdown[level] = { major: 0, other: 0 }; 
        }
        
        if (course.id.startsWith(majorPrefix)) {
            breakdown[level].major += course.credits;
        } else {
            breakdown[level].other += course.credits;
        }
    });

    const breakdownBody = document.getElementById('credit-breakdown-body');
    breakdownBody.innerHTML = '';
    
    
    const sortedLevels = Object.keys(breakdown).sort();
    
    sortedLevels.forEach(level => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${level}</td>
            <td>${breakdown[level].major}</td>
            <td>${breakdown[level].other}</td>
            <td>${breakdown[level].major + breakdown[level].other}</td>
        `;
        breakdownBody.appendChild(row);
    });

    
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
    
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function addYear() {
    const years = [...new Set(courses.map(course => course.year))];
    const maxYear = years.length > 0 ? Math.max(...years) : 4; 
    const newYear = maxYear + 1;
    
    
    if (newYear < 5) {
        alert("Years 1-4 are already available by default.");
        return;
    }

    
    const previousYearCourses = courses.filter(course => course.year === maxYear);
    if (previousYearCourses.length === 0) {
        alert(`Cannot add Year ${newYear} because Year ${maxYear} is empty. Please add at least one course to Year ${maxYear} first.`);
        return;
    }

    
    const confirmAdd = confirm(`Are you sure you want to add Year ${newYear}?`);
    if (!confirmAdd) {
        return;
    }

    
    const major = document.getElementById('major-select').value;
    const availableCourses = AVAILABLE_COURSES[major].filter(course => 
        !courses.some(c => c.id === course.id)
    );

    if (availableCourses.length === 0) {
        alert("No available courses to add to the new year. Cannot create a new year without available courses.");
        return;
    }

    
    const yearFilter = document.getElementById('year-filter');
    const newYearOption = document.createElement('option');
    newYearOption.value = newYear;
    newYearOption.textContent = `Year ${newYear}`;
    yearFilter.appendChild(newYearOption);
    
    
    yearFilter.value = 'all';
    
    
    renderCourses();
    
    
    showNotification(`Year ${newYear} has been added successfully!`);
    
    
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
    
    
    if (maxYear <= 4) {
        alert("Cannot delete Years 1-4 as they are required by default.");
        return;
    }
    
    
    const yearCourses = courses.filter(course => course.year === maxYear);
    if (yearCourses.length > 0) {
        const confirmDelete = confirm(`Year ${maxYear} contains ${yearCourses.length} course(s). Deleting this year will remove all courses in it. Are you sure you want to proceed?`);
        if (!confirmDelete) {
            return;
        }
        
        
        courses = courses.filter(course => course.year !== maxYear);
    } else {
        const confirmDelete = confirm(`Are you sure you want to delete Year ${maxYear}?`);
        if (!confirmDelete) {
            return;
        }
    }
    
    const yearFilter = document.getElementById('year-filter');
    const yearOption = Array.from(yearFilter.options).find(option => option.value == maxYear);
    if (yearOption) {
        yearFilter.removeChild(yearOption);
    }
    
    
    updateRequiredCourses();
    renderCourses();
    
    
    showNotification(`Year ${maxYear} has been deleted successfully!`);
}

function addCourseToTerm(year, term) {
    const major = document.getElementById('major-select').value;

    
    const availableCourses = AVAILABLE_COURSES[major].filter(course => {
        
        if (['COOP', 'BREAK'].includes(course.id)) {
            return true;
        }
        
        return !courses.some(c => c.id === course.id);
    });

    if (availableCourses.length === 0) {
        alert("No available courses to add.");
        return;
    }

    
    const termContainer = document.querySelector(`.term-container[data-year="${year}"][data-term="${term}"]`);
    const existingDropdown = termContainer.querySelector('.course-selection-container');

    if (existingDropdown) {
        
        termContainer.removeChild(existingDropdown);
        return;
    }

    
    const selectionContainer = document.createElement('div');
    selectionContainer.className = 'course-selection-container';

    
    termContainer.style.overflow = 'visible'; 
    termContainer.style.position = 'relative'; 

    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search courses...';
    searchInput.className = 'course-search-input';
    
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'course-dropdown-container';
    
    const dropdown = document.createElement('select');
    dropdown.className = 'course-dropdown';
    dropdown.size = 8; 
    dropdown.multiple = false;

    
    function populateDropdown(searchTerm = '') {
        dropdown.innerHTML = ''; 
        
        const filteredCourses = availableCourses.filter(course => {
            const searchLower = searchTerm.toLowerCase();
            return course.id.toLowerCase().includes(searchLower) || 
                   course.name.toLowerCase().includes(searchLower);
        });

        if (filteredCourses.length === 0) {
            const noResults = document.createElement('option');
            noResults.textContent = 'No courses found';
            noResults.disabled = true;
            dropdown.appendChild(noResults);
        } else {
            filteredCourses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.id;
                option.textContent = `${course.id} - ${course.name}`;
                option.title = `${course.id} - ${course.name}`; 
                dropdown.appendChild(option);
            });
        }
    }

    
    populateDropdown();

    
    searchInput.addEventListener('input', (e) => {
        populateDropdown(e.target.value);
    });

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
            completed: ['COOP', 'BREAK'].includes(courseId),
            grade: null,
            required: isRequired
        });

        
        termContainer.removeChild(selectionContainer);

        updateRequiredCourses();
        renderCourses();
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'cancel-button';
    cancelButton.onclick = () => {
        
        termContainer.removeChild(selectionContainer);
    };

    
    const customCourseButton = document.createElement('button');
    customCourseButton.textContent = 'Custom';
    customCourseButton.className = 'custom-course-button';
    customCourseButton.onclick = () => {
        
        termContainer.removeChild(selectionContainer);
        
        
        showCustomCourseForm(year, term);
    };

    dropdownContainer.appendChild(dropdown);
    selectionContainer.appendChild(searchInput);
    selectionContainer.appendChild(dropdownContainer);
    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(customCourseButton); 

    selectionContainer.appendChild(buttonContainer);

    termContainer.appendChild(selectionContainer);

    
    searchInput.focus();
}

function showCustomCourseForm(year, term) {
    const termContainer = document.querySelector(`.term-container[data-year="${year}"][data-term="${term}"]`);
    
    
    const formContainer = document.createElement('div');
    formContainer.className = 'custom-course-form';
    
    
    formContainer.innerHTML = `
        <h4>Create Custom Course</h4>
        <div class="form-group">
            <label for="custom-course-id">Course ID:</label>
            <input type="text" id="custom-course-id" placeholder="e.g., CPSC599">
        </div>
        <div class="form-group">
            <label for="custom-course-name">Course Name:</label>
            <input type="text" id="custom-course-name" placeholder="e.g., Special Topics in Computer Science">
        </div>
        <div class="form-group">
            <label for="custom-course-credits">Credits:</label>
            <select id="custom-course-credits">
                <option value="3">3</option>
                <option value="3">2</option>
                <option value="3">1</option>
                <option value="3">0</option>
                <option value="1">4</option>
                <option value="2">5</option>
                <option value="4">6</option>
            </select>
        </div>
        <div class="form-group">
            <label for="custom-course-prerequisites">Prerequisites (comma separated):</label>
            <input type="text" id="custom-course-prerequisites" placeholder="e.g., CPSC231,CPSC233">
        </div>
        <div class="form-buttons">
            <button class="save-custom-course">Save</button>
            <button class="cancel-custom-course">Cancel</button>
        </div>
    `;
    
    
    formContainer.querySelector('.save-custom-course').addEventListener('click', () => {
        saveCustomCourse(year, term, formContainer);
    });
    
    formContainer.querySelector('.cancel-custom-course').addEventListener('click', () => {
        termContainer.removeChild(formContainer);
    });
    
    
    termContainer.appendChild(formContainer);
}

function saveCustomCourse(year, term, formContainer) {
    const idInput = formContainer.querySelector('#custom-course-id');
    const nameInput = formContainer.querySelector('#custom-course-name');
    const creditsInput = formContainer.querySelector('#custom-course-credits');
    const prereqsInput = formContainer.querySelector('#custom-course-prerequisites');
    
    
    if (!idInput.value.trim()) {
        alert("Please enter a course ID");
        return;
    }
    
    if (!nameInput.value.trim()) {
        alert("Please enter a course name");
        return;
    }
    
    
    const prerequisites = prereqsInput.value.trim() 
        ? prereqsInput.value.split(',').map(p => p.trim()).filter(p => p)
        : [];
    
    
    const major = document.getElementById('major-select').value;
    const allCourses = AVAILABLE_COURSES[major];
    const invalidPrereqs = prerequisites.filter(p => !allCourses.some(c => c.id === p));
    
    if (invalidPrereqs.length > 0) {
        const confirmAdd = confirm(`The following prerequisites don't exist in the system: ${invalidPrereqs.join(', ')}. Do you want to proceed anyway?`);
        if (!confirmAdd) {
            return;
        }
    }
    
    
    const customCourse = {
        id: idInput.value.trim().toUpperCase(),
        name: nameInput.value.trim(),
        credits: parseInt(creditsInput.value),
        prerequisite: prerequisites,
        term,
        year: parseInt(year),
        completed: ['COOP', 'BREAK'].includes(idInput.value.trim().toUpperCase()),
        grade: null,
        required: false,
        isCustom: true 
    };
    
    
    courses.push(customCourse);
    
    
    const termContainer = formContainer.parentNode;
    termContainer.removeChild(formContainer);
    
    
    updateRequiredCourses();
    renderCourses();
    
    
    showNotification(`Custom course ${customCourse.id} added successfully!`);
}


function addCustomCourseStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .custom-course-form {
            background: #f3f4f6;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-top: 10px;
            width: 100%;
            max-width: 400px;
        }
        
        .custom-course-form h4 {
            margin-top: 0;
            color: #333;
            font-size: 1.1rem;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
            color: #555;
        }
        
        .form-group input, 
        .form-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        .form-buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .form-buttons button {
            flex: 1;
            padding: 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            border: 1px solid #e5e7eb;

        }
        
        .save-custom-course {
            padding: 0.375rem 0.75rem;
            border-radius: 0.375rem;
            border: 1px solid #e5e7eb;
            background-color: white;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .cancel-custom-course {
            padding: 0.375rem 0.75rem;
            border-radius: 0.375rem;
            border: 1px solid #e5e7eb;
            background-color: white;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .custom-course-button {
            padding: 0.375rem 0.75rem;
            border-radius: 0.375rem;
            border: 1px solid #e5e7eb;
            background-color: white;
            cursor: pointer;
            transition: background-color 0.2s;
        }
    `;
    document.head.appendChild(style);
}


addCustomCourseStyles();

function deleteCourse(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    const isConfirmed = confirm(`Are you sure you want to delete ${course.id} - ${course.name}?\n\nThis action cannot be undone.`);
    
    if (!isConfirmed) {
        return; 
    }

    courses = courses.filter(course => course.id !== id);

    updateRequiredCourses();

    renderCourses();

    showNotification(`Course ${course.id} has been deleted.`);
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

    
    updateDPlusCounter();

    
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

    
    showNotification(`D/D+ limit updated to ${limit}.`);
}

function generateSharableLink() {
    
    const data = {
        courses: courses.map(course => ({
            id: course.id,
            name: course.name,
            credits: course.credits,
            prerequisite: course.prerequisite,
            term: course.term,
            year: course.year,
            completed: course.completed,
            grade: course.grade,
            required: course.required
        })),
        maxDPlusAllowed: maxDPlusAllowed,
        major: document.getElementById('major-select').value,
        bgColor: document.getElementById('bg-color-picker').value
    };

    
    const encodedData = btoa(JSON.stringify(data));
    const link = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;

    
    window.linkGenerated = true;
    window.lastSavedState = JSON.stringify(data);

    
    navigator.clipboard.writeText(link).then(() => {
        showNotification("Sharable link copied to clipboard!");
    }).catch(() => {
        prompt("Copy this link to share your plan:", link);
    });
}

function initializeCoursesForMajor(major) {
    
    courses = [];
    
    
    const majorCourses = AVAILABLE_COURSES[major] || [];
    
    
    courses = majorCourses
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
    
    
    updateYearFilterOptions();
}

function loadFromSharableLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');

    if (!encodedData) {
        return false;
    }

    try {
        
        const decodedData = JSON.parse(atob(encodedData));
        
        
        if (!decodedData || typeof decodedData !== 'object' || !Array.isArray(decodedData.courses)) {
            console.error("Invalid data structure in sharable link");
            return false;
        }

        if (decodedData.bgColor) {
            document.body.style.backgroundColor = decodedData.bgColor;
            document.getElementById('bg-color-picker').value = decodedData.bgColor;
        }

        
        const majorSelect = document.getElementById('major-select');
        const availableMajors = Object.keys(AVAILABLE_COURSES);
        const major = availableMajors.includes(decodedData.major) 
            ? decodedData.major 
            : availableMajors[0];
        majorSelect.value = major;

        
        const loadedCourses = [];
        const majorCourses = AVAILABLE_COURSES[major] || [];

        decodedData.courses.forEach(savedCourse => {
            
            const courseTemplate = majorCourses.find(c => c.id === savedCourse.id) || {
                id: savedCourse.id,
                name: savedCourse.name || `Course ${savedCourse.id}`,
                credits: savedCourse.credits || 3,
                prerequisite: Array.isArray(savedCourse.prerequisite) 
                    ? savedCourse.prerequisite 
                    : [],
                defaultTerm: 'Fall',
                defaultYear: 1
            };

            loadedCourses.push({
                ...courseTemplate,
                term: savedCourse.term || courseTemplate.defaultTerm || 'Fall',
                year: savedCourse.year || courseTemplate.defaultYear || 1,
                completed: Boolean(savedCourse.completed),
                grade: typeof savedCourse.grade === 'string' ? savedCourse.grade : null,
                required: MAJOR_REQUIREMENTS[major]?.includes(savedCourse.id) || false
            });
        });

        
        if (loadedCourses.length > 0) {
            courses = loadedCourses;
            maxDPlusAllowed = typeof decodedData.maxDPlusAllowed === 'number'
                ? Math.max(0, decodedData.maxDPlusAllowed)
                : 2;
            
            document.getElementById('d-plus-limit').value = maxDPlusAllowed;
            
            
            updateRequiredCourses();
            renderCourses();
            updateAllGraphs();

            
            window.linkGenerated = true;
            window.lastSavedState = JSON.stringify({
                courses: courses,
                maxDPlusAllowed: maxDPlusAllowed,
                major: major
            });

            return true;
        }
    } catch (error) {
        console.error("Error loading from sharable link:", error);
    }

    return false;
}

function resetPlan() {
    if (confirm("Are you sure you want to reset your plan? This will clear all your courses and start fresh.")) {
        const major = document.getElementById('major-select').value;
        initializeCoursesForMajor(major);
        maxDPlusAllowed = 2;
        document.getElementById('d-plus-limit').value = maxDPlusAllowed;
        
        
        if (window.history.replaceState) {
            const newUrl = window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        }
        
        
        updateRequiredCourses();
        renderCourses();
        updateAllGraphs();
        
        
        window.linkGenerated = false;
        window.lastSavedState = null;
    }
}

function initializeDefaultCourses() {
    const major = document.getElementById('major-select').value;
    
    
    courses = [];
    
    
    const defaultCourses = AVAILABLE_COURSES[major].filter(
        course => course.defaultTerm && course.defaultYear
    );

    
    courses = defaultCourses.map(course => ({
        id: course.id,
        name: course.name,
        credits: course.credits,
        prerequisite: course.prerequisite || [],
        term: course.defaultTerm,
        year: course.defaultYear,
        completed: false,
        grade: null,
        required: MAJOR_REQUIREMENTS[major].includes(course.id)
    }));

    
    maxDPlusAllowed = 2;
    document.getElementById('d-plus-limit').value = maxDPlusAllowed;

    
    updateRequiredCourses();
    renderCourses();
    updateAllGraphs();

    console.log("Initialized default course plan for", major);
}


window.addEventListener('DOMContentLoaded', () => {
    loadFromSharableLink();
});

function hasUnsavedChanges() {
    if (!window.linkGenerated) {
        return courses.length > 0; 
    }

    
    const currentData = {
        courses: courses,
        maxDPlusAllowed: maxDPlusAllowed,
        requiredCourses: requiredCourses,
        major: document.getElementById('major-select')?.value || 'Computer Science',
    };

    
    return window.lastSavedState !== JSON.stringify(currentData);
}

function trackChanges() {
    
    
    
    if (window.linkGenerated) {
        const currentData = {
            courses: courses,
            maxDPlusAllowed: maxDPlusAllowed,
            requiredCourses: requiredCourses,
            major: document.getElementById('major-select')?.value || 'Computer Science',
        };
        
        
        const hasChanges = window.lastSavedState !== JSON.stringify(currentData);
        
        
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


function updateAppState() {
    renderCourses();
    renderRequiredCourses();
    updateAllGraphs();
    trackChanges(); 
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
    updateAppState(); 
    draggedCourseId = null;
}


window.addEventListener('beforeunload', function(e) {
    
    
    const confirmationMessage = 'You have unsaved changes. Please remember to generate and save a sharable link before leaving.';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});

function updateMajor() {
    
    if (courses.length > 0) {
        const confirmed = confirm("Changing your major will reset your course plan. Have you saved your current progress with a sharable link?");
        if (!confirmed) {
            
            const major = document.getElementById('major-select');
            const currentMajorCourses = courses.length > 0 ? courses[0].id.substring(0, 4) : 'CPSC';
            
            
            let previousMajor;
            if (currentMajorCourses === 'CPSC') {
                previousMajor = 'Computer Science';
            } else if (currentMajorCourses === 'MATH') {
                previousMajor = 'Mathematics';
            } else if (currentMajorCourses === 'PHYS') {
                previousMajor = 'Physics';
            } else {
                previousMajor = 'Computer Science'; 
            }
            
            major.value = previousMajor;
            return;
        }
    }
    
    
    const major = document.getElementById('major-select').value;
    initializeCoursesForMajor(major);
    requiredCourses = courses.filter(course => MAJOR_REQUIREMENTS[major].includes(course.id));
    updateAppState(); 
}

function hasGeneratedLink() {
    
    return window.linkGenerated === true;
}

function renderRequiredCourses() {
    const requiredCoursesList = document.getElementById('required-courses-list');
    requiredCoursesList.innerHTML = '';

    const major = document.getElementById('major-select').value;
    const requiredCourseIds = MAJOR_REQUIREMENTS[major];
    
    requiredCourseIds.forEach(courseId => {
        const course = courses.find(c => c.id === courseId);
        
        
        if (course) {
            const courseDiv = document.createElement('div');
            courseDiv.className = `required-course${course.completed ? ' completed' : ''}${course.grade && !PASSING_GRADES.includes(course.grade) ? ' failed' : ''}`;
            courseDiv.innerHTML = `
                <span>${course.id} - ${course.name}</span>
                ${course.grade ? `<span>Grade: ${course.grade}</span>` : ''}
            `;
            requiredCoursesList.appendChild(courseDiv);
        } else {
            
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
    
    window.linkGenerated = false;
    window.lastSavedState = null;
    
    
    initializeCoursesForMajor('Computer Science');
    loadBackgroundColor();
    setupKeyboardShortcuts();
    
    
    const loadedFromLink = loadFromSharableLink();
    
    
    if (!loadedFromLink) {
        renderCourses();
        renderRequiredCourses();
        updateAllGraphs();
    }
    
    
    setupEventListeners();
}

function setupEventListeners() {
    document.getElementById('search').addEventListener('input', renderCourses);
    document.getElementById('year-filter').addEventListener('change', renderCourses);
    document.getElementById('term-filter').addEventListener('change', renderCourses);
    document.getElementById('status-filter').addEventListener('change', renderCourses);
    document.getElementById('major-select').addEventListener('change', updateMajor);
    document.getElementById('generate-link').addEventListener('click', generateSharableLink);
    document.getElementById('reset-plan').addEventListener('click', resetPlan);
    document.getElementById('d-plus-limit').addEventListener('change', setDPlusLimit);
    document.getElementById('add-year-button').addEventListener('click', addYear);
    document.getElementById('delete-year-button').addEventListener('click', deleteYear);
}

function updateAllGraphs() {
    updateGPAChart();
    updateRequirementProgressChart();
    updateCourseDistributionChart();
    updatePrerequisiteFlowChart();
}

function updateRequirementProgressChart() {
    const ctx = document.getElementById('requirementProgressChart').getContext('2d');
    
    
    const major = document.getElementById('major-select').value;
    const requiredCourseIds = MAJOR_REQUIREMENTS[major];
    
    
    const completedRequired = courses.filter(course => 
        requiredCourseIds.includes(course.id) && 
        course.completed && 
        PASSING_GRADES.includes(course.grade)
    ).length;
    
    
    const totalRequired = requiredCourseIds.length;
    const percentComplete = Math.round((completedRequired / totalRequired) * 100);
    
    
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
    
    
    if (!window.requirementChart.options.plugins.centerText) {
        window.requirementChart.options.plugins.centerText = true;
        window.requirementChart.register(centerText);
    }
}

function updateCourseDistributionChart() {
    const ctx = document.getElementById('courseDistributionChart').getContext('2d');
    
    
    const distribution = {
        'Year 1': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 },
        'Year 2': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 },
        'Year 3': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 },
        'Year 4': { Fall: 0, Winter: 0, Spring: 0, Summer: 0 }
    };
    
    
    const years = [...new Set(courses.map(course => course.year))];
    years.forEach(year => {
        if (year > 4) {
            distribution[`Year ${year}`] = { Fall: 0, Winter: 0, Spring: 0, Summer: 0 };
        }
    });
    
    
    courses.forEach(course => {
        const yearKey = `Year ${course.year}`;
        if (distribution[yearKey]) {
            distribution[yearKey][course.term]++;
        }
    });
    
    
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
    
    
    const labels = Object.keys(distribution);
    const datasets = ['Fall', 'Winter', 'Spring', 'Summer'].map((term, index) => {
        const colors = ['#2196F3', '#4CAF50', '#FFC107', '#F44336'];
        return {
            label: term,
            data: labels.map(year => creditLoad[year][term]),
            backgroundColor: colors[index]
        };
    });
    
    
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
    
    
    const coursesByPrereqCount = [...prereqStats].sort((a, b) => b.totalPrereqs - a.totalPrereqs);
    const topCourses = coursesByPrereqCount.slice(0, 5);
    
    
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
        backToTopButton.style.alignItems = 'center';
        backToTopButton.style.justifyContent = 'center';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('degreeNavigatorBgColor', color);
    
    
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        
        const rgb = hexToRgb(color);
        const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        const textColor = brightness > 128 ? '#000000' : '#ffffff';
        
        backToTopButton.style.backgroundColor = textColor === '#000000' ? '#ffffff' : '#000000';
        backToTopButton.style.color = textColor;
    }
}


function hexToRgb(hex) {
    
    hex = hex.replace('#', '');
    
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
}


function loadBackgroundColor() {
    const savedColor = localStorage.getItem('degreeNavigatorBgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('bg-color-picker').value = savedColor;
    }
}


function setupKeyboardShortcuts() {
    const SHORTCUTS = {
        search: 'f',
        yearFilter: 'h',
        termFilter: 'j',
        statusFilter: 'k'
    };

    const activeStates = {
        yearFilter: false,
        termFilter: false,
        statusFilter: false
    };

    let currentActiveClone = null;
    let currentSelectedIndex = -1;

    document.addEventListener('keydown', function(e) {
        if (currentActiveClone) {
            const options = currentActiveClone.options;
            const optionsLength = options.length;
            
            switch (e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    currentSelectedIndex = Math.max(0, currentSelectedIndex - 1);
                    updateSelectedOption(currentActiveClone, currentSelectedIndex);
                    ensureOptionVisible(currentActiveClone, currentSelectedIndex);
                    return;
                    
                case 'ArrowDown':
                    e.preventDefault();
                    currentSelectedIndex = Math.min(optionsLength - 1, currentSelectedIndex + 1);
                    updateSelectedOption(currentActiveClone, currentSelectedIndex);
                    ensureOptionVisible(currentActiveClone, currentSelectedIndex);
                    return;
                    
                case 'Enter':
                    e.preventDefault();
                    if (currentSelectedIndex >= 0) {
                        selectAndApplyOption(currentActiveClone);
                    }
                    return;
                    
                case 'Escape':
                    e.preventDefault();
                    closeAllFilters(activeStates);
                    return;
            }
        }

        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || 
            e.target.tagName === 'TEXTAREA' || e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        switch(e.key.toLowerCase()) {
            case SHORTCUTS.search:
                e.preventDefault();
                document.getElementById('search').focus();
                break;
                
            case SHORTCUTS.yearFilter:
                e.preventDefault();
                toggleFilter('year-filter', activeStates);
                break;
                
            case SHORTCUTS.termFilter:
                e.preventDefault();
                toggleFilter('term-filter', activeStates);
                break;
                
            case SHORTCUTS.statusFilter:
                e.preventDefault();
                toggleFilter('status-filter', activeStates);
                break;
                
            case 'escape':
                closeAllFilters(activeStates);
                break;
        }
    });

    function updateSelectedOption(selectElement, index) {
        for (let i = 0; i < selectElement.options.length; i++) {
            selectElement.options[i].selected = (i === index);
        }
    }

    function ensureOptionVisible(selectElement, index) {
        const option = selectElement.options[index];
        const selectTop = selectElement.scrollTop;
        const selectBottom = selectTop + selectElement.clientHeight;
        const optionTop = option.offsetTop;
        const optionBottom = optionTop + option.offsetHeight;

        if (optionTop < selectTop) {
            selectElement.scrollTop = optionTop;
        } else if (optionBottom > selectBottom) {
            selectElement.scrollTop = optionBottom - selectElement.clientHeight;
        }
    }

    function selectAndApplyOption(cloneElement) {
        const filterId = cloneElement.id.replace('-expanded', '');
        const filter = document.getElementById(filterId);
        
        if (filter) {
            filter.value = cloneElement.value;
            
            
            const changeEvent = new Event('change', { bubbles: true });
            filter.dispatchEvent(changeEvent);
            
            const filterKey = filterId.replace('-filter', 'Filter');
            closeFilter(filter);
            
            if (activeStates[filterKey]) {
                activeStates[filterKey] = false;
            }
            
            currentActiveClone = null;
            currentSelectedIndex = -1;
        }
    }

    function toggleFilter(filterId, stateObj) {
        const filter = document.getElementById(filterId);
        if (!filter) return;
        
        const filterKey = filterId.replace('-filter', 'Filter');
        const isCurrentlyActive = stateObj[filterKey];
        
        // Close all other filters first
        closeAllFilters(stateObj);
        
        // Toggle the current filter
        if (isCurrentlyActive) {
            closeFilter(filter);
            stateObj[filterKey] = false;
        } else {
            openFilter(filter);
            stateObj[filterKey] = true;
        }
    }

    document.querySelectorAll('.filter-group select').forEach(select => {
        
        select.addEventListener('mousedown', function(e) {
            e.preventDefault();
            const filterId = this.id;
            const filterKey = filterId.replace('-filter', 'Filter');
            
            
            if (activeStates[filterKey]) {
                closeFilter(this);
                activeStates[filterKey] = false;
            } 
            
            else {
                closeAllFilters(activeStates);
                openFilter(this);
                activeStates[filterKey] = true;
            }
        });

        
    });
    
    function openFilter(filter) {
        const clone = filter.cloneNode(true);
        clone.id = filter.id + '-expanded';
        clone.classList.add('expanded-select');
        clone.size = Math.min(filter.options.length, 10);
        
        const rect = filter.getBoundingClientRect();
        clone.style.position = 'fixed';
        clone.style.top = `${rect.bottom + window.scrollY}px`;
        clone.style.left = `${rect.left + window.scrollX}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.zIndex = '1000';
        clone.style.border = '1px solid #C8102E';
        clone.style.borderRadius = '4px';
        
        document.body.appendChild(clone);
        
        currentSelectedIndex = filter.selectedIndex;
        currentActiveClone = clone;
        
        clone.focus();
        updateSelectedOption(clone, currentSelectedIndex);
        ensureOptionVisible(clone, currentSelectedIndex);
        
        clone.addEventListener('change', function() {
            selectAndApplyOption(this);
        });
        
        clone.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const filterId = this.id.replace('-expanded', '');
                const filter = document.getElementById(filterId);
                closeFilter(filter);
            }
        });
        
        const clickOutsideHandler = function(e) {
            if (!clone.contains(e.target) && e.target !== filter) {
                const filterId = clone.id.replace('-expanded', '');
                const filter = document.getElementById(filterId);
                closeFilter(filter);
                document.removeEventListener('click', clickOutsideHandler);
            }
        };
        
        setTimeout(() => {
            document.addEventListener('click', clickOutsideHandler);
        }, 10);
        
        filter.dataset.expandedClone = clone.id;
    }
    
    function closeFilter(filter) {
        if (!filter) return;
        
        const cloneId = filter.dataset.expandedClone;
        if (cloneId) {
            const clone = document.getElementById(cloneId);
            if (clone) {
                if (currentActiveClone === clone) {
                    currentActiveClone = null;
                    currentSelectedIndex = -1;
                }
                clone.remove();
                delete filter.dataset.expandedClone;
            }
        }
        
        // Update the active state for this filter
        const filterKey = filter.id.replace('-filter', 'Filter');
        if (activeStates[filterKey]) {
            activeStates[filterKey] = false;
        }
    }
    
    function closeAllFilters(stateObj) {
        Object.keys(stateObj).forEach(key => {
            const filterId = key.replace('Filter', '-filter');
            const filter = document.getElementById(filterId);
            if (filter) {
                closeFilter(filter);
                stateObj[key] = false;
            }
        });
        currentActiveClone = null;
        currentSelectedIndex = -1;
    }

    updateShortcutTooltips(SHORTCUTS);
}

function updateShortcutTooltips(shortcuts) {
    const tooltips = {
        'search': `Press ${shortcuts.search.toUpperCase()} to focus`,
        'year-filter': `Press ${shortcuts.yearFilter.toUpperCase()} to toggle`,
        'term-filter': `Press ${shortcuts.termFilter.toUpperCase()} to toggle`,
        'status-filter': `Press ${shortcuts.statusFilter.toUpperCase()} to toggle`
    };

    Object.entries(tooltips).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            let container = element.closest('.has-shortcut');
            if (!container) {
                container = element.parentElement;
                container.classList.add('has-shortcut');
            }
            
            let tooltip = container.querySelector('.shortcut-hint');
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.className = 'shortcut-hint';
                container.appendChild(tooltip);
            }
            tooltip.textContent = text;

            
            container.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
                setTimeout(() => tooltip.style.opacity = '1', 10);
            });
            
            container.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                setTimeout(() => tooltip.style.display = 'none', 200);
            });
        }
    });
}



document.getElementById('search').addEventListener('input', renderCourses);
document.getElementById('year-filter').addEventListener('change', renderCourses);
document.getElementById('term-filter').addEventListener('change', renderCourses);
document.getElementById('status-filter').addEventListener('change', renderCourses);
document.addEventListener('DOMContentLoaded', initialize);



initializeCoursesForMajor('Computer Science');
renderCourses();