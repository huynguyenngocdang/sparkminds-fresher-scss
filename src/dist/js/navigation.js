document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li > a:not(:only-child)');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const siblingDropdown = this.nextElementSibling;
        if (siblingDropdown && siblingDropdown.classList.contains('nav-dropdown')) {
          siblingDropdown.style.display = siblingDropdown.style.display === 'block' ? 'none' : 'block';
          document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
            if (dropdown !== siblingDropdown) {
              dropdown.style.display = 'none';
            }
          });
        }
        e.stopPropagation();
      });
    });
  
    document.documentElement.addEventListener('click', function() {
      document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
        dropdown.style.display = 'none';
      });
    });
  
    const navToggle = document.getElementById('nav-toggle');
    navToggle.addEventListener('click', function() {
      const navUl = document.querySelector('nav ul');
      navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
      this.classList.toggle('active');
    });
  });
  