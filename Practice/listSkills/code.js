let skillList =
[
"DOM поиск", 
"События", 
"Стили через JS", 
"Массивы"
]

let spisok = document.getElementById ("skilllist");
skillList.forEach (skill =>
{
let stroka = document.createElement("li");
stroka.textContent = skill;
spisok.append(stroka);
}
)
