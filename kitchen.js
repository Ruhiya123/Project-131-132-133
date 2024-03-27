function preload() {
    img = loadImage('kitchen.jpg');
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
        text("Table Counter", 130, 200);
        noFill();
        stroke("#FF0000");
        rect(130, 200, 510, 120);

        fill("#FF0000");
        text("Ovens", 4, 120);
        noFill();
        stroke("#FF0000");
        rect(4, 120, 100, 190);

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