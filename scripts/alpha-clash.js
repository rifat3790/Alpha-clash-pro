// function play(){
//     // hide the home screen and show the game screen
//     const homeScreen = document.getElementById('home-screen');
//     // console.log(homeScreen.classList);
//     homeScreen.classList.add('hidden');

//     // play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

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
    showElementById('play-ground');
    continueGame();
    
}