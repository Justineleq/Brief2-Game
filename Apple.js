
const appleArray = document.querySelectorAll(".apple");

console.log(appleArray);

let isMouseClickedApple = false;
appleArray.forEach(apple => {
    console.log(apple)
    playground.addEventListener("mousemove", (event) => {
        let x = event.clientX - 25;
        let y = event.clientY - 25;

        // seulement si le bouton de la souris est cliqué
        if (isMouseClickedApple) {
            apple.style.top = y + "px";
            apple.style.left = x + "px";
        }
    })

    // on met le boolean à true si la souris est cliquée

    apple.addEventListener("mousedown", (event) => {
        console.log("mousedown");
        isMouseClickedApple = true;
        apple.style.cursor = "grabbing";

    })

    // on met le boolean à false si la souris est relâchée
    apple.addEventListener("mouseup", (event) => {
        console.log("mouseup");
        isMouseClickedApple = false;
        apple.style.cursor = "grab";

    })
})