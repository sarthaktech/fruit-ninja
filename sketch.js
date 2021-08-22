var knife,kinfeimg,fruit1,fruit2,fruit3,fruit4,fruit1img,fruit2img,fruit3img,fruit4img,fruitsR,fruitsL,germimg,germs,score,gameover,germ,knifeSound,gameoverSound
var PLAY=1
var END=0
var gameState=PLAY

 function preload()
{
   knifeimg=loadImage("sword.png")
   fruit1img=loadImage("fruit1.png")
   fruit2img=loadImage("fruit2.png")
   fruit3img=loadImage("fruit3.png")
   fruit4img=loadImage("fruit4.png")
   germimg=loadImage("alien1.png")
   gameoverimg=loadImage("gameover.png")
   knifeSound=loadSound("knifeSwooshSound.mp3")
   gameoverSound=loadSound("preview.mp3")
   
}

 function setup()
{
   createCanvas(500,500)
  
   knife=createSprite(250,250,20,20)
   knife.addImage(knifeimg)
   knife.scale=0.6
   score=0
   fruitsL=createGroup()
   fruitsR=createGroup()
   germs=createGroup()
 
  
  
}

 function draw()
{
   background("lightblue")
  
 if(gameState === PLAY) 
{   knife.x=World.mouseX
    knife.y=World.mouseY
} 
  text(score,240,20)
  text("YOUR SCORE:",155,20)

 if(fruitsL.isTouching(knife))
{
  fruitsL.destroyEach()
  score=+score+5
  knifeSound.play()
}  

 if(fruitsR.isTouching(knife))
{
  fruitsR.destroyEach()
  score=+score+5
  knifeSound.play()
  
}
  
  
 if(germs.isTouching(knife))
{
  fruitsL.destroyEach()
  fruitsL.setvelocityX=0
  fruitsR.destroyEach()
  fruitsR.setvelocityX=0
  germs.destroyEach()
  germs.setvelocityX=0
  gameover=createSprite(250,250,20,20)
  gameover.addImage(gameoverimg)
  gameover.scale=1.5
  knife.destroy()
  gameoverSound.play()
}  
  
  
  
  
  
  
  
  
  
    spawngerm();
    spawnfruitsR();
    spawnfruitsL();
    drawSprites(); 

}
 
 function spawnfruitsR()
{
 if(World.frameCount % 80 === 0)
{
   fruit=createSprite(499,250,20,20)
   fruit.scale=0.3
   f=Math.round(random(1,4))
 if(f == 1)
{
   fruit.addImage(fruit1img)
}  
  else if (f == 2) {
    fruit.addImage(fruit2img)
} else if (f == 3){
  fruit.addImage(fruit3img)
} else if (f == 4){
  fruit.addImage(fruit4img)
}
  fruit.y=Math.round(random(5,495))
  fruit.velocityX=-(9+(score/4)) 
  fruit.setLifetime=50 
  fruitsR.add(fruit)
}   
}   

 function spawnfruitsL()
{
 if(World.frameCount % 85 === 0)
{
   fruit=createSprite(1,200,20,20)
   fruit.scale=0.3
   f=Math.round(random(1,4))
 if(f == 1)
{
   fruit.addImage(fruit1img)
}  
  else if (f == 2) {
    fruit.addImage(fruit2img)
} else if (f == 3){
  fruit.addImage(fruit3img)
} else if (f == 4){
  fruit.addImage(fruit4img)
}
  fruit.y=Math.round(random(5,495))
  fruit.velocityX=(9+(score/4)) 
  fruit.setLifetime=50 
  fruitsL.add(fruit)
}   
}   






 function spawngerm()
{
   if(World.frameCount % 130 === 0)
{
  germ=createSprite(499,200,20,20)
  germ.scale=0.8
  germ.addImage(germimg)
  germ.y=Math.round(random(5,495)) 
  germ.velocityX=-(7+(score/10))
  germ.setLifetime=50 
  germs.add(germ) 
}
}

  
  
  
  







