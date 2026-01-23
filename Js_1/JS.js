let num = +prompt('Введите число.')
if (num >= 10 && num < 100)
{
    alert('Число в диапозоне');
}
else
{
    alert('Число НЕ в диапозоне');
} 

let nums = +prompt('Введите число.')
let result = (nums >= 10 && nums < 100)? 'Число в диапозоне' : 'Число НЕ в диапозоне';
alert(result)