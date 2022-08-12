let grid = 16;
const canvas = document.getElementById('canvas');
createCanvas();

function createCanvas(){
canvas.innerHTML = "";
  for (let i = 1; i <= grid*grid ; i++){
     const div = document.createElement('div');
     div.classList.add('pixel');
     canvas.appendChild(div);
     div.addEventListener('mouseover', () =>{
     div.style.setProperty('background-color', 'rgb(178, 178, 178)');
    })
    } canvas.style.setProperty('grid-template-columns', `repeat(${grid}, 1fr)`);
}

const slider = document.getElementById("slider");
slider.oninput = function() {
    grid = this.value;
    rangeValue.innerText = this.value;
    createCanvas();
}

document.getElementById('clear').onclick = function(){createCanvas()};