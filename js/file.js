
/*
Consegna
L'utente clicca su un bottone che genererà una griglia quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, 
    la cella cliccata si colora di un colore se pari, di un altro colore se dispari
    emette un messaggio in console con il numero della cella cliccata.
    
BONUS: invece che avere gli indici ordinati li abbiamo disordinati ma sempre univoci    
    
*/



const button = document.getElementById('start');





const boxDiv = document.getElementById('pratofiorito')

let number = []
function generateRandomNumber(min, max) {
    const range = max - min + 1;

    return Math.floor(Math.random() * 84) + min


}
for (i = 0; i < 84; i++) {
    number.push(generateRandomNumber(1, 84))
    // il controllo lo facci qui
}



button.addEventListener('click',

    function gridNumber() {
        const boxDiv = document.getElementById('pratofiorito')
        boxDiv.innerHTML = ''
        for (let i = 0; i < number.length; i++) {

            if (number[i] % 2 === 0) {
                boxDiv.innerHTML += (`<div id="box-color" class="box even col-1"><span class="number align-items-center text-center">${number[i]}</span></div>`)
            } else {
                boxDiv.innerHTML += (`<div id="box-color" class="box odd col-1"><span class="number align-items-center text-center">${number[i]}</span></div>`)
            }

        }
    }


)


// creare l'array con i numeri gia generati se non sono generati li inserisce se no no








