class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
         
          density:1.2
      }
      this.r=r
      this.x=x
      this.y=y
      this.body = Bodies.circle(x,y,this.r/2,options);
      
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("brown");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };