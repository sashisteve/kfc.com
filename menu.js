document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 64d8f4ece9a2cafb9055dfb50c53f9a7c4a24377
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll(".nav-links a");
  menuItems.forEach(item => {
    if(item.getAttribute("href") === currentLocation){
      item.classList.add("active");
    }
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 64d8f4ece9a2cafb9055dfb50c53f9a7c4a24377
