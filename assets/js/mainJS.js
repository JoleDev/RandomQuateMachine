var quote;
var quoteAuthor;

var generateQuote = function () {
    $.ajax ({
        url : "https://random-quote-generator.herokuapp.com/api/quotes/random",
        dataType: "json",
        success : function (response) {
            quote = response.quote;
            quoteAuthor = response.author;
        }
    });
}

$("#newQuoteBtn").click (function () {
    console.log ("Click event happened");
    generateQuote ();
    console.log ("Generate quote function run");
    $("#quate").text(quote);
    $("#quoteOwner").text(quoteAuthor);
});

