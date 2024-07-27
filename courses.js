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
        description: 'Bachelor of Commerce.'
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





