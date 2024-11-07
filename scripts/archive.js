const moveButton = document.getElementById('circle');
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');

let isMoved = false;

moveButton.addEventListener('click', () => {
  if (!isMoved) {
      moveButton.style.transform = 'translateX(68%)';
      sidebar.style.transform = 'translateX(-100%)';
      content.style.transform = 'translateX(-3%)';
      isMoved = true;
  } 
  else {
      moveButton.style.transform = 'translateX(0)';
      sidebar.style.transform = 'translateX(0)';
      content.style.transform = 'translateX(0)';
      isMoved = false;
  }
});