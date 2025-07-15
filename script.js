document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  const infoBox = document.getElementById('info-box');
  const closeBtn = document.getElementById('close-info');

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const info = cell.getAttribute('data-info');
      infoBox.innerHTML = `
        <h3>${cell.textContent}</h3>
        <p>${info}</p>
      `;
      infoBox.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    infoBox.style.display = 'none';
  });
});


