  document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const courseStartDates = {
      'HigherCertificate': new Date('2024-09-01T00:00:00'),
      'DIT': new Date('2024-10-01T00:00:00'),
      'BIT': new Date('2024-11-01T00:00:00'),
      'BCOM': new Date('2024-12-01T00:00:00')
  };

  // Clear any existing countdowns
  clearInterval(window.countdownInterval);
  document.getElementById('timerDisplay').innerHTML = '';

  function updateCountdown() {
      const now = new Date();
      document.getElementById('timerDisplay').innerHTML = '';

      for (let course in courseStartDates) {
          const startDate = courseStartDates[course];
          const timeLeft = startDate - now;
      
          if (timeLeft > 0) {
              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
              const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

              document.getElementById('timerDisplay').innerHTML += 
                  `Time left for ${course} to start: ${days}d ${hours}h ${minutes}m ${seconds}s<br>`;
          } else {
              document.getElementById('timerDisplay').innerHTML += `${course} has already started!<br>`;
          }
      }
  }   
  updateCountdown();
  window.countdownInterval = setInterval(updateCountdown, 1000);
});