const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let car, wheel, background;

car ={};
car.image = new Image();
car.image.src = "images/car.png"
car.pos = 0;
car.speed = 2;

wheels ={};
wheels.backWheel = new Image()
wheels.backWheel.src = "images/wheel.png";
wheels.frontWheel = new Image()
wheels.frontWheel.src = "images/wheel.png";

wheels.angle = 0;

addEventListener('keydown',(e)=>{
  switch(e.key) {
    case "ArrowRight":
      car.speed += 0.5
      break;
    case "ArrowLeft":
      car.speed -= -.5;
      break;
  }
})

// create namespace
