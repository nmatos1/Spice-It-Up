    const context = canvas.getContext('2d'); 
    
    let mouthX = 300;
    let score = 0;
    let changeX =0; 
    
    let x1 = [100,300,500]; 
    let y1= [0,0,0];
    let speed1=[2,1,3]; 
    
    let x = [100,300,500]; 
    let y= [0,0,0];
    let speed=[2,1,3]; 
    
    let timesUp = setInterval(mainLoop,20);   
    
   

function mainLoop(){
    context.clearRect(0,0,640,480); 
    context.font = "30px Arial"; 
    context.fillText("Score: " +score, 60, 30);
    for(let i = 0; i < 3; i++){
        context.drawImage(pepper, x[i],y[i],40,40);
        y[i]+=speed[i];
        checkHits(i);
        if(y[i]> 480){
            y[i] =- 80;
            x[i]= Math.random()*600
        }} 
        context.drawImage(mouth, mouthX, 400,80,80);
        mouthX += changeX; 
        if(mouthX<0) mouthX = 0;
        if(mouthX>560) mouthX = 560;
        for(let i = 0; i < 3; i++){
            context.drawImage(pepperTwo, x1[i],y1[i],40,40);
            y1[i]+=speed1[i];
            checkHits(i);
            if(y1[i]> 480){
                y1[i] =- 80;
                x1[i]= Math.random()*600}

        }context.drawImage(mouth, mouthX, 400,80,80);
        mouthX += changeX; 
        if(mouthX<0) mouthX = 0;
        if(mouthX>560) mouthX = 560;

    }
   

  function checkHits(i){
    if((Math.abs(400-y[i])<60) && (Math.abs(mouthX-x[i])<60)){
        score+=5;
        y[i]=-80; 
        x[i]= Math.random()*600;
        checkHits();
        
    } else if ((Math.abs(400-y1[i])<60) && (Math.abs(mouthX-x1[i])<60)){
        score = score- 2;
        y1[i]=-80; 
        x1[i]= Math.random()*600;
        checkHits();
    }}

   

function movementHandler(e){
    switch(e.key){
        case 'ArrowLeft':
            mouthX - 10>= 0 ? (mouthX -= 20) : null;
            break;
        case 'ArrowRight': 
        mouthX + 10 <= canvas.width ?(mouthX += 20): null;
        break;
    }
};

document.addEventListener('keydown', movementHandler);

alert('Welcome to the Spicy Challenge! Use the left and right arrows to move the mouth side to side');

let count = 45;
let interval = setInterval(function(){
  document.createElement('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    alert("You're out of time!");
  }
}, 1000);
    
        window.addEventListener('DOMContentLoaded', function(){
        const runGame = setInterval(mainLoop,60);
        });

       
