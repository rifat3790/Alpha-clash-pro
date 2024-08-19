// hide element by id
function hideElementById(elementId){
    const element = document.getElementById(elementId);

    element.classList.add('hidden');
}


// show element by id

function showElementById(elementId){
    const element = document.getElementById(elementId);

    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// get text content by id

function getTextContentById(elementId){
    const element = document.getElementById(elementId);

    const textContentInt = parseInt(element.textContent);
    return textContentInt;
}

// set text content by id

function setTextContentById(elementId, value){
    const element = document.getElementById(elementId);

    element.textContent = value;
}

function getARandomLetter(){
    // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const randomIndex = Math.floor(Math.random() * alphabet.length);

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');
    const randomIndex = Math.round(Math.random() * alphabetArray.length);
    
    const randomLetter = alphabetArray[randomIndex];

    return randomLetter;
}