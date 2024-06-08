document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.loyalty-container');
    const nameInput = document.getElementById('loyalty-name');
    const emailInput = document.getElementById('loyalty-email');
    const submitButton = form.querySelector('button[type="submit"]');

    // Create a span element to display the success message
    const successMessage = document.createElement('span');
    successMessage.style.color = 'green';
    successMessage.style.marginLeft = '10px';
    successMessage.style.marginTop = '20px';
    submitButton.parentNode.appendChild(successMessage);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name && email) {
            successMessage.textContent = 'Successfully Registered!';
        } else {
            successMessage.textContent = '';
            alert('Please fill out both fields.');
        }
    });
});
