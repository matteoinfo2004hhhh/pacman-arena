var myGamePiece;
var pall1 = [];
var pall2 = [];
var frutta1 = [];
var frutta2 = [];
var frutta3 = [];
var frutta4 = [];
var frutta5 = [];
var frutta6 = [];
var frutta7 = [];
var frutta8 = [];
//nemici
var fantasmi = [];
var fantasmii = [];
var fantasmi2 = [];
var fantasmii2 = [];
var fantasmi3 = [];
var fantasmii3 = [];
var fantasmi4 = [];
var fantasmii4 = [];
var fantasmi5 = [];
var fantasmii5 = [];
var fantasmi6 = [];
var fantasmii6 = [];
var fantasmi7 = [];
var fantasmii7 = [];
var fantasmi8 = [];
var fantasmii8 = [];
var fantasmi9 = [];
var fantasmi10 = [];
//compomenti del gioco
var myScore;
var myWrite;
var myWrite2;
var mySuono;
var mySuono2;
var mySuono3;
var mySuono4;
var mySuono5;
var p=document.getElementById('pp');
var punto=0;

function dd(){
    var divDaNascondere2 = document.getElementById("jj");
    divDaNascondere2.style.display = "none";
}

function startGame() {
    myGamePiece = new component(40, 40, "pacman.png", 900, 420, "image");
    myScore = new component("40px", "Consolas", "white", 6, 40, "text");
    myWrite = new component("100px", "Consolas", "red", 780,200, "text");
    myWrite2 = new component("40px", "Consolas", "blue", 541,40, "text");
    mySuono = new sound("pacit.mp3");
    mySuono2 = new sound("pacwa.mp3");
    mySuono3 = new sound("pacm.mp3");
    mySuono4 = new sound("geat.wav");
    mySuono5 = new sound("eatf.wav");
    myGameArea.start();
    var divDaNascondere = document.getElementById("mm");
    divDaNascondere.style.display = "none";
  
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 2000;
        this.canvas.height = 960;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.frameNo2= 0;
        this.frameNog = 0;
        this.frameNot = 0;
        this.frameNogameover = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

setInterval(displayHello, 30);
function displayHello() {
    numc=Math.floor((Math.random() * 2) + 1);
    if(numc==1){
        myGamePiece.image.src = "pacman.png";
    }

    if(numc==2){
        myGamePiece.image.src = "pacman2.png";
    }
    if (myGameArea.keys && myGameArea.keys[37]){
      
    if(numc==1){
        myGamePiece.image.src = "pacman1.png";
    }

    if(numc==2){
        myGamePiece.image.src = "pacman2.png";
    }
    
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;

    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
           
        }
        
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
   
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;  
    }

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;

        }
        return crash;
    }
}

function updateGameArea() {

    for (i = 0; i < fantasmi.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
           
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii[i])) {
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            myWrite.update();
            mySuono3.play();
            myGameArea.stop();
        
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi2.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi2[i])) {
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            myWrite.update();
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii2.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii2[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi3.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi3[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }
    
    for (i = 0; i < fantasmii3.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii3[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi4.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi4[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii4.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii4[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi5.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi5[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii5.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii5[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi6.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi6[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii6.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii6[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi7.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi7[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii7.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii7[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi8.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmi8[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmii8.length; i += 1) {
       if(myGameArea.frameNog<9){
        if (myGamePiece.crashWith(fantasmii8[i])) {
            myWrite.update();
            var divDaNascondere2 = document.getElementById("jj");
            divDaNascondere2.style.display = "block";
            mySuono3.play();
            myGameArea.stop();
        } 
       }else{
    }
    }

    for (i = 0; i < fantasmi9.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi9[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             myGameArea.stop();
         } 
        }else{
     }
     }

     for (i = 0; i < fantasmi10.length; i += 1) {
        if(myGameArea.frameNog<9){
         if (myGamePiece.crashWith(fantasmi10[i])) {
             myWrite.update();
             var divDaNascondere2 = document.getElementById("jj");
             divDaNascondere2.style.display = "block";
             mySuono3.play();
             myGameArea.stop();
         } 
        }else{
     }
     }

    myGameArea.clear();
    myGameArea.frameNo += 1;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;   

    if(myGameArea.frameNo2==0){
        mySuono.play();
    }

    if (myGameArea.keys && myGameArea.keys[37]){
        myGamePiece.speedX = -13; 
    }

    if (myGameArea.keys && myGameArea.keys[39]) {
        myGamePiece.speedX = 13;
    }

    if (myGameArea.keys && myGameArea.keys[38]) {
        myGamePiece.speedY = -13; 
    }
    
    if (myGameArea.keys && myGameArea.keys[40]) {
        myGamePiece.speedY = 13; 
    }


    if(myGamePiece.x>1960){
        myGamePiece.speedX = -15; 
    }
    if(myGamePiece.x<0){
        myGamePiece.speedX = +15; 
    }
    if(myGamePiece.y<0){
        myGamePiece.speedY = +15; 
    }
    if(myGamePiece.y>920){
        myGamePiece.speedY = -15; 
    }
   //generazioen palline
 

    if (myGameArea.frameNo == 1 || everyinterval(10)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        pall1.push(new component(10, 10, "pg.png", x, y, "image"));
    }

  if(myGameArea.frameNo>1000){
    if (myGameArea.frameNo == 1 || everyinterval(2010)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        pall2.push(new component(20, 20, "pe.png", x, y, "image"));
    }
  }

  if(myGameArea.frameNo>500){
    if (myGameArea.frameNo == 1 || everyinterval(510)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta1.push(new component(35, 35, "frutta1.png", x, y, "image"));
    }
  }

  if(myGameArea.frameNo>700){
    if (myGameArea.frameNo == 1 || everyinterval(710)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta2.push(new component(35, 35, "frutta2.png", x, y, "image"));
    }
  }

  if(myGameArea.frameNo>900){
    if (myGameArea.frameNo == 1 || everyinterval(910)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta3.push(new component(35, 35, "frutta3.png", x, y, "image"));
    }
  }

  if(myGameArea.frameNo>1200){
    if (myGameArea.frameNo == 1 || everyinterval(1210)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta4.push(new component(35, 35, "frutta4.png", x, y, "image"));
    }
  }
  if(myGameArea.frameNo>2000){
    if (myGameArea.frameNo == 1 || everyinterval(2010)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta5.push(new component(35, 35, "frutta5.png", x, y, "image"));
    }
  }


  if(myGameArea.frameNo>3000){
    if (myGameArea.frameNo == 1 || everyinterval(2910)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta6.push(new component(35, 35, "frutta6.png", x, y, "image"));
    }
  }

  if(myGameArea.frameNo>4000){
    if (myGameArea.frameNo == 1 || everyinterval(3910)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta7.push(new component(35, 35, "frutta7.png", x, y, "image"));
    }
  }

  if(myGameArea.frameNo>5000){
    if (myGameArea.frameNo == 1 || everyinterval(5110)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width - num2;
        y = myGameArea.canvas.height - num;
        frutta8.push(new component(35, 35, "frutta8.png", x, y, "image"));
    }
  }
    //generazione fantasmi
    if (myGameArea.frameNo == 1 || everyinterval(190)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -1;
        y = myGameArea.canvas.height - num;
        fantasmi.push(new component(40, 40, "fr.png", x, y, "image"));
    }

    if(myGameArea.frameNo>400){
    if (myGameArea.frameNo == 1 || everyinterval(230)) {
        num=Math.floor(Math.random()*950)+10;
        x = myGameArea.canvas.width -2100;
        y = myGameArea.canvas.height - num;
        fantasmii.push(new component(40, 40, "frr.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>950){
        if (myGameArea.frameNo == 1 || everyinterval(230)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -1;
        y = myGameArea.canvas.height - num;
        fantasmi2.push(new component(40, 40, "fa.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>1110){
        if (myGameArea.frameNo == 1 || everyinterval(250)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -2100;
        y = myGameArea.canvas.height - num;
        fantasmii2.push(new component(40, 40, "faa1.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>1211){
        if (myGameArea.frameNo == 1 || everyinterval(260)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -1;
        y = myGameArea.canvas.height - num;
        fantasmi3.push(new component(40, 40, "fv.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>1311){
        if (myGameArea.frameNo == 1 || everyinterval(260)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -2100;
        y = myGameArea.canvas.height - num;
        fantasmii3.push(new component(40, 40, "fvv.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>2000){
        if (myGameArea.frameNo == 1 || everyinterval(300)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -40;
        y = myGameArea.canvas.height - num;
        fantasmi4.push(new component(40, 40, "fb.png", x, y, "image"));
    }
    }
    
    if(myGameArea.frameNo>2300){
        if (myGameArea.frameNo == 1 || everyinterval(160)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -num2;
        y = myGameArea.canvas.height - 1;
        fantasmi5.push(new component(40, 40, "fz.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>2300){
        if (myGameArea.frameNo == 1 || everyinterval(160)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -num2;
        y = myGameArea.canvas.height - 1200;
        fantasmii5.push(new component(40, 40, "fzz.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>2600){
        if (myGameArea.frameNo == 1 || everyinterval(200)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -num2;
        y = myGameArea.canvas.height - 1;
        fantasmi6.push(new component(40, 40, "fc.png", x, y, "image"));
    }
    }

    if(myGameArea.frameNo>2600){
        if (myGameArea.frameNo == 1 || everyinterval(200)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -num2;
        y = myGameArea.canvas.height - 1200;
        fantasmii6.push(new component(40, 40, "fcc2.png", x, y, "image"));
    }
    }
    if(myGameArea.frameNo>3000){
    if (myGameArea.frameNo == 1 || everyinterval(310)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -1;
        y = myGameArea.canvas.height - num;
        fantasmi7.push(new component(40, 40, "fr.png", x, y, "image"));
    }
    }
    if(myGameArea.frameNo>3000){
    if (myGameArea.frameNo == 1 || everyinterval(340)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -2222;
        y = myGameArea.canvas.height - num;
        fantasmii7.push(new component(40, 40, "fr.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>3500){
    if (myGameArea.frameNo == 1 || everyinterval(540)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -2;
        y = myGameArea.canvas.height - num;
        fantasmi8.push(new component(40, 40, "far.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>3500){
    if (myGameArea.frameNo == 1 || everyinterval(540)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*2000)+10;
        x = myGameArea.canvas.width -2100;
        y = myGameArea.canvas.height - num;
        fantasmii8.push(new component(40, 40, "far.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>4000){
    if (myGameArea.frameNo == 1 || everyinterval(340)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*0)+1;
        x = myGameArea.canvas.width -61;
        y = myGameArea.canvas.height - num;
        fantasmi9.push(new component(40, 40, "fvi.png", x, y, "image"));
    }
}

if(myGameArea.frameNo>5000){
    if (myGameArea.frameNo == 1 || everyinterval(20)) {
        num=Math.floor(Math.random()*950)+10;
        num2=Math.floor(Math.random()*0)+1;
        x = myGameArea.canvas.width -61;
        y = myGameArea.canvas.height - num;
        fantasmi10.push(new component(40, 40, "fg.png", x, y, "image"));
        

    }
}

   //cicli potenziamenti
    for(i=0;i<frutta1.length; i += 1){
        frutta1[i].update();    
        if(myGamePiece.crashWith(frutta1[i])){
            myGameArea.frameNo2+=100;
            punto+=100;
            mySuono5.play();
            frutta1.splice(i, 1); 
            i--; 
        }
    }  

    for(i=0;i<frutta2.length; i += 1){
        frutta2[i].update();    
        if(myGamePiece.crashWith(frutta2[i])){
            myGameArea.frameNo2+=300;
            punto+=300;
            mySuono5.play();
            frutta2.splice(i, 1); 
            i--; 
        }
    }  
     
    for(i=0;i<frutta3.length; i += 1){
        frutta3[i].update();    
        if(myGamePiece.crashWith(frutta3[i])){
            frutta3[i].x+=9999999999;
            myGameArea.frameNo2+=500;
            punto+=500;
            mySuono5.play();
            frutta3.splice(i, 1); 
            i--; 
        }
    } 

    for(i=0;i<frutta4.length; i += 1){
        frutta4[i].update();    
        if(myGamePiece.crashWith(frutta4[i])){
            myGameArea.frameNo2+=700;
            punto+=700;
            mySuono5.play();
            frutta4.splice(i, 1); 
            i--; 
        }
    } 

    for(i=0;i<frutta5.length; i += 1){
        frutta5[i].update();    
        if(myGamePiece.crashWith(frutta5[i])){
            myGameArea.frameNo2+=1000;
            punto+=1000;
            mySuono5.play();
            frutta5.splice(i, 1); 
            i--; 
        }
    } 
    
    for(i=0;i<frutta6.length; i += 1){
        frutta6[i].update();    
        if(myGamePiece.crashWith(frutta6[i])){
            myGameArea.frameNo2+=2000;
            punto+=2000;
            mySuono5.play();
            frutta6.splice(i, 1); 
            i--; 
        }
    } 

    for(i=0;i<frutta7.length; i += 1){
        frutta7[i].update();    
        if(myGamePiece.crashWith(frutta7[i])){
            myGameArea.frameNo2+=3000;
            punto+=3000;
            mySuono5.play();
            frutta7.splice(i, 1); 
            i--; 
        }
    } 

    for(i=0;i<frutta8.length; i += 1){
        frutta8[i].update();    
        if(myGamePiece.crashWith(frutta8[i])){
            myGameArea.frameNo2+=5000;
            punto+=5000;
            mySuono5.play();
            frutta8.splice(i, 1); 
            i--; 
        }
    } 

    for(i=0;i<pall1.length; i += 1){
        pall1[i].update();    
        if(myGamePiece.crashWith(pall1[i])){
            myGameArea.frameNo2+=10;
            punto+=10;
            mySuono2.play();
            pall1.splice(i, 1); 
            i--; 
        }
    }  

    for(i=0;i<pall2.length; i += 1){
        pall2[i].update();    
        if(myGamePiece.crashWith(pall2[i])){
            myGameArea.frameNo2+=100;
            myGameArea.frameNog+=10;
            punto+=100;
            mySuono2.play();
            pall2.splice(i, 1); 
            i--; 
        }
    } 
  
//cicli nemici
    for(i=0;i<fantasmi.length; i += 1){
        numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
           fantasmi[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmi[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmi[i])){
            fantasmi[i].x+=9999999999;
            myGameArea.frameNo2+=200;
            punto+=200;
            mySuono4.play();
        }
        }else{
        if(numf==1){
           fantasmi[i].image.src ="fr.png";
        }
        if(numf==2){
           fantasmi[i].image.src ="fr2.png";
        }
        }
        fantasmi[i].x-=2;  
        fantasmi[i].update();    
    }  

    for(i=0;i<fantasmii.length; i += 1){
        numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
           fantasmii[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmii[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmii[i])){
            fantasmii[i].x+=9999999999;
            myGameArea.frameNo2+=200;
            punto+=200;
            mySuono4.play();
        }
        }else{
        if(numf==1){
           fantasmii[i].image.src ="frr.png";
        }
        if(numf==2){
           fantasmii[i].image.src ="frr2.png";
        }
        }
        fantasmii[i].x+=2;  
        fantasmii[i].update();    
    }  

    for(i=0;i<fantasmi2.length; i += 1){
        numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
           fantasmi2[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmi2[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmi2[i])){
            fantasmi2[i].x+=9999999999;
            myGameArea.frameNo2+=400;
            punto+=400;
            mySuono4.play();
        }
        }else{
        if(numf==1){
           fantasmi2[i].image.src ="fa.png";
        }
        if(numf==2){
           fantasmi2[i].image.src ="fa2.png";
        }
        }
        fantasmi2[i].x-=6;  
        fantasmi2[i].update();    
    }  

    for(i=0;i<fantasmii2.length; i += 1){
        numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
           fantasmii2[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmii2[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmii2[i])){
            fantasmii2[i].x+=9999999999;
            myGameArea.frameNo2+=400;
            punto+=400;
            mySuono4.play();
        }
        }else{
        if(numf==1){
           fantasmii2[i].image.src ="faa1.png";
        }
        if(numf==2){
           fantasmii2[i].image.src ="faa2.png";
        }
        }
        fantasmii2[i].x+=6;  
        fantasmii2[i].update();    
    }  

    for(i=0;i<fantasmi3.length; i += 1){
        var numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmi3[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmi3[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmi3[i])){
            fantasmi3[i].x+=9999999999;
            myGameArea.frameNo2+=800;
            punto+=800;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmi3[i].image.src ="fv.png";
        }
        if(numf==2){
            fantasmi3[i].image.src ="fv2.png";
        }
        }
       
        fantasmi3[i].x-=10; 
        fantasmi3[i].update();    
    }  


    for(i=0;i<fantasmii3.length; i += 1){
        var numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmii3[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmii3[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmii3[i])){
            fantasmii3[i].x+=9999999999;
            myGameArea.frameNo2+=800;
            punto+=800;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmii3[i].image.src ="fvv.png";
        }
        if(numf==2){
            fantasmii3[i].image.src ="fvv2.png";
        }
        }
       
        fantasmii3[i].x+=10; 
        fantasmii3[i].update();    
    }  




  for (i = 0; i < fantasmi4.length; i += 1) {
  // Aggiungi la variabile "directionX" per la direzione di movimento orizzontale del fantasma
  if (typeof fantasmi4[i].directionX === 'undefined') {
    fantasmi4[i].directionX = 1; // Inizia con la direzione verso sinistra
  }

  numf = Math.floor(Math.random() * 2) + 1;
  if (myGameArea.frameNog > 9) {
    if (numf == 1) {
      fantasmi4[i].image.src = "fp.png";
    }
    if (numf == 2) {
      fantasmi4[i].image.src = "fp2.png";
    }
    if (myGamePiece.crashWith(fantasmi4[i])) {
      fantasmi4[i].x += 9999999999;
      myGameArea.frameNo2 += 1000;
      punto+=1000;
      mySuono4.play();
    }
  } else {
    if (numf == 1) {
      fantasmi4[i].image.src = "fbb.png";
    }
    if (numf == 2) {
      fantasmi4[i].image.src = "fbb2.png";
    }
    if (fantasmi4[i].x<600) {
    if (numf == 1) {
      fantasmi4[i].image.src = "fb.png";
    }
    if (numf == 2) {
      fantasmi4[i].image.src = "fb2.png";
    }
  }
  }

  // Inverti la direzione orizzontale se il fantasma raggiunge i bordi sinistro o destro del canvas
  if (fantasmi4[i].x <= 0 || fantasmi4[i].x + fantasmi4[i].width >= myGameArea.canvas.width) {
    fantasmi4[i].directionX *= -1;
  }

  fantasmi4[i].x += 5 * fantasmi4[i].directionX;
  fantasmi4[i].update();
}



    for(i=0;i<fantasmi5.length; i += 1){
        var numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmi5[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmi5[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmi5[i])){
            fantasmi5[i].x+=9999999999;
            myGameArea.frameNo2+=2000;
            punto+=2000;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmi5[i].image.src ="fz.png";
        }
        if(numf==2){
            fantasmi5[i].image.src ="fz2.png";
        }
        }
       
        fantasmi5[i].y-=3; 
        fantasmi5[i].update();    
    }  

    for(i=0;i<fantasmii5.length; i += 1){
        var numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmii5[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmii5[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmii5[i])){
            fantasmii5[i].x+=9999999999;
            myGameArea.frameNo2+=2000;
            punto+=2000;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmii5[i].image.src ="fzz.png";
        }
        if(numf==2){
            fantasmii5[i].image.src ="fzz2.png";
        }
        }
       
        fantasmii5[i].y+=3; 
        fantasmii5[i].update();    
    }  

    for(i=0;i<fantasmi6.length; i += 1){
        var numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmi6[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmi6[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmi6[i])){
            fantasmi6[i].x+=9999999999;
            myGameArea.frameNo2+=2500;
            punto+=2500;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmi6[i].image.src ="fc.png";
        }
        if(numf==2){
            fantasmi6[i].image.src ="fc2.png";
        }
        }
       
        fantasmi6[i].y-=6; 
        fantasmi6[i].update();    
    } 

    for(i=0;i<fantasmii6.length; i += 1){
        var numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmii6[i].image.src ="fp.png";
        }
        if(numf==2){
           fantasmii6[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmii6[i])){
            fantasmii6[i].x+=9999999999;
            myGameArea.frameNo2+=2500;
            punto+=2500;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmii6[i].image.src ="fcc.png";
        }
        if(numf==2){
            fantasmii6[i].image.src ="fcc2.png";
        }
        }
       
        fantasmii6[i].y+=6; 
        fantasmii6[i].update();    
    } 


    for (i = 0; i < fantasmi7.length; i += 1) {
    numf = Math.floor(Math.random() * 2) + 1;
    if (myGameArea.frameNog > 9) {
    if (numf == 1) {
    fantasmi7[i].image.src = "fp.png";
    }
    if (numf == 2) {
    fantasmi7[i].image.src = "fp2.png";
    }
    if (myGamePiece.crashWith(fantasmi7[i])) {
    fantasmi7[i].x += 9999999999;
    myGameArea.frameNo2 += 3000;
    punto+=3000;
    mySuono4.play();
    }
    } else {
    if (numf == 1) {
    fantasmi7[i].image.src = "fre.png";
    }
    if (numf == 2) {
    fantasmi7[i].image.src = "fre2.png";
    }
    if(myGamePiece.x>fantasmi7[i].x){
    if (numf == 1) {
    fantasmi7[i].image.src = "free.png";
    }
    if (numf == 2) {
    fantasmi7[i].image.src = "free2.png";
    }
    }
    }
    var deltaX = myGamePiece.x - fantasmi7[i].x;
    var deltaY = myGamePiece.y - fantasmi7[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    var speed = 3;
    fantasmi7[i].x += speed * Math.cos(angle);
    fantasmi7[i].y += speed * Math.sin(angle);
    fantasmi7[i].update();
}


for (i = 0; i < fantasmii7.length; i += 1) {
    numf = Math.floor(Math.random() * 2) + 1;
    if (myGameArea.frameNog > 9) {
    if (numf == 1) {
    fantasmii7[i].image.src = "fp.png";
    }
    if (numf == 2) {
    fantasmii7[i].image.src = "fp2.png";
    }
    if (myGamePiece.crashWith(fantasmii7[i])) {
    fantasmii7[i].x += 9999999999;
    myGameArea.frameNo2 += 3000;
    punto+=3000;
    mySuono4.play();
    }
    } else {
    if (numf == 1) {
    fantasmii7[i].image.src = "fre.png";
    }
    if (numf == 2) {
    fantasmii7[i].image.src = "fre2.png";
    }
    if(myGamePiece.x>fantasmii7[i].x){
    if (numf == 1) {
    fantasmii7[i].image.src = "free.png";
    }
    if (numf == 2) {
    fantasmii7[i].image.src = "free2.png";
    }
    }
    }
    var deltaX = myGamePiece.x - fantasmii7[i].x;
    var deltaY = myGamePiece.y - fantasmii7[i].y;
    var angle = Math.atan2(deltaY, deltaX);
    var speed = 3;
    fantasmii7[i].x += speed * Math.cos(angle);
    fantasmii7[i].y += speed * Math.sin(angle);
    fantasmii7[i].update();
}

for(i=0;i<fantasmi8.length; i += 1){
    var numf=Math.floor(Math.random()*2)+1;
    if(myGameArea.frameNog>9){
    if(numf==1){
        fantasmi8[i].image.src ="fp.png";
    }
    if(numf==2){
       fantasmi8[i].image.src ="fp2.png";
    }
    if(myGamePiece.crashWith(fantasmi8[i])){
        fantasmi8[i].x+=9999999999;
        myGameArea.frameNo2+=3500;
        punto+=3500;
        mySuono4.play();
    }
    }else{
    if(numf==1){
        fantasmi8[i].image.src ="far.png";
    }
    if(numf==2){
        fantasmi8[i].image.src ="far2.png";
    }
    }
    fantasmi8[i].x-=5; 
    if(fantasmi8[i].x<1500){
        fantasmi8[i].x-=18; 
    }
    fantasmi8[i].update();
    }

    for(i=0;i<fantasmii8.length; i += 1){
    var numf=Math.floor(Math.random()*2)+1;
    if(myGameArea.frameNog>9){
    if(numf==1){
    fantasmii8[i].image.src ="fp.png";
    }
    if(numf==2){
    fantasmii8[i].image.src ="fp2.png";
    }
    if(myGamePiece.crashWith(fantasmii8[i])){
    fantasmii8[i].x+=9999999999;
    myGameArea.frameNo2+=3500;
    punto+=3500;
    mySuono4.play();
    }
    }else{
    if(numf==1){
    fantasmii8[i].image.src ="faar.png";
    }
    if(numf==2){
    fantasmii8[i].image.src ="faar2.png";
    }
    }
    fantasmii8[i].x+=5; 
    if(fantasmii8[i].x>500){
        fantasmii8[i].x+=18; 
    }
    fantasmii8[i].update();    
    }  
    


    

    for (i = 0; i < fantasmi9.length; i += 1) {
        if (typeof fantasmi9[i].directionX === 'undefined') {
          fantasmi9[i].directionX = 1; 
        }
        if (typeof fantasmi9[i].directionY === 'undefined') {
          fantasmi9[i].directionY = 1; 
        }
      
        numf = Math.floor(Math.random() * 2) + 1;
        if (myGameArea.frameNog > 9) {
          if (numf == 1) {
            fantasmi9[i].image.src = "fp.png";
          }
          if (numf == 2) {
            fantasmi9[i].image.src = "fp2.png";
          }
          if (myGamePiece.crashWith(fantasmi9[i])) {
            fantasmi9[i].x += 9999999999;
            myGameArea.frameNo2 += 4000;
            punto += 4000;
            mySuono4.play();
          }
        } else {
          if (numf == 1) {
            fantasmi9[i].image.src = "fvi2.png";
          }
          if (numf == 2) {
            fantasmi9[i].image.src = "fvii2.png";
          }
          if (fantasmi9[i].x < 600) {
            if (numf == 1) {
              fantasmi9[i].image.src = "fvi.png";
            }
            if (numf == 2) {
              fantasmi9[i].image.src = "fvii.png";
            }
          }
        }
      
        if (fantasmi9[i].x <= 0 || fantasmi9[i].x + fantasmi9[i].width >= myGameArea.canvas.width) {
          fantasmi9[i].directionX *= -1;
        }
      
        if (fantasmi9[i].y <= 0 || fantasmi9[i].y + fantasmi9[i].height >= myGameArea.canvas.height) {
          fantasmi9[i].directionY *= -1;
        }
      
 
        fantasmi9[i].x += 3 * fantasmi9[i].directionX;
        fantasmi9[i].y += 3 * fantasmi9[i].directionY;
        fantasmi9[i].update();
      }
      
      for(i=0;i<fantasmi10.length; i += 1){
        numf=Math.floor(Math.random()*2)+1;
        if(myGameArea.frameNog>9){
        if(numf==1){
            fantasmi10[i].image.src ="fp.png";
        }
        if(numf==2){
            fantasmi10[i].image.src ="fp2.png";
        }
        if(myGamePiece.crashWith(fantasmi10[i])){
            fantasmi10[i].x+=9999999999;
            myGameArea.frameNo2+=10000;
            punto+=10000;
            mySuono4.play();
        }
        }else{
        if(numf==1){
            fantasmi10[i].image.src ="fg.png";
        }
        if(numf==2){
            fantasmi10[i].image.src ="fg2.png";
        }
        }
        fantasmi10[i].x-=6;  
        fantasmi10[i].update();    
    }  

 

    if(myGameArea.frameNog>9){
      myGameArea.frameNot+=1;
    }

    if(myGameArea.frameNot>1000){
      myGameArea.frameNog=myGameArea.frameNog==0;
      myGameArea.frameNot=myGameArea.frameNot==0;
    }

    var elemento = document.getElementById('pp');
    var nuovoValore = punto;
    elemento.textContent = nuovoValore;
   
    myScore.text="PUNTEGGIO:" + myGameArea.frameNo2+"";
    myScore.update();
    myWrite.text="GAME OVER";
    myWrite2.text="TFB:" + myGameArea.frameNot+"=1000";
    myWrite2.update();
    myGamePiece.newPos();
    myGamePiece.update();


}




function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
      
    }    
}


function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;

}

