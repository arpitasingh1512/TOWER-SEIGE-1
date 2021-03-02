class Slingshot {
    constructor(bodyA,pointB){
        var options={
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.04,
            'length': 10
        }
        polygon = Bodies.circle(50,200,20)
        World.add(world,polygon);

        slingshot= new Slingshot(this.polygon,{x:100,y:200})
    }
     fly(){
         this.sling.bodyA= null
     }
     attach(body){
         this.sling.bodyA = body 
     }
}
