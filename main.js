var img = "";
var status = "";

function preload(){

    img = loadImage("TV.avif");

}

function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", model_loaded);

    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw(){

    image(img, 0, 0, 650, 500);
    fill("red");
    text("Tv", 215, 90);
    noFill();
    stroke("red");
    rect(200, 70, 285, 190);

}

function model_loaded() {
    console.log("Cocossd model is loaded");
    status = true;
    objectDetector.detect(img, got_results);

}

function got_results(error,results){
    
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
    }
}