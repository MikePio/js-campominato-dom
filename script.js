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

const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', function() {
  startGame()
});

function startGame(){

  const levels = parseInt(document.getElementById('select').value);
  const gridLevels = [100, 81, 49];
  const squareNumbers = gridLevels[levels - 1];
  // 'facile' rappresenta 100, 'difficile' rappresenta 81, 'crazy' rappresenta 49
  const difficulty = ['facile', 'difficile', 'crazy'];
  const squareClass = difficulty[levels - 1];
  // .sqrt = radice quadrata dei numeri 100, 81, 49
  const squareForRow = Math.sqrt(squareNumbers);
  const bombsNumber = 16;
  const bombs = generateBombs();

  console.log('squareForRow', squareForRow);
  console.log('bombs', bombs);
  console.log('squareNumbers', squareNumbers);
  console.log('squareClass', squareClass);
  console.log('squareForRow', squareForRow);
  document.querySelector('main').innerHTML = '';

  generateMainContainer();
  
  // funzione genera griglia
  function generateMainContainer(){
    
    const containerGriglia = document.createElement('div');
    containerGriglia.className = 'container';
    //OPPURE
    // containerGriglia.classList.add('container');
    
    for (let i = 1; i < squareNumbers + 1; i++) {
      // genera box
      const box = document.createElement('div');
      // box.className = 'square';        
      box.classList.add('square');        
      //* METODO 1 (MIGLIORE) CON tag custom i numeri NON devono essere mostrati sempre quindi prima del click non vengono mostrati ma solo in console
      //* .boxid viene dichiarato solo qui in basso e non compare nel resto del codice
      box.boxid = i;                
      //! METODO 2 ( con event.target.innerText i numeri devono essere mostrati sempre anche prima del click) mostra il numero di ogni casella 
      // box.innerHTML = `<span>${i}</span>`;                
      const squareSize = `calc(100% / ${squareForRow})`; //(100% / 10) oppure (100% / 9) oppure (100% / 7)
      box.style.width = squareSize; //width = (100% / 10)=10%; oppure width = (100% / 9)=9%; oppure width = (100% / 7)=7%;
      box.style.height = squareSize; //height = (100% / 10)=10%; oppure height = (100% / 9)=9%; oppure height = (100% / 7)=7%;
      //! METODO 2 aggiungere event alla funzione ( con event.target.innerText i numeri devono essere mostrati sempre anche prima del click)
      box.addEventListener('click',function(event){
        
        //memorizza il valore dentro la casella
        //utilizza il valore trovato per fare confrontarli
        //* METODO 1 (MIGLIORE) CON tag custom
        if (bombs.includes(parseInt(i))) {
        //! METODO 2 ( con event.target.innerText i numeri devono essere mostrati sempre anche prima del click) 
        //bombs.includes(event.target.innerText)
        // if (bombs.includes(parseInt(event.target.innerText))) {
          lost = true;
          console.log('bomba', event.target.innerText);
          // mostra il numero di ogni casella al click
          box.innerHTML = `<span>${i}</span>`;                
          return this.classList.add('bomb', 'clicked');
        }else {
          // mostra il numero di ogni casella al click
          box.innerHTML = `<span>${i}</span>`;                
          console.log('+ 1 punto = casella', event.target.innerText);
        return this.classList.add('clicked');
        }       

      })
      containerGriglia.append(box);
    }

    document.querySelector('main').append(containerGriglia);
  }

  // funzione genera bombe
  function generateBombs(){
    const bombsArray = [];
    console.log('bombsNumber', bombsNumber);
    while(bombsArray.length < bombsNumber){
      const bomb = getRandomNumber(1, squareNumbers);
      if(!bombsArray.includes(bomb)) 
      bombsArray.push(bomb);
    }
    return bombsArray;
  }
  
};

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

















