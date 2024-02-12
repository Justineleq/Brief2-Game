import Lifebar from "./LifeLine.js";

const petArea = document.querySelector(".pet-area");
const appleLifeBar = new Lifebar("lightgreen");
const waterdropLifeBar = new Lifebar("lightblue");

// Function to handle the drag start event
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.style.opacity = "0.5";
}

// Function to handle the drag end event
function handleDragEnd(event) {
  event.target.style.opacity = "1";
}

// Set up drag-and-drop for apples
const appleArray = document.querySelectorAll(".apple");

appleArray.forEach((apple) => {
  apple.draggable = true;
  apple.addEventListener("dragstart", handleDragStart);
  apple.addEventListener("dragend", handleDragEnd);
});

// Set up drag-and-drop for waterdrops
const waterdropArray = document.querySelectorAll(".waterdrop");

waterdropArray.forEach((waterdrop) => {
  waterdrop.draggable = true;
  waterdrop.addEventListener("dragstart", handleDragStart);
  waterdrop.addEventListener("dragend", handleDragEnd);
});

// Function to handle the drop event on the pet area
function handleDrop(event) {
  event.preventDefault();

  const draggedItemId = event.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(draggedItemId);

  if (draggedItem.classList.contains("apple")) {
    // Update the apple life bar when dropped on the pet area
    appleLifeBar.addingLife();
    draggedItem.remove();
  } else if (draggedItem.classList.contains("waterdrop")) {
    // Update the waterdrop life bar when dropped on the pet area
    waterdropLifeBar.addingLife();
    draggedItem.remove();
  }
}

// Set up drop event on the pet area
petArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});

petArea.addEventListener("drop", handleDrop);



appleLifeBar.creerHTML();
waterdropLifeBar.creerHTML();
appleLifeBar.losingLife();
waterdropLifeBar.losingLife();
appleLifeBar.displayMessageIfLow();
waterdropLifeBar.displayMessageIfLow();