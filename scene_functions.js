///////////////////////////////////////////////////////////////////
// INTRO SCENES
///////////////////////////////////////////////////////////////////


var enterGame = function() {
    bottomDiv.style.display = 'none';
    sceneIntroMsg.innerHTML = 'Strolling along the seemingly endless streets in Paris,<br>you are in deep thoughts about the disatisfactions of the present.<br><br>You pass by a nostagic antique store and are drawn to enter it...<br><br>and you did...';
    sceneIntroMsg.style.display = 'flex';
    nextButton.style.display = 'flex';
}


var runSceneIntroOne = function() {
    if (sceneIntroMsg) {
        sceneIntroMsg.innerHTML = 'You are attracted to a particular old pocket watch...<br><br>So you buy it... and leave the store.';
    }
    watch.style.display = 'flex';
}


var runSceneIntroTwo = function() {
    if (sceneIntroMsg) {
        sceneIntroMsg.innerHTML = 'As you walk out of the store, the watch suddenly shines so bright that you have to shut your eyes!';
    }

    sceneIntroMsg.style.backgroundColor = 'transparent';
    sceneIntroMsg.style.color = 'transparent';

    var reappear = function() {
        watch.style.boxShadow = '0 0 90px 1000px #fff, 0 0 200px 300px #ece20a';
        sceneIntroMsg.style.color = '#000';
    }

    setTimeout(reappear, 1000);
}


var runSceneIntroThree = function() {
    if (sceneIntroMsg) {
        sceneIntroMsg.innerHTML = 'As you start to open your eyes again,<br>the surrounding seems... different!<br><br>Feeling puzzled, you look at the watch.<br>Instead of time, it is showing 1890!';
    }

    container.style.background = 'url(images/renaissance.png)';
    sceneIntroMsg.style.color = 'transparent';
    watch.style.boxShadow = '0 0 40px 10px #fff';

    var reappear = function() {
        sceneIntroMsg.style.backgroundColor = '#000';
        sceneIntroMsg.style.color = '#fff';
    }

    setTimeout(reappear, 2000);
}


///////////////////////////////////////////////////////////////////
// BELLE EPOQUE SCENES
///////////////////////////////////////////////////////////////////

var runMoulinOne = function() {
    watch.style.display = 'none';

    if (sceneIntroMsg) {
        sceneIntroMsg.innerHTML = 'You wonder around and walk into the Moulin Rouge, as you are amazed by the dancing scene, you spot one of your favourite artists of all time<br><br>- Henri Toulouse-Lautrec!';
    }
}

var runMoulinTwo = function() {
    centerDiv.style.display = 'none';
    topDiv.style.display = 'flex';
    topDiv.style.backgroundColor = '#000';
    topDiv.style.opacity = '0.8';
    bottomDiv.style.backgroundColor = '#000';
    bottomDiv.style.display = 'flex';
    bottomDiv.style.textAlign = 'center';
    bottomDiv.innerHTML = 'You: Hi Mr. Toulouse-Lautrec, I am such a big fan! Your paintings are amazing.<br>Why did..ahem do you especially love to paint these shows?';
}

var runMoulinThree = function() {
    watch.style.display = 'flex';
    watch.src = 'images/character/henri.jpg';
    bottomDiv.innerHTML = "Henri: I paint things as they are. A woman's body is not made for love, it is too exquisite!<br><br>You: I agree.";
}

var runMoulinFour = function() {
    bottomDiv.innerHTML = '';
    bottomDiv.innerHTML = 'Henri: Would you like to play a game?';
}

var runGameOne = function() {

    var gameBoard = document.getElementById("game-board");
    var win = false;
    var maxDuration = 30; // seconds

    nextButton.style.display = 'none';
    watch.style.display = 'none';
    bottomDiv.innerHTML = 'Henri: Please match all my paintings within 30 seconds.';

    var cardsInPlay = [];
    var failedMatch = [];
    var matchCount = 0;

    var cards = [
        { rank: "moulinOne", cardImage: "images/henri/atmoulin.jpg"},
        { rank: "moulinFive", cardImage: "images/henri/thedance.jpg"},
        { rank: "moulinTwo", cardImage: "images/henri/lagouluemoulin.jpg"},
        { rank: "moulinThree", cardImage: "images/henri/moulinquadrille.jpg"},
        { rank: "moulinFour", cardImage: "images/henri/salonmoulins.jpg"},
        { rank: "moulinTwo", cardImage: "images/henri/lagouluemoulin.jpg"},
        { rank: "moulinFour", cardImage: "images/henri/salonmoulins.jpg"},
        { rank: "moulinThree", cardImage: "images/henri/moulinquadrille.jpg"},
        { rank: "moulinOne", cardImage: "images/henri/atmoulin.jpg"},
        { rank: "moulinFive", cardImage: "images/henri/thedance.jpg"}
        ];

    var exitGame = function() {

        var cards = document.querySelectorAll(".cards");
        cards.forEach(function(card) {
            card.parentNode.removeChild(card);
        })
        gameBoard.style.display = 'none';

        watch.style.display = 'flex';
        watch.src = 'images/character/henri.jpg';

        if (win) {
            bottomDiv.innerHTML = 'Henri: You must be a true fan to recognise my work!';
        } else {
            bottomDiv.innerHTML = 'Henri: Well, at least you tried!';
        }

        nextButton.style.display = 'flex';
        timer.parentNode.removeChild(timer);
        clearInterval(gameClock);
    }

    var showBack = function() {
        failedMatch.forEach(function(card){
            card.src = "images/henri/back.jpg";
        })
        failedMatch = [];
    }

    var runGameRound = function() {

        // show front of the clicked card
        var cardId = this.getAttribute("data-id");
        var cardPicture = cards[cardId].cardImage;
        this.setAttribute("src", cardPicture);

        // Add the clicked card DOM element
        cardsInPlay.push(this);

        if (cardsInPlay.length < 2) {
            return;
        }

        failedMatch[0] = cardsInPlay[0];
        failedMatch[1] = cardsInPlay[1];

        var cardValue1 = cards[cardsInPlay[0].getAttribute("data-id")].rank;
        var cardValue2 = cards[cardsInPlay[1].getAttribute("data-id")].rank;
        if (cardValue1 == cardValue2) {
            bottomDiv.innerHTML = 'Henri: Very nice, you have gotten a match!';
            matchCount++;
        } else {
            bottomDiv.innerHTML = 'Henri: Try harder...';
            setTimeout(showBack, 1000);
        }
        cardsInPlay = [];

        if (matchCount == 5) {
            win = true;
            exitGame();
        }
    }

    var createBoard = function() {
        for (var i = 0; i < cards.length; i++) {
            var cardElement = document.createElement("img");
            cardElement.className = 'cards';
            cardElement.setAttribute("src", "images/henri/back.jpg");
            cardElement.setAttribute("data-id", i);
            cardElement.addEventListener("click", runGameRound);
            gameBoard.appendChild(cardElement);
        }
        gameBoard.style.display = 'flex';
    }

    createBoard();

    var seconds = 0
    var timer = document.createElement("p");
    timer.id = 'timer';
    topDiv.appendChild(timer);
    var gameClock = setInterval(function(){
        timer.innerHTML = seconds + ' seconds';
        seconds++;
        if (seconds > maxDuration) {
            exitGame();
        }
    }, 1000)
}

var runMoulinFive = function() {
    nextButton.style.display = 'flex';
    watch.src = 'images/character/degas.jpg';
    bottomDiv.innerHTML = '(Edgar Degas and Paul Gauguin saw your game and walked over...)<br><br>Degas: Well look at here Paul, what do you see?';
}

var runMoulinSix = function() {
    watch.src = 'images/character/gauguin.jpg';
    bottomDiv.innerHTML = 'Gauguin: I shut my eyes in order to see.';
}

var runMoulinSeven = function() {
    watch.src = 'images/character/degas.jpg';
    bottomDiv.innerHTML = 'Degas: Art is not what you see, but what you make others see.<br><br>Dear stranger, do you dare to see?';
}

var runGameTwo = function() {

    watch.style.display = 'none';
    nextButton.style.display = 'none';

    bottomDiv.innerHTML = 'Degas: Do you see the shapes?<br>Click on them in 5 seconds to make them disappear!';
    topDiv.innerHTML = 'Your time: <span id="timeTaken"></span>'

    var gameBoard = document.getElementById("game-board");
    gameBoard.style.display = 'flex';
    var shape = document.getElementById("shape");

    // get current time as start time
    var start = new Date().getTime();
    var timeTaken = document.getElementById("timeTaken");
    var counter = 0;
    var win = false;

    var exitGame = function() {
        gameBoard.style.display = 'none';
        topDiv.innerHTML = '';
        nextButton.style.display = 'flex';

        watch.style.display = 'flex';
        if (win) {
            bottomDiv.innerHTML = 'Degas: You truly can see.';
        } else {
            bottomDiv.innerHTML = 'Degas: Well, not all can see, certainly not all can make others see!';
        }
    }

    // to generate random colours
    var getRandomColour = function() {
        var letters = '0123456789ABCDEF'.split('');
        var colour = '#';
        for (var i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }

    var makeShapeAppear = function() {
        var top = Math.random() * 300;
        var left = Math.random() * 800 - 400;

        // avoid shape getting too small, set size range of 50-100px
        var width = (Math.random() * 50) + 50;

        // to make round and square shape appear half the time
        if (Math.random() > 0.5) {
            shape.style.borderRadius = "50%";
        } else {
            shape.style.borderRadius = "0";
        }

        // make shape in random colours
        shape.style.backgroundColor = getRandomColour();
        shape.style.top = top + "px";
        shape.style.left = left + "px";
        shape.style.width = width + "px";
        shape.style.height = width + "px";
        //to keep as squares
        shape.style.display = "block";

        // reset current time
        start = new Date().getTime();
    }

    // to avoid shape appearing too quickly
    var appearAfterDelay = function() {
        setTimeout(makeShapeAppear, Math.random() * 2000);
    }
    appearAfterDelay();

    // event listener to make the the shape disappear on click
    var makeShapeDisappear = function() {
        shape.style.display = 'none';
        var end = new Date().getTime();
        var calculateTimeTaken = (end - start) / 1000;
        timeTaken.innerHTML = calculateTimeTaken + " seconds";

        if (calculateTimeTaken > 5) {
            win = false;
            exitGame();
        }

        if (counter <= 10) {
            counter++;
            appearAfterDelay();
        } else {
            win = true;
            exitGame();
        }
    }

    shape.addEventListener('click', makeShapeDisappear);
}

// IF GAMEWIN IS 0, GAME END
//  CHECK IF TOTAL GAMEWIN IS 2, THEN GO TO NEXT ERA
// IF GAMEWIN IS 1, GO TO NEXT GAME

var runMoulinEight = function() {
    nextButton.style.display = 'flex';
    watch.src = 'images/character/coco.jpg';
    bottomDiv.innerHTML = '(Coco Chanel passes by and is pleasantly surprised by your talent)<br><br>Chanel: You seem to be very sensitive to shapes and colours - exactly the help I need!';
}

var runGameThree = function() {
    nextButton.style.display = 'none';
    watch.style.display = 'none';

    var gameBoard = document.getElementById("game-board");
    gameBoard.style.display = 'flex';
    var win = false;
    bottomDiv.innerHTML = 'Chanel: In order to be irreplaceable in fashion, one must dare to be different.<br><br>Can you help me to choose a logo for my fashion brand?';

    for (var i = 0; i < 8; i++) {
        var logoElement = document.createElement("img");
        logoElement.className = 'logos';
        logoElement.setAttribute("src", "images/logos/" + i + ".jpg");
        logoElement.setAttribute("data-id", i);
        gameBoard.appendChild(logoElement);
    }
    var allLogos = document.querySelectorAll(".logos");

    var exitGame = function() {
        nextButton.style.display = 'flex';
        allLogos.forEach(function(logo) {
            logo.parentNode.removeChild(logo);
        })

        watch.style.display = 'flex';
        gameBoard.style.display = 'none';
        if (win) {
            bottomDiv.innerHTML = 'Chanel: You sure have a fantastic taste, merci my dear!';
        } else {
            bottomDiv.innerHTML = 'Chanel: I do not appreciate this logo, what a shame...';
        }
    }

    var gameRound = function() {
        currentLogoId = this.getAttribute('data-id');
        if (currentLogoId == 6) {
            win = true;
        }
        exitGame();
    }

    allLogos.forEach(function(logo) {
        logo.addEventListener('click', gameRound);
    })
}

var runChangeEra = function() {
    bottomDiv.style.display = 'none';
    bottomDiv.innerHTML = '';
    watch.src = 'images/watch.jpg';
    watch.style.boxShadow = '0 0 90px 1000px #fff, 0 0 200px 300px #ece20a';
    nextButton.style.display = 'flex';
}

var runChangeEraMsg = function() {
    container.style.background = 'url(images/1920.jpg)';
    watch.style.boxShadow = '0 0 40px 10px #fff';
    var reappear = function() {
        centerDiv.style.display = 'flex';
        sceneIntroMsg.innerHTML = 'The watch shines again...!<br>This time, you see that the watchface seems to be a little different.<br><br>Wait... why are you in a bar?<br>Is it... 1920!?';
    }
    setTimeout(reappear, 2000);
}

///////////////////////////////////////////////////////////////////
// 1920 SCENES
///////////////////////////////////////////////////////////////////

var runBarOne = function() {
    centerDiv.style.display = 'none';
    sceneIntroMsg.innerHTML = '';
    watch.src = 'images/character/scott.jpg';
    bottomDiv.style.display = 'flex';
    bottomDiv.innerHTML = 'Scott: Hello my friend , you seem lost, are you lost?';
}

var runBarTwo = function() {
    watch.style.display = 'none';
    bottomDiv.innerHTML = 'You: ... I guess, I am just not exacly sure where I am?';
}

var runBarThree = function() {
    watch.style.display = 'flex';
    bottomDiv.innerHTML = 'Scott: Well my friend, you are at the biggest party in town!<br>I am Scott Fitzerald, and this is my wife, Zelda.';
}

var runBarFour = function() {
    watch.style.display = 'none';
    bottomDiv.innerHTML = 'You: ... You are THE Fitzgeralds!? This is so... so...';
}

var runBarFive = function() {
    watch.style.display = 'flex';
    watch.src = 'images/character/zelda.jpg';
    bottomDiv.innerHTML = 'Zelda: I know, this is so boring!<br>The party is boring, I am bored, he is bored, you are bored! Lets go somewhere else!';
}

var runBarSix = function() {
    watch.src = 'images/character/scott.jpg';
    bottomDiv.innerHTML = 'Scott: I know! Lets go to the race course!';
}

var runBarSeven = function() {
    watch.style.display = 'none';
    bottomDiv.innerHTML = 'You: I guess... ok then.';
}

var runGameFour = function() {
    nextButton.style.display = 'none';
    var gameBoard = document.getElementById("game-board");
    gameBoard.style.display = 'flex';
    var win = false;
    bottomDiv.innerHTML = 'Scott: All these horses look fine!<br>Which one do you think is going to win?';

    for (var i = 0; i < 6; i++) {
        var horseElement = document.createElement("img");
        horseElement.className = 'horses';
        horseElement.setAttribute("src", "images/horses/" + i + ".jpg");
        horseElement.setAttribute("data-id", i);
        gameBoard.appendChild(horseElement);
    }
    var allHorses = document.querySelectorAll(".horses");

    var exitGame = function() {
        nextButton.style.display = 'flex';
        allHorses.forEach(function(horse) {
            horse.parentNode.removeChild(horse);
        })

        gameBoard.style.display = 'none';
        watch.style.display = 'flex';
        watch.src = 'images/character/scott.jpg';
        if (win) {
            bottomDiv.innerHTML = "(The horse won the race!)<br>Scott: Good'ol sport! You're definitely a worthy friend!<br><br>Have you met my friend Hemingway?";
        } else {
            bottomDiv.innerHTML = "(The horse lost!)<br>Scott: Aw well, such as life...<br>Ah! Here's my friend Hemingway!";
        }
    }

    var gameWin = function() {
        win = true;
        exitGame();
    }

    var doubtPrompt = function() {
        bottomDiv.innerHTML = 'Scott: Are you sure? I heard that this horse was not performing well in its last race!<br>';
        var buttonYes = document.createElement("input");
        buttonYes.type = "button";
        buttonYes.value = "Yes";
        buttonYes.className = "horseConfirm";
        var buttonNo = document.createElement("input");
        buttonNo.type = "button";
        buttonNo.value = "No";
        buttonNo.className = "horseConfirm";
        bottomDiv.appendChild(buttonYes);
        bottomDiv.appendChild(buttonNo);
        buttonYes.addEventListener("click", gameWin);
        buttonNo.addEventListener("click",exitGame);
    }

    allHorses.forEach(function(horse) {
        horse.addEventListener('click', doubtPrompt);
    })
}











