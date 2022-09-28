const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const giftText = document.getElementById('giftText')
const queenBtn = document.getElementById('queen')
const newQuoteBtn = document.getElementById('newquote')
const loader = document.getElementById('loader')

let apiQuotes=[];

loader.hidden = true;

// Show Loading
function loading() {
        loader.hidden = false;
        quoteContainer.hidden = true;

}

// Hide loading
function complete() {
        loader.hidden = true;
        quoteContainer.hidden = false;
}

//Show new randome number and gift from Rey.
function newGift(){
        loading();
        //pick a random number and gift from gift array
        const randomeNumero =  objectNumeros[Math.floor(Math.random() * objectNumeros.length)];
        const sorpresa = gift[Math.floor(Math.random() * gift.length)];

        console.log(sorpresa.regalo);
        
        //Check ir author field is blanck and replace it with unknow
        if(!sorpresa.regalo) {
                giftText.textContent = 'unknown';

        } else {
                giftText.textContent = sorpresa.regalo;
        }
 
        // Check quote lenght to determine syling
        if(randomeNumero.text.length > 120) {
                quoteText.classList.add('long-quote')
        } else {
                quoteText.classList.remove('long-quote')
        }

        // Set quote, hide loader
        quoteText.textContent = randomeNumero.text;
        complete();
        

}

// Show randome gift and number from queen.

function newGift2(){
        loading();
        //pick a random number and gift from gift array
        const randomeNumero =  objectNumeros[Math.floor(Math.random() * objectNumeros.length)];
        const sorpresa = gift2[Math.floor(Math.random() * gift2.length)];

        console.log(sorpresa.regalo);
        
        //Check ir author field is blanck and replace it with unknow
        if(!sorpresa.regalo) {
                giftText.textContent = 'unknown';

        } else {
                giftText.textContent = sorpresa.regalo;
        }
 
        // Check quote lenght to determine syling
        if(randomeNumero.text.length > 120) {
                quoteText.classList.add('long-quote')
        } else {
                quoteText.classList.remove('long-quote')
        }

        // Set quote, hide loader
        quoteText.textContent = randomeNumero.text;
        complete();
        

}






//Event listener
newQuoteBtn.addEventListener('click', (newGift));
queenBtn.addEventListener('click', (newGift2))


// on load
// getQuotes();




