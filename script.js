let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";

  setTimeout(showSlides, 4000); // Change image every 4s
<<<<<<< HEAD
}
=======
}
>>>>>>> 64d8f4ece9a2cafb9055dfb50c53f9a7c4a24377

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = img.src;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
<<<<<<< HEAD
});
=======
});
>>>>>>> 64d8f4ece9a2cafb9055dfb50c53f9a7c4a24377

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    document.querySelectorAll('.player-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 64d8f4ece9a2cafb9055dfb50c53f9a7c4a24377
