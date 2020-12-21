var score=0
var lives=5


function preload(){
 f=loadImage("frogger1.png")
 fd=loadImage("frogger4.png")
 frri=loadImage("frogger2.png")
 fl=loadImage("frogger3.png")
  car1=loadImage("cars1.png")
  car2=loadImage("cars3.png")
  car3=loadImage("cars2.png")
  snake=loadImage("snake.png")
  cat=loadImage("cat.png")
  dest=loadImage("desti.jpg")
  fire=loadImage("fire ball.png")
}

function setup(){
  createCanvas(850,560)

  
  wat=createSprite(400,170,2000,180)
  wat.shapeColor="#F6C7A3"

  land=createSprite(400,100,2000,100)
  land.shapeColor="#AAA568"
 
  land2=createSprite(400,280,2000,50)
  land2.shapeColor="#AAA568"

  land3=createSprite(400,480,2000,50)
  land3.shapeColor="#AAA568"

  fr=createSprite(400,480)
  fr.addImage("frog",f)
  fr.scale=0.1
 
  loggr=new Group()
  catgr=new Group()
  snakegr=new Group()
  cargr=new Group()
  car1gr=new Group()
  car2gr=new Group()
 
}

function draw(){
  background("black")
  fr.velocityY=0
  fr.velocityX=0

  if(keyDown("UP_ARROW")&&fr.y>100){
    fr.addImage("frog",f)
   fr.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")&&fr.y<480){
    fr.addImage("frog",fd)
    fr.velocityY=5
  }
  if(keyDown("RIGHT_ARROW")&&fr.x<825){
    fr.addImage("frog",frri)
    fr.velocityX=5
  }

  if(keyDown("LEFT_ARROW")&&fr.x>20){
    fr.addImage("frog",fl)
    fr.velocityX=-5
  //  fr.y=465

  }


  if(frameCount%60==0){
    car=createSprite(10,430)
    car.addImage(car1)
    car.scale=0.8
    car.velocityX=5
    cargr.add(car)
   // car.debug=true
    car.setCollider('circle',2,0,20)
  }
 if(frameCount%90==0){
    cari2=createSprite(900,397)
   cari2.addImage(car2)
   cari2.scale=0.8
    cari2.velocityX=-5
    car1gr.add(cari2)
   }
   if(frameCount%90==0){
    cari3=createSprite(10,347)
    cari3.addImage(car3)
    cari3.scale=0.8
     cari3.velocityX=5
     car2gr.add(cari3)
   }
   if(frameCount%100==0)
   {
     snakes=createSprite(10,280)
     snakes.addImage(snake)
     snakes.scale=0.08
     snakes.velocityX=5
     snakegr.add(snakes)
     
   }
   if(frameCount%50==0){
     log=createSprite(900,225,150,60)
     log.addImage(fire)
     log.scale=0.1
     log.velocityX=-5
    loggr.add(log)
  //  log.debug=true
    log.setCollider("circle",0,0,40)
   }
   if(frameCount%60==0){
     tur=createSprite(10,170)
     tur.addImage(cat)
     tur.velocityX=5
     tur.scale=0.1
     catgr.add(tur)
   //  tur.debug=true
     tur.setCollider("circle",0,0,50)
   }

  if(fr.isTouching(catgr)||(fr.isTouching(loggr))){
     fr.x=400
    fr.y=300
    
  }

  if(fr.isTouching(snakegr)||(fr.isTouching(cargr))||(fr.isTouching(car1gr)||(fr.isTouching(car2gr)))){
    fr.x=400
    fr.y=500
  }

  spawnObstacles()
  drawSprites()
   textSize(40)
   fill ("green")
  text ("frog's home",300,110)
  fill("white")
  textSize(70)
  text ("ⒻⓇⓄⒼⒼⓎ",200,60)
  textSize(40)
  text("🐸: "+lives,10,550)
}

function spawnObstacles(){
 
}
