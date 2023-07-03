var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject ="";
var blockImageObject = "";

function playerUpdate(){
    fabric.Image.fromURL("assets/player.png" , function (Img){
        playerObject = Img;
        playerObject.scaleToWidth (150);
        playerObject.scaleToHeight (140);
        playerObject.set({
            top:playerY,
            left:playerX,
        });
        canvas.add(playerObject);
    }
    ) 
}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function (Img){
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left:playerX,
        });
        canvas.add(blockImageObject);
    });
};

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38"){
        console.log("cima")
        up()
    }

     if (keyPressed == "40"){
        console.log("baixo")
        down()
    }

    if (keyPressed == "37"){
        console.log("esquerda")
        left()
    }
    
    if (keyPressed == "39"){
        console.log("direita")
        rigth()
    }



    if (keyPressed == "87"){
        console.log("w");
        newImage("assets/wall.jpg")
    }

    if(keyPressed == "71"){
        console.log("f");
        newImage("assets/cloud.jpg")
    }

    if (keyPressed == "76"){
        console.log("g");
        newImage("assets/dark_green.png")

    }

    if(keyPressed == "84"){
        console.log("l");
        newImage("assets/ground.png")
    }

    if (keyPressed == "82"){
        console.log("t");
        newImage("assets/light_green.png")

    }

    if(keyPressed == "89"){
        console.log("e");
        newImage("assets/roof.jpg")
    }

    if (keyPressed == "68"){
        console.log("q");
        newImage("assets/trunk.jpg")

    }

    if(keyPressed == "89"){
        console.log("v");
        newImage("assets/unique.png")
    }

    if (keyPressed == "87"){
        console.log("c");
        newImage("assets/yellow_wall.png")

    }
    if (e.shiftKey == true && keyPressed =="80"){
        console.log("p e shift pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if (e.shiftKey == true && keyPressed =="77"){
        console.log("m e shift pressionadas juntas");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
}

    function up(){
        if(playerY >= 0){
            playerY = playerY - blockImageHeight;
            canvas.remove(playerObject);
            playerUpdate();
        }
    }

    function down(){
        if(playerY <= 500){
            playerY = playerY + blockImageHeight;
            canvas.remove(playerObject);
            playerUpdate();
        }
    }

    function rigth(){
        if(playerX <= 850){
            playerX = playerX + blockImageHeight;
            canvas.remove(playerObject);
            playerUpdate();
        }
    }

    function left(){
        if(playerX > 0){
            playerX = playerX - blockImageHeight;
            canvas.remove(playerObject);
            playerUpdate();
        }
    }

