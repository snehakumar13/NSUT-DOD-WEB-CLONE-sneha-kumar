const logo = document.getElementById('logo');
const container = document.getElementById('expandable');

logo.addEventListener('click', () => {
  container.classList.add('expanded');
  container.style.zIndex = '9999';
});

container.addEventListener('mouseleave', () => {
  container.classList.remove('expanded');
  container.style.zIndex = '1';
});
