class Paper {
    constructor(x,y,radius){
    var options ={
            'restitution':3,
            'friction':0.5,
            'density':1.2,
            'isStatic':true
    }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        fill("pink");
        circle(pos.x, pos.y, this.radius);
      }
      move(){
        var pos =this.body.position;
        circle(pos.x, pos.y, this.radius);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.applyForce(this.body,this.body.position,{x:16,y:-16});
        console.log(this.body.position);
        if (pos.x > 500 ) {
            Matter.Body.applyForce(this.body,this.body.position,{x:3,y:35}) ;
            if (pos.x > 690.9959521677804) {
                Matter.Body.applyForce(this.body,this.body.position,{x:1,y:55}) ;
                if (pos.x > 730.9959521677804) {
                    Matter.Body.setStatic(this.body,true);
                 }
            }
            
        }

        
      }
}