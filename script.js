// JavaScript for simple interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Scroll bar
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    //Simple form submission event
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      //Form
      alert('Form submitted!');
    });
  });
  