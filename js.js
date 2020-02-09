/**Javascript Section 11: Guessing Game*/
//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");

//check guess
if (guess == secretNumber) {
    alert("You win!!!");
}
else if (guess != secretNumber) {
    alert("omae wa mou shindeiru!!");
}