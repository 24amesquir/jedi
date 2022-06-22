let width = 0;
let height = 0;
let canvas = null;

let player = null;
let playersOnline = [];
let multiplayer = false;
let lines = [];
let backgroundImage = null;
var segmentCount = 24;
var radius = 300;
var colorWheel = false;

let creatingLines = false;

let idleImage = null;
let squatImage = null;
let jumpImage = null;
let oofImage = null;
let run1Image = null;
let run2Image = null;
let run3Image = null;
let fallenImage = null;
let fallImage = null;
let showingLines = true;
let showingCoins = false;
let levelImages = [];

let placingPlayer = false;
let placingCoins = false;
let playerPlaced = false;

let testingSinglePlayer = true;


let fallSound = null;
let jumpSound = null;
let bumpSound = null;
let landSound = null;
let shootSound = null;

let snowImage = null;


let population = null;
let levelDrawn = false;


let startingPlayerActions = 5;
let increaseActionsByAmount = 5;
let increaseActionsEveryXGenerations = 10;
let evolationSpeed = 1;

let quickJump = true;
var shoot = 0;
var reload = false;
var currentTime;



function preload() {
    backgroundImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/geonosis_pixel.png?v=1653500412607')
    idleImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_idle.png?v=1653191491609')
    squatImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_squat.png?v=1653192253501')
    jumpImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_jump.png?v=1653192860784')
    oofImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_oof.png?v=1653193052378')
    run1Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run1.png?v=1653191491610')
    run2Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run2.png?v=1653191491610')
    run3Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run3.png?v=1653248643453')
    run4Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run4.png?v=1653248643453')
    run5Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run5.png?v=1653248643453')
    run6Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run6.png?v=1653248643453')
    run7Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run7.png?v=1653248643453')
    run8Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run8.png?v=1653248643453')
    run9Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run9.png?v=1653248643930')
    run10Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run10.png?v=1653248643453')
    run11Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run11.png?v=1653269845592')
    run12Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run12.png?v=1653269845592')
    run13Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run13.png?v=1653446529788')
    run14Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run14.png?v=1653446529865')
    run15Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run14.png?v=1653446529865')
    run16Image = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_run16.png?v=1653446529962')
    shootImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_shooting.png?v=1653191491610')
    fallenImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/test-1.png?v=1653193426640')
    fallImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_fall.png?v=1653193117383')


    snowImage = loadImage('images/snow3.png')
    for (let i = 1; i <= 43; i++) {
        if(i==1){levelImages.push(backgroundImage)}else if(i==2){
          levelImages.push(loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/c96556ea-4320-4be0-86c9-764edc216ffe.image.png?v=1653511418507'))
        //levelImages.push(loadImage('images/levelImages/' + i + '.png'))
        }
    }

    jumpSound = loadSound('sounds/jump.mp3')
    fallSound = loadSound('sounds/fall.mp3')
    bumpSound = loadSound('sounds/bump.mp3')
    landSound = loadSound('sounds/land.mp3')
    shootSound = loadSound('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/Star%20Wars%20Blaster%20sound%20effect.mp3?v=1653246868790')


}


function setup() {
    settingUp = true;
    setupCanvas();
    player = new Player();
    population = new Population(600);
    setupLevels();
    jumpSound.playMode('sustain');
    fallSound.playMode('sustain');
    bumpSound.playMode('sustain');
    landSound.playMode('sustain');
    shootSound.playMode('sustain');

    // lines.push(new Line(200,height - 80,width - 200, height-80));
    // lines.push(new Line(10,height - 500,200, height-500));
    // lines.push(new Line(200,height - 100,200, height-500));


}

function drawMousePosition() {
    let snappedX = mouseX - mouseX % 20;
    let snappedY = mouseY - mouseY % 20;
    push();


    fill(64, 136, 120)
    noStroke();
    ellipse(snappedX, snappedY, 5);

    if (mousePos1 != null) {
        stroke(64, 136, 120)
        strokeWeight(5)
        line(mousePos1.x, mousePos1.y, snappedX, snappedY)
    }

    pop();
}

let levelNumber = 0;

function draw() {
    background(10);
    if(!window.focused){
      for(var i = 0;i<=shoot;i++){
        clearInterval(i)
      }
      player.jumpHeld = false
    }


    // if(frameCount % 5==0 ){
    //
    //     levelNumber  = (levelNumber +1)%43;
    // }
    // image(backgroundImage,0,0);
    // if (!creatingLines) {

    //     if (!placingPlayer || playerPlaced) {
    //
    //         player.Update();
    //         player.Show();
    //     }
    // } else {
    //     image(levelImages[levelNumber], 0, 0)
    // }
    push()
    translate(0, 50);
    if (testingSinglePlayer) {
        image(levels[player.currentLevelNo].levelImage, 0, 0)
        levels[player.currentLevelNo].show();
        player.Update();
        player.Show();
    if(multiplayer){
      for(var i = 0;i<playersOnline.length;i++){
          playersOnline[i].Update()
          playersOnline[i].Show();
      }
      }
    } else if(replayingBestPlayer) {
        if(!cloneOfBestPlayer.hasFinishedInstructions){
            for (let i = 0; i < evolationSpeed; i++){
                cloneOfBestPlayer.Update()
            }

            showLevel(cloneOfBestPlayer.currentLevelNo);
            alreadyShowingSnow = false;
            cloneOfBestPlayer.Show();
        }else{
            replayingBestPlayer = false;
            mutePlayers = true;
        }

    }else{
        if (population.AllPlayersFinished()) {
            population.NaturalSelection();
            if (population.gen % increaseActionsEveryXGenerations === 0) {
                population.IncreasePlayerMoves(increaseActionsByAmount);
            }
        }
        for (let i = 0; i < evolationSpeed; i++)
            population.Update()
        population.Show();

    }


    if (showingLines || creatingLines)
        showLines();

    if (creatingLines)
        drawMousePosition();


    if (frameCount % 15 === 0) {
        previousFrameRate = floor(getFrameRate())
    }

    pop();

    fill(0);
    noStroke();
    rect(0, 0, width, 50);
    if(!testingSinglePlayer){
        textSize(32);
        fill(255, 255, 255);
        text('FPS: ' + previousFrameRate, width - 160, 35);
        text('Gen: ' + population.gen, 30, 35);
        text('Moves: ' + population.players[0].brain.instructions.length, 200, 35);
        text('Best Height: ' + population.bestHeight, 400, 35);
    }
    
  
  //added by me
	for (var i = 0; i < bulletsFired.length; i++){
		bulletsFired[i].display();
		bulletsFired[i].update();
		if (bulletsFired[i].outOfBounds()){
      		bulletsFired.splice(i,1);
    	}
		/*else if (bulletsFired[i].hitScan()){
      		bulletsFired.splice(i,1);
    	}*/
	}
  socket.emit('update',{'x': player.currentPos.x.toString(),'y':player.currentPos.y.toString(),'red':r,'green':g,'blue':b,'index':total-1})
}

let previousFrameRate = 60;

function showLevel(levelNumberToShow) {
    // print(levelNumberToShow)
    // image(levels[levelNumberToShow].levelImage, 0, 0)
    levels[levelNumberToShow].show();
}

function showLines() {
    if (creatingLines) {
        for (let l of lines) {
            l.Show();
        }
    } else {

        for (let l of levels[player.currentLevelNo].lines) {
            l.Show();
        }

    }

}

function outputLines() {
  lmao='';
  lmao = lmao + `levels.push(temp([`
  for(var i=0;i<lines.length;i++){
    if(i!=lines.length){
        var lmao = lmao + `[${lines[i].x1}, ${lines[i].y1}, ${lines[i].x2}, ${lines[i].y2}],\n`
      }else{
        var lmao = lmao + `[${lines[i].x1}, ${lines[i].y1}, ${lines[i].x2}, ${lines[i].y2}]\n`
      }
  };
  lmao = lmao + `]));`
  return lmao
}


function setupCanvas() {
    canvas = createCanvas(1200, 950);
    canvas.parent('canvas');
    width = canvas.width;
    height = canvas.height - 50;
    if(screen.height<950){
       document.body.style.zoom = "77.5%";//dosen't work on firefox
    }
}


function keyPressed() {
    switch (key) {
        case 'Z':
            player.jumpHeld = true;
            quickJump = true;
            setTimeout(function(){quickJump = false},1000)
            break;
        case 'X':
            player.shooting = true;
            if(!reload){
              player.shoot()
              reload = true;
            }else{
              reload = false;
              setTimeout(function(){player.shoot();console.log('bruh')},475)
            }
              if(!player.falling && !player.jumpHeld && !player.hasFallen){
                shoot = setInterval(function(){
                  if(!player.isOnGround || player.jumpHeld || player.hasFallen) return;
                  player.shoot();
                },475)//firerate of the gun
              }if(player.hasFallen){
                player.hasFallen = false;
              }
            break;
      case 'L':
        L()
      case 'E':
        L()
        for(var i = 0;i<levels[levelNumber].lines.length;i++){
          lines.push(levels[levelNumber].lines[i])
        }
    }

    switch (keyCode) {
        case LEFT_ARROW:
            player.leftHeld = true;
            break;
        case RIGHT_ARROW:
            player.rightHeld = true;
            break;
        case UP_ARROW:
            player.upHeld = true;
            break;
        case DOWN_ARROW:
            player.downHeld = true;
            break;
        case 32:
          //testingSinglePlayer = false
          break;
      case 16:
        player.Dash()
        break;
      case 27:
        colored = true;
        break;
      case 13:
        if(creatingLines){
          document.body.innerHTML += `<p>Cool you made ${lines.length} lines and took ${seconds()} seconds. You also have ${checkUnstableLines(lines)} lines that aren't stable (because of the angle they are at) :O</p><center><textarea style="width:100%;height:1080px;position:absolute;top:0;left:0;margin:0;padding:0;">${outputLines()}</textarea><center>`
        }
    }
}
function checkUnstableLines(pointes){
  for(var i=0;i<pointes.length;i++){
    var unstable = 0;
    if(!Math.abs(pointes[i].x1-pointes[i].x2)==Math.abs(pointes[i].y1-pointes[i].y2/*a diagonal line*/ || !pointes[i].x1 == pointes[i].x2 || !pointes[i].y1 == pointes[i].y2)){
      unstable+=1
    }
    if(unstable>0) return unstable
    return 0
  }
}
replayingBestPlayer = false;
cloneOfBestPlayer = null;



function seconds(){var newDate = new Date();(newDate.getTime() - currentTime)/1000}

function keyReleased() {

    switch (key) {
        case 'Z':
              if(quickJump){
                minJumpSpeed = 8;
              }
              player.jumpHeld = false
              player.Jump()
              minJumpSpeed = 5;
            break;
        case 'U':
              if(creatingLines) {
                lines.pop()
              }
              break;
        case 'R':
            if (creatingLines) {
                lines = [];
                linesString = "";
                mousePos1 = null;
                mousePos2 = null;
            }
            break;
        case 'N':
            if (creatingLines) {
                levelNumber += 1;
                linesString += '\nlevels.push(tempLevel);';
                linesString += '\ntempLevel = new Level();';
                print(linesString);
                lines = [];
                linesString = '';
                mousePos1 = null;
                mousePos2 = null;
            } else {
                player.currentLevelNo += 1;
                print(player.currentLevelNo);
            }
            break;
        case 'D':
            if (creatingLines) {
                mousePos1 = null;
                mousePos2 = null;
            }
        break;
      case 'X':
        player.shooting = false;
        for(var i = 0;i<=shoot;i++){
          clearInterval(i)
        }
        break;
    }

    switch (keyCode) {
        case LEFT_ARROW:
            player.leftHeld = false;
            break;
        case RIGHT_ARROW:
            player.rightHeld = false;
            break;
        case UP_ARROW:
            player.upHeld = false;
            break;
        case DOWN_ARROW:
            player.downHeld = false;
            break;
    }
}


let mousePos1 = null;
let mousePos2 = null;
let linesString = "";

function mouseClicked() {
    if (creatingLines) {
        let snappedX = mouseX - mouseX % 20;
        let snappedY = mouseY - mouseY % 20;
        if (mousePos1 == null) {
            mousePos1 = createVector(snappedX, snappedY);
        } else {
            mousePos2 = createVector(snappedX, snappedY);
            // print('tempLevel.lines.push(new Line(' + mousePos1.x + ',' + mousePos1.y + ',' + mousePos2.x + ',' + mousePos2.y + '));');
            lines.push(new Line(mousePos1.x, mousePos1.y, mousePos2.x, mousePos2.y));
            linesString += '\ntempLevel.lines.push(new Line(' + mousePos1.x + ',' + mousePos1.y + ',' + mousePos2.x + ',' + mousePos2.y + '));';
            mousePos1 = null;
            mousePos2 = null;
        }
    } else if (placingPlayer && !playerPlaced) {
        playerPlaced = true;
        player.currentPos = createVector(mouseX, mouseY);


    } else if (placingCoins) {


    }
    print("levels[" + player.currentLevelNo + "].coins.push(new Coin( " + floor(mouseX) + "," + floor(mouseY - 50) + ' , "progress" ));');
}
function L(){
        document.body.style.zoom = 1;
        const newDate = new Date();
        currentTime = newDate.getTime();
        creatingLines = true;
        showingLines = false;
        document.getElementsByTagName('input')[0].style.display = 'none';
        colored = false;
  document.getElementById("defaultCanvas0").addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    getLine()
    return false;
}, false);
}
function rebuild(points){
  var newLines = []
  var pointsArray = points.split('\n');
  for(var i=0;i<pointsArray.length;i++){
    var poi = pointsArray[i]
    newLines.push(poi.substring(poi.lastIndexOf('(')+1,poi.lastIndexOf(')')-1))
  }
  return newLines;
}
function rebuilt(points){
  var newPoint = 'levels.push(temp([';
  for(var i=0;i<rebuild(points).length;i++){
    if(i == rebuild(points).length-1){    newPoint = newPoint + `[${rebuild(points)[i]}]`}else{
      newPoint = newPoint + `[${rebuild(points)[i]}],`
    }
  }
  var newPoint = newPoint + ']));';
  return newPoint;
}

var approX, approY;
function getLine(){
for (var i = 0; i < levels[0].lines.length; i++) {
  approX = mouseX;
  approY = mouseY;
  if (
    Math.abs((levels[0].lines[i].x1 + levels[0].lines[i].x2) / 2 - approX) <
      10 ||
    Math.abs((levels[0].lines[i].y1 + levels[0].lines[i].y2) / 2 - approY) < 10
  ) {
    console.log(i);
  }
}}

function testMulti() {
  multiplayer = true;
  for(var i;i<playersOnline.length;i++){
  setInterval(function () {
    if (Math.random() > 0.5 || Math.random() > 0.5) {
      if (Math.random() > 0.5) {
        var value = -10 + Math.random() * 20;
        if(value != Math.abs(value)){playersOnline[i].facingRight = false}else{playersOnline[i].facingRight = true}
        playersOnline[i].currentPos.x += value;
      }
    }
  }, 40);
  }
}

//todo
// things to do
// - when a player lands in a new level, record the game state and start the next evolution at that point DONE
// - when a player falls into a previous level, end the players movements, and mutate that move which fucked them up with a 100% chance
// fix landing logic so it checks below maybe, or it checks after all the corrections are done that there is still something below it. actually lets do that now. i dont knwo why im still typing this


// - add a player replay, we could also include a generation replay, thats probably it
// - maybe consider adding a goal system for really hard levels.
