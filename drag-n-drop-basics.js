const playground = document.querySelector("#playground");
const giveMeWater = document.querySelectorAll("#feed .waterdrop");
const giveMeFood = document.querySelectorAll("#feed .apple");

console.log(giveMeFood);
console.log(giveMeWater);

let isMouseClicked = false;

// en cas de click sur le carré vert
// celui ci se déplace avec la souris
playground.addEventListener("mousemove", (event) => {   
    let x = event.clientX - 50;
    let y = event.clientY - 50;
    // seulement si le bouton de la souris est cliqué
    if(isMouseClicked){
        giveMeWater.style.top = y + "px";
        giveMeWater.style.left = x + "px";
    }    
})

// on met le boolean à true si la souris est cliquée
giveMeWater.forEach(water => {
    water.addEventListener("mousedown", (event) => {
        console.log("mousedown");
        isMouseClicked = true;
        water.style.cursor = "grabbing";
    })  
})

// on met le boolean à false si la souris est relâchée
giveMeWater.forEach(water => {
    water.addEventListener("mouseup", (event) => {
        console.log("mouseup");
        isMouseClicked = false;
        water.style.cursor = "grab";

    // if (mouseup === document.getElementById("#pet"))
        

    })
})