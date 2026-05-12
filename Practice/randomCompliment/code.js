const listCOM = 
[
"Ты крут!",
"Ты великолепен!",
"ты невероятный!",
"Вау как ты это сделал!",
"Ты крутышка!"
]

but = document.getElementById("but");
function comp ()
{
    let ran = Math.floor(Math.random() * listCOM.length);
    let txt = document.getElementById("compliment");
    txt.textContent = listCOM[ran]; 
}

but.addEventListener ("click", comp)