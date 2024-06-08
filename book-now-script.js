document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.book-now-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const serviceInput = document.getElementById('service');
    const expertInput = document.getElementById('expert');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
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
        const date = dateInput.value.trim();
        const time = timeInput.value.trim();

        if (name && email && service && expert && date && time) {
            successMessage.textContent = 'Successfully Registered!';
        } else {
            successMessage.textContent = '';
            alert('Please fill out all fields.');
        }
    });
});
