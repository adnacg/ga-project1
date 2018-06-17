// Present
var dialoguesParisStreet1 = [
    new Dialogue(
        "Let's start with your character...",
        bottomDiv,
        undefined,
        function() {
            nextButton.style.display = "none";
            userImg1.style.display = "flex";
            userImg2.style.display = "flex";
            userImg3.style.display = "flex";
        },
        function() {
            nextButton.style.display = "flex";
            userImg1.style.display = "none";
            userImg2.style.display = "none";
            userImg3.style.display = "none";
        }
    ),
    new Dialogue(
        "Strolling aimlessly along the streets of Paris after nightfall, you are deep within your thoughts when you come by an open antiques shop.<br><br>Intrigued by the late opening hour, you decide to enter and have a look...",
        sceneIntroMsg
    )
];

var dialoguesAntiqueShop = [
    new Dialogue(
        "After going through the narrow aisles you are about to leave, when an object catches your eye.<br><br>It is a pocket watch of peculiar design, which somehow appeals to you. Although unsure why, you decide to buy it, and leave the store.",
        sceneIntroMsg,
        undefined,
        function() {
            setTimeout(function() {watch.style.display = 'flex'}, 2000);
            leftDiv.style.display = "flex";
        }
    ),
];

var dialoguesParisStreet2 = [
    new Dialogue(
        "As you exit the store and start walking away, you cannot stop looking at your purchase.<br><br>It has a button on its side, and seems to have no crown to wind and adjust the time.<br>Most surprisingly, there are four hands instead of the usual two or three, and the numerals span from 0 to 9.<br><br>You click on the button to see what it does, when suddenly...",
        sceneIntroMsg
        ),
    new Dialogue(
        "A bright light coming from the watch blinds you momentarily!",
        sceneIntroMsg,
        undefined,
        function() {
            sceneIntroMsg.style.backgroundColor = 'transparent';
            sceneIntroMsg.style.color = 'transparent';
            watch.style.backgroundColor = '#fff';
            watch.style.boxShadow = '0 0 90px 1000px #fff, 0 0 200px 300px #ece20a';
            var reappear = function() {
                sceneIntroMsg.style.color = '#000';
            }
            setTimeout(reappear, 800);
        }
    )
];

var scenesPresent = [
    new Scene(dialoguesParisStreet1, "images/midnight.jpg"),
    new Scene(dialoguesAntiqueShop, "images/antiqueshop.jpg"),
    new Scene(dialoguesParisStreet2, "images/midnight.jpg")
];

// Belle epoque
var dialoguesMoulin1 = [
    new Dialogue(
        "As you open your eyes again, you realize the surroundings totally changed!<br><br>Everything seems.. out of time, from the way people dress to the conversations you hear.<br><br>Looking at the watch, you notice that the discs on its face seem to have retracted and the hands changed position.",
        sceneIntroMsg,
        undefined,
        function() {
            sceneIntroMsg.style.color = 'transparent';
            watch.style.backgroundColor = 'transparent';
            watch.style.boxShadow = "";
            watch.src = 'images/watch_belle_epoque_start.png';

            var reappear = function() {
                sceneIntroMsg.style.backgroundColor = '#000';
                sceneIntroMsg.style.color = '#D5BF86';
            }

            setTimeout(reappear, 1300);
        }
    ),
    new Dialogue(
        "0, 1, 9, 8? 1, 9, 0, 8?<br>Oh, the length of the hands seem so matter...<br><br>1... 8... 9... 0... 1890! This is a year!<br><br>Surely there is no way this watch is some kind of.. time machine?!<br>Maybe you have been knocked out in the street and this is some kind of dream.<br><br>Whatever the explanation, you decide to make the most of this experience.",
        sceneIntroMsg,
        undefined,
        undefined,
        function(){watch.style.display = "none";}
    ),
    new Dialogue(
        "As you wander around, you find out you are inside the famous Moulin Rouge.<br><br>After starring amazed at the dancing scene, you cannot believe your eyes when you spot one of your favourite artists of all time:<br><br>painter Henri Toulouse-Lautrec!",
        sceneIntroMsg
    ),
    new Dialogue(
        "Hi Mr. Toulouse-Lautrec, I am such a big fan!<br>I find your paintings amazing.<br>Why did you..ahem DO you especially love to paint these shows?",
        bottomDiv,
        you,
        function() {bottomDiv.style.textAlign = 'center';}
    ),
    new Dialogue(
        "I paint things as they are.<br>A woman's body is exquisite, it is meant to be painted!",
        bottomDiv,
        henri
    ),
    new Dialogue(
        "I agree!",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Would you like to play a game?",
        bottomDiv,
        henri
    ),
    new Dialogue(
        "Sure, why not?",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Henri: Go on and match all the pairs of my paintings.<br>You have 30 seconds.",
        bottomDiv,
        undefined,
        runGameOne,
    ),
];

var dialoguesMoulin2 = [
    new Dialogue(
        "(Edgar Degas and Paul Gauguin walk over...)",
        bottomDiv,
        undefined,
        function() {nextButton.style.display = 'flex';}
    ),
    new Dialogue(
        "Greetings friends! What a wonderful evening.<br>Come look here Paul, tell me what you see?",
        bottomDiv,
        degas,
    ),
    new Dialogue(
        "I shut my eyes in order to see.",
        bottomDiv,
        gauguin,
    ),
    new Dialogue(
        "Indeed.<br>Art is not what you see, but what you make others see!<br>Stranger friend, do you dare to see?",
        bottomDiv,
        degas
    ),
    new Dialogue(
        "(whispering to you)<br>Just play along, I can never follow these guys...",
        bottomDiv,
        henri
    ),
    new Dialogue(
        "Degas: Do you see the shapes?<br>Click on them in 5 seconds to make them disappear!",
        bottomDiv,
        undefined,
        runGameTwo,
    )
];

var dialoguesMoulin3 = [
    new Dialogue(
        "(Coco Chanel passes by and is pleasantly surprised by your talent)",
        bottomDiv,
        undefined,
        function() {nextButton.style.display = 'flex';}
    ),
    new Dialogue(
        "You seem to be very sensitive to shapes and colours,<br>exactly what I need, come with me!",
        bottomDiv,
        coco
    ),
    new Dialogue(
        "Chanel: In order to be irreplaceable in fashion, one must dare to be different.<br>Can you help me to choose a logo for my fashion brand?<br>I already have a favourite but I am doubting myself.",
        bottomDiv,
        undefined,
        runGameThree
    ),
    new Dialogue(
        "",
        sceneIntroMsg,
        undefined,
        function() {
            centerDiv.style.display = "none";
            watch.style.display = "flex";
            watch.style.backgroundColor = "#fff";
            watch.src = 'images/watch_belle_epoque_end.png';
            setTimeout(function(){watch.style.boxShadow = '0 0 90px 1000px #fff, 0 0 200px 300px #ece20a'}, 500);
        }
    )
]

var scenesBelleEpoque = [
    new Scene(dialoguesMoulin1, "images/renaissance.png"),
    new Scene(dialoguesMoulin2, "images/renaissance.png"),
    new Scene(dialoguesMoulin3, "images/renaissance.png"),
];


// Twenties

var dialoguesJazzBar1 = [
    new Dialogue(
        "It seems you moved through time again. The watchface now shows... 1920!<br><br>Seems like you are in a bar? One of the rings of the watch is filled up again.<br><br>Maybe you can come back to your time if the last one fills up too..?",
        sceneIntroMsg,
        undefined,
        function() {
            watch.style.backgroundColor = "transparent";
            watch.style.boxShadow = "";
            watch.src = 'images/watch_twenties_start.png';
            var reappear = function() {
                centerDiv.style.display = 'flex';
            }
            setTimeout(reappear, 2000);
        },
        function() {watch.style.display = "none";}
    ),
    new Dialogue(
        "Hello my friend , you seem lost, are you lost?",
        bottomDiv,
        scott
    ),
    new Dialogue(
        "... I guess, I am just not exacly sure where I am?",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Well my friend, you are at the biggest party in town!<br>I am Scott Fitzerald, and this is my wife, Zelda.",
        bottomDiv,
        scott
    ),
    new Dialogue(
        "... You are THE Fitzgeralds!? This is so... so...",
        bottomDiv,
        you
    ),
    new Dialogue(
        "I know, this is so boring!<br>The party is boring, I am bored, he is bored, you are bored!<br>Lets go somewhere else!",
        bottomDiv,
        zelda
    ),
    new Dialogue(
        "I know! Lets go to the race course!",
        bottomDiv,
        scott
    ),
    new Dialogue(
        "Alright then!",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Scott: All these horses look fine. Let's make a bet!<br>Which one do you think is going to win?",
        bottomDiv,
        undefined,
        runGameFour
    )
]

var dialoguesJazzBar2 = [
    new Dialogue(
        "Oh Mr. Hemingway! I am such a fan.<br>How do you write so well?",
        bottomDiv,
        you
    ),
    new Dialogue(
        "You will never write well if you fear dying.<br>Do you fear death?",
        bottomDiv,
        hemingway
    ),
    new Dialogue(
        "I supposed I do...",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Well that's something all men before you have done,<br>and all men will do!<br>Just do not write, then!",
        bottomDiv,
        hemingway
    ),
    new Dialogue(
        "Tell me, my friend. Do you box?",
        bottomDiv,
        hemingway
    ),
    new Dialogue(
        "I cannot say that I do.",
        bottomDiv,
        you
    ),
    new Dialogue(
        "(ignoring you) Let's put the gloves on<br>and settle it then!",
        bottomDiv,
        hemingway
    ),
    new Dialogue(
        "Hemingway: Let us fight like a real man!",
        bottomDiv,
        undefined,
        runGameFive
    )
]

var dialoguesRestaurant1 = [
    new Dialogue(
        "You leave the bar and walk aimlessly on the streets...<br><br>Unsure what to do next, you hear a sound coming from a restaurant.",
        sceneIntroMsg,
        undefined
    ),
    new Dialogue(
        "Psst psst! Bonjour Monsieur!",
        bottomDiv,
        dali
    ),
    new Dialogue(
        "Are you... talking to me?",
        bottomDiv,
        you
    ),
    new Dialogue(
        "(Dali signals you into the restaurant... and you decide to enter)",
        bottomDiv
    )
]

var dialoguesRestaurant2 = [
    new Dialogue(
        "Yes! I am Dali! Dali!<br>You look lost monsieur, in the city of love, Paris!",
        bottomDiv,
        dali
    ),
    new Dialogue(
        "Dali... the painter Salvador Dali!?",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Si monsieur, I love French, so magical, it's love!<br>The waiter, no.",
        bottomDiv,
        dali
    ),
    new Dialogue(
        "I am here to paint the Rhinocerous!<br>I can paint you too, si, you have the very sad eyes...<br>like Rhinocerous!",
        bottomDiv,
        dali
    ),
    new Dialogue(
        "Yes indeed I am! See, I'm in a very perplexing situation...<br>one where I seem to be present in the past<br>but actually from the future!",
        bottomDiv,
        you
    ),
    new Dialogue(
        "(Dali turns to Man Ray and Luis Bunuel sitting nearby)",
        bottomDiv,
    ),
    new Dialogue(
        "Ah senior Man Ray and senior Bunuel! My friends!<br>This gentleman says that he is from the future!",
        bottomDiv,
        dali
    ),
    new Dialogue(
        "Exactly correct,<br>you inhabit two worlds, like a photograph.<br>So far, I see nothing strange!",
        bottomDiv,
        manray
    ),
    new Dialogue(
        "Yeah but that's because you're a surrealist,<br>and I'm a normal person!<br>What I see is an insurmountable situation!",
        bottomDiv,
        you
    ),
    new Dialogue(
        "I see... a film!",
        bottomDiv,
        luis
    ),
    new Dialogue(
        "I see a big... Rhinocerous!",
        bottomDiv,
        dali
    ),
    new Dialogue(
        "Select the correct image in the head of the respective artists<br>(Man Ray, Salvador Dali, Luis Bunuel).<input type='button' id='daliGameSubmit' value='Done!''></input>",
        bottomDiv,
        undefined,
        runGameSix
    ),
    new Dialogue(
        "After leaving Dali and his friends, you suddenly realise that the third disc of the watch is now filled.<br>Maybe you can now return to your time?!<br><br>With great care, you press the watch button...",
        sceneIntroMsg,
        undefined,
        function() {
            watch.style.display = "flex";
            watch.src = 'images/watch_twenties_end.png';
        }
    ),
    new Dialogue(
        "",
        sceneIntroMsg,
        undefined,
        function() {
            centerDiv.style.display = "none";
            watch.style.backgroundColor = "#fff";
            watch.style.boxShadow = '0 0 90px 1000px #fff, 0 0 200px 300px #ece20a';
        }
    ),
]

var scenesTwenties = [
    new Scene(dialoguesJazzBar1, "images/1920.jpg"),
    new Scene(dialoguesJazzBar2, "images/1920.jpg"),
    new Scene(dialoguesRestaurant1, "images/polidor.jpg"),
    new Scene(dialoguesRestaurant2, "images/insidepolidor.jpg"),
];

// Ending

var dialoguesParis = [
    new Dialogue(
        "You look around, and it seems like it worked!<br>You are back on the streets in the present Paris.<br><br>As you ponder about what just happened... the rain starts drizzling down from the sky.",
        sceneIntroMsg,
        undefined,
        function() {
            watch.style.backgroundColor = "transparent";
            watch.style.boxShadow = "";
            watch.src = 'images/watch_end.png';
            var reappear = function() {
                centerDiv.style.display = 'flex';
            }
            setTimeout(reappear, 2000);
        },
        function() {watch.style.display = "none";}
    ),
    new Dialogue(
        "(A girl approaches you.)",
        bottomDiv,
    ),
    new Dialogue(
        "Hello...<br>would you like to share this umbrella with me?",
        bottomDiv,
        gabrielle
    ),
    new Dialogue(
        "Oh yes... thank you so much!<br>Who would've known that rain would come so suddenly...",
        bottomDiv,
        you
    ),
    new Dialogue(
        "Yes, but I like to walk under the rain sometimes.<br><br>Paris is the most beautiful in the rain.",
        bottomDiv,
        gabrielle
    ),
    new Dialogue(
        "The End",
        sceneIntroMsg,
        undefined,
        function() {nextButton.style.display = "none"; restartButton.style.display = "flex";}
    ),
]

var scenesEnding = [
    new Scene(dialoguesParis, "images/paris.png"),
];

var dialogueGameOver = new Dialogue(
    "Sorry, you've lost too many rounds...<br>seems like you're stuck here forever!",
    sceneIntroMsg,
    undefined,
    function() {
        topDiv.style.display = "none";
        leftDiv.style.display = "none";
        rightDiv.style.display = "none";
        bottomDiv.style.display = "none";
        watch.style.display = "none";
        characterImg.style.display = "none";
        nextButton.style.display = "none";
        sceneIntroMsg.style.display = "flex";
        centerDiv.style.display = "flex";
        container.style.background = "url(images/midnight.jpg)";
        restartButton.style.display = "flex";
    }
);

var eras = [
    new Era(scenesPresent),
    new Era(scenesBelleEpoque),
    new Era(scenesTwenties),
    new Era(scenesEnding)
];