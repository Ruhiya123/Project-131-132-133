function preload() {
    img = loadImage('bedroom.jpg');
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
        text("Bed", 130, 110);
        noFill();
        stroke("#FF0000");
        rect(130, 110, 410, 205);

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