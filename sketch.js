let width = 0;
let height = 0;
let canvas = null;

let player = null;
let lines = [];
let backgroundImage = null;


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
let showingLines = false;
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

let snowImage = null;


let population = null;
let levelDrawn = false;


let startingPlayerActions = 5;
let increaseActionsByAmount = 5;
let increaseActionsEveryXGenerations = 10;
let evolationSpeed = 1;




function preload() {
    backgroundImage = loadImage('images/levelImages/1.png')
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
    shootImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_shooting.png?v=1653191491610')
    fallenImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/test-1.png?v=1653193426640')
    fallImage = loadImage('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/storm%20trooper_fall.png?v=1653193117383')


    snowImage = loadImage('images/snow3.png')

    for (let i = 1; i <= 43; i++) {
        levelImages.push(loadImage('images/levelImages/' + i + '.png'))
    }

    jumpSound = loadSound('sounds/jump.mp3')
    fallSound = loadSound('sounds/fall.mp3')
    bumpSound = loadSound('sounds/bump.mp3')
    landSound = loadSound('sounds/land.mp3')
    shootSound = loadSound('https://cdn.glitch.global/c8cc34e8-4a73-49ca-b4f1-6c80820f6e24/Star%20Wars%20Blaster%20sound%20effect.mp3?v=1653246868790')


}


function setup() {
    setupCanvas();
    player = new Player();
    population = new Population(600);
    setupLevels();
    jumpSound.playMode('sustain');
    fallSound.playMode('sustain');
    bumpSound.playMode('sustain');
    landSound.playMode('sustain');

    // lines.push(new Line(200,height - 80,width - 200, height-80));
    // lines.push(new Line(10,height - 500,200, height-500));
    // lines.push(new Line(200,height - 100,200, height-500));


}

function drawMousePosition() {
    let snappedX = mouseX - mouseX % 20;
    let snappedY = mouseY - mouseY % 20;
    push();


    fill(255, 0, 0)
    noStroke();
    ellipse(snappedX, snappedY, 5);

    if (mousePos1 != null) {
        stroke(255, 0, 0)
        strokeWeight(5)
        line(mousePos1.x, mousePos1.y, snappedX, snappedY)
    }

    pop();
}

let levelNumber = 0;

function draw() {
    background(10);


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
        // population.Update()
        // population.Update()
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


function setupCanvas() {
    canvas = createCanvas(1200, 950);
    canvas.parent('canvas');
    width = canvas.width;
    height = canvas.height - 50;
}


function keyPressed() {
    switch (key) {
        case 'Z':
            player.jumpHeld = true
            break;
        case 'R':
            population.ResetAllPlayers()
            break;
        case 'S':
            bumpSound.stop();
            jumpSound.stop();
            landSound.stop();
            fallSound.stop();
            break;
        case 'X':
            shooting = true;
            player.shoot();
            break;
    }

    switch (keyCode) {
        case LEFT_ARROW:
            player.leftHeld = true;
            break;
        case RIGHT_ARROW:
            player.rightHeld = true;
            break;
    }

}
replayingBestPlayer = false;
cloneOfBestPlayer = null;



function keyReleased() {

    switch (key) {
        case 'B':
            replayingBestPlayer = true;
            cloneOfBestPlayer = population.cloneOfBestPlayerFromPreviousGeneration.clone();
            evolationSpeed = 1;
            mutePlayers = false;
            break;


        case 'Z':

            if (!creatingLines) {
                player.jumpHeld = false
                player.Jump()
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
      case 'X':
          if(shooting){
            console.log('stop shooting')
          }
    }

    switch (keyCode) {
        case LEFT_ARROW:
            player.leftHeld = false;
            break;
        case RIGHT_ARROW:
            player.rightHeld = false;
            break;
        case DOWN_ARROW:
            evolationSpeed = constrain(evolationSpeed - 1, 0, 50);
            print(evolationSpeed)

            break;
        case UP_ARROW:
            evolationSpeed = constrain(evolationSpeed + 1, 0, 50);
            print(evolationSpeed)
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

//todo
// things to do
// - when a player lands in a new level, record the game state and start the next evolution at that point DONE
// - when a player falls into a previous level, end the players movements, and mutate that move which fucked them up with a 100% chance
// fix landing logic so it checks below maybe, or it checks after all the corrections are done that there is still something below it. actually lets do that now. i dont knwo why im still typing this


// - add a player replay, we could also include a generation replay, thats probably it
// - maybe consider adding a goal system for really hard levels.
