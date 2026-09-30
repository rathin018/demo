// Live Date and Time Display
function updateDateTime() {
    const dateTimeElement = document.getElementById('live-datetime');
    if (dateTimeElement) {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        dateTimeElement.innerText = now.toLocaleDateString('en-US', options);
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Contact Form Confirmation Popup
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you! Your message has been sent successfully. We will get back to you shortly.');
            contactForm.reset();
        });
    }
});