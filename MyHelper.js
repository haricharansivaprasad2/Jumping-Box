function bounceOff(ball,block){
    if(ball.x-block.x<ball.width/2+block.width/2 && block.x-ball.x<ball.width/2+block.width/2&&ball.y-block.y<ball.height/2+block.height/2 && block.y-ball.y<block.height/2+ball.height/2){
        ball.velocityX+=-2;
        ball.velocityY+=-3;
}
}