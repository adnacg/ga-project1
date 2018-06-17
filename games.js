var runGameOne = function() {

    var gameBoard = document.getElementById("game-board");
    var win = false;
    var maxDuration = 30; // seconds

    nextButton.style.display = 'none';

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

        characterImg.style.display = 'flex';
        characterImg.src = 'images/character/henri.jpg';

        if (win) {
            bottomDiv.innerHTML = 'Henri: You must be a true fan to recognise my work!';
        } else {
            loseCount++;
            if (loseCount >= maxLostGames) {
                dialogueGameOver.display();
            } else {
                bottomDiv.innerHTML = 'Henri: Well, at least you tried!';
            }
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
            setTimeout(showBack, 500);
        }
        cardsInPlay = [];

        if (matchCount == 5) {
            win = true;
            exitGame();
            return;
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
            return;
        }
    }, 1000)
}

var runGameTwo = function() {

    nextButton.style.display = 'none';

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

        characterImg.style.display = 'flex';
        if (win) {
            bottomDiv.innerHTML = 'Degas: You truly can see.';
        } else {
            loseCount++;
            if (loseCount >= maxLostGames) {
                dialogueGameOver.createCustomElements();
                dialogueGameOver.display();
            } else {
                bottomDiv.innerHTML = 'Degas: Well, not all can see, certainly not all can make others see!';
            }
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
            return;
        }

        if (counter <= 10) {
            counter++;
            appearAfterDelay();
        } else {
            win = true;
            exitGame();
            return;
        }
    }

    shape.addEventListener('click', makeShapeDisappear);
}

var runGameThree = function() {
    nextButton.style.display = 'none';

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

        characterImg.style.display = 'flex';
        gameBoard.style.display = 'none';
        if (win) {
            bottomDiv.innerHTML = 'Chanel: You sure have a fantastic taste, merci my dear!';
        } else {
            loseCount++;
            if (loseCount >= maxLostGames) {
                dialogueGameOver.display();
            } else {
                bottomDiv.innerHTML = 'Chanel: I do not appreciate this logo, what a shame...';
            }
        }
    }

    var gameRound = function() {
        currentLogoId = this.getAttribute('data-id');
        if (currentLogoId == 6) {
            win = true;
        }
        exitGame();
        return;
    }

    allLogos.forEach(function(logo) {
        logo.addEventListener('click', gameRound);
    })
}

var runGameFour = function() {
    nextButton.style.display = 'none';

    var gameBoard = document.getElementById("game-board");
    gameBoard.style.display = 'flex';
    var win = false;

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
        characterImg.style.display = 'flex';
        characterImg.src = 'images/character/scott.jpg';
        if (win) {
            bottomDiv.innerHTML = "(The horse won the race!)<br><br>Scott: Good'ol sport! You're definitely a worthy friend!<br>Have you met my friend Hemingway?";
        } else {
            loseCount++;
            if (loseCount >= maxLostGames) {
                dialogueGameOver.display();
            } else {
                bottomDiv.innerHTML = "(The horse lost!)<br><br>Scott: Aw well, such as life...<br>Ah! Oh hey, here's my friend Hemingway!";
            }
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

var runGameFive = function() {
    nextButton.style.display = 'none';

    var gameBoard = document.getElementById("game-board");
    gameBoard.style.display = 'flex';
    gameBoard.style.alignItems = 'center';

    var fightOutcome = false;
    var hemingwayHP = 100;
    var userHP = 100;
    var freezeButtons = false;

    var hemingwayDiv = document.createElement("div");
    hemingwayDiv.className = "imageDiv"

    var hemingwayImage = document.createElement("img");
    hemingwayImage.id = "hemingwayImage"
    hemingwayImage.className = "fightImages";
    hemingwayImage.src = "images/character/hemingway.jpg";
    hemingwayDiv.appendChild(hemingwayImage);
    var hemingwayHPMsg = document.createElement("p");
    hemingwayHPMsg.className = "showHPMsg"
    hemingwayHPMsg.innerHTML = "Hemingway's HP: ";
    hemingwayDiv.appendChild(hemingwayHPMsg);
    var actualHmwHP = document.createElement("p");
    actualHmwHP.className = "actualHP"
    actualHmwHP.innerHTML = hemingwayHP + " / 100";
    hemingwayDiv.appendChild(actualHmwHP);

    gameBoard.appendChild(hemingwayDiv);

    var buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv"

    var jabButton = document.createElement("input");
    jabButton.type = "button";
    jabButton.value = "Jab";
    jabButton.className = "fightButtons";
    buttonDiv.appendChild(jabButton);

    var crossButton = document.createElement("input");
    crossButton.type = "button";
    crossButton.value = "Cross";
    crossButton.className = "fightButtons";
    buttonDiv.appendChild(crossButton);

    var hookButton = document.createElement("input");
    hookButton.type = "button";
    hookButton.value = "Hook";
    hookButton.className = "fightButtons";
    buttonDiv.appendChild(hookButton);

    gameBoard.appendChild(buttonDiv);

    var fightButtonsArray = document.querySelectorAll(".fightButtons");

    var youDiv = document.createElement("div");
    youDiv.className = "imageDiv"

    var youImage = document.createElement("img");
    youImage.id = "youImage"
    youImage.className = "fightImages";
    youImage.src = "images/character/you.jpg";
    youDiv.appendChild(youImage);
    var yourHPMsg = document.createElement("p");
    yourHPMsg.className = "showHPMsg"
    yourHPMsg.innerHTML = "Your HP: ";
    youDiv.appendChild(yourHPMsg);
    var actualHP = document.createElement("p");
    actualHP.className = "actualHP"
    actualHP.innerHTML = userHP + " / 100";
    youDiv.appendChild(actualHP);

    gameBoard.appendChild(youDiv);


    var exitGame = function() {
        hemingwayDiv.parentNode.removeChild(hemingwayDiv);
        buttonDiv.parentNode.removeChild(buttonDiv);
        youDiv.parentNode.removeChild(youDiv);
        gameBoard.style.display = "none";
        nextButton.style.display = 'flex';
        characterImg.style.display = "flex";
        characterImg.src = "images/character/hemingway.jpg";

        if (userHP <= 0 && hemingwayHP <= 0) {
            fightOutcome = "draw";
        } else if (userHP <= 0) {
            fightOutcome = "lost";
        } else if (hemingwayHP <= 0) {
            fightOutcome = "won";
        }

        if (fightOutcome == "won") {
            bottomDiv.innerHTML = "Hemingway: A real man fights! And a greater man like you wins with honour!";
        } else if (fightOutcome = "lost") {
            loseCount++;
            if (loseCount >= maxLostGames) {
                dialogueGameOver.display();
            } else {
                bottomDiv.innerHTML = "Hemingway: Well, at least you fought like a man!";
            }
        } else if (fightOutcome = "draw") {
            bottomDiv.innerHTML = "Hemingway: It's always a pleasure to meet a man with equal strength!";
        }
    }

    var hitHmw = function() {
        if (freezeButtons) {
            return;
        }

        freezeButtons = true;

        var randomHPToHemingway = Math.floor(Math.random() * 15 + 1) ;
        hemingwayHP -= randomHPToHemingway;
        hemingwayImage.style.animation = "shake 0.2s";
        actualHmwHP.innerHTML = hemingwayHP + " / 100";

        if (hemingwayHP > 0) {
            bottomDiv.innerHTML = "You " + this.value + " Hemingway with " + randomHPToHemingway + " points!";
            hemingwayImage.style.opacity = "1";
            youImage.style.opacity = "0.3";
            setTimeout(function() {hemingwayImage.style.animation = "";}, 500);
        } else {
            exitGame();
            return;
        }

        setTimeout(function() {
            var randomHPToYou = Math.floor(Math.random() * 10 + 1);

            userHP -= randomHPToYou;
            youImage.style.animation = "shake 0.2s";
            actualHP.innerHTML = userHP + " / 100";
            if (userHP > 0) {
                bottomDiv.innerHTML = "Hemingway hit you back with " + randomHPToYou + " points!";
                hemingwayImage.style.opacity = "0.3";
                youImage.style.opacity = "1";
                setTimeout(function() {youImage.style.animation = "";}, 500);
                freezeButtons = false;
            } else {
                exitGame();
                return;
            }
        }, 1000);
    }

    youImage.style.opacity = "1";
    hemingwayImage.style.opacity = "0.3";

    fightButtonsArray.forEach(function(button) {
        button.addEventListener("click", hitHmw);
    })
}

var runGameSix = function() {
    var gameBoard = document.getElementById("game-board");
    gameBoard.style.display = 'flex';
    gameBoard.style.alignItems = 'center';

    nextButton.style.display = "none";
    var win;

    var manrayDiv = document.createElement("div");
    manrayDiv.className = "daliGameDivs"
    var manrayImage = document.createElement("img");
    manrayImage.id = "manrayImage"
    manrayImage.className = "daliGameImages";
    manrayImage.src = "images/character/manray.png";
    manrayDiv.appendChild(manrayImage);
    var selectOne = document.createElement("select");
    selectOne.className = "daliGameSelections"
    var manrayOptionOne = document.createElement("option");
    var manrayOptionTwo = document.createElement("option");
    var manrayOptionThree = document.createElement("option");
    manrayOptionOne.textContent = "1. Rhinocerous";
    manrayOptionTwo.textContent = "2. Film";
    manrayOptionThree.textContent = "3. Photograph";
    selectOne.appendChild(manrayOptionOne);
    selectOne.appendChild(manrayOptionTwo);
    selectOne.appendChild(manrayOptionThree);
    manrayDiv.appendChild(selectOne);
    gameBoard.appendChild(manrayDiv);

    var daliDiv = document.createElement("div");
    daliDiv.className = "daliGameDivs"
    var daliImage = document.createElement("img");
    daliImage.id = "daliImage"
    daliImage.className = "daliGameImages";
    daliImage.src = "images/character/dali.jpg";
    daliDiv.appendChild(daliImage);
    var selectTwo = document.createElement("select");
    selectTwo.className = "daliGameSelections"
    var daliOptionOne = document.createElement("option");
    var daliOptionTwo = document.createElement("option");
    var daliOptionThree = document.createElement("option");
    daliOptionOne.textContent = "1. Rhinocerous";
    daliOptionTwo.textContent = "2. Film";
    daliOptionThree.textContent = "3. Photograph";
    selectTwo.appendChild(daliOptionOne);
    selectTwo.appendChild(daliOptionTwo);
    selectTwo.appendChild(daliOptionThree);
    daliDiv.appendChild(selectTwo);
    gameBoard.appendChild(daliDiv);

    var bunuelDiv = document.createElement("div");
    bunuelDiv.className = "daliGameDivs"
    var bunuelImage = document.createElement("img");
    bunuelImage.id = "bunuelImage"
    bunuelImage.className = "daliGameImages";
    bunuelImage.src = "images/character/luis.jpg";
    bunuelDiv.appendChild(bunuelImage);
    var selectThree = document.createElement("select");
    selectThree.className = "daliGameSelections"
    var bunuelOptionOne = document.createElement("option");
    var bunuelOptionTwo = document.createElement("option");
    var bunuelOptionThree = document.createElement("option");
    bunuelOptionOne.textContent = "1. Rhinocerous";
    bunuelOptionTwo.textContent = "2. Film";
    bunuelOptionThree.textContent = "3. Photograph";
    selectThree.appendChild(bunuelOptionOne);
    selectThree.appendChild(bunuelOptionTwo);
    selectThree.appendChild(bunuelOptionThree);
    bunuelDiv.appendChild(selectThree);
    gameBoard.appendChild(bunuelDiv);

    var exitGame = function() {
        nextButton.style.display = "flex";
        manrayDiv.style.display = "none";
        daliDiv.style.display = "none";
        bunuelDiv.style.display = "none";
        gameBoard.style.display = "none";
        characterImg.style.display = "flex";
        characterImg.src = "images/character/dali.jpg";

        if (win) {
            bottomDiv.innerHTML = "Dali: Yes... yes! I see... a Rhinocerous!";
        } else {
            loseCount++;
            if (loseCount >= maxLostGames) {
                dialogueGameOver.display();
            } else {
                bottomDiv.innerHTML = "Dali: You are probably not... a Rhinocerous!";
            }
        }
    }

    var checkWin = function() {
        if (selectOne.selectedOptions[0].value == "3. Photograph" && selectTwo.selectedOptions[0].value == "1. Rhinocerous" && selectThree.selectedOptions[0].value == "2. Film") {
            win = true;
            exitGame();
            return;
        } else {
            win = false;
            exitGame();
            return;
        }
    }

    var submitButton = document.getElementById("daliGameSubmit");
    submitButton.addEventListener("click", checkWin);
}