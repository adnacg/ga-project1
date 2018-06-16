currentEraIdx = 0;
currentSceneIdx = 0;
currentDialogueIdx = -1;

// eras[currentEraIdx].scenes[currentSceneIdx].dialogues[currentDialogueIdx].display();

var gameStep = function() {
    if (!freezeNextButton) {

        freezeNextButton = true;
        nextButton.style.backgroundColor = "#e2dfb5";
        setTimeout(function() {
            freezeNextButton = false;
            nextButton.style.backgroundColor = "#ddce5d";
        }, 2000);

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

nextButton.addEventListener('click', gameStep);
restartButton.addEventListener('click', restartGame);

