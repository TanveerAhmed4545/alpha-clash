// function play(){
//     // hide the home screen
//     // show the playground
    
//     const homeScreen =document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playgroundSection =document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');

// }

function continueGame(){
        //  generate random alphabet
 
        const alphabet = getARandomAlphabet();
        console.log('your random alphabet' , alphabet)

        // set randomly generated alphabet to the screen

        const currentAlphabetElement =document.getElementById('current-alphabet');
        currentAlphabetElement.innerText =alphabet;

        // set background color
        setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home');
    showElementById('playground');
    continueGame();
}