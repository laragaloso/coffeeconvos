// JavaScript for simple interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Add a simple form submission event
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Replace this with your actual form submission logic
      alert('Form submitted!');
    });
  });
  