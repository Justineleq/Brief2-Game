export default class Lifebar {
  #id;
  #colour;
  #life;

  constructor(colour = "green", life = 100) {
    this.#id = Math.floor(Math.random() * 9999) + 1;
    this.#colour = colour;
    this.#life = life;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get life() {
    return this.#life;
  }

  set life(life) {
    this.#life = life;
  }

  get colour() {
    return this.#colour;
  }

  set colour(colour) {
    this.#colour = colour;
  }

  // Permet de récupérer l'élément HTML avec l'id 'conteneur' de l'objet en cours.
  get conteneur() {
    let conteneur = document.querySelector("#conteneur" + this.#id);
    return conteneur;
  }

  // Permet de récupérer l'élément HTML avec l'id 'barredevie....' de l'objet en cours.
  get barredevie() {
    let barredevie = document.querySelector("#barredevie" + this.#id);
    return barredevie;
  }

  // Permet de récupérer l'élément HTML avec la classe 'perdre' de l'objet en cours.
  get boutonPerteVie() {
    let bouton = this.conteneur.querySelector(".perdre");
    return bouton;
  }

  // Permet de récupérer l'élément HTML avec la classe 'gagner' de l'objet en cours.
  get boutonGainVie() {
    let bouton = this.conteneur.querySelector(".gagner");
    return bouton;
  }

  // Permet de créer les éléments HTML nécessaire à l'affichage de la barre de vie.
  creerHTML() {
    const lifeBarsContainer = document.getElementById("lifeBars");

    let conteneur = document.createElement("div");
    conteneur.id = this.id;
    lifeBarsContainer.appendChild(conteneur);

    let barre = document.createElement("div");
    barre.style.border = "1px solid black";
    barre.style.height = "10px";

    conteneur.appendChild(barre);

    let barreDeVie = document.createElement("div");
    barreDeVie.id = "barre-" + this.id;
    barreDeVie.style.width = "100%";
    barreDeVie.style.height = "10px";
    barreDeVie.style.backgroundColor = this.couleur;

    barre.appendChild(barreDeVie);

    let boutonPerdreVie = document.createElement("button");
    boutonPerdreVie.textContent = "Perdre de la vie";
    boutonPerdreVie.classList.add("perdre");

    conteneur.appendChild(boutonPerdreVie);

    let boutonGagnerVie = document.createElement("button");
    boutonGagnerVie.textContent = "Gagner de la vie";
    boutonGagnerVie.classList.add("gagner");

    conteneur.appendChild(boutonGagnerVie);
  }

  addingLife() {
    if (this.#life <= 90) {
      this.#life = this.#life + 10;
      console.log("Yummy");
      this.barForApples();
    }

    if (this.#life <= 20) {
      this.appleBar.style.backgroundColor = "red";
    }

    if (this.#life >= 20 && this.#life <= 50) {
      this.appleBar.style.backgroundColor = "orange";
    }
  }

  removingLife() {
    if (this.#life >= 10) {
      this.#life = this.#life - 10;

      if (this.#life <= 20) {
        this.appleBar.style.backgroundColor = "red";
      }

      if (this.#life >= 20 && this.#life <= 50) {
        this.appleBar.style.backgroundColor = "orange";
      }

      this.appleBar();
    }
  }
  appleBar() {
    this.barreDeVie.style.width = this.#life + "%";
  }
}

// const hearts = document.querySelectorAll(".lifeLine");

// const heartArray = Array.from(hearts)

// console.log(heartArray)

// heartArray.forEach(hearts => {
//   hearts = setInterval(remove(hearts), 3000);
// })

// let heartToRemove = 0;

// function removeHeart() {

//     if (heartToRemove < heartArray.length) {

//         heartArray[heartToRemove].remove();

//         heartToRemove++;

//         console.log(removeHeart);
//     }
// }

// removeHeart()

// function removeHeart() {

//     if (heartArray.length >= i++) {

//         heartArray[4].remove();
// }
// }

// let  = setInterval(removeHeart, 1000);

// heartArray[1].remove();

// myInterval = setInterval(heartArray, 3000);

// setInterval(function() {
//     heartArray[i].remove
// }, 1000);

// heartArray[1].remove()
