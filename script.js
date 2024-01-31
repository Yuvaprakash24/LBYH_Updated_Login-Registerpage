document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
        var parentDropdown = this.closest('.dropdown-submenu');
        if (parentDropdown) {
            e.preventDefault();
            parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
        }
    });
  });