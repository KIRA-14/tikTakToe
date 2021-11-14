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
const playArea = document.querySelectorAll(".gamer-area > ul > li")

let nameToUpdate = userName;
let updatePlayerOne=''
let activePalyer='';


startGame.addEventListener('click',(e)=>{ 
    stateGameActive.style.display="block"
    editOne.disabled = true;
    editTwo.disabled = true;
    playerTurn.textContent = playerOneName.textContent;
    activePalyer=1
});

editOne.addEventListener('click',(e)=>{ 
    e.preventDefault();
    editModul(e)
});
editTwo.addEventListener('click',(e)=>{ 
    e.preventDefault();
    editModul(e);
});

confirmbut.addEventListener('click', (e)=>{
    e.preventDefault();
    if(updatePlayerOne===1){
        playerOneName.textContent=nameToUpdate;
    } else {
        playerTwoName.textContent=nameToUpdate;
    }
    backdrop.style.display= "none"
    modl.style.display= "none"
    userName.value="";
})

cancel.addEventListener('click', (e)=>{
    e.preventDefault();
    backdrop.style.display= "none"
    modl.style.display= "none"
})

userName.addEventListener('input',(e)=>{
    e.preventDefault();
    nameToUpdate = userName.value;
});

playArea.forEach((e)=>{
    e.addEventListener('click',(e)=>{
    e.preventDefault()
    if (activePalyer === 1 && !e.target.textContent) {
        playArea[e.target.id -1].textContent ='X';
        playerTurn.textContent = playerTwoName.textContent;
        activePalyer=2;
    } else if(!e.target.textContent){
        playArea[e.target.id -1].textContent ='O';
        playerTurn.textContent = playerOneName.textContent;
        activePalyer=1;
    }
})});

const editModul=(e)=> {
    e.preventDefault();
    backdrop.style.display= "block"
    modl.style.display= "block"
    if(e.target.id === "editplaye-one") {
        updatePlayerOne = 1;
    }else {
        updatePlayerOne = 2;
    }
};