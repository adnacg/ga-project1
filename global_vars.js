// reference to each div (for easy access)
var container = document.getElementById('container');
var topDiv = document.querySelector('.topDiv');
var leftDiv = document.querySelector('.leftDiv');
var centerDiv = document.querySelector('.centerDiv');
var rightDiv = document.querySelector('.rightDiv');
var bottomDiv = document.querySelector('.bottomDiv');
var watch = document.getElementById('watch');
var characterImg = document.getElementById('characterImg');

// create placeholder for scene introduction messages to player
var sceneIntroMsg = document.createElement('p');
sceneIntroMsg.className = 'sceneIntroMsg';
sceneIntroMsg.style.display = "none";
var userImg1 = document.createElement("img");
userImg1.id = "woman";
userImg1.src = "images/character/woman.jpg";
var userImg2 = document.createElement("img");
userImg2.id = "robot";
userImg2.src = "images/character/robot.jpg";
var userImg3 = document.createElement("img");
userImg3.id = "man";
userImg3.src = "images/character/man.jpg";
centerDiv.appendChild(sceneIntroMsg);
centerDiv.appendChild(userImg1);
centerDiv.appendChild(userImg2);
centerDiv.appendChild(userImg3);

var currentEraIdx;
var currentSceneIdx;
var currentDialogueIdx;
var freezeNextButton = false;
var gameEnd = false;
var loseCount = 0;
var maxLostGames = 2;
var buttonDelay = 1000;

// create "next scene" button
var nextButton = document.createElement('input');
nextButton.type = 'button';
nextButton.value = 'Next';
nextButton.className = 'nextButton';
rightDiv.appendChild(nextButton);


// create "restart game" button
var restartButton = document.createElement('input');
restartButton.type = 'button';
restartButton.value = 'Restart';
restartButton.className = 'restartButton';
rightDiv.appendChild(restartButton);
