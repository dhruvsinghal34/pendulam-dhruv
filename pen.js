class Pen{
    constructor (x,y,radius){
        var options={
            'restitution':0.4,
            'friction':2.0,
            'density':2.0

        
    }
        
        this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      World.add(world,this.body);
      
    }
     display () {
         var posi=this.body.position;
         rectMode(CENTER);
        fill ("red");
         circle (posi.x,posi.y,this.radius);
         
     }



}



