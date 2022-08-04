 class player{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y= 100;
    }
    update(){

    }
    draw(context){
        context.fillRect(this.x,this.y,this.width, this.height);
    }
}

// let mouth = function () {

// }

// let green = function() {

// }

// let red = function () {

// }

// let health = function() {

// }


// let score = function(){

// }

// let timer = function(){

// }

// let move = function(){

// }

// let tracker = function(){

// }


// let context;
// let keys = [];

// //created a constructor to access player's different functions

// let moveTwo = function(data){  
//     if(data === undefined)
//     return;
//     for (let i = 0 ; i < data.length; i++){
//         let setting =data[i];
//         this[setting[0]]=setting[1];
//     }
//     this.alive = true;
// }

// //controlling the movement of the mouth

// moveTwo.prototype = {
//     update: function (){
//         if(this.alive)
//         {
//             this.move();
//             this.draw();
//         }
//     }
// }

// // console.log(moveTwo)

// // mouth variable specifying the object's methods

// let mouthData = [

// ]

// // displaying the mouth on the page

// // let mouthThree = document.GetElementbyID('mouth');

// class Lips { 
//     constructor(x,y,image,width,height){
//     this.x = x;
//     this.y =y;
//     this.image = image;
//     this.width = width;
//     this.height = height;
//     this.alive = true;

//     this.render = function(){
//         ctx.drawImage(this.image, this.x, this.y);
//     }
//     }
// }

// // let woo = new Character(30, 30, mouthThree, 100, 100)

// // displaying the start screen, making sure the game reloads every time I refresh the pages, and make a functioning gameloop, trying to get the background image to appear

// // let canvas = document.getElementById(('canvas') => {
//     // ctx = canvas.getContext('2d')}

//     // canvas.width = 903;
//     // canvas.height = 657;

//     // let background = new Image();
//     // background.src="https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171215929/91905969-spicy-chili-vegetable-with-flames-pattern-background-vector-illustration.jpg"

//     // ctx.drawImage(background,0,0);

//     function drawImage(){
//         let newTwo = new Image();
//         newTwo.src = '/image/background.jpg'
//         newTwo.onload = () => {
//             getContext.drawImage(newTwo, 0 ,0, canvas.width, canvas.height);
//         }
//     }

// ///////////////////////////////////////////////////
// function startGame(){
//     myGameArea.start();
// }






// /////////////////////////////////////////////////////
// function update(){
//     myGameArea.clear();
//     myBackground.newPos();
//     myBackground.update();
//     console.log('updating');
// }

// function render(){
//     console.log('rendering');
// }

// function start() {
//     this.toggleScreen('startScreen' , false);
//     this.toggleScreen('canvas', true);
//     this.prepareCanvas();
//     this.init();
//     this.loop = setInterval(() => {
//         this.update();
//         this.render();
//     }, 1000/this.fps);
// };



// let myGameArea = {
//     canvas: document.getElementById('canvas'),
//     start : function(){
//         this.canvas.width = 1000;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext('2d');
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     clear : function(){
//         this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
//     }
// }

// function component(width, height, color,x,y){
//     this.width = width;
//     this.height = height;
//     this.x = x; 
//     this.y = y;
//     this.update = function(){
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x,this.y,this.width, this.height);
//     }
// }

// function toggleScreen(id,toggle){
//     let element = document.getElementById(id);
//     let display = (toggle) ? 'block' : 'none';
//     element.style.display = display;
 
// };

////code for havign the start button work
  // let mouth;

    // window.addEventListener('DOMContentLoaded', function(){
    //     mouth = new Player ()

    //////////////////////////////////////////

    // inital screen
    // window.addEventListener('DOMContentLoaded', function(){
    //     mouth = new Player (75, 75, Image, 40,80);
        // peppers = new Player(25 , 25,'green', 20, 40);
    // const runGame = setInterval(gameLoop,60);
    // });

////canvas rendering
// canvas.setAttribute('height', getComputedStyle(canvas)['height']);
// canvas.setAttribute('width', getComputedStyle(canvas)['width']);

/////// Mouth Player///////////////////
// class Player{
//     constructor(x,y,color,width,height){
//         this.position = {
//             x : x,
//             y : y,
//         }
//         this.width = width;
//         this.height = height;  
//         this.color = color;
//         this.alive = true; 
//     }}

//detecting if the objects are touching each other




// function gameLoop(){
//     context.clearRect(0,0, canvas.width, canvas.height);
//     movement.textContent =  `X:${mouth.position.x}\nY:${mouth.position.y}`;
// if(mouth.alive){ 
//     mouth.render();




/////function for multiple peppers
// function newPeppers(){
// peppers.alive = false;
//     setTimeout(function() {
//         let x = Math.floor(Math.random() * canvas.width) - 40;
//         let y = Math.floor(Math.random() * canvas.height) - 80;
//         peppers = new Player(x, y, red, 20, 60);
//     }, 1000);
//     return true;
// }
//collision 

// function detectHit(p1, p2){
//     let hitTest = 
//     p1.y + p1.h > p2 &&
//     p1.y < p2.y + p2.height &&
//     p1.x + p1.width > p2.x &&
//     p1.x <p2.x + p2.width;

//     if(hitTest){
//         let newScore = Number(myScore.textContent) + 100;
//         myScore.textContent = newScore;
//         return  
//     }

// }


///falling objects////



 
// class Game{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//         this.player = new player(this);
//     }
//     update(){

//     }
//     draw(){
//         ctx.fillRect(this.position.x, this.position.y, this.position.width, this.position.height);
//     }
// }



// let game = new Game(canvas.width, canvas.height);
// console.log(game);
