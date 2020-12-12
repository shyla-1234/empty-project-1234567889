class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("pic/dustbin.png")
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.heigth)
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };
    