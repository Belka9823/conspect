// третье задание домашки
let LineA = +prompt("Введите первую сторону треугольника:");
let LineB = +prompt("Введите вторую сторону треугольника:");
let LineC = +prompt("Введите третью сторону треугольника:");


if (LineA === LineB === LineC)
{
alert("Это равносторонний треугольник");
}
else if (LineA + LineB <= LineC || Lineb + LineC <= LineA || LineC + LineA <= LineB) 
{
alert("Такого треугольника не существует");
}
else if (LineA === LineB != LineC || LineA === LineC != LineB || LineB === LineC != LineA)
{
alert("Это равнобедренный треугольник");
}
else if (LineA ** 2 + LineB ** 2 === LineC ** 2 || LineA ** 2 + LineC ** 2 ===  LineB ** 2 || LineB ** 2 + LineC ** 2 === LineA) 
{
alert("Это прямоугольный треугольник")
}





