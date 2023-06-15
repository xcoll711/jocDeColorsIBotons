
const jugarButton = document.getElementById('jugarButton');
const provarButton = document.getElementById('provarButton');
const botons = document.querySelector('.botons');
const resultat = document.getElementById('resultat');

let encerts = 0;
let intents = 0;
let partides = 0;

let combinacioSecreta = generarCombinacioSecreta();


jugarButton.addEventListener('click',(e) =>{
    provarButton.disabled = false;
    jugarButton.disabled = true;

});

provarButton.addEventListener('click',(e) =>{
    if(botons.classList.contains(combinacioSecreta)){
        provarButton.disabled = true;
        jugarButton.disabled = false;

    }

});
 

//canviar colors
botons.addEventListener('click', (e) =>{
    if(e.target.classList.contains('boto')){
        e.target.classList.toggle('blau');
    }
});



// Funció per generar una combinació secreta aleatòria
function generarCombinacioSecreta() {
    const colors = ['vermell', 'blau'];
    let combinacio = '';
    
    // Generar dos colors aleatoris i afegir-los a la combinació
    for (let i = 0; i < 2; i++) {
      const colorAleatori = colors[Math.floor(Math.random() * colors.length)];
      combinacio += colorAleatori + ' ';
    }
    
    // Eliminar l'espai en blanc final
    combinacio = combinacio.trim();
    
    return combinacio;
  }


  function comprovarCombinacio() {
    // Incrementar el nombre d'intents
    intents++;
    
    // Obtenir la combinació dels botons seleccionats
    let combinacioProva = '';
    botons.forEach(boto => {
      combinacioProva = (boto.classList.contains('blau') ? 'blau' : 'vermell') ;
    });
    combinacioProva;
    
    // Comprovar si la combinació és correcta
    if (combinacioProva === combinacioSecreta) {
      encerts++;
      habilitarProvarButton(false);
      jugarButton.disabled = false;
    }
    
    // Actualitzar el resultat
    actualitzarResultat();
  }


  function actualitzarResultat() {
    resultat.textContent = `Ha encertat ${encerts} vegades en ${intents} intents en ${partides} partides.`;
  }
  