var canvas;
var database, gameState;
var form, player, playerCount;
var allPlayers, rocket1, rocket2, obstacles;
var rockets = [];

function preload() {
  rocket_Img = loadImage("assets/rocket2.png");
  alien_Img = loadImage("assets/alien.png");
  shooter_Img = loadImage("asstes/R.png");
  asteroid_Img = loadImage("asstes/asteroid.png");
  backgroundImage = loadImage("assets/space.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
