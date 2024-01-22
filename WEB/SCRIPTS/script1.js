// FUNCION DE QUE APAREZCAN ELEMNTOS AL CLICAR PANTALLA
const openMenu = document.querySelector('.open-button');

openMenu.addEventListener("click", OpenAppScreen);

function OpenAppScreen() {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');

    var elementosClase1 = document.getElementsByClassName('viñeta1');
    var elementosClase2 = document.getElementsByClassName('viñeta2');
    var elementosClase3 = document.getElementsByClassName('viñeta3');
    var elementosClase4 = document.getElementsByClassName('viñeta4');
    var elementosClase5 = document.getElementsByClassName('viñeta5');
    var elementosClase6 = document.getElementsByClassName('viñeta6');
    var elementosClase7 = document.getElementsByClassName('viñeta7');

// FUNCION DE APARECER I ESCALADO CON UN TEMPORIZADOR DE MEDIO SEGUNDO
    setTimeout(function () {
        for (var i = 0; i < elementosClase1.length; i++) {
            elementosClase1[i].style.visibility = 'visible';
            elementosClase1[i].style.transform = 'scale(1)';
        }

        for (var j = 0; j < elementosClase2.length; j++) {
            elementosClase2[j].style.visibility = 'visible';
            elementosClase2[j].style.transform = 'scale(1)';
        }

        for (var m = 0; m < elementosClase1.length; m++) {
            elementosClase3[m].style.visibility = 'visible';
            elementosClase3[m].style.transform = 'scale(1)';
        }

        for (var t = 0; t < elementosClase2.length; t++) {
            elementosClase4[t].style.visibility = 'visible';
            elementosClase4[t].style.transform = 'scale(1)';
        }

        for (var e = 0; e < elementosClase1.length; e++) {
            elementosClase5[e].style.visibility = 'visible';
            elementosClase5[e].style.transform = 'scale(1)';
        }

        for (var d = 0; d < elementosClase2.length; d++) {
            elementosClase6[d].style.visibility = 'visible';
            elementosClase6[d].style.transform = 'scale(1)';
        }

        for (var b = 0; b < elementosClase1.length; b++) {
            elementosClase7[b].style.visibility = 'visible';
            elementosClase7[b].style.transform = 'scale(1)';
        }
    }, 500);

}


// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON SOS
const buttonSOS = document.querySelector('.apple-tv')
const buttonSOSI = document.querySelector('.apple-tv i')

// ACTUA SOBRE EL BOTON
buttonSOS.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta2').style.scale = "1.2";
    document.querySelector('.viñeta2').style.transitionDuration = "0.5s";
})

buttonSOS.addEventListener("mouseout", () => {
    document.querySelector('.viñeta2').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonSOSI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta2').style.scale = "1.2"  
})

buttonSOSI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta2').style.scale = "1"
})



// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON RECURSOS   
const buttonRec = document.querySelector('.home')
const buttonRecI = document.querySelector('.home i')

// ACTUA SOBRE EL BOTON
buttonRec.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta1').style.scale = "1.2";
    document.querySelector('.viñeta1').style.transitionDuration = "0.5s";
})

buttonRec.addEventListener("mouseout", () => {
    document.querySelector('.viñeta1').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonRecI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta1').style.scale = "1.2"  
})

buttonRecI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta1').style.scale = "1"
})



// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON COMPARTIR  
const buttonComp = document.querySelector('.message')
const buttonCompI = document.querySelector('.message i')

// ACTUA SOBRE EL BOTON
buttonComp.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta3').style.scale = "1.2";
    document.querySelector('.viñeta3').style.transitionDuration = "0.5s";
})

buttonComp.addEventListener("mouseout", () => {
    document.querySelector('.viñeta3').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonCompI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta3').style.scale = "1.2"  
})

buttonCompI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta3').style.scale = "1"
})



// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON LINEAS
const buttonLin = document.querySelector('.xbox-app')
const buttonLinI = document.querySelector('.xbox-app i')

// ACTUA SOBRE EL BOTON
buttonLin.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta4').style.scale = "1.2";
    document.querySelector('.viñeta4').style.transitionDuration = "0.5s";
})

buttonLin.addEventListener("mouseout", () => {
    document.querySelector('.viñeta4').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonLinI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta4').style.scale = "1.2"  
})

buttonLinI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta4').style.scale = "1"
})



// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON REPORTAR
const buttonRep = document.querySelector('.playstation-app')
const buttonRepI = document.querySelector('.playstation-app i')

// ACTUA SOBRE EL BOTON
buttonRep.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta5').style.scale = "1.2";
    document.querySelector('.viñeta5').style.transitionDuration = "0.5s";
})

buttonRep.addEventListener("mouseout", () => {
    document.querySelector('.viñeta5').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonRepI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta5').style.scale = "1.2"  
})

buttonRepI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta5').style.scale = "1"
})



// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON REPORTAR
const buttonPerf = document.querySelector('.appstore')
const buttonPerfI = document.querySelector('.appstore i')

// ACTUA SOBRE EL BOTON
buttonPerf.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta6').style.scale = "1.2";
    document.querySelector('.viñeta6').style.transitionDuration = "0.5s";
})

buttonPerf.addEventListener("mouseout", () => {
    document.querySelector('.viñeta6').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonPerfI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta6').style.scale = "1.2"  
})

buttonPerfI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta6').style.scale = "1"
})



// QUE SE HAGAN GRANDES LAS VIÑETAS DE BOTON CONFIGURACION
const buttonConf = document.querySelector('.appstore2')
const buttonConfI = document.querySelector('.appstore2 i')

// ACTUA SOBRE EL BOTON
buttonConf.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta7').style.scale = "1.2";
    document.querySelector('.viñeta7').style.transitionDuration = "0.5s";
})

buttonConf.addEventListener("mouseout", () => {
    document.querySelector('.viñeta7').style.scale = "1"
})


// ACTUA SOBRE EL <I> DEL BOTO
buttonConfI.addEventListener("mouseenter", () => {
    document.querySelector('.viñeta7').style.scale = "1.2"  
})

buttonConfI.addEventListener("mouseout", () => {
    document.querySelector('.viñeta7').style.scale = "1"
})






