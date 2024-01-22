// FUNCIONES PARA APARECER Y OCULTAR CUADROS

// APARECER RECUPERAR CONTRASEÑA
const verRecuperar = document.querySelector('.bot-ini-recu');

verRecuperar.addEventListener("click", () => {
    document.querySelector('.iniciarsesion').style.visibility = "hidden";
    document.querySelector('.recuperarcontra').style.visibility = "visible";
})

// APARECER DESAPARCER VALIDACION RECUPERAR CONTRASEÑA
const verValiRecu = document.querySelector('.bot-recuperar');
const volverVerRecu = document.querySelector('.bot-volver-recu');

// APARECER
verValiRecu.addEventListener("click", () => {
    document.querySelector('.recu').style.visibility = "hidden";
    document.querySelector('.recu-vali').style.visibility = "visible";
})

//DESAPARECER
volverVerRecu.addEventListener("click", () => {
    document.querySelector('.recu').style.visibility = "visible";
    document.querySelector('.recu-vali').style.visibility = "hidden";
})