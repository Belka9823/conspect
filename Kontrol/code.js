const CLicker = () => {
const oneP = document.querySelector("p")
oneP.textContent = "Текст Изменён";
}


const Svet = () => {

    const box = document.querySelector("div");

    box.addEventListener("mouseenter", () => {
        box.classList.add("Blue");
    });
    
    box.addEventListener("mouseleave", () => {
        box.classList.remove("Blue");
    });
}
Svet();


const pryatat = () => {
const but = document.querySelector("#k")
const net = document.querySelector("#net")

  but.addEventListener('click', () => {
    net.classList.toggle('netu');
  });
}
pryatat();


const FonKonpki = () => {
const t1 = document.querySelector("#tone")
const t2 = document.querySelector("#ttwo")
const k1 = document.querySelector("#knopkaone")
const k2 = document.querySelector("#knopkatwo")
const k3 = document.querySelector("#knopkathree")
const k4 = document.querySelector("#knopkafour")

  k1.addEventListener('click', () => {
        if (t1.style.color == "red") {
            t1.style.color = ""; 
        } else {
            t1.style.color = "red";
        }
  });
  k2.addEventListener("click", () => {
        if (t1.style.fontSize == "14px") {
            t1.style.fontSize = ""; 
        } else {
            t1.style.fontSize = "14px";
        }
  });


  k3.addEventListener("click", () => {
        if (t2.style.color == "blue") {
            t2.style.color = ""; 
        } else {
            t2.style.color = "blue";
        }
  });

  k4.addEventListener("click", () => {
        if (t2.style.fontSize == "24px") {
            t2.style.fontSize = ""; 
        } else {
            t2.style.fontSize = "24px";
        }
  });
}
FonKonpki();







