// первая задание домашки
let Pass = "password";
let login = "admin"
let Ulogin = prompt("Введите логин: ");
let UPass = prompt("Введите пароль: ");
if (UPass == Pass && Ulogin == login)
{
    alert ("Доступ разрешён");
}
else
{
    alert ("Доступ запрещён");
}