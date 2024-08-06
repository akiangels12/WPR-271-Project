/*// Get the form element
const form = document.getElementById('myApplicationForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server using the fetch API
  fetch('/submit-application', {
    method: 'POST',
    body: formData,
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error submitting application');
    }
  })
  .then((data) => {
    // Display a success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Application submitted successfully!';
    successMessage.style.color = 'green';
    document.body.appendChild(successMessage);

    // Clear the form fields
    form.reset();
  })
  .catch((error) => {
    // Display an error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error submitting application: ' + error.message;
    errorMessage.style.color = 'red';
    document.body.appendChild(errorMessage);
  });
});
*/

function applicationForm(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const nationality = document.getElementById('nationality').value;
    const country = document.getElementById('country').value;
    const idCopy = document.getElementById('idCopy').value;
    const transcript = document.getElementById('transcript').value;
}