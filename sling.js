class Chain{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.01,
            length:100

        }
        this.chain = Constraint.create(options);
        World.add(world, this. chain);
        this.pointB=point2;
    }
    
    Fly(){
     this.chain.bodyA=null;

    }

    display(){

       
        strokeWeight(4);
         fill ("red");
        if(this.chain.bodyA!==null){
            var pointA = this. chain.bodyA.position;
         line(pointA.x, pointA.y,this. pointB.x, this.pointB.y);
         
         }
       
    }
    
}




