var ball,img,paddle;
var ballImage;
var paddleImage;

function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(300, 200, 20, 20);
  ball.addImage ("ball", ballImage);
  ball.scale = 0.5;
  ball.velocityX = 9; 
  ball.velocityY = -4;
  
  paddle = createSprite(375, 200, 20, 20);
  paddle.addImage("paddle", paddleImage);
  paddle.scale = 0.75;
  


}

function draw() {
  background(205,153,0);
  
    edges = createEdgeSprites();

    /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */


    ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  
    /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */



    if(keyDown(UP_ARROW))
    {
       paddle.y = paddle.y-5;
    }

    if(keyDown(DOWN_ARROW))
    {
      paddle.y = paddle.y+5;
    }
    drawSprites();

}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

