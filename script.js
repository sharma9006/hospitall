// // Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  alert("Thank you for contacting us! We'll get back to you soon.");
  this.reset(); // Clear the form
});

// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
