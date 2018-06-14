var lastSceneTransition = new Date();

// reference to each div (for easy access)
var container = document.getElementById('container');
var topDiv = document.querySelector('.topDiv');
var leftDiv = document.querySelector('.leftDiv');
var centerDiv = document.querySelector('.centerDiv');
var rightDiv = document.querySelector('.rightDiv');
var bottomDiv = document.querySelector('.bottomDiv');
var watch = document.getElementById('watch');

// create placeholder for scene introduction messages to player
var sceneIntroMsg = document.createElement('p');
sceneIntroMsg.className = 'sceneIntroMsg';
sceneIntroMsg.style.display = "none";
centerDiv.appendChild(sceneIntroMsg);

var firstGameWin = 0;
var secondGameWin = 0;
var thirdGameWin = 0;

var currentScene = scenesList["enterGame"];
var setNextScene = function() {
    var currentTime = new Date();
    if ((currentTime.getTime() - lastSceneTransition.getTime()) > 2000) {
        currentScene = scenesList[currentScene.nextSceneId];
        currentScene.runScene();
        lastSceneTransition = currentTime;
    }
}

// create "next scene" button
var nextButton = document.createElement('input');
nextButton.type = 'button';
nextButton.value = 'Next';
nextButton.className = 'nextButton';
nextButton.addEventListener('click', setNextScene);
rightDiv.appendChild(nextButton);


// var userAnswerYes = document.createElement('input');
// userAnswerYes.type = 'button';
// userAnswerYes.value = 'Yes';
// userAnswerYes.className = 'userAnswer';
// var userAnswerNo = document.createElement('input');
// userAnswerNo.type = 'button';
// userAnswerNo.value = 'No';
// userAnswerNo.className = 'userAnswer';
// rightDiv.appendChild(userAnswerYes);
// rightDiv.appendChild(userAnswerNo);


