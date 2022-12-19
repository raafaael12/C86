var canvas = new fabric.Canvas('myCanvas')
playerX = 10
playerY = 10

blockImageWidth = 30
blockImageHeight = 30

var playerObject = ""
var blockImageObject = ""

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)

        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject)
    })
        
    }

    function newImage(getImage){
        fabric.Image.fromURL(getImage, function(Img){
            blockImageObject = Img
            blockImageObject.scaleToWidth(blockImageWidth);
            blockImageObject.scaleToHeight(blockImageHeight);
            blockImageObject.set({
                top:playerY,
                left:playerX
            })
        })
    }
    window.addEventListener("keydown",myKeyDown)

    function myKeyDown(e){
        keyPressed = e.keyCode
        if(e.shiftKey == true && keyPressed == '80'){
            blockImageWidth = blockImageWidth + 10;
            blockImageHeight = blockImageHeight + 10;

        }
        if(e.shiftKey == true && keyPressed == '77'){
            blockImageWidth = blockImageWidth - 10;
            blockImageHeight = blockImageHeight - 10;

        }
        if(keyPressed=='88'){
            up();
        }
        if(keyPressed=='40'){
            down();
        }
        if(keyPressed=='37'){
            left();
        }
        if(keyPressed=='39'){
            right();
        }
        if(keyPressed=='87'){
            newImage('wall.jpg');
            console.log('w')
        }
        if(keyPressed=='71'){
            newImage('ground.png')
            console.log('g')
        }
        if(keyPressed=='76'){
            newImage('light_green.png');
            console.log('g')
        }
        if(keyPressed=='84'){
            newImage('trunk.jpg')
            console.log('g')
        }
        if(keyPressed=='82'){
            newImage('roof.jpg');
            console.log('g')
        }
        if(keyPressed=='89'){
            newImage('yellow_wall.png');
            console.log('g')
        }
        if(keyPressed=='68'){
            newImage('dark_green.png');
            console.log('g')
        }
        if(keyPressed=='85'){
            newImage('unique.png');
            console.log('g')
        }
        if(keyPressed=='67'){
            newImage('cloud.jpg');
            console.log('g')
        }
    }
    function up(){
        if(playerY >=0){
            playerY = playerY - blockImageHeight;
            console.log("altura da imagem do bloco = " + blockImageHeight)
            console.log("quando a tecla direcional Cima for pressionada, X = ")
            canvas.remove(playerObject);
            playerUpdate();
}
    }
    function down(){
        if(playerY <=500){
            playerY = playerY + blockImageHeight;
            console.log("altura da imagem do bloco = " + blockImageHeight)
            console.log("quando a tecla direcional Baixo for pressionada, X = ")
            canvas.remove(playerObject);
            playerUpdate();
    }
}
    function left(){
        if(playerX >0){
            playerX = playerX - blockImageWidth;
            console.log("largura da imagem do bloco = " + blockImageWidth)
            console.log("quando a tecla direcional Cima for pressionada, X = ")
            canvas.remove(playerObject);
            playerUpdate();
    }
}
    function right(){
        if(playerX <=850){
            playerX = playerX + blockImageWidth;
            console.log("largura da imagem do bloco = " + blockImageWidth)
            console.log("quando a tecla direcional Cima for pressionada, X = ")
            canvas.remove(playerObject);
            playerUpdate();
    }
}

