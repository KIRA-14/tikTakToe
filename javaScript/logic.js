const editOne = document.getElementById("editplaye-one");
const editTwo = document.getElementById("editplaye-two");
const backdrop = document.getElementById("backdrop");
const  modl= document.getElementById("user-info-input-area");
const confirmbut = document.getElementById("model-confirm");
const  cancel= document.getElementById("model-cancel");
const  playerOneName= document.getElementById("player-0ne");
const  playerTwoName= document.getElementById("player-Two");
const  userName= document.getElementById("input-name");
const stateGameActive= document.querySelector('.gamer-area');
const playerTurn= document.querySelector('#player-turn');
const  startGame= document.getElementById("start-game");


let nameToUpdate = userName;

let updatePlayerOne=''

startGame.addEventListener('click',(e)=>{ 
    stateGameActive.style.display="block"
    editOne.disabled = true;
    editTwo.disabled = true;
    playerTurn.textContent = playerOneName.textContent;
});

editOne.addEventListener('click',(e)=>{ 
    editModul(e)
});
editTwo.addEventListener('click',(e)=>{ 
    editModul(e);
});

confirmbut.addEventListener('click', ()=>{
    if(updatePlayerOne===1){
        playerOneName.textContent=nameToUpdate;
    } else {
        playerTwoName.textContent=nameToUpdate;
    }
    backdrop.style.display= "none"
    modl.style.display= "none"
    userName.value="";
})

cancel.addEventListener('click', ()=>{
    backdrop.style.display= "none"
    modl.style.display= "none"
})

userName.addEventListener('input',()=>{
    nameToUpdate = userName.value;
})


const editModul=(e)=> {
    backdrop.style.display= "block"
    modl.style.display= "block"
    if(e.target.id === "editplaye-one") {
        updatePlayerOne = 1;
    }else {
        updatePlayerOne = 2;
    }
};