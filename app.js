var quotes = [
    {quote: "This is pretty darn cool a", author: "Kellen A"},
    {quote: "This is pretty dang cool b ", author: "Kellen b"},
    {quote: "This is pretty damn cool c ", author: "Kellen c"},
    {quote: "This is pretty darn tootin d ", author: "Kellen d"},
    {quote: "This is pretty freakin e ", author: "Kellen e"},
    {quote: "This is pretty funkin f ", author: "Kellen f"},
    {quote: "This is pretty wicked g ", author: "Kellen g"},
    {quote: "This is pretty h", author: "Kellen h"},
    {quote: "This is pretty i", author: "Kellen i"},
];

var getRandomQuote = {

    init: function() {
        this.colorChange();
        this.getQuote();
    },

    colorChange: function() {
        $(".get-quote-button").on('click', function() {
                var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                $(".container").css("background-color", randomColor);
            });
    },

    getQuote: function() {
        $(".get-quote-button").on("click", function() {
            var randomNum = Math.floor(Math.random() * quotes.length);
            var randomQuote = quotes[randomNum].quote;
            $(".quote").html(randomQuote);
            $(".author").html(quotes[randomNum].author);
        });
    }
};

getRandomQuote.init();
