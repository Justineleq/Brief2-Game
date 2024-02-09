export default class Lifebar {
    #id;
    #colour;
    #life

    constructor(colour= "green", life = 100) {
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
            this.colour = colour;
        }
        
    barForApples() {
        let appleBar = document.querySelector(".lifeBarApple");
        appleBar.style.backgroundColor = this.colour;

      }

    barForWaterdrops() {
        let waterdropBar = document.querySelector(".lifeBarWaterdrop");
        waterdropBar.style.backgroundColor = this.colour;
        }

    createHTML() {
        const waterdropDiv = document.getElementById("lifeBarWaterdropContainer")
        
        let container = document.createElement('div');
        container.id = this.id;
        waterdropDiv.appendChild(container);
    
        container = document.getElementById(this.id);
    
        let appleLife = document.createElement('button');
        appleLife.textContent = "Gagner de la vie";
        appleLife.classList.add("appleLife");

    container.appendChild(appleLife);
  }

    addingLife() {
        if (this.#life <= 90) {
            this.#life = this.#life + 10;
            console.log("Yummy");
            this.barForApples()
        }
            
        if(this.#life <= 20) {
            this.appleBar.style.backgroundColor = "red"
        }
            
        if(this.#life >= 20 && this.#life <= 50) {
            this.appleBar.style.backgroundColor = "orange"
        }
    }
        
          removingLife() {
              if (this.#life >= 10) {
              this.#life = this.#life - 10;
              
              if(this.#life <= 20) {
                this.appleBar.style.backgroundColor = "red"
              }
              
              if(this.#life >= 20 && this.#life <= 50) {
                this.appleBar.style.backgroundColor = "orange"
              }
              
              this.appleBar()
          }
        }
        appleBar() {
         this.barreDeVie.style.width = this.#life + "%"
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
