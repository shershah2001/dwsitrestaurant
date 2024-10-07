document.addEventListener("DOMContentLoaded", function() {
    // Show the pop-up and overlay when the page loads
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const content = document.getElementById('content');
    const closeBtn = document.getElementById('closeBtn');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    // Hide the pop-up and overlay when the close button is clicked
    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        content.style.display = 'block'; // Show the main content after pop-up is closed
    });
});
