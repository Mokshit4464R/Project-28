class slingshot{
    constructor(bodyA, point){
        var options ={
            bodyA:bodyA,
            pointB:point,
			stiffness : 0.04,
            length : 1
			}
		this.bodyA=bodyA;
        this.pointB=point;
		this.sling=Constraint.create(options);
		World.add(world, this.sling);
        }

fly(){
    this.sling.bodyA=null
}
attach(body){
this.sling.bodyA = body
}

        display()
	{
        if(this.sling.bodyA){
        line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
    
    }
