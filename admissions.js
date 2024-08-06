
  document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const courseStartDates = {
      'HigherCertificate': new Date('2024-09-01T00:00:00'),
      'DIT': new Date('2024-10-01T00:00:00'),
      'BIT': new Date('2024-11-01T00:00:00'),
      'BCOM': new Date('2024-12-01T00:00:00')
  };

  clearInterval(window.countdowntime);
  document.getElementById('courseCountdown').innerHTML = '';

  function updateCountdown() {
      const now = new Date();
      document.getElementById('courseCountdown').innerHTML = '';

      for (let course in courseStartDates) {
          const startDate = courseStartDates[course];
          const time = startDate - now;
      
          if (time > 0) {
              const days = Math.floor(time / (1000 * 60 * 60 * 24));
              const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((time % (1000 * 60)) / 1000);

              document.getElementById('courseCountdown').innerHTML += 
                  
                  alert(`${course}: ${days}d ${hours}h ${minutes}m ${seconds}s`);
          } else {
              document.getElementById('courseCountdown').innerHTML += `${course} has already started!<br>`;
          }
      }
  }   
  updateCountdown();
  window.countdowntime = setInterval(updateCountdown, 1000);
});
