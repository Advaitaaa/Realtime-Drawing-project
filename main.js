function setup()
{
    canvas = createCanvas(550,550)
    canvas = position (560,150)

    video=createCapture(VIDEO);
    video.size(550,500)

    poseNet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose", gotposes)
}

function draw()
{
    background ("#FFC0CB")
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
}

}