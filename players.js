document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const playerGrid = document.querySelector('.player-grid');
  const playerCards = document.querySelectorAll('.player-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      let visibleCards = 0;

      playerCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          visibleCards++;
        } else {
          card.style.display = 'none';
        }
      });

      // Apply 4-column layout if filtering is applied
      if (filter !== 'all' && visibleCards > 0) {
        playerGrid.classList.add('filtered');
      } else {
        playerGrid.classList.remove('filtered');
      }
    });
  });
});
