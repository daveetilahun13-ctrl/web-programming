// Fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeElements.forEach(el => observer.observe(el));

// Appointment form submission
const form = document.getElementById("appointment-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "✅ Appointment booked successfully! We will contact you soon.";
    form.reset();
});
