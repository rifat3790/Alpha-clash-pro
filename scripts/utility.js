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


function getARandomLetter(){
    // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const randomIndex = Math.floor(Math.random() * alphabet.length);

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');
    const randomIndex = Math.round(Math.random() * alphabetArray.length);
    
    const randomLetter = alphabetArray[randomIndex];

    return randomLetter;
}