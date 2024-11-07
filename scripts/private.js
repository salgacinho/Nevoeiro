const moveButton = document.getElementById('circle');
const moveButtonB = document.getElementById('circleB');
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const sidebarB = document.getElementById('sidebarB');

let isMoved = false;
let isMovedB = false;

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


moveButtonB.addEventListener('click', () => {
  if (!isMovedB) {
      moveButtonB.style.transform = 'translateX(-68%)';
      sidebarB.style.transform = 'translateX(100%)';
      content.style.transform = 'translateX(3%)';
      isMovedB = true;
  } 
  else {
      moveButtonB.style.transform = 'translateX(0)';
      sidebarB.style.transform = 'translateX(0)';
      content.style.transform = 'translateX(0)';
      isMovedB = false;
  }
});