
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if(keyIsDown(RIGHT_ARROW)){
    background("Magenta");
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("darkBlue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("Yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("Purple");
  }


  
  drawSprites();
}

c