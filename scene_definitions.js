function Character(name, era, picture) {
    this.name = name;
    this.era = era;
    this.picture = picture;
}

function Era(name, next) {
    this.name = name;
    this.next = next;
}

function Scene(name, era, backgroundImage, next) {
    this.name = name;
    this.era = era;
    this.backgroundImage = backgroundImage;
    this.next = next;

    this.setup = function() {
        container.style.background = "url(" + this.backgroundImage + ")";
    }
}

function Dialogue(sentence, scene, next, character, location, run) {
    this.sentence = sentence;
    this.scene = scene;
    this.next = next;
    this.character = character;
    this.location = location;

    this.run = run;
}

// function Scene(nextSceneId, runSceneFunction) {
//     this.nextSceneId = nextSceneId;
//     this.runScene = runSceneFunction;
// }



// var erasList = {
// var scenesList = {
// var dialoguesList = {
var scenesList = {
    "enterGame": new Scene("sceneIntroOne", enterGame),
    "sceneIntroOne": new Scene("sceneIntroTwo", runSceneIntroOne),
    "sceneIntroTwo": new Scene("sceneIntroThree", runSceneIntroTwo),
    "sceneIntroThree": new Scene("sceneIntroFour", runSceneIntroThree),
    "sceneIntroFour": new Scene("sceneIntroFive", runSceneIntroFour),
    "sceneIntroFive": new Scene("moulinOne", runSceneIntroFive),
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
    "barEight": new Scene("barNine", runBarEight),
    "barNine": new Scene("barTen", runBarNine),
    "barTen": new Scene("barEleven", runBarTen),
    "barEleven": new Scene("barTwelve", runBarEleven),
    "barTwelve": new Scene("barThirteen", runBarTwelve),
    "barThirteen": new Scene("barFourteen", runBarThirteen),
    "barFourteen": new Scene("gameFive", runBarFourteen),
    "gameFive": new Scene("restaurantOne", runGameFive),
    "restaurantOne": new Scene("restaurantTwo", runRestaurantOne),
    "restaurantTwo": new Scene("restaurantThree", runRestaurantTwo),
    "restaurantThree": new Scene("restaurantFour", runRestaurantThree),
    "restaurantFour": new Scene("restaurantFive", runRestaurantFour),
    "restaurantFive": new Scene("restaurantSix", runRestaurantFive),
    "restaurantSix": new Scene("restaurantSeven", runRestaurantSix),
    "restaurantSeven": new Scene("restaurantEight", runRestaurantSeven),
    "restaurantEight": new Scene("restaurantNine", runRestaurantEight),
    "restaurantNine": new Scene("restaurantTen", runRestaurantNine),
    "restaurantTen": new Scene("restaurantEleven", runRestaurantTen),
    "restaurantEleven": new Scene("restaurantTwelve", runRestaurantEleven),
    "restaurantTwelve": new Scene("gameSix", runRestaurantTwelve),
    "gameSix": new Scene("changeEraTwo", runGameSix),

    "changeEraTwo": new Scene("changeEraTwoMsg", runChangeEraTwo),
    "changeEraTwoMsg": new Scene("endingOne", runChangeEraTwoMsg),
    "endingOne": new Scene("endingTwo", runEndingOne),
    "endingTwo": new Scene("endingThree", runEndingTwo),
    "endingThree": new Scene("endingFour", runEndingThree),
    "endingFour": new Scene("", runEndingFour),

}





