    const context = canvas.getContext('2d'); // variable to code canvas
    // canvas.width = innerWidth;
    // canvas.height= innerHeight;
    let mouthX = 300;
    let score = 0;
    let changeX =0; //variables
    
    let x1 = [100,300,500]; 
    let y1= [0,0,0];
    let speed1=[2,1,3]; // falling green pepper
    
    let x = [100,300,500]; 
    let y= [0,0,0];
    let speed=[2,1,3]; // arrays to store each of the falling red pepper
    let timesUp = setInterval(mainLoop,20);   //runs mainLoop
 
    //creating the movement for the mouth
   

function mainLoop(){
    context.clearRect(0,0,640,480); //clear the canvas
    context.font = "30px Arial"; 
    context.fillText("Score: " +score, 10, 30);
    for(let i = 0; i < 3; i++){
        context.drawImage(pepper, x[i],y[i],80,80);
        y[i]+=speed[i];
        checkHits(i);
        if(y[i]> 480){
            y[i] =- 80;
            x[i]= Math.random()*600
        }} 
        context.drawImage(mouth, mouthX, 400,80,80);
        mouthX += changeX; 
        if(mouthX<0) mouthX = 0;
        if(mouthX>560) mouthX = 560;// run the code for the falling peppers at the x and y values, moving by speed value, if caught the function stops running
        for(let i = 0; i < 3; i++){
            context.drawImage(pepperTwo, x1[i],y1[i],80,80);
            y1[i]+=speed1[i];
            checkHits(i);
            if(y1[i]> 480){
                y1[i] =+ 80;
                x1[i]= Math.random()*600}

        }context.drawImage(mouth, mouthX, 400,80,80);
        mouthX += changeX; 
        if(mouthX<0) mouthX = 0;
        if(mouthX>560) mouthX = 560;//moving mouth
    }
    

        
function checkHits(i){
    if((Math.abs(400-y[i])<60) && (Math.abs(mouthX-x[i])<60)){
        score+=5;
        y[i]=-80; 
        x[i]= Math.random()*600;
         //checks to see if there are less than 60px apart v & h and move at random positions
        checkHits();
        
    } else if ((Math.abs(400-y[i])<60) && (Math.abs(mouthX-x[i])<60)){
        score-=2;
        y1[i]=-80; 
        x1[i]= Math.random()*600;
        checkHits();
    }
}

function movementHandler(e){
    switch(e.key){
        case 'ArrowLeft':
            mouthX - 10>= 0 ? (mouthX -= 10) : null;
            break;
        case 'ArrowRight': 
        mouthX + 10 <= canvas.width ?(mouthX += 10): null;
        break;
    }
};

document.addEventListener('keydown', movementHandler);

setTimeout(gameOver, 60000);
function gameOver(){
    clearInterval(timesUp);
    context.font="80px Arial";
    context.fillText("Game Over!" , 100, 250);
} //call this function after 60 seconds after timer runs out

alert('Use the left and right arrows to move the mouth side to side');

