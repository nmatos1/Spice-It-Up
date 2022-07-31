    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    console.log(context);
    canvas.width = innerWidth;
    canvas.height= innerHeight;
    let width = innerWidth;
    let height = innerHeight;
    let mouth;
    const movement = document.getElementById('movement')
    let myScore = document.getElementById('score');


    // inital screen
    window.addEventListener('DOMContentLoaded', function(){
        mouth = new Player (75, 75, 'red', 40,80);
        peppers = new Player(25 , 25,'green', 20, 40);
    const runGame = setInterval(gameLoop,60);
    });

    document.addEventListener('keydown', movementHandler);

////canvas rendering
canvas.setAttribute('height', getComputedStyle(canvas)['height']);
canvas.setAttribute('width', getComputedStyle(canvas)['width']);

/////// Mouth Player///////////////////
class Player{
    constructor(x,y,color,width,height){
        this.position = {
            x : x,
            y : y,
        }
        this.width = width;
        this.height = height;  
        this.color = color;
        this.alive = true; 
        this.render = function(){
            context.fillStyle = this.color;
            context.fillRect(this.position.x, this.position.y,this.width, this.height);
        }}
    }


   


/////////////////////////////////////////////////

//creating the movement for the square

function movementHandler(e){
    console.log('movement', e.key);

    switch(e.key){
        case 'ArrowLeft':
            mouth.position.x - 10>= 0 ? (mouth.position.x -= 10) : null;
            break;
        case 'ArrowRight': 
        mouth.position.x + 10 <= canvas.width ?(mouth.position.x += 10): null;
        break;
    }
};

//game processing

function gameLoop(){
    context.clearRect(0,0, canvas.width, canvas.height);
    movement.textContent =  `X:${mouth.position.x}\nY:${mouth.position.y}`;
if(mouth.alive){ 
    peppers.render();
    let hit = detectHit(peppers, mouth);
    
}
mouth.render();
};

/////function for multiple peppers
function newPeppers(){
peppers.alive = false;
    setTimeout(function() {
        let x = Math.floor(Math.random() * canvas.width) - 40;
        let y = Math.floor(Math.random() * canvas.height) - 80;
        peppers = new Player(x, y, red, 20, 60);
    }, 1000);
    return true;
}
//collision 

function detectHit(p1, p2){
    let hitTest = 
    p1.y + p1.h > p2 &&
    p1.y < p2.y + p2.height &&
    p1.x + p1.width > p2.x &&
    p1.x <p2.x + p2.width;

    if(hitTest){
        let newScore = Number(myScore.textContent) + 100;
        myScore.textContent = newScore;
        return  
    }

}


///falling objects////

let yPosition = 0;

function myTimer (){
    context.clearRect(0, 0, canvas.width, canvas.height);
    yPosition = yPosition + 4;
    context.strokeRect(120, yPosition.newPeppers, 60, 60);
    context.fillRect(180,yPosition.newPeppers,60,60);
}
setInterval(myTimer, 25);















