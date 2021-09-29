var enemyName = "Roborto";
var enemyHealth = 10;
var enemyAttack = 12;
var playerAttack = 50
var playerName = "Cool";

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
};

enemyHealth = enemyHealth - playerAttack
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }


  var playerHealth = 100;
if (playerHealth > 0) {
    console.log("Your player is still alive!")
}

var playerHealth = 10;

if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}

fight();