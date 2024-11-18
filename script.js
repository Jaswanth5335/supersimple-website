// Select the button and response elements
const forgiveButton = document.getElementById('forgiveButton');
const response = document.getElementById('response');

// Add a click event listener to the button
forgiveButton.addEventListener('click', function () {
    // Display the response message
    response.style.display = 'block';

    // Disable the button and change its text
    forgiveButton.disabled = true;
    forgiveButton.textContent = 'Forgiven! ❤️';
    forgiveButton.style.backgroundColor = '#a5d6a7';
    forgiveButton.style.cursor = 'not-allowed';
});
