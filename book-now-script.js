document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.book-now-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const serviceInput = document.getElementById('service');
    const expertInput = document.getElementById('expert');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const submitButton = form.querySelector('button[type="submit"]');

    // Create a span element to display the success message
    const successMessage = document.createElement('span');
    successMessage.style.color = 'green';
    successMessage.style.marginLeft = '10px';
    submitButton.parentNode.appendChild(successMessage);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const service = serviceInput.value.trim();
        const expert = expertInput.value.trim();
        const startDate = startDateInput.value.trim();
        const endDate = endDateInput.value.trim();

        if (name && email && service && expert && startDate && endDate) {
            if (new Date(startDate) <= new Date(endDate)) {
                // Store the form data in localStorage
                localStorage.setItem('bookingData', JSON.stringify({
                    name,
                    email,
                    service,
                    expert,
                    startDate,
                    endDate
                }));
                
                successMessage.textContent = 'Successfully Registered!';
                // Redirect to the booking confirmation page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'booking-confirmation.html';
                }, 1000);
            } else {
                successMessage.textContent = '';
                alert('Start date cannot be after end date.');
            }
        } else {
            successMessage.textContent = '';
            alert('Please fill out all fields.');
        }
    });
});
