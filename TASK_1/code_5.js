let randomNumber = Math.floor(Math.random() * 50) + 1;
let userNotGuess = true;
let userNumber;
while (userNotGuess == true) 
{
userNumber = +prompt("Угадай число от 1 до 50: ");
if (userNumber == randomNumber)
{
    alert("Верно");
    userNotGuess = false;
}
else if (userNumber > randomNumber)
{
    alert("Много");
}
else
{
    alert("Мало");
}
}







