function texto() {
    let change = document.getElementsByTagName('p')[1];
    change.innerHTML = 'Trabalhar em uma BigTech';
};
texto();

function alteraCor() {
    let changeColor = document.getElementsByClassName('main-content')[0];
    changeColor.style.background = 'rgb(76, 164, 109)';
};
alteraCor();

function alteraCorRed() {
    let changeColor = document.getElementsByClassName('center-content')[0];
    changeColor.style.background = 'white';
};
alteraCorRed();

function alteraTitulo() {
    let changeTitle = document.getElementsByTagName('h1')[0];
    changeTitle.innerHTML = 'Desafio - JavaScript'
};
alteraTitulo();

function alteraLetra() {
    let changeLetter   = document.getElementsByTagName('p')[0];
    changeLetter.innerHTML = changeLetter.innerHTML.toUpperCase();
};
alteraLetra();

function alteraTag() {
    let changeTag = document.getElementsByTagName('p');
    let textos = '';
    for (let index = 0; index < changeTag.length - 1; index += 1) {
        textos += changeTag[index].innerText + ' ';
    }
    changeTag[3].innerText = textos;
}
alteraTag();