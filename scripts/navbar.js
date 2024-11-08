document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      navLinks.forEach(nav => nav.classList.remove('active'));
      
      this.classList.add('active');
      
      if (this.getAttribute('href') === '#home') {
        this.classList.add('hidden');
      }

      const target = this.getAttribute('href');
      window.location.hash = target;
    });
  });
});
