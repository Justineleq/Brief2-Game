export default class Lifebar {
  #id;
  #colour;
  #life;

  constructor(colour, life = 100) {
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

  get conteneur() {
    let conteneur = document.querySelector("#conteneur" + this.#id);
    return conteneur;
  }

  get barreDeVie() {
    let barreDeVie = document.querySelector("#barre" + this.#id);
    return barreDeVie;
  }

  lifeUp() {
    return this.lifeUp()
  }

  addingLife() {
    return this. addingLife()
  }

  removeRhinoImg() {
    this.removeRhinoImg()
  }

  deadImg() {
    this.deadImg()
  }

// Creation of lifeBars
  creerHTML() {
    const lifeBarsContainer = document.getElementById("lifeBars");

    let conteneur = document.createElement("div");
    conteneur.id = this.id;
    lifeBarsContainer.appendChild(conteneur);

    let barre = document.createElement("div");
    barre.style.border = "1px solid white";
    barre.style.height = "10px";
    barre.style.borderRadius = "3px";
    barre.style.margin = "5px"

    conteneur.appendChild(barre);

    let barreDeVie = document.createElement("div");
    barreDeVie.id = "barre" + this.id;
    barreDeVie.style.width = "100%";
    barreDeVie.style.height = "10px";
    barreDeVie.style.backgroundColor = this.colour;

    barre.appendChild(barreDeVie);
  }

  removeRhinoImg() {
    let removeImg = document.getElementById("mouth");
    removeImg.style.visibility = "hidden"
  }

  deadImg() {
    let skeleton = document.getElementById("skeleton");
    skeleton.style.visibility = "visible"
  }

  addingLife() {
    if (this.#life <= 90) {
      this.#life = this.#life + 15;
      console.log("Yummy");
      this.lifeUp();
    }
  }
  lifeUp() {
    this.barreDeVie.style.width = this.#life + "%";
  }

// Loses life but couldn't get the colour to change
  losingLife() {
    let dying = document.getElementById(`barre${this.id}`)
    let time = setInterval(() => {
        if(this.life === 0) {
            clearInterval(time)
            this.removeRhinoImg()
            this.deadImg()
            alert("RIP")
        }
        if(this.life > 0 && this.life <= 100) {
            this.colour = "orange";
            this.life -= 1;
            dying.style.width = this.life + '%';
        } 
    }, 250)
  }
}

