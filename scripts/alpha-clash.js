// function play(){
//     // hide the home screen and show the game screen
//     const homeScreen = document.getElementById('home-screen');
//     // console.log(homeScreen.classList);
//     homeScreen.classList.add('hidden');

//     // play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

let newScore = 0;
// Keyup event listener
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    

    // get the expected letter
    const currentAlphabetElement = document.getElementById('current-alphabet').innerText;
    console.log('Expected letter:', currentAlphabetElement);

    // check if the player pressed the correct letter

    if(playerPressed === currentAlphabetElement){
        // correct letter pressed
        console.log('Correct letter pressed!');

        // update crore

        const scoreElement = getTextContentById('score');
        let newScore = scoreElement + 1;
        setTextContentById('score', newScore);


        removeBackgroundColorById(currentAlphabetElement);
        continueGame();
        
    } else {
        // incorrect letter pressed
        console.log('Incorrect letter pressed!');

        // update life
        const lifeElementValue = getTextContentById('life');
        const lifeElement = lifeElementValue - 1;
        setTextContentById('life', lifeElement);
        if(lifeElement === 0){
            // game over
            alert('Game Over!');
            gameOver();
            
        }

        // display an alert
        alert('Incorrect letter! Try again');
    }
}

document.addEventListener('keypress', handleKeyboardButtonPress);

function continueGame(){
    // step-1: generate a random letter
    const alphabet = getARandomLetter();
    console.log('Random letter:', alphabet);

    // set random letter to the display area
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.textContent = alphabet;

    // set background color
    addBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();
    
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    setTextContentById('total-score', newScore)
    removeBackgroundColorById(currentAlphabetElement);
    setTextContentById('life', 3);
}