// set default grid size
const amtOfGrid = 16;
const clearBtn = document.getElementById('clearBtn');
const selectBtn = document.getElementById('selectBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraseBtn = document.querySelector('#eraseBtn');
let color = 'black';
let input = document.querySelector('input');
const setSizeBtn = document.querySelector('#setSizeBtn');
const container_div = document.querySelector('#container');

 // decl error message
 const errorMessage = document.querySelector('#error-message');
 // set default to hidden
 errorMessage.classList.add('hidden');

// create func for rainbow
function rainbow(){
  if(color === 'rainbow'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }else if(color === 'white'){
      this.style.backgroundColor = 'white';
    }else{
    this.style.backgroundColor = 'black';
}
}

// create func for colorChoice
function pickColor(colorChoice){
   color = colorChoice;
   }

   function erase(){
    color = "white";
   }

// // Create grid 
function makeGrid(amtOfGrids) {
  // Clear the existing grid before creating a new one
  container_div.innerHTML = "";

  for (let i = 0; i < amtOfGrids; i++) {
      let row = document.createElement('div');
      row.classList.add('grid-row');

      for (let j = 0; j < amtOfGrids; j++) {
          const widthAndHeight = 500 / amtOfGrids;
          let gridBox = document.createElement('div');
          gridBox.classList.add('grid-box');
          gridBox.style.width = `${widthAndHeight}px`;
          gridBox.style.height = `${widthAndHeight}px`;

          // Add event listener for color change
          gridBox.addEventListener('mouseover', rainbow);


          // Append gridBox to row
          row.appendChild(gridBox);
      }
      // Append row to container
      container_div.appendChild(row);
  }
}

// add event listener to clear/reset the page
clearBtn.addEventListener('click', () => {
  container_div.innerHTML = ""; // removes grid boxes
  makeGrid(amtOfGrid); // recreates new grid
})


// Function to change grid size
function changeGridSize(input) {
  if (input >= 2 && input <= 100) {
      document.querySelector('#error-message').style.display = 'none'; // Hide error msg
      makeGrid(input); // Recreate grid with new size
  } else {
      document.querySelector('#error-message').style.display = 'flex'; // Show msg
  }
}


// Event listener for Set Size button
setSizeBtn.addEventListener('click', () => {
  changeGridSize(input.value);
});

// Initialize the default grid
makeGrid(amtOfGrid);



function changeGridSize(input){
  // make the input a #
  const gridSize = Number(input.trim());
  // add conditionals
  if(gridSize >= 1 && gridSize <=100){
    errorMessage.style.display = 'none'; // hide error msg
    makeGrid(gridSize); // make grid whatever size user inputs
  }else {
    errorMessage.style.display = 'flex'; // show error msg
  }
}
changeGridSize();
