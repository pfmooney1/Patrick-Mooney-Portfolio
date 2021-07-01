// Disables "Go back" button at start
document.getElementById("waitGoBackButton").style.display = "none";

// Arrays
var quoteTemplates = [
    `Don't believe everything you read on the internet.`,
    `Stop trying to make fetch happen.`,
    `I am serious. And don't call me Shirley.`,
    `No, Luke, I am your father.`,
    `May the force be with you.`,
    `I love the smell of napalm in the morning. It smells like victory.`,  
    `Here's Johnny!`,
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
    `Get in loser, we’re going shopping.`,
    `The problem with quotes found on the internet is that they are often not true.`,
    `Road work ahead? Uh yeah, I sure hope it does.`,
    `Do it for the vine.`,
    `Before I do anything I ask myself, ‘Would an idiot do that?’ And if the answer is yes, I do not do that thing.`,
    `Beets. Bears. Battlestar Galactica.`,
    `Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information`,
    `Life is like a box chocolates. Not nearly as fun carb-free.`,
    `There has never been a sadness that can’t been cured by breakfast food.`
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
      "images/ThomasJefferson.jpg",
      "images/MansaMusa.jpg",
      "images/JoanOfArc.jpg",
      "images/Caesar.jpg",
      "images/Washington.jpg",
      "images/Lincoln.jpg",
      "images/SaintPaul.jpg",
      "images/MarieCurie.jpg",
      "images/AlexanderTheGreat.jpg",
      "images/Genghis.jpg",
      "images/Confucius.jpg",
      "images/SunTzu.jpg",
      "images/HildegardVonBingen.jpg",
      "images/Gandhi.jpg",
      "images/Einstein.jpg",
      "images/Socrates.jpg",
      "images/PlatoAristotle.jpg",
      "images/JFK.jpg",
      "images/MartinLuther.jpg",
      "images/Shakespeare.jpg",
      "images/AmeliaEarhart.jpg",
      "images/MarieAntoinette.jpg",
      "images/WinstonChurchill.jpg",
      "images/Machiavelli.jpg",
      "images/MotherTeresa.jpg",
      "images/Napoleon.jpg",
      "images/Nietzsche.jpg",
      "images/Chaucer.jpg",
      "images/Darwin.jpg",
      "images/EleanorRoosevelt.jpg",
      "images/SaintPatrick.jpg",
      "images/IsaacNewton.jpg",
      "images/RosaParks.jpg",
      "images/Beethoven.jpg",
      "images/Elizabeth.jpg",
      "images/MLKjr.jpg",
      "images/Franklin.jpg"
                 ];
var shuffledQuoteTemplates = [];
var shuffledHistoricalPerson = [];
var shuffledImageLinks = [];
var lastFiveQuotes = [];

// Variable for current quote
var quoteToAddToLastFiveQuotes;

// Site's functions
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
    document.getElementById('quoteContainer').style.alignSelf = "end";
    document.getElementById('quoteContainer').style.fontSize = "1.2em";

    
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
    document.getElementById("placeForQuote").innerHTML = quote;
    document.getElementById("placeForSpeaker").innerHTML = "- " + person;
    document.getElementById("imageForQuote").src = imageToDisplay;

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
    document.getElementById("placeForQuote").innerHTML = quote;
    document.getElementById("placeForSpeaker").innerHTML = "- " + person;
    document.getElementById("imageForQuote").src = imageToDisplay;
    handleWaitGoBackDisplay();
}
