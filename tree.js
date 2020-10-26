class tree{

  constructor(x,y,width,height){

      var options ={

          isStatic:false,
          restitution:0,
          friction:1,
          density: 1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x=x;
      this.y=y;
      this.width =width;
      this.height = height;
      this.image = loadImage("images/tree.png");
  }
  display(){
     
      push();
      translate(this.body.position.x, this.body.position.y);
     
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }