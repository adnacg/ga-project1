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
centerDiv.appendChild(sceneIntroMsg);

var currentEraIdx;
var currentSceneIdx;
var currentDialogueIdx;
var freezeNextButton = false;
var gameEnd = false;
var loseCount = 0;
var maxLostGames = 2;
var buttonDelay = 1500;

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
