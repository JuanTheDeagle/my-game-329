var time = 0;
var plane, cloud, cloudimg
var missile, mainmissile, missileimg
var angle = 0.0;
var planeimg, planeimgd, planeimgr, planeimgl, planeimgld, planeimglu, planeimgrd, planeimgru

function  preload() {
    missileimg = loadImage("ded.png")
    cloudimg = loadImage("cloud.png")
}
function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    angle = 0
    plane = new Plane(windowWidth/2, windowHeight/2, 1000, 1000, angle)
    mainmissile = createSprite(plane.x, plane.y-500, 10,10 )
    mainmissile.addImage(missileimg)
    missile = createSprite(plane.x, plane.y-500, 10,10 )
    plane.debug = true
}

function draw() {
    background("lightblue")
    if (frameCount%30 === 0){
        time +=1
    }
    textSize(60)   
    fill("black")
    plane.display()
    text(time, plane.x -20, plane.y - 400 )
    camera.position.x = plane.x
    camera.position.y = plane.y

    mainmissile.attractionPoint(1.75, plane.x, plane.y)
    missile.attractionPoint(1.75, plane.x, plane.y)
    clouds()
    drawSprites()
}
function clouds(){
    if (frameCount%120 == 0){
        cloud = createSprite(plane.x + 1500, random(plane.y+500, plane.y-500), 10, 10)
        cloud.velocityX = -4
        cloud.addImage(cloudimg)
        cloud.depth = plane.depth
        plane.depth = plane.depth + 1
    }
}