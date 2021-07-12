var ball;
var dataBase
var storage
function setup(){
    dataBase=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

     var ballposition = dataBase.ref('ball/position').on("value",readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dataBase.ref('ball/position').set({
        'x': storage.x+x, 
        'y': storage.y+y,
    })


    
}
function readposition(data){
storage= data.val();
ball.x= storage.x;
ball.y= storage.y



}