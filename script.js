currentEraIdx = 0;
currentSceneIdx = 0;
currentDialogueIdx = -1;

var gameStep = function() {
    if (!freezeNextButton) {

        freezeNextButton = true;
        nextButton.style.color = "#D5BF86";
        setTimeout(function() {
            freezeNextButton = false;
            nextButton.style.color = "#000";
        }, buttonDelay);

        var currentEra = eras[currentEraIdx];
        var currentScene = currentEra.scenes[currentSceneIdx];
        var currentDialogue = currentScene.dialogues[currentDialogueIdx];

        // Clear all elements created by previous dialogue
        if (currentDialogueIdx >= 0) {
            currentDialogue.clear();
            if(currentDialogue.deleteCustomElements) {
                currentDialogue.deleteCustomElements();
            }
        } else {
            bottomDiv.style.display = 'none';
            nextButton.style.display = 'flex';
        }

        // Update the "current" dialogue
        currentDialogueIdx++;
        if (currentDialogueIdx >= currentScene.dialogues.length) {
            currentDialogueIdx = 0;
            currentSceneIdx++;
            if (currentSceneIdx >= currentEra.scenes.length) {
                currentSceneIdx = 0;
                currentEraIdx++;
                if (currentEraIdx >= eras.length) {
                    return;
                } else {
                    currentEra = eras[currentEraIdx];
                    currentScene = currentEra.scenes[currentSceneIdx];
                    currentScene.setup();
                    currentDialogue = currentScene.dialogues[currentDialogueIdx];
                }
            } else {
                currentScene = currentEra.scenes[currentSceneIdx];
                currentScene.setup();
                currentDialogue = currentScene.dialogues[currentDialogueIdx];
            }
        } else {
            currentDialogue = currentScene.dialogues[currentDialogueIdx];
        }

        // Create all elements for the new dialogue
        currentDialogue.display();
        if(currentDialogue.createCustomElements) {
            currentDialogue.createCustomElements();
        }
    }
}

var restartGame = function() {
    location.reload();
}

var chooseCharacter = function() {
    you.picture = "images/character/" + this.id + ".jpg";
    gameStep();
}

userImg1.addEventListener('click', chooseCharacter);
userImg2.addEventListener('click', chooseCharacter);
userImg3.addEventListener('click', chooseCharacter);
nextButton.addEventListener('click', gameStep);
restartButton.addEventListener('click', restartGame);

