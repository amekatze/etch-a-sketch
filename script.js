let grid = 16;
let color = 'standard';
let pixelNow;
let draw = false;
const canvas = document.getElementById('canvas');
createCanvas();

function createCanvas(){
canvas.innerHTML = "";
  for (let i = 1; i <= grid*grid ; i++){
     const div = document.createElement('div');
     div.classList.add('pixel');
     div.style.setProperty('background-color', 'rgb(255,255,255)');
     canvas.appendChild(div);
    }
eventRefresh()
canvas.style.setProperty('grid-template-columns', `repeat(${grid}, 1fr)`);
console.log(draw);
}

canvas.addEventListener('mousedown', () => {
    draw = (draw == true ? false : true);
    console.log(draw);});

function eventRefresh(){
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () =>{
    if (draw == true){
    pixelNow = pixel;
    pixel.style.setProperty('background-color', colorPick());}
})})}

    
function colorPick(){
    let rgb;
    if (color == 'standard'){
    let pixelColor = pixelNow.style.getPropertyValue('background-color');
    rgb = pixelColor == 'rgb(255, 255, 255)' ? 
            'rgb(192, 192, 192)' : 
            pixelColor == 'rgb(192, 192, 192)' ? 'rgb(169, 169, 169)' : 
            pixelColor == 'rgb(169, 169, 169)' ? 'rgb(128, 128, 128)' : 
            pixelColor == 'rgb(128, 128, 128)' ? 'rgb(105, 105, 105)' : 
            pixelColor == 'rgb(105, 105, 105)' || pixelColor == 'rgb(76, 76, 76)' ? 'rgb(76, 76, 76)' : 'rgb(192, 192, 192)';
    } else if (color == 'random'){rgb = `rgb(${(Array.from({length: 3}, () => Math.floor(Math.random() * 255)))})`
    } else if (color == 'black'){
    rgb = 'rgb(76, 76, 76)';
    } else { rgb = 'rgb(255, 255, 255)'}
    return rgb;
    }


const canvasSize = document.getElementById("slider");
canvasSize.oninput = function() {
    grid = this.value;
    rangeValue.innerText = this.value;
    createCanvas();
}

document.getElementById('clear').onclick = function(){createCanvas()};
document.getElementById('random').onclick = function(){
    color = 'random';};
document.getElementById('grayscale').onclick = function(){
    color = 'standard';};
document.getElementById('black').onclick = function(){
        color = 'black';};
document.getElementById('erase').onclick = function(){
            color = 'white';};

