//change sezzle logo for dtc new product page experint
const sezzleLogo = document.querySelector('.sezzle-logo');
const alternateLogoSrc = 'https://cdn.shopify.com/s/files/1/0350/5061/9020/files/Color-White-Logo_2.png?v=1686586934';
const gridContainer = document.querySelector(".dtc-prints");
const toggleButton = document.getElementById("togglePrints");
const gridContainerMaxHeight = 145;


if (sezzleLogo) {
    sezzleLogo.src = alternateLogoSrc;
}

function togglePrints() {
  if (gridContainer.style.maxHeight) {
    // Rows are already expanded, so we need to collapse them
    gridContainer.style.maxHeight = null;
    toggleButton.textContent = "Show More";
  } else {
    // Rows are collapsed, so we need to expand them
    gridContainer.style.maxHeight = gridContainer.scrollHeight + "px";
    toggleButton.textContent = "Show Less";
  }
}

function updatePrintToggleButton(){
  if (gridContainer?.scrollHeight > gridContainerMaxHeight) {
    // If the content overflows, show the button
    if (toggleButton){
      toggleButton.style.display = "block";
    }
  }else{
    if (toggleButton){
      toggleButton.style.display = "none";
    }
  }
}
// Check if the button is necessary on page load
window.addEventListener("DOMContentLoaded", function() {
  updatePrintToggleButton();
  if(toggleButton)
  {
     toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      togglePrints();
    }); 
  }
});

// Check if the content overflows when the window is resized
window.addEventListener("resize", function() {
  updatePrintToggleButton();
});