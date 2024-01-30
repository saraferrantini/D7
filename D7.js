/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatena(param1, param2) {
  let prim2 = param1.slice(0, 2);
  let ultimi3 = param2.slice(-3);
  let concatenazione = prim2 + ultimi3;
  concatenazione.toUpperCase();
  return concatenazione;
}
console.log(concatena("mare", "montagna"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).

*/

// Con la funzione generaArrayCasuale inizializza un array vuoto chiamato arrayCasuale
function generaArrayCasuale() {
  let arrayCasuale = [];

  // Utilizziamo un ciclo for per iterare 10 volte.In ogni iterazione, generiamo un numero casuale compreso tra 0 e 100 utilizzando Math.random() e Math.floor()
  // Math.floor() per arrotondare per difetto. Math.random() genera una frazione casuale tra 0 e 1, moltiplicando per 101 estendiamo questo intervallo da 0 a 100.999.

  for (let i = 0; i < 10; i++) {
    let valoreCasuale = Math.floor(Math.random() * 101);
    // Il numero casuale viene aggiunto all'array usando il metodo push().
    arrayCasuale.push(valoreCasuale);
  }
  return arrayCasuale;
}

let arrayCasuale = generaArrayCasuale();
console.log(arrayCasuale);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

let numeri = [1, 2, 3, 4, 5, 6, 7, 8];
let numeriPari = [];
// creo un altro array(output di quello che uscirà fuori)
// alla variabile numeri mi applichi il filtro filter, e per specificare la tipologia di filtro devo inserire una funzione e dentro al funzione lo specifico
numeriPari = numeri.filter(function (numero) {
  return numero % 2 === 0;
});

console.log(numeriPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

// inizializzare la somma
let somma = 0;

numeri.forEach(function (numero) {
  somma += numero;
});

console.log(somma);

/* ESERCIZIO 5 (reduce): reduce viene utilizzato per ridurre gli elementi di un array ad un unico valore.
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

// Utilizziamo il metodo reduce sull'array di numeri e l'accumulatore viene inizializzato a 0.
let somma2 = numeri.reduce(function (accumulatore, numero) {
  // sommiamo l'accumulatore al numero corrente durante ogni iterazione.Il risultato finale è la somma di tutti gli elementi dell'array.
  return accumulatore + numero;
}, 0);

console.log(somma2);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

numeri = [10, 20, 30];
let n = 2;

let numeriModificati = numeri.map(function (numero) {
  return numero + n;
});

console.log(numeriModificati);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let stringhe = ["EPICODE", "is", "great"];
let nuovoArray = stringhe.map(function (stringa) {
  return stringa.length;
});

console.log(nuovoArray);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

// con la funzione creaArrayDispari inizializziamo un array vuoto chiamato arrayDispari
function creaArrayDispari() {
  let arrayDispary = [];
  // Utilizziamo un ciclo for per iterare da 1 a 99 con passo 2, in modo da includere solo i numeri dispari nell'array.
  for (let i = 1; i <= 99; i += 2) {
    // Durante ogni iterazione, il numero corrente viene aggiunto all'array usando il metodo push().
    arrayDispary.push(i);
  }
  // Alla fine, l'array dovrebbe essere completo di numeri dispari da 1 a 99
  return arrayDispary;
}

let arrayDispari = creaArrayDispari();
console.log(arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.

*/
// Iniziamo definendo la funzione trovaFilmPiuVecchio che prende un array di film come parametro.
// All'interno della funzione, dichiariamo la variabile filmPiuVecchio senza assegnarle un valore iniziale.

function trovaFilmPiuVecchio(arrayDiFilm) {
  let filmPiuVecchio;

  //  Utilizziamo il metodo forEach per iterare attraverso ogni oggetto film nell'array arrayDiFilm.
  arrayDiFilm.forEach(function (film) {
    // Confronta l'anno del film corrente con l'anno del film più vecchio
    // Utilizziamo parseInt per convertire gli anni da stringhe a numeri interi, garantendo che il confronto sia basato sull'ordine numerico degli anni.
    if (!filmPiuVecchio || parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });
  // Restituiamo il film più vecchio trovato
  return filmPiuVecchio;
}

let filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log(filmPiuVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function numerifilm(arrayDiFilm) {
  // con length conta il numero di film nell'array
  return arrayDiFilm.length;
}

console.log(numerifilm(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

let arraySoloTitoli = [];

arraySoloTitoli = movies.map(function (oggetto) {
  return oggetto.Title;
});

console.log(arraySoloTitoli);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

let arrayNuovoMillen = [];
arrayNuovoMillen = movies.filter(function (oggetto) {
  return oggetto.Year > 2000;
});

console.log(arrayNuovoMillen);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

// Funzione per calcolare la somma degli anni di produzione dei film
function sommaAnniDiProduzione(arrayDiFilm) {
  // Utilizziamo reduce per accumulare la somma degli anni
  let sommaAnni = arrayDiFilm.reduce(function (acc, film) {
    // Convertiamo l'anno da stringa a numero intero con parseInt
    let anno = parseInt(film.Year);

    // Aggiungiamo l'anno corrente all'accumulatore
    return acc + anno;
  }, 0); // L'argomento 0 è il valore iniziale dell'accumulatore

  // Restituiamo la somma totale degli anni
  return sommaAnni;
}

let risultato = sommaAnniDiProduzione(movies);
console.log(risultato);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

// viene chiamata la funzione getMovieById con un IMDb ID specifico. Se il film viene trovato, viene stampato il titolo del film.
// In caso contrario, viene stampato un messaggio indicando che nessun film è stato trovato con l'IMDb ID specificato.

// da finire

function getMovieById(imdbID) {
  // Utilizziamo il metodo find sull'array movies per trovare il film con l'IMDb ID corrispondente.
  const selectedMovie = movies.find((movie) => movie.imdbID === imdbID);

  // Se il film viene trovato, restituisci il suo oggetto. Altrimenti, restituisci null.
  return selectedMovie || null;
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
