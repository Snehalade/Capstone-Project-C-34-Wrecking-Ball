class Ball{
    constructor(x,y,width,height)
    {
    
    var Options = {
                density : 1
    }
    
    
    this.body = Bodies.rectangle(x,y,width,height,Options);
    
    World.add(world,this.body);
    
    this.width = width;
    this.height = height;
    
    
    
    
    
    
    }
    
    display(){
        var angle = this.body.angle;
    
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("white")
        ellipse(0,0,this.width,this.height);
        pop()
    }
    
    
    
    
    }