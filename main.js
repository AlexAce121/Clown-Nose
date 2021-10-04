NOSEX = 0;
NOSEY = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/dtVYjmQp/clown-nose.png');
}

function draw(){
image(video , 0 , 0 , 420 , 300) ;
image(clown_nose , NOSEX, NOSEY , 30 , 30);
}

function setup(){
    canvas = createCanvas(420, 300);
    canvas.center();
    video= createCapture(VIDEO) ;
    video.size(420 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function TakeSnap(){
    save("hello.png");
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log('nose x = ' + results[0].pose.nose.x);
        console.log('nose y = ' + results[0].pose.nose.y);
        NOSEX = results[0].pose.nose.x -10;
        NOSEY = results[0].pose.nose.y -10;
    }
}