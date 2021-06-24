var quoteTemplates = [
    `Don't believe everything you read on the internet.`,
    `Stop trying to make fetch happen.`,
    `I am serious. And don't call me Shirley.`,
    `No, Luke, I am your father.`,
    `May the force be with you.`,
    `I love the smell of napalm in the morning. It smells like victory.`,  
    `Here's Johnny!`,
    `My mama always said life was like a box of chocolates. You never know what you're gonna get.`,
    `Say 'Hello' to my little friend!`,
    `Bro, do you even lift?`,
    `You're a wizard, Harry.`,
    "You miss 100% of the shots you don't make. <br> - Wayne Gretzky <br> - Michael Scott",
    `Always give 100%. Unless you're donating blood.`,
    `I am not superstitious, but I am a little stitious.`,
    `Maybe if we tell people the brain is an app, they'll start using it.`,
    `I am not a girl; I am a storm with skin.`,
    `I am not lazy, I'm just in energy-saving mode.`,
    `My life feels like a test I didn't study for.`,
    `Just because I am smiling, doesn't mean I don't want to hit you in the face.`,
    `An apple a day will keep anyone away if you throw it hard enough.`,
    `I didn't choose the thug life, the thug life chose me.`,
    `It's not my fault you're, like, in love with me or something.`,
    `On Wednesdays, we wear pink.`,
    `Cowgirls don't cry.`,
    `Get in loser, we’re going shopping.`
];
var historicalPerson = [
    "Thomas Jefferson",
    "Julius Caesar",
    "George Washington",
    "Abraham Lincoln",
    "Saint Paul",
    "Marie Curie",
    "Alexander the Great",
    "Genghis Khan",
    "Mansa Musa",
    "Confucius",
    "Sun Tzu",
    "Joan of Arc",
    "Hildegard of Bingen",
    "Mahatma Gandhi",
    "Albert Einstein",
    "Martin Luther",
    "Martin Luther King Jr.",
    "John F. Kennedy",
    "Plato",
    "Aristotle",
    "Socrates",
    "William Shakespeare",
    "Teddy Roosevelt",
    "Queen Elizabeth",
    "Mother Theresa",
    "Eleanor Roosevelt",
    "Benjamin Franklin",
    "Napoleon Bonaparte",
    "Geoffrey Chaucer",
    "Pope Urban II",
    "Marcus Tullius Cicero",
    "Cleopatra",
    "Nietzsche",
    "Machiavelli",
    "Issac Newton",
    "Beethoven",
    "Mozart",
    "Charles Darwin",
    "Thomas Edison",
    "Joseph Stalin",
    "Rosa Parks",
    "Winston Churchill",
    "Marie Antoinette",
    "Eleanor of Aquitaine",
    "Saint Patrick",
    "Saint Francis of Assisi"
];
var imageLinks = [
      "url(images/ThomasJefferson.jpg)",
      "url(images/MansaMusa.jpg)",
      "url(images/JoanOfArc.jpg)",
      "url(images/Caesar.jpg)",
      "url(images/Washington.jpg)",
      "url(images/Lincoln.jpg)",
      "url(images/SaintPaul.jpg)",
      "url(images/MarieCurie.jpg)",
      "url(images/AlexanderTheGreat.jpg)",
      "url(images/Genghis.jpg)",
      "url(images/Confucius.jpg)",
      "url(images/SunTzu.jpg)",
      "url(images/HildegardVonBingen.jpg)",
      "url(images/Gandhi.jpg)",
      "url(images/Einstein.jpg)",
      "url(images/Socrates.jpg)",
      "url(images/PlatoAristotle.jpg)",
      "url(images/JFK.jpg)",
      "url(images/MartinLuther.jpg)",
      "url(images/Shakespeare.jpg)",
      "url(images/AmeliaEarhart.jpg)",
      "url(images/MarieAntoinette.jpg)",
      "url(images/WinstonChurchill.jpg)",
      "url(images/Machiavelli.jpg)",
      "url(images/MotherTeresa.jpg)",
      "url(images/Napoleon.jpg)",
      "url(images/Nietzsche.jpg)",
      "url(images/Chaucer.jpg)",
      "url(images/Darwin.jpg)",
      "url(images/EleanorRoosevelt.jpg)",
      "url(images/SaintPatrick.jpg)",
      "url(images/IsaacNewton.jpg)",
      "url(images/RosaParks.jpg)",
      "url(images/Beethoven.jpg)",
      "url(images/Elizabeth.jpg)",
      "url(images/MLKjr.jpg)",
      "url(images/Franklin.jpg)"
                 ];

var shuffledQuoteTemplates = [];
var shuffledHistoricalPerson = [];
var shuffledImageLinks = [];
var lastFiveQuotes = [];
var quoteToAddToLastFiveQuotes;
handleWaitGoBackDisplay();

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function handleWaitGoBackDisplay() {
    if (lastFiveQuotes.length < 1) {
        document.getElementById("waitGoBackButton").style.display = "none";
    } 
    else {
        document.getElementById("waitGoBackButton").style.display = "inline-block";
    }
}

function newQuote() {
    // Moves quote space from middle to bottom
    document.getElementById("quoteSpace").style.    alignItems = "end";

    
    // handles adding to and maintaining the lastFiveQuotes array.
    if (quoteToAddToLastFiveQuotes != undefined) {
        lastFiveQuotes.unshift(quoteToAddToLastFiveQuotes);
        if (lastFiveQuotes.length > 3) {
            lastFiveQuotes.pop();
        }
    }
    
    // Creates and shuffles arrays for the newQuote function to cycle through.
    if (shuffledQuoteTemplates.length < 1) {
        shuffledQuoteTemplates = [...quoteTemplates];
        shuffle(shuffledQuoteTemplates);
    }
    if (shuffledHistoricalPerson.length < 1) {
        shuffledHistoricalPerson = [...historicalPerson];
        shuffle(shuffledHistoricalPerson);
    }
    if (shuffledImageLinks.length < 1) {
        shuffledImageLinks = [...imageLinks];
        shuffle(shuffledImageLinks);
    }
    
    // Handles displaying and hiding the "Wait, go back" button
    handleWaitGoBackDisplay();
    
    // gets pieces and then displays the new quote
    var quote = shuffledQuoteTemplates.shift();
    var person = shuffledHistoricalPerson.shift();
    var imageToDisplay = shuffledImageLinks.shift();
    document.getElementById("placeForQuote").innerHTML = `"` + quote + `"`;
    document.getElementById("placeForSpeaker").innerHTML = "- " + person;
    document.getElementById("quoteSpace").style.backgroundImage = imageToDisplay;

    quoteToAddToLastFiveQuotes = {
        previousQuote: quote,
        previousPerson: person,
        previousImageToDisplay: imageToDisplay
    };
}

function waitGoBack(){
    handleWaitGoBackDisplay();
    let x = lastFiveQuotes.shift();
    let quote = x.previousQuote;
    let person = x.previousPerson;
    let imageToDisplay = x.previousImageToDisplay;
    document.getElementById("placeForQuote").innerHTML = `"` + quote + `"`;
    document.getElementById("placeForSpeaker").innerHTML = "- " + person;
    document.getElementById("quoteSpace").style.backgroundImage = imageToDisplay;
    handleWaitGoBackDisplay();
}
