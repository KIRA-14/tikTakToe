const editOne = document.getElementById("editplaye1");
const editTwo = document.getElementById("editplaye2");
const backdrop = document.getElementById("backdrop");
const  modl= document.getElementById("user-info-input-area");


editOne.addEventListener('click',()=>{ 
    editModul()
});
editTwo.addEventListener('click',()=>{ 
    editModul();
});

const editModul=()=> {
    backdrop.style.display= "block"
    modl.style.display= "block"
};