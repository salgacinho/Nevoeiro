const moveButton = document.getElementById('circle');
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');

let isMoved = false;

moveButton.addEventListener('click', () => {
  if (!isMoved) {
      moveButton.style.transform = 'translateX(68%)';
      sidebar.style.transform = 'translateX(-100%)';
      content.style.transform = 'translateX(-6%)';
      isMoved = true;
  } 
  else {
      moveButton.style.transform = 'translateX(0)';
      sidebar.style.transform = 'translateX(0)';
      content.style.transform = 'translateX(0)';
      isMoved = false;
  }
});






/*

const updateSizePrintPage = () => {
    let scale = 1 / (( window.outerWidth - 10 ) / window.innerWidth);
    document.getElementById('zoom').style.transform = 'scale(' + scale + ')';
    document.getElementById('zoom').style.transformOrigin = 'top left';
  };
window.addEventListener('resize', updateSizePrintPage )

*/

function changePage(pageNumber) {
  const textElements = document.querySelectorAll(".block-text"); // Select all elements with class "block-text"
  const dots = document.querySelectorAll(".dot");

  // Clear active state on all dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[pageNumber - 1].classList.add("active");

  // Update text for each block
  textElements.forEach((element, index) => {
      if (index === 0) {  // Update text in the first .block-text element
          switch (pageNumber) {
              case 1:
                  element.textContent = "Text for Page 1";
                  break;
              case 2:
                  element.textContent = "Text for Page 2";
                  break;
              case 3:
                  element.textContent = "Text for Page 3";
                  break;
              default:
                  element.textContent = "Text for Page 1";
          }
      }
  });
}

function goToWebsite(url) {
  window.open(url, '_blank')
}