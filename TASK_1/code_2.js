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