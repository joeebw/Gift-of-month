const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
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

//Show new quote
function newQuote(){
        loading();
        //pick a random quote from apiQuotes array
        const quote =  localQuotes[Math.floor(Math.random() * localQuotes.length)];
        const sorpresa = Gift [Math.floor(Math.random() * Gift.length)];

        console.log(sorpresa.regalo);
        
        //Check ir author field is blanck and replace it with unknow
        if(!sorpresa.regalo) {
                authorText.textContent = 'unknown';

        } else {
                authorText.textContent = sorpresa.regalo;
        }
 
        // Check quote lenght to determine syling
        if(quote.text.length > 120) {
                quoteText.classList.add('long-quote')
        } else {
                quoteText.classList.remove('long-quote')
        }

        // Set quote, hide loader
        quoteText.textContent = quote.text;
        complete();
        

}

function newQuote2(){
        loading();
        //pick a random quote from apiQuotes array
        const quote =  localQuotes[Math.floor(Math.random() * localQuotes.length)];
        const sorpresa2 = Gift2 [Math.floor(Math.random() * Gift2.length)];

        console.log(sorpresa2.regalo);
        
        //Check ir author field is blanck and replace it with unknow
        if(!sorpresa2.regalo) {
                authorText.textContent = 'unknown';

        } else {
                authorText.textContent = sorpresa2.regalo;
        }
 
        // Check quote lenght to determine syling
        if(quote.text.length > 120) {
                quoteText.classList.add('long-quote')
        } else {
                quoteText.classList.remove('long-quote')
        }

        // Set quote, hide loader
        quoteText.textContent = quote.text;
        complete();
        

}







// get quotes from api
// async function getQuotes() {
//         loading();
//         const apiUrl = "https://type.fit/api/quotes"; 
//         try {
//         const response = await fetch(apiUrl); 
//         apiQuotes = await response.json();  
//         newQuote();      
//         } catch(error) {
//                 // Catch error here
        
//         }
// }

// Tweet Quote
function tweetQuote() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
        window.open(twitterUrl, '_blank')
}

//Event listener
newQuoteBtn.addEventListener('click', (newQuote));
twitterBtn.addEventListener('click', (newQuote2))


// on load
// getQuotes();




