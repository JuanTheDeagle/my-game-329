class Plane{ 
    constructor(x,y,width,height,angle){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.angle = angle
        this.planeimg = loadImage("plane1.png");
        this.planeimgl = loadImage("plane3.png")
    }
    display(){
        if (keyDown(LEFT_ARROW)) {
            this.angle -= 1
        }
        if (keyDown(RIGHT_ARROW)) {
            this.angle += 1
        }
        if (plane.angle>90 || plane.angle<-90){
            image(this.planeimgl, 0, 0, this.width, this.height)
        }
        if (plane.angle<90 || plane.angle>-90){
            image(this.planeimg, 0, 0, this.width, this.height)
        }
        push()
        translate(this.x,this.y)
        rotate(this.angle)
        imageMode(CENTER)
        pop()
    }
}