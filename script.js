const container = document.querySelector("#container");
const palette = document.getElementById("colorChooser");


function createGrid(number) {
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  for(i = 0; i < (number*number); i++){
    createCells();
  }

  onMouseOver();
}

function createCells() {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  container.appendChild(cell);
}

function resetGrid(){
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.removeAttribute("style"));
}

function randomRGB() {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for(i = 0; i < 6; i++){
    color = color + symbols[Math.floor(Math.random() * 16)];
  }

  return color;
}

function colorChoice(){
  if(palette.value == "black"){
    this.style.backgroundColor = "#000000";
  } else if(palette.value == "white"){
    this.style.backgroundColor = "#FFF";
  } else if(palette.value == "random"){
    this.style.backgroundColor = randomRGB();
  } else if(palette.value == "purple"){
    this.style.backgroundColor = "#6a0dad";
  }

}

function onMouseOver() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.addEventListener("mouseover", colorChoice));
}

function resize(size) {
  invalid = true;
  while(invalid) {
    size = prompt(`Enter a number between 1 and 200 to resize the grid: (i.e enter 10 for a 10x10 grid)`);
    if(size == null){
      return;
    }
    if(size >= 1 && size <= 200) {
      invalid = false;
    }
  }

  const myNode = document.getElementById("container");
  while(myNode.firstChild){
      myNode.removeChild(myNode.firstChild);
  }
  createCells();
  createGrid(size);
  onMouseOver();
}

createGrid(5);
