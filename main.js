nosex=0;
nosey=0;
Xwrist_right=0;
distence=0;
Xwrist_left=0;

function setup(){
    canvas=createCanvas(800,500);
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas.position(555,150);
  poseNet=ml5.poseNet(video,ml);
  poseNet.on('pose',gotpose);

}
function ml(){
    console.log("hello");
}
function draw(){
    background("lightgreen");
    fill("black");
    textSize(distence);
    document.getElementById("size_square").innerHTML="size of the square is "+distence;
    
   text("MY name is jack",100,300);
}
function gotpose(resulte){
    if(resulte.length > 0){
        console.log(resulte);
        nosex=resulte[0].pose.nose.x;
        nosey=resulte[0].pose.nose.y;
        Xwrist_left=resulte[0].pose.leftWrist.x;
        Xwrist_right=resulte[0].pose.rightWrist.x;
        distence=floor(Xwrist_left-Xwrist_right);


    
    }

}
