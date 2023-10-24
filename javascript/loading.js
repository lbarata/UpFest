

function mostrarLoadingPopup() {
    const loadingPopup = document.getElementById('loading-popup');
    loadingPopup.style.display = 'block';
}


function mostrarSuccessPopup() {
    const loadingPopup = document.getElementById('loading-popup');
    loadingPopup.style.display = 'none';

    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'block';

    setTimeout(function () {
        successPopup.style.display = 'none';
        window.location.href = 'http://localhost:63342/UpFest_App/root/bilhetes.html';
    }, 1500);
}



function simularCompra() {
    mostrarLoadingPopup();

    setTimeout(function () {
        mostrarSuccessPopup();
    }, 3000);
}



document.addEventListener("DOMContentLoaded", function () {
    
    let tituloLoading = document.querySelector(".tituloCinza")
    let tituloEntrada = document.querySelector(".tituloEntrar");
    
    let loadingItem = document.querySelector(".loading-bar")
    let loadingProgress = document.querySelector(".loading-progress");
    

    // Inicia a barra de loading
    loadingProgress.style.animationPlayState = "running";

    // Após 2 segundos, oculta a barra de loading e mostra o texto
    setTimeout(function () {
        tituloLoading.style.display = "none";
        loadingItem.style.display = "none";
        loadingProgress.style.display = "none";
        tituloEntrada.classList.remove("hidden");
    }, 5000); // 2 segundos
});


