const playground = document.querySelector("#playground");
const waterdropArray = document.querySelectorAll(".waterdrop");

console.log(waterdropArray);
let isMouseClickedWaterdrop = false;
waterdropArray.forEach(waterdrop => {
    // en cas de click sur le carré vert
    // celui ci se déplace avec la souris
    playground.addEventListener("mousemove", (event) => {
        let x = event.clientX - 25;
        let y = event.clientY - 25;

        // seulement si le bouton de la souris est cliqué
        if (isMouseClickedWaterdrop) {
            waterdrop.style.top = y + "px";
            waterdrop.style.left = x + "px"
        }
    })

    // on met le boolean à true si la souris est cliquée
    waterdrop.addEventListener("mousedown", (event) => {
        console.log("mousedown");
        isMouseClickedWaterdrop = true;
        waterdrop.style.cursor = "grabbing";
    })

    // on met le boolean à false si la souris est relâchée
    waterdrop.addEventListener("mouseup", (event) => {
        console.log("mouseup");
        isMouseClickedWaterdrop = false;
        waterdrop.style.cursor = "grab";

        //     if isMouseClicked.mouth = false;
        // mouth.addEventListener

    })
})

// Storing the pets name

// localStorage.setItem('petsName', 'Name given');

// const savedText = localStorage.getItem('petsName');

// console.log(savedText)