class Clock{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("alarm clock.png")
        this.body = createSprite(x,y,width,height)
        this.body.scale = 0.01;
        
        
    }

    display(){
        this.body.addImage(this.image)
        
        if(mousePressedOver(this.body)){
            this.body.x = 625;
            this.body.y = 300;
            this.body.scale = 0.5
            this.body.lifetime = 50;
            clock=clock-1;

        }
   
               
    }

    
}




 