const mena = document.getElementById('knop');
const menas = document.getElementById('knops');

function slyder() {
    let proverka = document.querySelector("#fr");
    let SeconDD =  document.querySelector("#sr");

    if (proverka.classList.contains("est")) {

        proverka.classList.remove("est"); 
        SeconDD.classList.add("est"); 
    } else {
        SeconDD.classList.remove("est"); 
        proverka.classList.add("est"); 
    }
}

mena.addEventListener('click', slyder);
menas.addEventListener('click', slyder);
