let but = document.getElementById("write")
let coloring = document.getElementById("colorIT")
let ranging = document.getElementById("rangeIT")
let List = document.getElementById("list");

function Writer ()
{
let Text = document.getElementById("txt");
List.textContent = Text.value;
}

function color ()
{
List.style.color = coloring.value;
}

function range ()
{
List.style.fontSize = ranging.value + "px";
}

but.addEventListener("click", Writer)
coloring.addEventListener("input", color)
ranging.addEventListener("input", range)
