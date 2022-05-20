const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


window.localQuotes = []

// show new quote
function newQuote() {
    // pick random quote
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);


newQuote();