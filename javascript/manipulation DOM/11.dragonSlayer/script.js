



//***** declaration des variables 
const DRAGON="dragon";
const PLAYER="player";
var game= [];


//***************************************** les fonctions **************************************************/

//fonction choix aléatoire

function getRandomInteger(min,max){
    
    var random=Math.floor(Math.random() * (max - min +1)) + min;
    return random;
}


//fonction lancé de dés
function throwDices(dices,sides){
    var somme=0;
  for(var i=1;i<=dices ;i++){
      
      somme=somme+getRandomInteger(1,sides);
  }
  return somme;
 
}



//fonction choix du niveau
function initializeGame(){
    
    game.round=1;
    game.level= prompt("veuillez choisir votre niveau de jeu");
    game.pvDragon = 0;
    game.pvPlayer = 0;
    
    switch (game.level) {
       case "facile":
           
            game.pvDragon = 100 + throwDices(5,10)
            game.pvPlayer = 100+ throwDices(100,10)
        break;
        
        
        case "normal":
           
           game.pvDragon = 100 + throwDices(10,10)
           game.pvPlayer = 100 + throwDices(10,10)
        break;
        
        case "difficile":
            game.pvDragon = 100 + throwDices(10,10)
            game.pvPlayer = 100+ throwDices(7,10) 
        break;
        default: alert("erreur ! Vous n'avez pas choisi la bonne valeur!");
        
    }    
    //alert( "Vous avez "+ game.pvPlayer+ " points de vie et le dragon a "+game.pvDragon +" points de vie");
}




//fonction initiative attaque 
function getAttacker() {
    var Pturn = throwDices(10,6);
    var Dturn = throwDices(10,6);
    
    if (Pturn>Dturn){
        
        return DRAGON;
    }
    else {
        return PLAYER;
    }
}


//fonction dégat attaque 

function computerDragonDamagePoint(){
    var dragonDammage=throwDices(3,6);//15
    switch(game.level){
        
        case "facile":
         dragonDammage = Math.round(dragonDammage- (dragonDammage*throwDices(2,6) /100));
        break;
        
        case "difficile":
         dragonDammage = Math.round(dragonDammage + (dragonDammage*throwDices(1,6) /100)); 
        break;
    }
    return dragonDammage;
}



function computerPlayerDamagePoint(){
    var playerDammage=throwDices(3,6);
   switch(game.level){
        
        case "facile":
        playerDammage = Math.round(playerDammage + (playerDammage*throwDices(2,6) /100));
        break;
        
        case "difficile":
        playerDammage = Math.round(playerDammage - (playerDammage*throwDices(1,6) /100));
        break;
    }
    return  playerDammage;
}



//fonction affichage de l'état des PV

function showGameState(){
    
    if (game.pvPlayer>0){
    console.log("Points de vie du chevalier : "+game.pvPlayer +" points de vie");
    document.write('<body><main><div class="game"><div class="game-state"><figure class="game-state_player"><img src="images/knight.png" alt="Chevalier"><figcaption>' +game.pvPlayer +'PV </figcaption></figure></div></div></main></body>');
    
    }
    else{
    console.log("GAME OVER !");
    }
    
    if (game.pvDragon>0){
    console.log("Points de vie du dragon : "+game.pvDragon +" points de vie");
    document.write('<body><main><div class="game"><div class="game-state"><figure class="game-state_player"><img src="images/dragon.png" alt="Dragon"><figcaption>'+game.pvDragon +'PV </figcaption></figure></div></div></main></body>');
    
    }
    else {
    console.log("LE DRAGON EST MORT GAME OVER !");
    }
   
}


//fonction évolution des PV

function showGameLog(attacker,damagePoints){
    
 
    switch (attacker)  {
        case "dragon":
        console.log("Le dragon vous attaque ! Il vous cause " +damagePoints +" points de dommage");
        document.write('<body><main><div class="game"><figure class="game-round"><img src="images/dragon-winner.png" alt="Dragon vainqueur"><figcaption>Le dragon prend l initiative, vous attaque et vous inflige ' +damagePoints+ ' points de dommage !</figcaption></div></div></main></body>');
        
        break;   
        
        case "player":   
        console.log("Vous êtes le plus rapide vous attaquez le dragon et lui infligez " +damagePoints+" points de dommage");
        document.write('<body><main><div class="game"><figure class="game-round"><img src="images/knight-winner.png" alt="knight"><figcaption>Vous êtes le plus rapide vous attaquez le dragon et lui infligez ' +damagePoints+ ' points de dommage !</figcaption></div></div></main></body>')
        
    }
    
    console.log("Vous êtes au tour numéro :" +game.round);
    document.write('<body><main><div class="game"><h3>Tour n°'+game.round+ '</h3></div></main></body>')
}



//fonction qui excute le jeu

function gameLoop(){

var attacker;
var damagePoints;



while (game.pvPlayer>=0 &&  game.pvDragon>=0){
    
    attacker=getAttacker();
    if (attacker==DRAGON){
       damagePoints=computerDragonDamagePoint(); 
       game.pvPlayer=game.pvPlayer-damagePoints;
    }
    else {
        damagePoints=computerPlayerDamagePoint();
        game.pvDragon=game.pvDragon-damagePoints;
    } 
    showGameState();
    showGameLog(attacker,damagePoints);
    game.round++;
         
    }
}


// fonction affichage du gagnant


function showGameWinner(){
    
    if(game.pvDragon>0){
        console.log("Vous avez perdu, le dragon vous a carbonisé")
        document.write('<body><main><div class="game"><footer><figure class="game-end"><figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption><img src="images/dragon-winner.png" alt="Dragon vainqueur"></figure></footer></div></main></body>')
    }
    else{
        console.log("Vous avez vaincu le dragon, vous êtes un vrai héro")
        document.write('<body><main><div class="game"><footer><figure class="game-end"><figcaption>Vous avez vaincu le dragon, vous êtes un vrai héro</figcaption><img src="images/knight-winner.png" alt="knight"></figure></footer></div></main></body>')
    }
}


// le code pour démarrer 
document.write('<body><main><div class="game"><h2>Que la fête commence !!</h2></div></main></body>')
function startGame(){
    initializeGame();
    gameLoop(); 
    showGameWinner()
}



//************************************************************* le code principal 

startGame()


