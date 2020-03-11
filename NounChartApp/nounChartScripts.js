// Intial variables
var mainMenuScreen = document.getElementById("mainMenu");
var assignmentScreen = document.getElementById("assignmentPage");
var enterANounScreen = document.getElementById("enterANounScreen");
var aboutScreen = document.getElementById("aboutScreen");
var settingScreen = document.getElementById("settingScreen");
var nounEndingsScreen = document.getElementById("nounEndingsScreen");
var blankChartScreen = document.getElementById("blankChartScreen");
var randomNounScreen = document.getElementById("randomNounScreen");
var otherCharts = document.getElementById("otherCharts");
var selectANoun = document.getElementById("selectANoun");


var vocabIncluded = true;
var englishIncluded = true;
var showAssignmentPage = false;
var nounEndingsOnlyChoice = "1st declension";
var copyPasteMode = false;
var declension;
var nounBase;
var vocativeIncluded = true;
//
//
// Initial div-hiders
/*
assignmentScreen.style.display = "none";
enterANounScreen.style.display = "none";
aboutScreen.style.display = "none";
randomNounScreen.style.display = "none";
settingScreen.style.display = "none";
settingScreen.style.display = "none";
settingScreen.style.display = "none";
otherCharts.style.display = "none";
selectANoun.style.display = "none";
*/
//
//
function vocativeButtonFunctions(id) {
    selectButton(id);
    showHideVocatives();
}
function selectButton(id) {
    var target = document.getElementById(id);
    if (target.className !== "toggleToken checked") {
        target.className = "toggleToken checked";
    }
    else if (target.className === "toggleToken checked") {
        target.className = "toggleToken";
    }
}
//
function showHideVocatives() {
    var vocativeTableRows = document.getElementsByClassName("vocativeRow");
    if (vocativeIncluded == true || undefined) {
        vocativeTableRows[0].style.visibility = "hidden";
        vocativeTableRows[1].style.visibility = "hidden";
        vocativeTableRows[2].style.visibility = "hidden";
        vocativeTableRows[3].style.visibility = "hidden";
        vocativeTableRows[4].style.visibility = "hidden";
        vocativeTableRows[5].style.visibility = "hidden";
        vocativeTableRows[6].style.visibility = "hidden";
        vocativeTableRows[7].style.visibility = "hidden";
        vocativeTableRows[8].style.visibility = "hidden";
        vocativeTableRows[9].style.visibility = "hidden";
        vocativeIncluded = false;
        document.getElementById("VocChoiceA").style.className = "toggleToken";
        document.getElementById("VocChoiceB").style.className = "toggleToken";
        document.getElementById("VocChoiceC").style.className = "toggleToken";
        document.getElementById("VocChoiceD").style.className = "toggleToken";
        document.getElementById("VocChoiceE").style.className = "toggleToken";
    }
    else if (vocativeIncluded == false) {
        vocativeTableRows[0].style.visibility = "visible";
        vocativeTableRows[1].style.visibility = "visible";
        vocativeTableRows[2].style.visibility = "visible";
        vocativeTableRows[3].style.visibility = "visible";
        vocativeTableRows[4].style.visibility = "visible";
        vocativeTableRows[5].style.visibility = "visible";
        vocativeTableRows[6].style.visibility = "visible";
        vocativeTableRows[7].style.visibility = "visible";
        vocativeTableRows[8].style.visibility = "visible";
        vocativeTableRows[9].style.visibility = "visible";
        vocativeIncluded = true;
        document.getElementById("VocChoiceA").style.className = "toggleToken checked";
        document.getElementById("VocChoiceB").style.className = "toggleToken checked";
        document.getElementById("VocChoiceC").style.className = "toggleToken checked";
        document.getElementById("VocChoiceD").style.className = "toggleToken checked";
        document.getElementById("VocChoiceE").style.className = "toggleToken checked";
    }
    else {
        alert("Error! Conditions in the showHideVocatives function are not met");
    }
}
//
function testFinalProduct() {
    var x = document.getElementsByClassName("debug");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("debugButton1").style.display = "none";
    document.getElementById("debugButton2").style.display = "none";
    document.getElementById("debugButton3").style.display = "none";
    document.getElementById("debugButton4").style.display = "none";
    onHideAll();
}


function onHideAll() {
    mainMenuScreen.style.display = "grid";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    randomNounScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
}
function onShowAll() {
    mainMenuScreen.style.display = "grid";
    assignmentScreen.style.display = "grid";
    enterANounScreen.style.display = "grid";
    aboutScreen.style.display = "grid";
    settingScreen.style.display = "grid";
    nounEndingsScreen.style.display = "grid";
    blankChartScreen.style.display = "grid";
    randomNounScreen.style.display = "grid";
    otherCharts.style.display = "grid";
    selectANoun.style.display = "grid";
}



function goToOtherChartsScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";  
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    randomNounScreen.style.display = "none";
    otherCharts.style.display = "grid";
    selectANoun.style.display = "none";
}

function goToSelectANounScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";  
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    randomNounScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "grid";
}

function goToBlankChartScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";  
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "grid";
    randomNounScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
}
function goToNounEndingsScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";  
    nounEndingsScreen.style.display = "grid";
    randomNounScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
}
function goToRandomNounScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    randomNounScreen.style.display = "grid";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
}


function goToSettingsScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "grid";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
    randomNounScreen.style.display = "none";
}

function goToAboutScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "grid";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
    randomNounScreen.style.display = "none";
}
function goToMainMenuScreen() {
    mainMenuScreen.style.display = "grid";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    randomNounScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
}
function goToAssignmentScreenScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "grid";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
    randomNounScreen.style.display = "none";
}
function goToEnterANounScreenScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "grid";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    otherCharts.style.display = "none";
    selectANoun.style.display = "none";
    randomNounScreen.style.display = "none";
}




//
// Other Charts
//
var relativePronounChartA = document.getElementById("relativePronounChartA");
var relativePronounChartB = document.getElementById("relativePronounChartB");
var thirdPersonPronounChartA = document.getElementById("thirdPersonPronounChartA");
var thirdPersonPronounChartB = document.getElementById("thirdPersonPronounChartB");
var hicChartA = document.getElementById("hicChartA");
var hicChartB = document.getElementById("hicChartB");
var illeChartA = document.getElementById("illeChartA");
var illeChartB = document.getElementById("illeChartB");
var isteChartA = document.getElementById("isteChartA");
var isteChartB = document.getElementById("isteChartB");

/*
Once the coding is finished, remove the comment so that only one chart pops up at a time on startup

relativePronounChartA.style.display = "table";
relativePronounChartB.style.display = "table";
thirdPersonPronounChartA.style.display = "none";
thirdPersonPronounChartB.style.display = "none";
hicChartA.style.display = "none";
hicChartB.style.display = "none";
illeChartA.style.display = "none";
illeChartB.style.display = "none";
isteChartA.style.display = "none";
isteChartB.style.display = "none";

*/

function selectOtherChart() {
    relativePronounChartA.style.display = "none";
    relativePronounChartB.style.display = "none";
    thirdPersonPronounChartA.style.display = "none";
    thirdPersonPronounChartB.style.display = "none";
    hicChartA.style.display = "none";
    hicChartB.style.display = "none";
    illeChartA.style.display = "none";
    illeChartB.style.display = "none";
    isteChartA.style.display = "none";
    isteChartB.style.display = "none";
    
    var otherChartSelection = document.getElementById("otherChartsSelection").value;
    if (otherChartSelection === "relative") {
        relativePronounChartA.style.display = "table";
        relativePronounChartB.style.display = "table";
    }
    else if (otherChartSelection === "is") {
        thirdPersonPronounChartA.style.display = "table";
        thirdPersonPronounChartB.style.display = "table";
    }
    else if (otherChartSelection === "hic") {
        hicChartA.style.display = "table";
        hicChartB.style.display = "table";
    }
    else if (otherChartSelection === "ille") {
        illeChartA.style.display = "table";
        illeChartB.style.display = "table";
    }
    else if (otherChartSelection === "iste") {
        isteChartA.style.display = "table";
        isteChartB.style.display = "table";
    }   
    else {
        alert("ERROR! Other chart selection cannot be made!");
    }
}



/*

//
// Noun declension parser
// Takes user-input and takes apart the principle parts of the noun
function splitTheNoun() {
    var userEnteredNoun = document.getElementById(id).value;
    userEnteredNoun = userEnteredNoun.toLowerCase();
    userEnteredNoun = userEnteredNoun.trim();
    //
    var verbParts = chosenVerb.match(/\w+/g);
    var nominativeSingularInput = nounParts[0];
    var genitiveSingularInput = nounParts[1];
    var genderInput = nounParts[2];
}
//
// Noun declension IDer
// Returns the noun's declension
function declensionID() {
    if (genitiveSingularInput.endsWith("ae")) {
        declension = "1st";
        nounBase = genitiveSingularInput.slice(0, genLength - 2);
    }
    else if (genitiveSingularInput.endsWith("is")) {
        declension = "3rd";
        base = genitive.slice(0, genLength - 2);
    }
    else if (genitiveSingularInput.endsWith("us")) {
        declension = "4th";
        base = genitive.slice(0, genLength - 2);
    }
    else if (genitiveSingularInput.endsWith("ei")) {
        declension = "5th";
        base = genitive.slice(0, genLength - 2);
    }
    else if (genEnding !== "ei") && (genLastLetter === "i") {
        declension = "2nd";
        base = genitive.slice(0, genLength - 1);
    }
    else {
        alert("ERROR! Declension not figured out!");
    }
}



//
// Noun declension IDer
// Returns the noun's declension
function genderFinder() {
    nounParts[2].toLowerCase();
    if (nounParts[2].includes(/f/gi)) {
        return "feminine";
    }
    else if (nounParts[2].includes(/m/gi)) {
         return "masculine";
    }
    else if (nounParts[2].includes(/n/gi)) {
        return "neuter";
    }
    else {
        alert("ERROR! Gender could not be determined!");
    }
}




//
// ENGLISH MEANINGS
// gives all of the english meanings
function englishMeaningSetter() {
    if (englishMeaning === "man") {
        englishMeaningPlural = "men";
    }
    else if (englishMeaning === "body") {
        englishMeaningPlural = "bodies";
    }
    else if (englishMeaning === "knife") {
        englishMeaningPlural = "knives";
    }
    else if (englishMeaning === "wolf") {
        englishMeaningPlural = "wolves";
    }
    else if (englishMeaning === "mouse") {
        englishMeaningPlural = "mice";
    }
    else if (englishMeaning === "foot") {
        englishMeaningPlural = "feet";
    }
    else if (englishMeaning === "child") {
        englishMeaningPlural = "children";
    }
    else if (englishMeaning === "goose") {
        englishMeaningPlural = "geese";
    }
    else if (englishMeaning === "tooth") {
        englishMeaningPlural = "teeth";
    }
    else if (englishMeaning === "cactus") {
        englishMeaningPlural = "cacti";
    }
    else if (englishMeaning === "ox") {
        englishMeaningPlural = "oxen";
    }
    else if (englishMeaning === "codex") {
        englishMeaningPlural = "codices";
    }
    else if (englishMeaning === "crisis") {
        englishMeaningPlural = "crises";
    }
    else if (englishMeaning === "deer") {
        englishMeaningPlural = "deer";
    }
    else if (englishMeaning === "fish") {
        englishMeaningPlural = "fishes";
    }
    else if (englishMeaning === "half") {
        englishMeaningPlural = "halves";
    }
    else if (englishMeaning === "moose") {
        englishMeaningPlural = "moose";
    }
    else if (englishMeaning === "oasis") {
        englishMeaningPlural = "oases";
    }
    else if (englishMeaning === "quiz") {
        englishMeaningPlural = "quizzes";
    }
    else if (englishMeaning === "salmon") {
        englishMeaningPlural = "salmon";
    }
    else if (englishMeaning === "sheep") {
        englishMeaningPlural = "sheep";
    }
    else if (englishMeaning === "syllabus") {
        englishMeaningPlural = "syllabi";
    }
    else if (englishMeaning === "thief") {
        englishMeaningPlural = "thieves";
    }
    else if (englishMeaning === "wife") {
        englishMeaningPlural = "wives";
    }
    else if (englishMeaning === "woman") {
        englishMeaningPlural = "women";
    }
    else if (englishMeaning === "kiss") {
        englishMeaningPlural = "kisses";
    }
    else if (englishMeaning === "duty") {
        englishMeaningPlural = "duties";
    }
    else if (englishMeaning === "life") {
        englishMeaningPlural = "lives";
    }
    else if (englishMeaning === "glory") {
        englishMeaningPlural = "glories";
    }
    else if (englishMeaning === "penalty") {
        englishMeaningPlural = "penalties";
    }
    else if (englishMeaning === "philosophy") {
        englishMeaningPlural = "philosophies";
    }
    else if (englishMeaning === "luxury") {
        englishMeaningPlural = "luxuries";
    }
    else if (englishMeaning === "poverty") {
        englishMeaningPlural = "poverty";
    }
    else if (englishMeaning === "city") {
        englishMeaningPlural = "cities";
    }
    else {
        englishMeaningPlural = englishMeaning + "s";
    }
}
    
    
//
// LATIN ENDINGS
// Sets all of the Latin endings
function latinEndingSetter() {
    if (declension === "1st") {
        nomSing = nominative;
        genSing = base + "ae";
        datSing = base + "ae";
        accSing = base + "am";
        ablSing = base + "ā";
        vocSing = nomSing;
        nomPl = base + "ae";
        genPl = base + "arum";
        datPl = base + "is";
        accPl = base + "as";
        ablPl = base + "is";
        vocPl = nomPl;
    }
    else if ((declension === "2nd") && (gender === "m") && (nomLastLetter === "s")) {
        nomSing = nominative;
        genSing = base + "i";
        datSing = base + "o";
        accSing = base + "um";
        ablSing = base + "o";
        vocSing = base + "e";
        nomPl = base + "i";
        genPl = base + "orum";
        datPl = base + "is";
        accPl = base + "os";
        ablPl = base + "is";
        vocPl = nomPl;
    }
    
    else if ((declension === "2nd") && (gender === "m") && (nomLastLetter === "r")) {
        nomSing = nominative;
        genSing = base + "i";
        datSing = base + "o";
        accSing = base + "um";
        ablSing = base + "o";
        vocSing = nominative;
        nomPl = base + "i";
        genPl = base + "orum";
        datPl = base + "is";
        accPl = base + "os";
        ablPl = base + "is";
        vocPl = nomPl;
    }
    else if ((declension === "2nd") && (gender === "n")) {
        nomSing = nominative;
        genSing = base + "i";
        datSing = base + "o";
        accSing = nominative;
        ablSing = base + "o";
        vocSing = nominative;
        nomPl = base + "a";
        genPl = base + "orum";
        datPl = base + "is";
        accPl = nomPl;
        ablPl = base + "is";
        vocPl = nomPl;
    }
    else if (declension === "3rd" && gender !== "n") {
        nomSing = nominative;
        genSing = base + "is";
        datSing = base + "i";
        accSing = base + "em";
        ablSing = base + "e";
        vocSing = nomSing;
        nomPl = base + "es";
        genPl = base + "um";
        datPl = base + "ibus";
        accPl = base + "es";
        ablPl = base + "ibus";
        vocPl = nomPl;
        }
    else if (declension === "3rd" && gender === "n") {
        nomSing = nominative;
        genSing = base + "is";
        datSing = base + "i";
        accSing = nomSing;
        ablSing = base + "e";
        vocSing = nomSing;
        nomPl = base + "a";
        genPl = base + "um";
        datPl = base + "ibus";
        accPl = nomPl;
        ablPl = base + "ibus";
        vocPl = nomPl;
    }
    else if (declension === "4th" && gender === "n") {
        nomSing = nominative;
        genSing = base + "us";
        datSing = base + "u";
        accSing = base + "u";
        ablSing = base + "u";
        vocSing = base + "u";
        nomPl = base + "ua";
        genPl = base + "uum";
        datPl = base + "ibus";
        accPl = nomPl;
        ablPl = base + "ibus";
        vocPl = nomPl;
    }
    else if (declension === "4th" && (gender === "m" || "f")) {
        nomSing = nominative;
        genSing = base + "us";
        datSing = base + "ui";
        accSing = base + "um";
        ablSing = base + "u";
        vocSing = nomSing;
        nomPl = base + "us";
        genPl = base + "uum";
        datPl = base + "ibus";
        accPl = nomPl;
        ablPl = base + "ibus";
        vocPl = nomPl;
    }
    else if (declension === "5th") {
        //=== 5TH DECLENSION  === 
        nomSing = nominative;
        genSing = base + "ei";
        datSing = base + "ei";
        accSing = base + "em";
        ablSing = base + "e";
        vocSing = base + "es";
        nomPl = base + "es";
        genPl = base + "erum";
        datPl = base + "ebus";
        accPl = nomPl;
        ablPl = base + "ebus";
        vocPl = nomPl;
    }
    else {
        alert("ERROR! Noun endings could not be chosed");
    }
}
*/


//
// PRE-MADE NOUN SETTER
// Sets all of the Latin endings of selected nouns

function declineSelectedNoun(id) {
    var selectedNoun = document.getElementById(id).value;
    var selectedLatinNoun;
    var englishMeaning;
    if (selectedNoun === "") {
        alert("ERROR! No noun selected!");
    }
    else if (selectedNoun === "filius") {
            selectedLatinNoun = "filius, filii, m"; 
            englishMeaning = "son";	
    }
    else if	(selectedNoun === "ludus") {
            selectedLatinNoun = "ludus, ludi, m"; 
            englishMeaning = "game";	
    }
    else if	(selectedNoun === "mundus") {
            selectedLatinNoun = "mundus, mundi, m"; 
            englishMeaning = "world";		
    }
    else if	(selectedNoun === "vicinus") {
            selectedLatinNoun = "vicinus, vicini, m"; 
            englishMeaning = "neighbor";		
    }
    else if	(selectedNoun === "vulgus") {
            selectedLatinNoun = "vulgus, vulgi, m"; 
            englishMeaning = "mob";		
    }
    else if	(selectedNoun === "vicina") {
            selectedLatinNoun = "vicina, vicinae, f"; 
            englishMeaning = "neighbor";		
    }
    else if	(selectedNoun === "iudicium") {
            selectedLatinNoun = "iudicium, iudicii, n"; 
            englishMeaning = "judgement";		
    }
    else if	(selectedNoun === "forum") {
            selectedLatinNoun = "forum, fori, n"; 
            englishMeaning = "marketplace";		
    }
    else if	(selectedNoun === "aedificium") {
            selectedLatinNoun = "aedificium, aedificii, n"; 
            englishMeaning = "building";		
    }
    else if	(selectedNoun === "saxum") {
            selectedLatinNoun = "saxum, saxi, n"; 
            englishMeaning = "rock";		
    }
    

    else if	(selectedNoun === "magistra") {
            selectedLatinNoun = "magistra, magistrae, f";
            englishMeaning = "teacher";
    }
    else if  (selectedNoun === "discipula") {
            selectedLatinNoun = "discipula, discipulae, f";
            englishMeaning = "student";
    }
    else if  (selectedNoun === "poeta") {
            selectedLatinNoun = "poeta, -ae, m."; 
            englishMeaning = "poet";
    }
    else if  (selectedNoun === "fama") {
            selectedLatinNoun = "fama, -ae, f."; 
            englishMeaning = "rumor";
    }
    else if  (selectedNoun === "cura") {
            selectedLatinNoun = "cura, -ae, f."; 
            englishMeaning = "care";
    }
    else if  (selectedNoun === "puella") {
            selectedLatinNoun = "puella, -ae, f."; 
            englishMeaning = "girl";
    }
    else if  (selectedNoun === "rosa") {
            selectedLatinNoun = "rosa, -ae, f."; 
            englishMeaning = "rose";
    }
    else if  (selectedNoun === "vita") {
            selectedLatinNoun = "vita, -ae, f."; 
            englishMeaning = "life";
    }
    else if  (selectedNoun === "mora") {
            selectedLatinNoun = "mora, -ae, f."; 
            englishMeaning = "delay";
    }
    else if  (selectedNoun === "nauta") {
            selectedLatinNoun = "nauta, -ae, m."; 
            englishMeaning = "sailor";
    }
    else if  (selectedNoun === "culpa") {
            selectedLatinNoun = "culpa, -ae, f."; 
            englishMeaning = "fault";
    }
    else if  (selectedNoun === "forma") {
            selectedLatinNoun = "forma, -ae, f."; 
            englishMeaning = "form";
    }
    else if  (selectedNoun === "poena") {
            selectedLatinNoun = "poena, -ae, f."; 
            englishMeaning = "penalty";
    }
    else if  (selectedNoun === "amica") {
            selectedLatinNoun = "amica, amicae, f ";
            englishMeaning = "friend";
    }
    else if  (selectedNoun === "ira") {
            selectedLatinNoun = "ira, irae, f ";
            englishMeaning = "rage";
    }
    else if  (selectedNoun === "pecunia") {
            selectedLatinNoun = "pecunia, pecuniae, f";
            englishMeaning = "money";
    }
    else if  (selectedNoun === "porta") {
            selectedLatinNoun = "porta, portae, f";
            englishMeaning = "gate";	
    }
    else if  (selectedNoun === "pirata") {
            selectedLatinNoun = "pirata, piratae, m";
            englishMeaning = "pirate";	
    }
    

    else if  (selectedNoun === "amicus") {
            selectedLatinNoun = "amicus, amici, m ";
            englishMeaning = "friend";
    }
    else if  (selectedNoun === "oculus") {
            selectedLatinNoun = "oculus, -i, m."; 
            englishMeaning = "eye";
    }
    else if  (selectedNoun === "animus") {
            selectedLatinNoun = "animus, -i, m."; 
            englishMeaning = "soul";
    }
    else if  (selectedNoun === "stultus") {
            selectedLatinNoun = "stultus, -i, m."; 
            englishMeaning = "fool";
    }
    else if  (selectedNoun === "discipulus") {
            selectedLatinNoun = "discipulus, discipuli, m";
            englishMeaning = "student";
    }
    else if  (selectedNoun === "puer") {
            selectedLatinNoun = "puer, pueri, m."; 
            englishMeaning = "boy";
    }
    else if  (selectedNoun === "magister") {
            selectedLatinNoun = "magister, magistri, m."; 
            englishMeaning = "teacher";
    }
    else if  (selectedNoun === "vir") {
            selectedLatinNoun = "vir, viri, m."; 
            englishMeaning = "man";
    }
    else if  (selectedNoun === "ager") {
            selectedLatinNoun = "ager, agri, m."; 
            englishMeaning = "field";
    }
    else if  (selectedNoun === "faber") {
            selectedLatinNoun = "faber, fabri, m."; 
            englishMeaning = "smith";
    }
    else if  (selectedNoun === "liber") {
            selectedLatinNoun = "liber, libri, m."; 
            englishMeaning = "book";
    }

    else if  (selectedNoun === "basium") {
            selectedLatinNoun = "basium, basii, n";
            englishMeaning = "kiss";
    }
    else if  (selectedNoun === "bellum") {
            selectedLatinNoun = "bellum, belli, n";
            englishMeaning = "war";
    }
    else if  (selectedNoun === "consilium") {
            selectedLatinNoun = "consilium, consilii, n";
            englishMeaning = "plan";
    }
    else if  (selectedNoun === "donum") {
            selectedLatinNoun = "donum, doni, n ";
            englishMeaning = "gift";
    }
    else if  (selectedNoun === "exitium") {
            selectedLatinNoun = "exitium, exitii, n"; 
            englishMeaning = "ruin";
    }
    else if  (selectedNoun === "officium") {
            selectedLatinNoun = "officium, officii, n"; 
            englishMeaning = "duty";
    }
    else if  (selectedNoun === "verbum") {
            selectedLatinNoun = "verbum, verbi, n"; 
            englishMeaning = "word";
    }
    else if  (selectedNoun === "caelum") {
            selectedLatinNoun = "caelum, caeli, n "; 
            englishMeaning = "heaven";
    }
    else if  (selectedNoun === "otium") {
            selectedLatinNoun = "otium, otii, n";
            englishMeaning = "peace";
    }
    else if  (selectedNoun === "periculum") {
            selectedLatinNoun = "periculum, periculi, n";
            englishMeaning = "danger";
    }
    else if  (selectedNoun === "remedium") {
            selectedLatinNoun = "remedium, remedii, n";
            englishMeaning = "cure";
    }
    

    else if  (selectedNoun === "pater") {
            selectedLatinNoun = "pater, patris, m"; 
            englishMeaning = "father";
    }
    else if  (selectedNoun === "mater") {
            selectedLatinNoun = "mater, matris, f"; 
            englishMeaning = "mother";
    }
    else if  (selectedNoun === "vox") {
            selectedLatinNoun = "vox, vocis, f"; 
            englishMeaning = "voice";
    }
    else if  (selectedNoun === "dux") {
            selectedLatinNoun = "dux, ducis, m"; 
            englishMeaning = "leader";
    }
    else if  (selectedNoun === "miles") {
            selectedLatinNoun = "miles, militis, m"; 
            englishMeaning = "soldier";
    }
    else if  (selectedNoun === "homo") {
            selectedLatinNoun = "homo, hominis, m"; 
            englishMeaning = "human";
    }
    else if  (selectedNoun === "aestas") {
            selectedLatinNoun = "aestas, aestatis, f"; 
            englishMeaning = "age";
    }
    else if  (selectedNoun === "pax") {
            selectedLatinNoun = "pax, pacis, f"; 
            englishMeaning = "peace";
    }
    else if  (selectedNoun === "consul") {
            selectedLatinNoun = "consul, consulis, m"; 
            englishMeaning = "consul";
    }
    else if  (selectedNoun === "soror") {
            selectedLatinNoun = "soror, sororis, f"; 
            englishMeaning = "sister";
    }
    else if  (selectedNoun === "frater") {
            selectedLatinNoun = "frater, fratris, m"; 
            englishMeaning = "brother";
    }
    else if  (selectedNoun === "civitas") {
            selectedLatinNoun = "civitas, civitatis, f"; 
            englishMeaning = "city";
    }
    else if  (selectedNoun === "pars") {
            selectedLatinNoun = "pars, partis, f"; 
            englishMeaning = "part";
    }
    else if  (selectedNoun === "lux") {
            selectedLatinNoun = "lux, lucis, f"; 
            englishMeaning = "light";
    }
    else if  (selectedNoun === "rex") {
            selectedLatinNoun = "rex, regis, m";
            englishMeaning = "king";
    }


    else if  (selectedNoun === "corpus") {
            selectedLatinNoun = "corpus, corporis, n";
            englishMeaning = "body";
    }
    else if  (selectedNoun === "scelus") {
            selectedLatinNoun = "scelus, sceleris, n"; 
            englishMeaning = "crime";
    }
    else if  (selectedNoun === "sidus") {
            selectedLatinNoun = "sidus, sideris, n"; 
            englishMeaning = "constellation";
    }
    else if  (selectedNoun === "ius") {
            selectedLatinNoun = "ius, iuris, n"; 
            englishMeaning = "law";
    }
    else if  (selectedNoun === "limen") {
            selectedLatinNoun = "limen, liminis, n"; 
            englishMeaning = "threshold";
    }
    else if  (selectedNoun === "liquamen") {
            selectedLatinNoun = "liquamen, liquaminis, n"; 
            englishMeaning = "fish sauce";
    }
    else if  (selectedNoun === "epigramma") {
            selectedLatinNoun = "epigramma, epigrammatis, n"; 
            englishMeaning = "epigram";
    }
    else if  (selectedNoun === "diploma") {
            selectedLatinNoun = "diploma, diplomatis, n"; 
            englishMeaning = "diploma";
    }
    else if  (selectedNoun === "opus") {
            selectedLatinNoun = "opus, operis, n"; 
            englishMeaning = "work";
    }
    else if  (selectedNoun === "caput") {
            selectedLatinNoun = "caput, capitis, n"; 
            englishMeaning = "head";
    }
    else if  (selectedNoun === "carmen") {
            selectedLatinNoun = "carmen, carminis, n"; 
            englishMeaning = "song";
    }
    else if  (selectedNoun === "flumen") {
            selectedLatinNoun = "flumen, fluminis, n"; 
            englishMeaning = "river";
    }
    else if  (selectedNoun === "iter") {
            selectedLatinNoun = "iter, itineris, n"; 
            englishMeaning = "trip";
    }
    else if  (selectedNoun === "nomen") {
            selectedLatinNoun = "nomen, nominis, n"; 
            englishMeaning = "name";
    }
    else if  (selectedNoun === "tempus") {
            selectedLatinNoun = "tempus, temporis, n"; 
            englishMeaning = "storm";
    }
    else if  (selectedNoun === "vulnus") {
            selectedLatinNoun = "vulnus, vulneris, n"; 
            englishMeaning = "wound";
    }
    

    else if  (selectedNoun === "exercitus") {
            selectedLatinNoun = "exercitus, exercitus, m";
            englishMeaning = "army";
    }
    else if  (selectedNoun === "arcus") {
            selectedLatinNoun = "arcus, -us, m"; 
            englishMeaning = "bow";
    }
    else if  (selectedNoun === "cantus") {
            selectedLatinNoun = "cantus, -us, m"; 
            englishMeaning = "song";
    }
    else if  (selectedNoun === "currus") {
            selectedLatinNoun = "currus, us, m"; 
            englishMeaning = "chariot";
    }
    else if  (selectedNoun === "equitatus") {
            selectedLatinNoun = "equitatus, us, m"; 
            englishMeaning = "cavalry ";
    }
    else if  (selectedNoun === "gressus") {
            selectedLatinNoun = "gressus, us, m"; 
            englishMeaning = "step";
    }
    else if  (selectedNoun === "fructus") {
            selectedLatinNoun = "fructus, us, m"; 
            englishMeaning = "fruit";
    }
    else if  (selectedNoun === "natus") {
            selectedLatinNoun = "natus, us, m"; 
            englishMeaning = "birth";
    }
    else if  (selectedNoun === "potus") {
            selectedLatinNoun = "potus, us, m"; 
            englishMeaning = "drink";
    }
    else if  (selectedNoun === "risus") {
            selectedLatinNoun = "risus, us, m"; 
            englishMeaning = "laugh";
    }
    else if  (selectedNoun === "senatus") {
            selectedLatinNoun = "senatus, us, m"; 
            englishMeaning = "senate";
    }
    else if  (selectedNoun === "sensus") {
            selectedLatinNoun = "sensus, -us, m"; 
            englishMeaning = "feeling";
    }
    else if  (selectedNoun === "ritus") {
            selectedLatinNoun = "ritus, -us, m."; 
            englishMeaning = "rite";
    }
    else if  (selectedNoun === "situs") {
            selectedLatinNoun = "situs, -us, m."; 
            englishMeaning = "site";
    }
    else if  (selectedNoun === "morsus") {
            selectedLatinNoun = "morsus, -us, m."; 
            englishMeaning = "bite";
    }
    
    else if  (selectedNoun === "venu") {
            selectedLatinNoun = "venu, venus, n"; 
            englishMeaning = "javelin";
    }
    else if  (selectedNoun === "cornu") {
            selectedLatinNoun = "cornu, -us, n."; 
            englishMeaning = "horn";
    }
    else if  (selectedNoun === "genu") {
            selectedLatinNoun = "genu, -us, n."; 
            englishMeaning = "knee";
    }
    else if  (selectedNoun === "gelu") {
            selectedLatinNoun = "gelu, -us, n"; 
            englishMeaning = "frost";
    }
    else if  (selectedNoun === "pecu") {
            selectedLatinNoun = "pecu, pecus, n"; 
            englishMeaning = "cow";
    }
    else if  (selectedNoun === "veru") {
            selectedLatinNoun = "veru, verus, n."; 
            englishMeaning = "javelin-tip";
    }


    else if  (selectedNoun === "congeries") {
            selectedLatinNoun = "congeries, congeriei, f."; 
            englishMeaning = "heap";
    }
    else if  (selectedNoun === "caries") {
            selectedLatinNoun = "caries, cariei, f."; 
            englishMeaning = "corruption";
    }
    else if  (selectedNoun === "durities") {
            selectedLatinNoun = "durities, duritiei, f."; 
            englishMeaning = "hardship";
    }
    else if  (selectedNoun === "macies") {
            selectedLatinNoun = "macies, maciei, f."; 
            englishMeaning = "poverty";
    }
    else if  (selectedNoun === "pernicies") {
            selectedLatinNoun = "pernicies, perniciei, f."; 
            englishMeaning = "ruin";
    }
    else if  (selectedNoun === "luxuries") {
            selectedLatinNoun = "luxuries, luxuriei, f."; 
            englishMeaning = "luxury";
    }
    else if  (selectedNoun === "meridies") {
            selectedLatinNoun = "meridies, meridiei, m."; 
            englishMeaning = "noon";
    }
    else if  (selectedNoun === "acies") {
            selectedLatinNoun = "acies, aciei, f";
            englishMeaning = "edge";
    }
    else if  (selectedNoun === "facies") {
            selectedLatinNoun = "facies, faciei, f";
            englishMeaning = "shape";
    }
    else if  (selectedNoun === "effigies") {
            selectedLatinNoun = "effigies, effigiei, f";
            englishMeaning = "image";
    }
    else if  (selectedNoun === "glacies") {
            selectedLatinNoun = "glacies, glaciei, f";
            englishMeaning = "ice";
    }
    else if  (selectedNoun === "fides") {
            selectedLatinNoun = "fides, fidei, f";
            englishMeaning = "pledge";
    }
    else if  (selectedNoun === "spes") {
            selectedLatinNoun = "spes, spei, f";
            englishMeaning = "hope";
    }
    else if  (selectedNoun === "series") {
            selectedLatinNoun = "series, seriei, f";
            englishMeaning = "row";
    }
    else if  (selectedNoun === "species") {
            selectedLatinNoun = "species, speciei, f";
            englishMeaning = "sight";
    }
    document.getElementById("SelectNounChartCaption").innerHTML = selectedLatinNoun + " (" + englishMeaning + ")";
}
