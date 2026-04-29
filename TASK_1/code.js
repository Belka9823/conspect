// задание 1

let userSum = +prompt("Введите сумму покупки: ");
if (userSum)
{  
if (userSum >= 2000)
{
alert("скидка 20%");
}
else if (userSum >= 1000 && userSum <= 1999)
{
alert("скидка 15%");
}
else if (userSum > 999)
{
alert("скидка 10%");
}
else
{
alert("скидка 0%");
}    
}
else
{
    alert("Вы ничего не ввели!")
}

// задание 2

let userWord = prompt("Введите слово: ");
let A = userWord.includes("к");
if (userWord)
{    
if (A == true)
{
    alert("В данном слове есть буква 'к' ");
}
else
{
    alert("В данном слове нет буквы 'к' ");
}
}
else
{
    alert("Вы ничего не ввели!")
}

// задание 3

let userDay = +prompt("Введите число от 1 до 7:")
if (userDay)
{    
switch (userDay)
{
case 1:
    alert("Понедельник");
    break;
case 2:
    alert("Вторник");
    break;
case 3:
    alert("Среда");
    break;
case 4:
    alert("Четверг");
    break;
case 5:
    alert("Пятница");
    break;
case 6:
    alert("Суббота");
    break;   
case 7:
    alert("Воскресенье");
    break;
default:
    alert("Значение некорректно!");
    break;
}
}
else
{
    alert("Вы ничего не ввели!")
}

// задание 4

for (let i = 1; i <= 20; i++ )
{
if (i % 2 == 0)
{
    console.log(i);
}
else
{
    continue;
}
}

// задание 5

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

// задание 6

let firstSchoolSubjects = +prompt("Введите баллы по первому предмету: ");
let secondSchoolSubjects  = +prompt("Введите баллы по второму предмету: ");
let thirdSchoolSubjects = +prompt("Введите баллы по Третьему предмету: ");
if (firstSchoolSubjects && secondSchoolSubjects && thirdSchoolSubjects)
{
let arithmeticMean = Math.round((firstSchoolSubjects + secondSchoolSubjects + thirdSchoolSubjects) / 3);
if (arithmeticMean >= 90 && arithmeticMean <= 100)
{
    alert("Ваша оценка 5!");
}
else if (arithmeticMean >= 75 && arithmeticMean <= 89)
{
    alert("Ваша оценка 4!");
}
else if (arithmeticMean >= 65 && arithmeticMean <= 74)
{
    alert("Ваша оценка 3.");
}
else if (arithmeticMean <= 64 && arithmeticMean >= 0)
{
    alert("Ваша оценка 2...");
}
else
{
    alert("Ошибка!");
}
}
else
{
    alert("ошибка!")
}

// задание 7

let userWoord = prompt("Введите слово: ");
let wordLength = userWoord.length;
if (userWoord)
{
    alert("введённом слове: " + wordLength + " букв");
}
else
{
    alert("Вы ничего не ввели!")
}


