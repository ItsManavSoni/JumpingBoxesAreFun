var redBox, blueBox, greenBox, yellowBox 
var movingBox
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingBox= createSprite(random(10,750), 300, 20, 20)
    movingBox.shapeColor="white";
    movingBox.velocityX=3;
    movingBox.velocityY=3;

    redBox=createSprite(100,590,180,20);
    redBox.shapeColor="red";

    greenBox=createSprite(300,590,180,20);
    greenBox.shapeColor="green";

    blueBox=createSprite(500,590,180,20);
    blueBox.shapeColor="blue";

    yellowBox=createSprite(700,590,180,20);
    yellowBox.shapeColor="yellow";
    //create box sprite and give velocity

}

function draw() {
    background(rgb(10,10,10));
   

    if(movingBox.x<0){
        music.stop()
          movingBox.velocityX=3
      }else if(movingBox.x>800){
        music.stop()
          movingBox.velocityX=-3
      }

      if(isTouching(movingBox,greenBox)){
        music.play()
        movingBox.shapeColor="green";
        bounceOff(movingBox,greenBox)
      }

      else if(isTouching(movingBox,blueBox)){
        music.stop()
        movingBox.shapeColor="blue";
        bounceOff(movingBox,blueBox)
       
      }
        
      else if(isTouching(movingBox,greenBox)){
        music.stop()
        movingBox.shapeColor="green";
        bounceOff(movingBox,greenBox)
        movingBox.velocityX=0;
        movingBox.velocityY=0;
      }
      
      else if(isTouching(movingBox,redBox)){
        music.stop()
        movingBox.shapeColor="red";
        bounceOff(movingBox,redBox)
      }
    
      if (movingBox.y<0){
        music.stop()
        movingBox.velocityY=3
      }
        drawSprites()
    }
