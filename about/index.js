let perso = document.querySelector(".perso");
let obstacles = document.querySelector(".obstacles");
let gameover = document.querySelector(".game-over");

let obstaclePosition = 443; // la position de départ de l'obstacle

function sauter() {
    if(perso.classList != "animation"){
        perso.classList.add('animation');
    }
    setTimeout(function(){
        perso.classList.remove('animation');
    },500)
}

let verification = setInterval(function(){
    let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
    let obstaclesTop = parseInt(window.getComputedStyle(obstacles).getPropertyValue("top"));

    if(obstaclesLeft<45 && obstaclesLeft >0 && persoTop>= obstaclesTop-40){
        obstacles.style.animation = "none";
        clearInterval(verification);
        gameover.style.display = "block";
    }

    // mettre à jour la position de l'obstacle
    obstaclePosition -= 1;
    obstacles.style.left = obstaclePosition + "px";
},1);



// apparition texte progressif

// Récupération de l'élément <p> contenant le texte
const texte = document.getElementById("texte");

// Définition de la vitesse d'affichage du texte (en millisecondes)
const vitesse = 70;

// Récupération du contenu du texte
const contenu = texte.innerHTML;

// Création d'une variable pour stocker la position actuelle du texte à afficher
let position = 0;

// Mise en place de l'interval pour afficher le texte progressivement
const affichage = setInterval(() => {
  // Récupération de la partie de texte à afficher
  const partieTexte = contenu.substr(0, position + 1);
  
  // Affichage de la partie de texte
  texte.innerHTML = partieTexte;

  // Incrémentation de la position
  position++;

  // Arrêt de l'affichage si toute la chaîne de texte a été affichée
  if (partieTexte === contenu) {
    clearInterval(affichage);
  }
}, vitesse);



