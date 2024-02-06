// function decreaseHearts() {
//     let heartsDecrease = document.getElementsByClassName(life-line)
//     heartsDecrease.style.
// }




const playground = document.querySelector("#playground");
const waterdrop = document.querySelector(".waterdrop");
const apple = document.querySelector(".apple");
const mouth = document.getElementById("#mouth")

console.log(apple); 
console.log(waterdrop); 

let isMouseClicked = false;

// en cas de click sur le carré vert
// celui ci se déplace avec la souris
playground.addEventListener("mousemove", (event) => {   
    let x = event.clientX - 50;
    let y = event.clientY - 50;

    // seulement si le bouton de la souris est cliqué
    if(isMouseClicked){
        waterdrop.style.top = y + "px";
        waterdrop.style.left = x + "px";

    else if(isMouseClicked) {
        apple.style.top = y + "px";
        apple.style.left = x + "px";
    } 
    }   
})

// on met le boolean à true si la souris est cliquée
waterdrop.addEventListener("mousedown", (event) => {
    console.log("mousedown");
    isMouseClicked = true;
    waterdrop.style.cursor = "grabbing";
})  

// on met le boolean à false si la souris est relâchée
waterdrop.addEventListener("mouseup", (event) => {
    console.log("mouseup");
    isMouseClicked = false;
    waterdrop.style.cursor = "grab";
})

apple.addEventListener("mousedown", (event) => {
    console.log("mousedown");
    isMouseClicked = true;
    apple.style.cursor = "grabbing";
})  

// on met le boolean à false si la souris est relâchée
apple.addEventListener("mouseup", (event) => {
    console.log("mouseup");
    isMouseClicked = false;
    apple.style.cursor = "grab";
})

// Storing the pets name

// localStorage.setItem('petsName', 'Name given');

// const savedText = localStorage.getItem('petsName');

// console.log(savedText)
