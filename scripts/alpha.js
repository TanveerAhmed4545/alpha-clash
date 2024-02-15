// function play(){
//     // hide the home screen
//     // show the playground
    
//     const homeScreen =document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playgroundSection =document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');

// }

// create by me

// let liveScoreCount = 0;
// let lifeScore =document.getElementById('lifeScore').innerText;
// console.log(lifeScore);




function handleKeyboardButtonPress(e){
    
     const playerPress = e.key;
     console.log("Player press " ,playerPress);

    //  stop the game 

    if( "Escape" === playerPress ){
        // console.log(true);
        gameOver();
    }

     const currentAlphabetElement = document.getElementById('current-alphabet');
    //  console.log(currentAlphabetElement.innerText);
    const currentAlphabet =currentAlphabetElement.innerText.toLowerCase();
    // console.log(playerPress,currentAlphabet);

    // check matched or not

    if(playerPress === currentAlphabet){
        console.log("win");
        // update score 
    //    const currentScoreElement = document.getElementById('liveScore');
    //    const currentScoreText = currentScoreElement.innerText;
    //    const currentScore = parseInt(currentScoreText);
    //    console.log(currentScore);

    //    const newScore = currentScore + 1;

    //    currentScoreElement.innerText = newScore;
// ------------------------------------------

    const currentScore = getTextElementValueById('liveScore');
    const newScore = currentScore + 1;
    setTextElementById('liveScore' ,newScore);
// -----------------------------------------------
        // liveScoreCount++;
        removeBackgroundColorById(currentAlphabet);
        continueGame();
        

    }else{
        console.log('lose');
        // lifeScore--;

        // get the current number;
    //    const currentLifeElement = document.getElementById('lifeScore');
    //    const currentLifeText = currentLifeElement.innerText;
    //    const currentLife = parseInt(currentLifeText);

    //   const newLife = currentLife - 1;

    //   currentLifeElement.innerText = newLife;

    // -------------------------------
   
   const currentLife = getTextElementValueById('lifeScore');

     const newLife = currentLife - 1;
     setTextElementById('lifeScore' ,newLife);

     if(newLife === 0){
        console.log("Game over");
        gameOver();
        

     }
      

    }


    // create by me
    // console.log(liveScoreCount);
    // const liveScore = document.getElementById('liveScore');
    // liveScore.innerText = liveScoreCount;
    // const lifeScoreArea =document.getElementById('lifeScore');
    // lifeScoreArea.innerText =lifeScore;
    
    // const scoreBoard =document.getElementById('scoreBoard');

    // if(lifeScore === 0){
    //     hideElementById('playground');
    // showElementById('scoreArea');
    //     scoreBoard.innerText =liveScoreCount;
    // }

}

document.addEventListener('keyup',handleKeyboardButtonPress)
function continueGame(){
        //  generate random alphabet
        
        
 
        const alphabet = getARandomAlphabet();
        console.log('your random alphabet' , alphabet);

       
       

        // set randomly generated alphabet to the screen

        const currentAlphabetElement =document.getElementById('current-alphabet');
        currentAlphabetElement.innerText =alphabet;

        // set background color
        setBackgroundColorById(alphabet);

       
          

}

// console.log(count);

function play(){
    hideElementById('home');
    hideElementById('scoreArea');
    showElementById('playground');
    //  reset score and life

    setTextElementById('lifeScore',5);
    setTextElementById('liveScore',0);

    continueGame();
   
    
}

function gameOver(){
    hideElementById('playground');
    showElementById('scoreArea');
    const liveScore = document.getElementById('liveScore').innerText;
    // const scoreBoard = document.getElementById('scoreBoard');
    // scoreBoard.innerText =liveScore;

    setTextElementById('scoreBoard',liveScore);
    // removeBackgroundColorById('current-alphabet');
     
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}




    

