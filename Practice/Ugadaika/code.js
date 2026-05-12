let Answer = Math.floor(Math.random() * 100) + 1;
let pod = document.getElementById("pod");
let i = 0;
const but = document.getElementById("but")
function Uga ()
{
let UserTxt = document.getElementById("txt");
let UserNumber = Number(UserTxt.value);

if (UserNumber === Answer)
{
pod.textContent = "ТЫ УГАДАЛ!";
}
else if (UserNumber > Answer)
{
i++;    
pod.textContent = "Слишком много. " + i + " попыток";
}
else if (UserNumber < Answer)
{
i++;       
pod.textContent = "Слишком мало." + i + " попыток";
}
else
{
pod.textContent = "Ошибка";
}
}

but.addEventListener("click", Uga);
