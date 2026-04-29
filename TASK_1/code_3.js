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