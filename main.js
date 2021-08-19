noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;

function setup()
{
    canvas = createCanvas(550,550)
    canvas.position(560,150)

    video=createCapture(VIDEO);
    video.size(550,500)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose", gotposes)
}

function draw()
{
    background ("#FFC0CB")
    text("Advaitaa", noseX, noseY);  // Funtion that is used to create a text//
    textSize(difference)
    fill ("#00FF00");
    stroke ("#00FF00")

    document.getElementById("square_side").innerHTML = "width and height of a square will be " + difference +"px";
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotposes(results)
{
if(results.length > 0)
{
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX + "noseY" + noseY)

    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX - rightwristX);    //floor is a function used to remove the decimal points//
    console.log("leftwristX"+leftwristX+"rightwristX" + rightwristX + "difference" + difference)
    
}
}
