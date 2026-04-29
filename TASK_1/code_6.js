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