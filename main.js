song = "";
song1="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
   canvas = createCanvas(600, 500);
   canvas.position(700, 300);

   video = createCapture(VIDEO);
   video.hide();

}

function draw()
{
    image(video,0,0,600,500);
  
}





