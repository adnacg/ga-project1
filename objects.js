function Character(picture) {
    this.picture = picture;
}

function Era(scenes) {
    this.scenes = scenes;
}

function Scene(dialogues, backgroundImage) {
    this.dialogues = dialogues;
    this.backgroundImage = backgroundImage;

    this.setup = function() {
        container.style.background = "url(" + this.backgroundImage + ")";
    };
}

function Dialogue(sentence, location, character=undefined, createCustomElements=undefined, deleteCustomElements=undefined) {
    this.sentence = sentence;
    this.character = character;
    this.location = location;

    this.createCustomElements = createCustomElements;
    this.deleteCustomElements = deleteCustomElements;

    this.display = function(){
        this.location.style.display = "flex";
        this.location.innerHTML = this.sentence;
        if (this.location.className == "bottomDiv") {
            topDiv.style.display = "flex";
        }
        rightDiv.style.display = "flex";
        leftDiv.style.display = "flex";

        if (character) {
            characterImg.style.display = "flex";
            characterImg.src = this.character.picture;
        }
    };

    this.clear = function() {

        topDiv.style.display = "none";
        leftDiv.style.display = "none";
        rightDiv.style.display = "none";
        characterImg.style.display = "none";
        this.location.style.display = "none";
        this.location.innerHTML = "none";

    };
}