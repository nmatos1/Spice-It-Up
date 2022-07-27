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

let canvas;
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

let mouthThree = document.GetElementbyID('mouth');

class Lips {
    constructor(x,y,image,width,height){
    this.x = x;
    this.y =y;
    this.image = image;
    this.width = width;
    this.height = height;
    this.alive = true;

    this.render = function(){
        context.drawImage()
    }
    }
}
