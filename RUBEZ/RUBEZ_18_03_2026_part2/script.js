function createHeader() {
const header = document.createElement("header");
header.innerHTML = "<h1>Добро пожаловать!</h1>";
document.body.appendChild(header);
}

function createFooter() {
const footer = document.createElement("footer");
footer.innerHTML = "2025 Все права защищены";
document.body.appendChild(footer);
}

function createMain() {
const main = document.createElement("main");
main.appendChild(createImgBlock("Это кот 1", "https://avatars.mds.yandex.net/i?id=f85ca71dcdb39e33a87e9b4885292339d4533357-10926796-images-thumbs&n=13"));
main.appendChild(createImgBlock("Это кот 2", "https://img.freepik.com/premium-photo/close-up-portrait-cat_1048944-26763375.jpg?semt=ais_hybrid&w=740"));
main.appendChild(createForm());
document.body.appendChild(main);
}

function createImgBlock(text, imgSrc) {
const block = document.createElement("div");
block.className = "text-block";
block.innerHTML = `<p>${text}</p>
<img class='image' src='${imgSrc}'>`;
return block;
}
function createForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML =  `
    <h3>Оставьте заявку</h3>
    <form>
    <input type="text" placeholder="Ваше имя" required>
    <input type="email" placeholder="Ваш email" required>
    <button tupe="submit">Отправить</button>
    </form>
    `;
    return formContainer;
}

















applyStyles();
createHeader();
createMain();
createImgBlock();
createForm();
createFooter();