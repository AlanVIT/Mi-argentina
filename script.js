const card = document.querySelector('.card');
const dots = document.querySelectorAll('.dot');
let isFlipped = false;

card.addEventListener('touchstart', () => {
    if (!isFlipped) {
        card.style.transform = 'rotateY(180deg)'; // Gira la tarjeta
        dots[0].classList.remove('active'); // Desactiva el primer punto
        dots[1].classList.add('active'); // Activa el segundo punto
    } else {
        card.style.transform = 'rotateY(0deg)'; // Vuelve al estado inicial
        dots[1].classList.remove('active'); // Desactiva el segundo punto
        dots[0].classList.add('active'); // Activa el primer punto
    }
    isFlipped = !isFlipped; // Cambia el estado de la tarjeta
});


document.getElementById("btnFullscreen").addEventListener("click", function() {
    const appContainer = document.getElementById("appContainer");
    const menuInicial = document.getElementById("menuInicial");

    const frontImageInput = document.getElementById("frontImage");
    const backImageInput = document.getElementById("backImage");
    const frenteDNI = document.getElementById("frenteDNI");
    const reversoDNI = document.getElementById("reversoDNI");

    // Verificar si las imágenes fueron cargadas
    if (frontImageInput.files.length > 0 && backImageInput.files.length > 0) {
        const frontFile = frontImageInput.files[0];
        const backFile = backImageInput.files[0];

        // Mostrar las imágenes cargadas
        frenteDNI.src = URL.createObjectURL(frontFile);
        reversoDNI.src = URL.createObjectURL(backFile);

        // Ocultar el menú inicial y mostrar la app
        menuInicial.style.display = "none";
        appContainer.style.display = "block";

        // Solicitar pantalla completa
        if (appContainer.requestFullscreen) {
            appContainer.requestFullscreen();
        } else if (appContainer.mozRequestFullScreen) { // Firefox
            appContainer.mozRequestFullScreen();
        } else if (appContainer.webkitRequestFullscreen) { // Chrome, Safari, Opera
            appContainer.webkitRequestFullscreen();
        } else if (appContainer.msRequestFullscreen) { // IE/Edge
            appContainer.msRequestFullscreen();
        }
    } else {
        alert("Por favor, carga las imágenes del DNI.");
    }
});
