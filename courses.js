const courses = {
    'HC01': { 
        title: 'HC', 
        modules: ['Math', 'Science'], 
        lecturers: ['John Doe'], 
        venue: 'Room 101',
        description: 'A foundational course.'
    },
    'D01': { 
        title: 'DIT', 
        modules: ['Economics', 'Accounting'], 
        lecturers: ['Jane Smith'], 
        venue: 'Room 102',
        description: 'An intermediate course.'
    },
    'BIT01': { 
        title: 'BIT', 
        modules: ['Programming', 'Networking'], 
        lecturers: ['Mike Johnson'], 
        venue: 'Room 103',
        description: 'Bachelor of Information Technology.'
    },
    'BCOM01': { 
        title: 'BCOM', 
        modules: ['Finance', 'Marketing'], 
        lecturers: ['Anna Lee'], 
        venue: 'Room 104',
        description: 'Bachelor of Computer.'
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

            // Display course details for the first match
            if (!found) {
                displayCourseDetails(code);
                found = true;
            }

            courseList.appendChild(courseItem);
        }
    }

    // Show or hide the course details section and print button based on search results
    const courseDetailsSection = document.getElementById('course-details-section');
    if (found) {
        courseDetailsSection.classList.remove('hidden');
        printButton.classList.remove('hidden');
    } else {
        courseDetailsSection.classList.add('hidden');
        printButton.classList.add('hidden');
    }
});

function displayCourseDetails(code) {
    const course = courses[code];
    const courseDetails = document.getElementById('course-details');
    courseDetails.innerHTML = `
        <h3>Course Title: ${course.title}</h3>
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
            { name: "Module 1", lecturer: "Dr. Smith", venue: "Room 101", studyGuide: "link_to_study_guide_1", video: "https://youtube.com/random_video_1" },
            { name: "Module 2", lecturer: "Ms. Johnson", venue: "Room 102", studyGuide: "link_to_study_guide_2", video: "https://youtube.com/random_video_2"}
        ]
    },
    "backgroundDIT": {
        title: "Diploma",
        code: "DIT002",
        duration: "2 years",
        description: "This is a diploma course.",
        modules: [
            { name: "Module A", lecturer: "Prof. Brown", venue: "Room 201", studyGuide: "link_to_study_guide_A", video: "https://youtube.com/random_video_A" }
        ]
    },
  
    "backgroundBCOM": {
        title: "Bachelor of Computer",
        code: "BCOM004",
        duration: "4 years",
        description: "Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.",
        modules: [
            { name: "Financial Accounting", lecturer: "Mr. Harris", venue: "Room 401", studyGuide: "https://example.com/study-guide-bcom1", video: "https://youtube.com/random_video_M" },
            { name: "Marketing Management", lecturer: "Ms. Clark", venue: "Room 402", studyGuide: "https://example.com/study-guide-bcom2", video: "https://youtube.com/random_video_N" }
        ]
    },
    "backgroundBIT": {
        title: "Bachelor of Information Technology",
        code: "BIT003",
        duration: "3 years",
        description: "A bachelor’s degree remains the entry standard in many professional careers. Its long-term benefits make it well worth the initial investment as it allows you professional entry into some of the top names in IT. It will also give you the knowledge and skills to create your own enterprise within the sector. Overall, an IT degree is a worthwhile investment in your future.",
        modules: [
            { name: "Network Security", lecturer: "Dr. Adams", venue: "Room 301", studyGuide: "https://example.com/study-guide-bit1", video: "https://youtube.com/random_video_X" },
            { name: "Software Engineering", lecturer: "Ms. Green", venue: "Room 302", studyGuide: "https://example.com/study-guide-bit2", video: "https://youtube.com/random_video_Y" }
        ]
    },
};

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
            course.modules.forEach(module => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${module.name}</td>
                    <td>${module.lecturer}</td>
                    <td>${module.venue}</td>
                    <td><a href="${module.studyGuide}" download>Download Study Guide</a></td>
                    <td><a href="${module.video}" target="_blank">Watch Video</a></td>
                `;
                tableBody.appendChild(row);
            });
        }
    });
});


const completedModules = new Set();

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
                row.innerHTML = `
                    <td>${module.name}</td>
                    <td>${module.lecturer}</td>
                    <td>${module.venue}</td>
                    <td><a href="${module.studyGuide}" download>Download Study Guide</a></td>
                    <td><a href="${module.video}" target="_blank">Watch Video</a></td>
                    <td><button class="complete-btn" data-index="${index}">Mark as Completed</button></td>
                `;
                tableBody.appendChild(row);
            });

            // Add click event listeners for the "Mark as Completed" buttons
            document.querySelectorAll('.complete-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    const moduleName = course.modules[index].name;

                    // Toggle completion state
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









