let mouth = function () {

}

let green = function() {

}

let red = function () {

}

let health = function() {

}


let score = function(){

}

let timer = function(){

}

let move = function(){

}

let tracker = function(){

}


let context;
let keys = [];

//created a constructor to access player's different functions

let moveTwo = function(data){  
    if(data === undefined)
    return;
    for (let i = 0 ; i < data.length; i++){
        let setting =data[i];
        this[setting[0]]=setting[1];
    }
    this.alive = true;
}

//controlling the movement of the mouth

moveTwo.prototype = {
    update: function (){
        if(this.alive)
        {
            this.move();
            this.draw();
        }
    }
}

// console.log(moveTwo)

// mouth variable specifying the object's methods

let mouthData = [

]

// displaying the mouth on the page

// let mouthThree = document.GetElementbyID('mouth');

class Lips { 
    constructor(x,y,image,width,height){
    this.x = x;
    this.y =y;
    this.image = image;
    this.width = width;
    this.height = height;
    this.alive = true;

    this.render = function(){
        ctx.drawImage(this.image, this.x, this.y);
    }
    }
}

// let woo = new Character(30, 30, mouthThree, 100, 100)

// displaying the start screen, making sure the game reloads every time I refresh the pages, and make a functioning gameloop

let loop;
let fps = 60;
let cnv, ctx;


window.onload = function(){
    console.log('gameloop');
    prepareCanvas();
    loop = setInterval(() => {
        update();
        render();
    }, 1000/fps);
}
//trying to get the background image to appear 

function resize(){
    let img = document.getElementById('background');
    let width = img.clientWidth;
    let height = img.clientHeight; 
    let cvn = document.getElementById('canvas');
    canvas.style.width = width;
    canvas.style.height = height;
}

function startGame(){
    myGameArea.start();
}






/////////////////////////////////////////////////////
function update(){
    myGameArea.clear();
    myBackground.newPos();
    myBackground.update();
    console.log('updating');
}

function render(){
    console.log('rendering');
}

function start() {
    this.toggleScreen('startScreen' , false);
    this.toggleScreen('canvas', true);
    this.prepareCanvas();
    this.init();
    this.loop = setInterval(() => {
        this.update();
        this.render();
    }, 1000/this.fps);
};

function startGame (){
    // console.log('start game');
    myGameArea.start();
}

let myGameArea = {
    canvas: document.getElementById('canvas'),
    start : function(){
        this.canvas.width = 1000;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color,x,y){
    this.width = width;
    this.height = height;
    this.x = x; 
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.width, this.height);
    }
}

function toggleScreen(id,toggle){
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none';
    element.style.display = display;
 
};