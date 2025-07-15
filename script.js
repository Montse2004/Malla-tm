// script.js
function toggle(id) {
  const el = document.getElementById(id);
  if (el.style.display === 'none' || el.style.display === '') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

function togglePrereq(event) {
  const p = event.target.querySelector('.prereq');
  if (p) {
    p.style.display = p.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
  }
}

