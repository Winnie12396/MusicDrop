let x = 0
let buffer
let w = 512
let h = 512

let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

let value = 0;


function preload(){
  buffer = createGraphics(w, h)  
}

function setup() {
  canvas = createCanvas(w, h)//If you noCanvas() it doesn't work.
  canvas.hide()
  bx = width / 2.0;
  by = height / 2.0;
  frameRate(20)//slow it down a bit
  
  // Set up the buffer...
  //buffer.background("yellow")
  buffer.textSize(20)
  buffer.noStroke()
  //print(buffer)
  //buffer.background("yellow")
  //buffer.fill("red")
  //buffer.circle(50, 50, 200)
  //buffer.fill("cyan")
  //buffer.text("Hello!", 50, 50)
  
}


function draw(){
  
  buffer.background("DarkSalmon")
  
  buffer.fill(value);
  buffer.rect(200, 200, 200, 200);
  
  //buffer.fill(255,0, 255, 100)
  buffer.fill(color(250, 0, 250, 50))  
  buffer.rect(mouseX, mouseY-100, 100, 100)
  buffer.fill(255, 255, 255)
  //buffer.text("Hello p5!", x, 50)
  //buffer.text("x:" + x, 100, 100)
  buffer.text("mouseX:" + mouseX, 100, 150)
  buffer.text("bX:" + bx, 150, 50)
  //buffer.text("See how mouseX is global?", 100, 200, 400, 300)
  //img = buffer.get()
  //x += 1
  if (x > width)x = 0

  let data =  buffer.drawingContext.canvas.toDataURL()
  let myPlane = document.getElementById('myPlane')
  myPlane.setAttribute("material", "src", `url(${data});`);
  myPlane.setAttribute("material", "side", "double");
  
  let r = map(x, 0, width,0, 360)
  

  //myPlane.setAttribute('position', { x: 0, y: 1, z: 2 });

}

function mouseDragged(){
  fill("red");
  ellipse(mouseX, mouseY, x);
  
}

function mousePressed(){
  print("clicked")
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function createBubbles(){}

// UTILITY

const getMethods = (obj) => {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}