function acordar() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "acordado.jpeg"; 
    texto.innerText = "O cãozinho acordou!";
}

function alimentar() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "comendo.jpeg"; 
    texto.innerText = "Nham nham! Que comida gostosa!";
}

function carinho() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "carinho.jpeg"; 
    texto.innerText = "Ele amou o seu carinho! ❤️";
}

function brincar() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "animado.jpeg"; 
    texto.innerText = "O cãozinho está pulando de alegria!";
}

function dormir() {
    let foto = document.getElementById("foto-pet");
    let texto = document.getElementById("status-pet");

    foto.src = "dormindo.jpeg";
    texto.innerText = "O cãozinho está dormindo...";
}
