function acordar() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "img/acordado.jpeg"; 
    texto.innerText = "O cãozinho acordou!";
}

function alimentar() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "img/comendo.jpeg"; 
    texto.innerText = "Nham nham! Que comida gostosa!";
}

function carinho() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "img/carinho.jpeg"; 
    texto.innerText = "Ele amou o seu carinho! ❤️";
}

function brincar() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "img/animado.jpeg"; 
    texto.innerText = "O cãozinho está pulando de alegria!";
}

function dormir() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "img/dormindo.jpeg";
    texto.innerText = "O cãozinho está dormindo...";
}
