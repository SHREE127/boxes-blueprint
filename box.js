class box{
    constructor(x,y,width,height){

        var box_option={

            'restitution' : 1,
            'friction' : 0.3
        }

        this.object = Bodies.rectangle(x, y, width ,height );

        this.width = width;
        this.height = height;
        World.add(world,this.object);
    }

    display(){

        var pos = this.object.position
        var angle = this.object.angle
        push();
        translate (pos.x, pos.y)
        //rotate( angle);

        rect(CENTER);
        rect(0 , 0 , this.width , this.height)
        pop()
    }
}