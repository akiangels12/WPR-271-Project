const courses = {
    'HC01': { 
        title: 'Higher Certificate (HC)', 
        modules: [
            "Introduction to Economics",
            "Principles of Marketing",
            "Advanced Calculus",
            "Introduction to Psychology",
            "Fundamentals of Finance",
            "Human Resource Management",
            "Introduction to Computer Science",
            "Business Law",
            "Environmental Science",
            "Introduction to Philosophy"
        ],
        lecturers: [
    "Dr. Smith",
    "Ms. Johnson",
    "Dr. Williams",
    "Mr. Brown",
    "Dr. Lee",
    "Ms. Davis",
    "Dr. Wilson",
    "Mr. Miller",
    "Dr. Moore",
    "Ms. Taylor"], 
        venue: [ "Room 101",
            "Room 102",
            "Room 103",
            "Room 104",
            "Room 105",
            "Room 106",
            "Room 107",
            "Room 108",
            "Room 109",
            "Room 110"],
        description: 'This Higher Certificate in IT is created in line with Belgium Campus’s mission to train young people to understand, use and apply ICT effectively, efficiently and in ethical ways, leading to gainful employment.'
    },
    'D01': { 
        title: 'Diploma(DIT)', 
         modules: [
            "Introduction to Programming",
            "Network Security",
            "Software Engineering",
            "Database Systems",
            "Web Development",
            "Artificial Intelligence",
            "Machine Learning",
            "Cyber Forensics",
            "Cloud Computing",
            "Data Science",
            "Internet of Things"
        ], 
        lecturers: ["Prof. Brown",
    "Dr. Adams",
    "Ms. Green",
    "Dr. Miller",
    "Ms. Johnson",
    "Dr. Lee",
    "Ms. Davis",
    "Dr. Wilson",
    "Ms. Clark",
    "Dr. Roberts",
    "Ms. Taylor"], 
        venue: [
            "Room 201",
            "Room 301",
            "Room 302",
            "Room 303",
            "Room 304",
            "Room 305",
            "Room 306",
            "Room 307",
            "Room 308",
            "Room 309",
            "Room 310"
        ],
        description: 'This is a diploma courseThis empowering diploma features on-trend specialisations aligned with real-world industry requirements. These specialisations will give you access to many exciting career opportunities and allow you to graduate in high demand.'
    },
    'BIT01': { 
        title: 'Bachelor of Information Technology(BIT)', 
        modules: [ "Network Security",
            "Software Engineering",
            "Database Systems",
            "Web Development",
            "Artificial Intelligence",
            "Machine Learning",
            "Cyber Forensics",
            "Cloud Computing",
            "Data Science",
            "Internet of Things"], 
        lecturers: ["Dr. Adams",
    "Ms. Green",
    "Dr. Miller",
    "Ms. Johnson",
    "Dr. Lee",
    "Ms. Davis",
    "Dr. Wilson",
    "Ms. Clark",
    "Dr. Roberts",
    "Ms. Taylor"], 
        venue:  [
            "Room 301",
            "Room 302",
            "Room 303",
            "Room 304",
            "Room 305",
            "Room 306",
            "Room 307",
            "Room 308",
            "Room 309",
            "Room 310"
        ],
        description: 'A bachelor’s degree remains the entry standard in many professional careers. Its long-term benefits make it well worth the initial investment as it allows you professional entry into some of the top names in IT. It will also give you the knowledge and skills to create your own enterprise within the sector. Overall, an IT degree is a worthwhile investment in your future.'
    },
    'BCOM01': { 
        title: 'Bachelor of Computer(BCOM)', 
        modules: [ "Financial Accounting",
            "Marketing Management",
            "Business Law",
            "Corporate Finance",
            "Human Resource Management",
            "Operations Management",
            "International Business",
            "Strategic Management",
            "E-commerce",
            "Project Management"], 
        lecturers: ["Mr. Harris",
    "Ms. Clark",
    "Dr. Adams",
    "Ms. Turner",
    "Mr. White",
    "Dr. Young",
    "Ms. Green",
    "Mr. Brown",
    "Dr. King",
    "Ms. Lee"], 
        venue:  [
            "Room 401",
            "Room 402",
            "Room 403",
            "Room 404",
            "Room 405",
            "Room 406",
            "Room 407",
            "Room 408",
            "Room 409",
            "Room 410"
        ],
        description: 'Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.'
    }
};

document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-bar').value.trim().toUpperCase();
    const courseList = document.getElementById('course-list');
    const printButton = document.getElementById('print-button');
    courseList.innerHTML = '';

    let found = false;

    for (const code in courses) {
        if (courses.hasOwnProperty(code) && courses[code].title.toUpperCase().includes(searchTerm)) {
            const course = courses[code];
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.textContent = course.title;

            
            if (!found) {
                displayCourseDetails(code);
                found = true;
            }

            courseList.appendChild(courseItem);
        }
    }
    

    
    const courseDetailsSection = document.getElementById('course-details-section');
if (found) {
    console.log('Course found. Removing hidden class.');
    courseDetailsSection.classList.remove('hidden');
    displayCourseDetails(foundCourseId);
} else {
    console.log('Course not found. Adding hidden class.');
    courseDetailsSection.classList.add('hidden');
}
});

function displayCourseDetails(code) {
    const course = courses[code];
    const courseDetails = document.getElementById('course-details');
    courseDetails.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Modules:</strong> ${course.modules.join(', ')}</p>
        <p><strong>Lecturers:</strong> ${course.lecturers.join(', ')}</p>
        <p><strong>Venue:</strong> ${course.venue}</p>
    `;
}


const courseData = {
    "backgroundHC": {
        title: "Higher Certificate",
        code: "HC001",
        duration: "1 year",
        description: "This is a higher certificate course.",
        modules: [
            { name: "Introduction to Economics", lecturer: "Dr. Smith", venue: "Room 101", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Principles of Marketing", lecturer: "Ms. Johnson", venue: "Room 102", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Advanced Calculus", lecturer: "Dr. Williams", venue: "Room 103", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Introduction to Psychology", lecturer: "Mr. Brown", venue: "Room 104", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Fundamentals of Finance", lecturer: "Dr. Lee", venue: "Room 105", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Human Resource Management", lecturer: "Ms. Davis", venue: "Room 106", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Introduction to Computer Science", lecturer: "Dr. Wilson", venue: "Room 107", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Business Law", lecturer: "Mr. Miller", venue: "Room 108", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Environmental Science", lecturer: "Dr. Moore", venue: "Room 109", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Introduction to Philosophy", lecturer: "Ms. Taylor", venue: "Room 110", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" }
        ]
        
    },
    "backgroundDIT": {
        title: "Diploma",
        code: "DIT002",
        duration: "2 years",
        description: "This is a diploma courseThis empowering diploma features on-trend specialisations aligned with real-world industry requirements. These specialisations will give you access to many exciting career opportunities and allow you to graduate in high demand.",
        modules: [
            { name: "Introduction to Programming", lecturer: "Prof. Brown", venue: "Room 201", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Network Security", lecturer: "Dr. Adams", venue: "Room 301", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Software Engineering", lecturer: "Ms. Green", venue: "Room 302", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Database Systems", lecturer: "Dr. Miller", venue: "Room 303", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Web Development", lecturer: "Ms. Johnson", venue: "Room 304", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Artificial Intelligence", lecturer: "Dr. Lee", venue: "Room 305", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Machine Learning", lecturer: "Ms. Davis", venue: "Room 306", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Cyber Forensics", lecturer: "Dr. Wilson", venue: "Room 307", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Cloud Computing", lecturer: "Ms. Clark", venue: "Room 308", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Data Science", lecturer: "Dr. Roberts", venue: "Room 309", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Internet of Things", lecturer: "Ms. Taylor", venue: "Room 310", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" }
        ]
        
        
        
    },
  
    "backgroundBCOM": {
        title: "Bachelor of Computer",
        code: "BCOM004",
        duration: "4 years",
        description: "Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.",
        modules: [
            { name: "Financial Accounting", lecturer: "Mr. Harris", venue: "Room 401", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Marketing Management", lecturer: "Ms. Clark", venue: "Room 402", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Business Law", lecturer: "Dr. Adams", venue: "Room 403", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Corporate Finance", lecturer: "Ms. Turner", venue: "Room 404", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Human Resource Management", lecturer: "Mr. White", venue: "Room 405", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Operations Management", lecturer: "Dr. Young", venue: "Room 406", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "International Business", lecturer: "Ms. Green", venue: "Room 407", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Strategic Management", lecturer: "Mr. Brown", venue: "Room 408", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "E-commerce", lecturer: "Dr. King", venue: "Room 409", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Project Management", lecturer: "Ms. Lee", venue: "Room 410", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" }
        ]
        
        
        
    },
    "backgroundBIT": {
        title: "Bachelor of Information Technology",
        code: "BIT003",
        duration: "3 years",
        description: "A bachelor’s degree remains the entry standard in many professional careers. Its long-term benefits make it well worth the initial investment as it allows you professional entry into some of the top names in IT. It will also give you the knowledge and skills to create your own enterprise within the sector. Overall, an IT degree is a worthwhile investment in your future.",
        modules: [
            { name: "Network Security", lecturer: "Dr. Adams", venue: "Room 301", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Software Engineering", lecturer: "Ms. Green", venue: "Room 302", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Database Systems", lecturer: "Dr. Miller", venue: "Room 303", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Web Development", lecturer: "Ms. Johnson", venue: "Room 304", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Artificial Intelligence", lecturer: "Dr. Lee", venue: "Room 305", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Machine Learning", lecturer: "Ms. Davis", venue: "Room 306", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Cyber Forensics", lecturer: "Dr. Wilson", venue: "Room 307", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Cloud Computing", lecturer: "Ms. Clark", venue: "Room 308", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Data Science", lecturer: "Dr. Roberts", venue: "Room 309", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" },
            { name: "Internet of Things", lecturer: "Ms. Taylor", venue: "Room 310", studyGuide: "WPR 271 Study Guide [2024] v1.4.pdf", video: "https://www.youtube.com/watch?v=qAoSZ6asCq4" }
        ]
        
        
        
    },
};const completedModules = new Set();

document.querySelectorAll('.course-title').forEach(header => {
    header.addEventListener('click', function() {
        const courseId = this.id;
        const course = courseData[courseId];
        
        if (course) {
            document.getElementById('Course-Details').style.display = 'block';
            document.getElementById('courseTitle').innerText = course.title;
            document.getElementById('courseCode').innerText = `Course Code: ${course.code}`;
            document.getElementById('courseDuration').innerText = `Duration: ${course.duration}`;
            document.getElementById('courseDescription').innerText = course.description;
            
            const tableBody = document.getElementById('courseTableBody');
            tableBody.innerHTML = '';

            course.modules.forEach((module, index) => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.innerText = module.name;
                row.appendChild(nameCell);

                const lecturerCell = document.createElement('td');
                lecturerCell.innerText = module.lecturer;
                row.appendChild(lecturerCell);

                const venueCell = document.createElement('td');
                venueCell.innerText = module.venue;
                row.appendChild(venueCell);

                const studyGuideCell = document.createElement('td');
                const studyGuideLink = document.createElement('a');
                studyGuideLink.href = module.studyGuide;
                studyGuideLink.download = '';
                studyGuideLink.innerText = 'Download Study Guide';
                studyGuideCell.appendChild(studyGuideLink);
                row.appendChild(studyGuideCell);

                const videoCell = document.createElement('td');
                const videoLink = document.createElement('a');
                videoLink.href = module.video;
                videoLink.target = '_blank';
                videoLink.innerText = 'Watch Video';
                videoCell.appendChild(videoLink);
                row.appendChild(videoCell);

                const completeCell = document.createElement('td');
                const completeButton = document.createElement('button');
                completeButton.className = 'complete-btn';
                completeButton.setAttribute('data-index', index);
                completeButton.innerText = 'Mark as Completed';
                completeCell.appendChild(completeButton);
                row.appendChild(completeCell);

                tableBody.appendChild(row);
            });

            
            document.querySelectorAll('.complete-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    const moduleName = course.modules[index].name;

                   
                    if (completedModules.has(moduleName)) {
                        completedModules.delete(moduleName);
                        this.textContent = 'Mark as Completed';
                        this.parentElement.parentElement.classList.remove('completed');
                    } else {
                        completedModules.add(moduleName);
                        this.textContent = 'Completed';
                        this.parentElement.parentElement.classList.add('completed');
                    }

                    updateCompletedList();
                });
            });
        } else {
            document.getElementById('Course-Details').style.display = 'none';
            alert('Course details not found.');
        }
    });
});



function updateCompletedList() {
    const completedList = document.getElementById('completedModulesList');
    completedList.innerHTML = '';

    if (completedModules.size > 0) {
        const orderedList = document.createElement('ol');
        completedModules.forEach(moduleName => {
            const listItem = document.createElement('li');
            listItem.textContent = moduleName;
            orderedList.appendChild(listItem);
        });
        completedList.appendChild(orderedList);
    } else {
        completedList.textContent = 'No modules completed yet.';
    }
}

   
    document.getElementById('printCourseButton').addEventListener('click', () => {
        window.print(); 
    });

    document.querySelectorAll('.enroll-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course-id');
            window.location.href = `admissions.html?courseId=${courseId}`;
        });
    });

    
    

    















