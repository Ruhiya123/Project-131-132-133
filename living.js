function preload() {
    img = loadImage('living.jpg');
}

function setup() {
    canvas = createCanvas(640, 320);
    canvas.center();
    img.resize(640, 320); 
    image(img, 0, 0);
}
  
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object(s) Detected";
  }

img = "";
objects = [];

function draw() {
    image(img, 0, 0, 640, 320);
        fill("#FF0000");
        text("Sofa", 32, 165);
        noFill();
        stroke("#FF0000");
        rect(32, 165, 570, 125);

        fill("#FF0000");
        text("Window", 10, 10);
        noFill();
        stroke("#FF0000");
        rect(10, 10, 225, 165);

    }


function modelLoaded() {
    console.log("Model Loaded!")
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
 if (error) {
    console.log(error);
 }
 console.log(results);
 objects = results;
}