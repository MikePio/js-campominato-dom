/* 
//*PARTE 1          REPO: js-campominato-grid
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
**Consigli del giorno:** 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

*PARTE 2            REPO: js-campominato-dom
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

*/

// const arrayBoxes = [];

const buttonEasy = document.querySelector('#easy-btn');
const buttonNormal = document.querySelector('#normal-btn');
const buttonHard = document.querySelector('#hard-btn');
const mainWrapper = document.querySelector('.main-wrapper');






  // //per la generazione del container 
  // const generateContainer = document.createElement('div');
  // //generazione del container
  // generateContainer.classList.add('container');
  // mainWrapper.append(generateContainer);
  
  // for (let i = 0; i < 100; i++){
  //   //per la generazione di delle box
  //   const generateBoxes = document.createElement('div');
  //   //generazione di una box
  //   generateBoxes.classList.add('square');
  //   // document.querySelector('.container').append(generateBoxes);
  //   document.querySelector('.container').append(generateBoxes);
    
  //   // const boxes = document.querySelector('.square');
  //   // // console.log(boxes, i);    
    
  //   // arrayBoxes.push(boxes);
  //   // // console.log(arrayBoxes[i], [i]);    
  //   // const singleBox = arrayBoxes[i];
  //   // console.log(singleBox);    

  //     generateBoxes.addEventListener('click', function(){
  //       //* cliccando la prima cambia colore e la seconda ritorna come prima
  //       generateBoxes.classList.toggle('clicked');
  //       //OPPURE (NON LA MIGLIORE PERCHè NON è POSSIBILE LEGGERE LE PROPRIETà NEL CONSOLE.LOG)
  //       // this.classList.toggle('clicked');
  //       //* cliccando cambia colore per sempre
  //       // generateBoxes.classList.add('clicked');
  //       //OPPURE
  //       // generateBoxes.style.backgroundColor = '#355289';
  //       console.log(generateBoxes);
  //   });

  // }

  


  
  
//* button MODALITà FACILE che genera container e box-----------------------------------------------------------------------------------------------------------------------------
buttonEasy.addEventListener('click', function(){
  // disabilito i buttons
  buttonHard.disabled = true;
  buttonEasy.disabled = true;
  buttonNormal.disabled = true;

  generaContainer();
  
  for (let i = 0; i < 100; i++){
    
    //per la generazione di delle box
    const generateBoxes = document.createElement('div');
    // //generazione di una box
    // generateBoxes.classList.add('square');
    // document.querySelector('.container').append(generateBoxes);
    //*OPPURE
    const squareType = generateBoxes.classList.add('square-smaller');
    generaBox(generateBoxes, squareType);

    generateBoxes.addEventListener('click', function(){
      //* cliccando la prima cambia colore e la seconda ritorna come prima
      generateBoxes.classList.toggle('clicked');
      //OPPURE (NON LA MIGLIORE PERCHè NON è POSSIBILE LEGGERE LE PROPRIETà NEL CONSOLE.LOG)
      // this.classList.toggle('clicked');
      //* cliccando cambia colore per sempre
      // generateBoxes.classList.add('clicked');
      //OPPURE
      // generateBoxes.style.backgroundColor = '#355289';
      // console.log(generateBoxes);
      //* CREO UNA PROPRIETà 
      generateBoxes.boxid = i;
      console.log(generateBoxes);
    });
    
  }
  
});

console.log(buttonEasy);

//* button DIFFICOLTà NORMALE che genera container e box---------------------------------------------------------------------------------------------------------------------------
buttonNormal.addEventListener('click', function(){
  // disabilito i buttons
  buttonHard.disabled = true;
  buttonEasy.disabled = true;
  buttonNormal.disabled = true;

  generaContainer();
  
  for (let i = 0; i < 81; i++){
    
    //per la generazione delle box
    const generateBoxes = document.createElement('div');
    const squareType = generateBoxes.classList.add('square-normal');
    generaBox(generateBoxes, squareType);
    
    generateBoxes.addEventListener('click', function(){
      //* cliccando la prima cambia colore e la seconda ritorna come prima
      generateBoxes.classList.toggle('clicked');
      //OPPURE (NON LA MIGLIORE PERCHè NON è POSSIBILE LEGGERE LE PROPRIETà NEL CONSOLE.LOG)
      // this.classList.toggle('clicked');
      //* cliccando cambia colore per sempre
      // generateBoxes.classList.add('clicked');
      //OPPURE
      // generateBoxes.style.backgroundColor = '#355289';
      // console.log(generateBoxes);
      //* CREO UNA PROPRIETà 
      generateBoxes.boxid = i;
      console.log(generateBoxes);
    });
    
  }
  
});

console.log(buttonNormal);

//* button DIFFICOLTà DIFFICILE che genera container e box---------------------------------------------------------------------------------------------------------------------------
buttonHard.addEventListener('click', function(){
  // disabilito i buttons
  buttonHard.disabled = true;
  buttonEasy.disabled = true;
  buttonNormal.disabled = true;

  generaContainer();
  
  for (let i = 0; i < 49; i++){
    
    //per la generazione delle box
    const generateBoxes = document.createElement('div');
    const squareType = generateBoxes.classList.add('square-bigger');
    generaBox(generateBoxes, squareType);
    
    generateBoxes.addEventListener('click', function(){
      //* cliccando la prima cambia colore e la seconda ritorna come prima
      generateBoxes.classList.toggle('clicked');
      //OPPURE (NON LA MIGLIORE PERCHè NON è POSSIBILE LEGGERE LE PROPRIETà NEL CONSOLE.LOG)
      // this.classList.toggle('clicked');
      //* cliccando cambia colore per sempre
      // generateBoxes.classList.add('clicked');
      //OPPURE
      // generateBoxes.style.backgroundColor = '#355289';
      // console.log(generateBoxes);
      //* CREO UNA PROPRIETà 
      generateBoxes.boxid = i;
      console.log(generateBoxes);
    });
    
  }
  
});

console.log(buttonHard);


// * --------------------------- FUNZIONI ---------------------------------- /
function generaContainer(){
  //per la generazione del container 
  const generateContainer = document.createElement('div');
  //generazione del container
  generateContainer.classList.add('container');
  mainWrapper.append(generateContainer);
}

function generaBox(newBoxes, addClassBoxes){
  //generazione di una box
  addClassBoxes;
  document.querySelector('.container').append(newBoxes);
}

















