function Scene(nextSceneId, runSceneFunction) {
    this.nextSceneId = nextSceneId;
    this.runScene = runSceneFunction;
}

var scenesList = {
    "enterGame": new Scene("sceneIntroOne", enterGame),
    "sceneIntroOne": new Scene("sceneIntroTwo", runSceneIntroOne),
    "sceneIntroTwo": new Scene("sceneIntroThree", runSceneIntroTwo),
    "sceneIntroThree": new Scene("moulinOne", runSceneIntroThree),
    "moulinOne": new Scene("moulinTwo", runMoulinOne),
    "moulinTwo": new Scene("moulinThree", runMoulinTwo),
    "moulinThree": new Scene("moulinFour", runMoulinThree),
    "moulinFour": new Scene("gameOne", runMoulinFour),
    "gameOne": new Scene("moulinFive", runGameOne),
    "moulinFive": new Scene("moulinSix", runMoulinFive),
    "moulinSix": new Scene("moulinSeven", runMoulinSix),
    "moulinSeven": new Scene("gameTwo", runMoulinSeven),
    "gameTwo": new Scene("moulinEight", runGameTwo),
    "moulinEight": new Scene("gameThree", runMoulinEight),
    "gameThree": new Scene("changeEra", runGameThree),
    "changeEra": new Scene("changeEraMsg", runChangeEra),
    "changeEraMsg": new Scene("barOne", runChangeEraMsg),
    "barOne": new Scene("barTwo", runBarOne),
    "barTwo": new Scene("barThree", runBarTwo),
    "barThree": new Scene("barFour", runBarThree),
    "barFour": new Scene("barFive", runBarFour),
    "barFive": new Scene("barSix", runBarFive),
    "barSix": new Scene("barSeven", runBarSix),
    "barSeven": new Scene("gameFour", runBarSeven),
    "gameFour": new Scene("barEight", runGameFour),
}