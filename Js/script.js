const selectTemplate = (src) => {
    const sections = document.getElementsByClassName('contenedor');
    let activeSection;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].style.display === 'block') {
            activeSection = sections[i];
            break;
        }
    }
    if (activeSection) {
        const cardOutput = activeSection.getElementsByClassName('card')[0];
        cardOutput.innerHTML = `<img src="${src}" style="width: 100%; border: 5px solid #fff;">`;
    }
};


const carta = () => {
    const sections = document.getElementsByClassName('contenedor');
    let activeSection;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].style.display === 'block') {
            activeSection = sections[i];
            break;
        }
    }
    if (activeSection) {
        const cardText = activeSection.getElementsByTagName('input')['cardText'].value;
        const bordeColor = activeSection.getElementsByTagName('input')['bordeTexto'].value;
        const colorTexto = activeSection.getElementsByTagName('input')['colorTexto'].value;

        const cardOutput = activeSection.getElementsByClassName('card')[0];
        const cardImage = cardOutput.getElementsByTagName('img')[0];
        if (bordeColor) {
            cardImage.style.borderColor = bordeColor;
        }
        const cardCaption = document.createElement('div');
        cardCaption.style.position = 'absolute';
        cardCaption.style.color = colorTexto;
        cardCaption.style.textAlign = 'center';
        cardCaption.textContent = cardText;
        const existingCaption = cardOutput.getElementsByTagName('div')[0];
        if (existingCaption) {
            cardOutput.removeChild(existingCaption);
        }
        cardOutput.appendChild(cardCaption);
    }
};

document.getElementById('temas').addEventListener('change', function () {
    const temaSeleccionado = this.value;
    const secciones = document.getElementsByClassName('contenedor');
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    const selectedSection = document.getElementById(temaSeleccionado);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
});


function cambiarArchivo (opcion){
    var objeto=document.getElementById("enlaceEstilos");
    objeto.href=opcion;
}

