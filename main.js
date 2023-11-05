peter_pan_song = "";
HArry_potter_song = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    peter_pan_song=loadSound("music2.mp3");
    HArry_potter_song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);

    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY);
}


function draw(){
    image(video,0,0,600,500);
}
