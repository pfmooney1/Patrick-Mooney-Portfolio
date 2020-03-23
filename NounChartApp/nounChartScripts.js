// ======================================
//      Noun chart generator JS
//      Coded by Patrick Mooney
// ======================================

// Intial variables
//
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


// Initial div-hiders
//
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






// ====================================================
// ====================================================
//              Settings and Options
// ====================================================
// ====================================================

// Hides/shows the VOCATIVE table rows
// 
function showHideVocatives() {
    var vocativeTableRows = document.getElementsByClassName("vocativeRow");
    var vocativeButtons = document.getElementsByClassName("vocativeButton");
    var vocativeButtonClassName = vocativeButtons[0].className;
    if (vocativeButtonClassName.includes("checked") === true) {
        // Hides the vocative rows
        for (i = 0; i < vocativeTableRows.length; i++) {
            vocativeTableRows[i].style.visibility = "hidden";
        }
        // Changes the buttons to unchecked
        for (i = 0; i < vocativeButtons.length; i++) {
            vocativeButtons[i].className = "vocativeButton toggleToken";
        }
    }
    else if (vocativeButtonClassName.includes("checked") === false) {
        // Displays the vocative rows
        for (i = 0; i < vocativeTableRows.length; i++) {
            vocativeTableRows[i].style.visibility = "visible";
        }
        // Changes the buttons to checked
        for (i = 0; i < vocativeButtons.length; i++) {
            vocativeButtons[i].className = "vocativeButton toggleToken checked";
        }
    }
}


// Hides/shows the ENGLISH meanings
//
function showHideEnglish() {
    var englishLineBreaks = document.getElementsByClassName("englishBR");
    var englishMeanings = document.getElementsByClassName("englishMeaning");
    var englishButtons = document.getElementsByClassName("englishButton");
    var englishButtonClassName = englishButtons[0].className;
    if (englishButtonClassName.includes("checked") === true) {
        // Hides the english linebreaks
        for (i = 0; i < englishLineBreaks.length; i++) {
            englishLineBreaks[i].style.display = "none";
        }
        // Hides the english meanings
        for (i = 0; i < englishMeanings.length; i++) {
            englishMeanings[i].style.display = "none";
        }
        // Changes the buttons to unchecked
        for (i = 0; i < englishButtons.length; i++) {
            englishButtons[i].className = "englishButton toggleToken";
        }
    }
    else if (englishButtonClassName.includes("checked") === false) {
        // Displays the english linebreaks
        for (i = 0; i < englishLineBreaks.length; i++) {
            englishLineBreaks[i].style.display = "inline";
        }
        // Displays the english meanings
        for (i = 0; i < englishMeanings.length; i++) {
            englishMeanings[i].style.display = "inline";
        }
        // Changes the buttons to checked
        for (i = 0; i < englishButtons.length; i++) {
            englishButtons[i].className = "englishButton toggleToken checked";
        }
    }
}




// Hides/shows the ENGLISH meanings
//
function startWithAssignmentPage() {
    var assignmentButtons = document.getElementsByClassName("assignmentButton");
    var assignmentButtonsClassName = assignmentButtons[0].className;
    if (assignmentButtonsClassName.includes("checked") === true) {
        // Changes the buttons to unchecked
        for (i = 0; i < assignmentButtons.length; i++) {
            assignmentButtons[i].className = "assignmentButton toggleToken";
        }
    }
    else if (assignmentButtonsClassName.includes("checked") === false) {
        // Changes the buttons to checked
        for (i = 0; i < assignmentButtons.length; i++) {
            assignmentButtons[i].className = "assignmentButton toggleToken checked";
        }
    }
}



// Turns all charts into Copy/Paste friendly (Times New Roman, 12pt font)
//
function makeChartsCopyPaste() {
    var copyPasteButtons = document.getElementsByClassName("copyPasteButton");
    var copyPasteButtonsClassName = copyPasteButtons[0].className;
    
    var allTables = document.getElementsByTagName("table");
    if (copyPasteButtonsClassName.includes("checked") === true) {
        // Changes the buttons to unchecked
        for (i = 0; i < copyPasteButtons.length; i++) {
            copyPasteButtons[i].className = "copyPasteButton toggleToken";
        }
        // Changes the tables to the default styling
        for (i = 0; i < allTables.length; i++) {
            allTables[i].className -= " copyPasteFormat";
        }
    }
    else if (copyPasteButtonsClassName.includes("checked") === false) {
        // Changes the buttons to checked
        for (i = 0; i < copyPasteButtons.length; i++) {
            copyPasteButtons[i].className = "copyPasteButton toggleToken checked";
        }
        // Changes the tables to Copy Paste format
        for (i = 0; i < allTables.length; i++) {
            allTables[i].className += " copyPasteFormat";
        }
    }
}





// ====================================================
// ====================================================
//      Debug buttons 
// ====================================================
// ====================================================

// Shows what the final product would look like.
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


// Hide all the windows except the main menu.
//
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


// Show all the windows except the main menu.
//
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






// ====================================================
// ====================================================
//  Navigation buttons: allows the user 
//    to show/hide different parts of the page
// ====================================================
// ====================================================

// Sets other charts to variables
//
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






// ====================================================
// ====================================================
// Other Charts: Hides/displays Other Charts when chosen
// ====================================================
// ====================================================

// Sets other charts to variables
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


// Hides all but one set of other charts on load.
//
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


// Allows the user to display/hide other charts
//
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






// ====================================================
// ====================================================
//      Functions to decline the entire noun
// ====================================================
// ====================================================

// Completely decline a noun in Latin and English
//
function declineNounCompletely(a, b) {
    var latinNounUnparsed = a;
    var englishMeaning = b;
    computeAndWriteLatin(latinNounUnparsed);
    computeAndWriteEnglish(englishMeaning);
}






// ====================================================
// ====================================================
//      Decline the Latin half of the noun 
// ====================================================
// ====================================================

function computeAndWriteLatin(latinNounUnparsed) {
    var nounParts = getNounParts(latinNounUnparsed);    
    var nominativeSingularInput = nounParts[0];    
    var genitiveSingularInput = nounParts[1];
    var genderInput = nounParts[2];
    var gender = getGender(genderInput);
    var declension = computeDeclension(genitiveSingularInput);    
    var base = computeNounBase(declension, nominativeSingularInput, genitiveSingularInput, gender);
       // alert("base: " + base);
    declineLatinHalfOfNoun(declension, nominativeSingularInput, genitiveSingularInput, gender, base);
}
function getNounParts(latinNounUnparsed) {
    var userEnteredNoun = latinNounUnparsed;
    userEnteredNoun = userEnteredNoun.toLowerCase();
    userEnteredNoun = userEnteredNoun.trim();
    //
    var nounParts = userEnteredNoun.match(/\w+/g);
    return nounParts;
}
function computeNounBase(declension, nominativeSingularInput, genitiveSingularInput) {
    var base;
    var genLength = genitiveSingularInput.length;
    if (declension === "1st") {
        base = genitiveSingularInput.slice(0, genLength - 2);
    }
    else if (declension === "3rd") {
        base = genitiveSingularInput.slice(0, genLength - 2);
    }
    else if (declension === "4th") {
        base = genitiveSingularInput.slice(0, genLength - 2);
    }
    else if (declension === "5th") {
        base = genitiveSingularInput.slice(0, genLength - 2);
    }
    else if (declension === "2nd") {
        base = genitiveSingularInput.slice(0, genLength - 1);
    }
    else {
        alert("ERROR! Declension not figured out!");
    }
    return base;
}
function computeDeclension(genitiveSingularInput) {
    if (genitiveSingularInput.endsWith("ae")) {
        return "1st";
    }
    else if (genitiveSingularInput.endsWith("is")) {
        return "3rd";
    }
    else if (genitiveSingularInput.endsWith("us")) {
        return "4th";
    }
    else if (genitiveSingularInput.endsWith("ei")) {
        return "5th";
    }
    else if (genitiveSingularInput.endsWith("i")) {
        return "2nd";
    }
    else {
        alert("ERROR! Declension not figured out!");
    }
}
function getGender(genderInput) {
    genderInput = genderInput.toLowerCase();
    if (/f/gi.test(genderInput)) {
        return "feminine";
    }
    else if (/m/gi.test(genderInput)) {
         return "masculine";
    }
    else if (/n/gi.test(genderInput)) {
        return "neuter";
    }
    else {
        alert("ERROR! Gender could not be determined!");
    }
}


function declineLatinHalfOfNoun(declension, nominativeSingularInput, genitiveSingularInput, gender, base) {
        var nominative = nominativeSingularInput;
        var nomSing;
        var genSing;
        var datSing;
        var accSing;
        var ablSing;
        var vocSing;
        var nomPl;
        var genPl;
        var datPl;
        var accPl;
        var ablPl;
        var vocPl;
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
    else if ((declension === "2nd") && (gender === "masculine") && (nominative.endsWith("s"))) {
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
    else if ((declension === "2nd") && (gender === "masculine") && (nominative.endsWith("r"))) {
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
    else if ((declension === "2nd") && (gender === "neuter")) {
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
    else if ((declension === "3rd") && (gender !== "neuter")) {
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
    else if ((declension === "3rd") && (gender === "neuter")) {
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
    else if ((declension === "4th") && (gender === "neuter")) {
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
    else if ((declension === "4th") && (gender === "masculine" || "feminine")) {
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
        alert("ERROR! Noun endings could not be chosen");
    }


    var lat_Sing_Nom = nomSing;
    var lat_Sing_Gen = genSing;
    var lat_Sing_Dat = datSing;
    var lat_Sing_Acc = accSing;
    var lat_Sing_Abl = ablSing;
    var lat_Sing_Voc = vocSing;
    var lat_Plural_Nom = nomPl;
    var lat_Plural_Gen = genPl;
    var lat_Plural_Dat = datPl;
    var lat_Plural_Acc = accPl;
    var lat_Plural_Abl = ablPl;
    var lat_Plural_Voc = vocPl;
    
    var target_lat_sing_nom = document.getElementsByClassName("lat_sing_nom");
    var target_lat_sing_gen = document.getElementsByClassName("lat_sing_gen");
    var target_lat_sing_dat = document.getElementsByClassName("lat_sing_dat");
    var target_lat_sing_acc = document.getElementsByClassName("lat_sing_acc");
    var target_lat_sing_abl = document.getElementsByClassName("lat_sing_abl");
    var target_lat_sing_voc = document.getElementsByClassName("lat_sing_voc");
    var target_lat_plural_nom = document.getElementsByClassName("lat_plural_nom");
    var target_lat_plural_gen = document.getElementsByClassName("lat_plural_gen");
    var target_lat_plural_dat = document.getElementsByClassName("lat_plural_dat");
    var target_lat_plural_acc = document.getElementsByClassName("lat_plural_acc");
    var target_lat_plural_abl = document.getElementsByClassName("lat_plural_abl");
    var target_lat_plural_voc = document.getElementsByClassName("lat_plural_voc");
    
    
    
    // Takes the correct Latin and inserts them in the HTML
    // SINGULAR 
    for (var i = 0; i < target_lat_sing_nom.length; i++) {
        target_lat_sing_nom[i].innerHTML = lat_Sing_Nom;
    }
    for (i = 0; i < target_lat_sing_gen.length; i++) {
        target_lat_sing_gen[i].innerHTML = lat_Sing_Gen;
    }
    for (i = 0; i < target_lat_sing_dat.length; i++) {
        target_lat_sing_dat[i].innerHTML = lat_Sing_Dat;
    }
    for (i = 0; i < target_lat_sing_acc.length; i++) {
        target_lat_sing_acc[i].innerHTML = lat_Sing_Acc;
    }
    for (i = 0; i < target_lat_sing_abl.length; i++) {
        target_lat_sing_abl[i].innerHTML = lat_Sing_Abl;
    }
    for (i = 0; i < target_lat_sing_voc.length; i++) {
        target_lat_sing_voc[i].innerHTML = lat_Sing_Voc;
    }
    
    // PLURAL 
    for (i = 0; i < target_lat_plural_nom.length; i++) {
        target_lat_plural_nom[i].innerHTML = lat_Plural_Nom;
    }
    for (i = 0; i < target_lat_plural_gen.length; i++) {
        target_lat_plural_gen[i].innerHTML = lat_Plural_Gen;
    }
    for (i = 0; i < target_lat_plural_dat.length; i++) {
        target_lat_plural_dat[i].innerHTML = lat_Plural_Dat;
    }
    for (i = 0; i < target_lat_plural_acc.length; i++) {
        target_lat_plural_acc[i].innerHTML = lat_Plural_Acc;
    }    
    for (i = 0; i < target_lat_plural_abl.length; i++) {
        target_lat_plural_abl[i].innerHTML = lat_Plural_Abl;
    }
    for (i = 0; i < target_lat_plural_voc.length; i++) {
        target_lat_plural_voc[i].innerHTML = lat_Plural_Voc;
    }
}


// ====================================================
// ====================================================
//      Decline the English half of the noun 
// ====================================================
// ====================================================
function computeAndWriteEnglish(englishMeaning) {
    var englishMeaningSingular = englishMeaning;
    englishMeaningSingular = englishMeaningSingular.trim();
    var englishMeaningPlural = getPluralEnglishMeaning(englishMeaningSingular);
    declineEnglishHalfOfNoun(englishMeaningSingular, englishMeaningPlural);
}
function getPluralEnglishMeaning(englishMeaningSingular) {
    var englishMeaning = englishMeaningSingular;
    var englishMeaningPlural;
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
    else if (englishMeaning === "cavalry") {
        englishMeaningPlural = "cavalry";
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
    else if (englishMeaning === "army") {
        englishMeaningPlural = "armies";
    }
    else if (englishMeaning === "navy") {
        englishMeaningPlural = "navies";
    }
    else {
        englishMeaningPlural = englishMeaning + "s";
    }
    return englishMeaningPlural;
}
function declineEnglishHalfOfNoun (englishMeaningSingular, englishMeaningPlural) {
    var eng_Sing_Nom = "the " + englishMeaningSingular;
    var eng_Sing_Gen = "of the " + englishMeaningSingular;
    var eng_Sing_Dat = "to/for the " + englishMeaningSingular;
    var eng_Sing_Acc = "by/with/from the " + englishMeaningSingular;
    var eng_Sing_Abl = "the " + englishMeaningSingular;
    var eng_Sing_Voc = "oh " + englishMeaningSingular;
    var eng_Plural_Nom = "the " + englishMeaningPlural;
    var eng_Plural_Gen = "of the " + englishMeaningPlural;
    var eng_Plural_Dat = "to/for the " + englishMeaningPlural;
    var eng_Plural_Acc = "by/with/from the " + englishMeaningPlural;
    var eng_Plural_Abl = "the " + englishMeaningPlural;
    var eng_Plural_Voc = "oh " + englishMeaningPlural;
    
    var target_eng_sing_nom = document.getElementsByClassName("eng_sing_nom");
    var target_eng_sing_gen = document.getElementsByClassName("eng_sing_gen");
    var target_eng_sing_dat = document.getElementsByClassName("eng_sing_dat");
    var target_eng_sing_acc = document.getElementsByClassName("eng_sing_acc");
    var target_eng_sing_abl = document.getElementsByClassName("eng_sing_abl");
    var target_eng_sing_voc = document.getElementsByClassName("eng_sing_voc");
    var target_eng_plural_nom = document.getElementsByClassName("eng_plural_nom");
    var target_eng_plural_gen = document.getElementsByClassName("eng_plural_gen");
    var target_eng_plural_dat = document.getElementsByClassName("eng_plural_dat");
    var target_eng_plural_acc = document.getElementsByClassName("eng_plural_acc");
    var target_eng_plural_abl = document.getElementsByClassName("eng_plural_abl");
    var target_eng_plural_voc = document.getElementsByClassName("eng_plural_voc");
    
    
    
    // Takes the correct English and inserts them in the HTML
    // SINGULAR 
    for (var i = 0; i < target_eng_sing_nom.length; i++) {
        target_eng_sing_nom[i].innerHTML = eng_Sing_Nom;
    }
    
    for (i = 0; i < target_eng_sing_gen.length; i++) {
        target_eng_sing_gen[i].innerHTML = eng_Sing_Gen;
    }
    
    for (i = 0; i < target_eng_sing_dat.length; i++) {
        target_eng_sing_dat[i].innerHTML = eng_Sing_Dat;
    }
    
    for (i = 0; i < target_eng_sing_acc.length; i++) {
        target_eng_sing_acc[i].innerHTML = eng_Sing_Acc;
    }
    
    for (i = 0; i < target_eng_sing_abl.length; i++) {
        target_eng_sing_abl[i].innerHTML = eng_Sing_Abl;
    }
    
    for (i = 0; i < target_eng_sing_voc.length; i++) {
        target_eng_sing_voc[i].innerHTML = eng_Sing_Voc;
    }
    
    // PLURAL 
    for (i = 0; i < target_eng_plural_nom.length; i++) {
        target_eng_plural_nom[i].innerHTML = eng_Plural_Nom;
    }
    
    for (i = 0; i < target_eng_plural_gen.length; i++) {
        target_eng_plural_gen[i].innerHTML = eng_Plural_Gen;
    }
    
    for (i = 0; i < target_eng_plural_dat.length; i++) {
        target_eng_plural_dat[i].innerHTML = eng_Plural_Dat;
    }
    
    for (i = 0; i < target_eng_plural_acc.length; i++) {
        target_eng_plural_acc[i].innerHTML = eng_Plural_Acc;
    }
    
    for (i = 0; i < target_eng_plural_abl.length; i++) {
        target_eng_plural_abl[i].innerHTML = eng_Plural_Abl;
    }
    
    for (i = 0; i < target_eng_plural_voc.length; i++) {
        target_eng_plural_voc[i].innerHTML = eng_Plural_Voc;
    }
}



// ====================================================
// ====================================================
//      PRE-MADE NOUN SETTER
// ====================================================
// ====================================================

// Sets all of the Latin endings of selected nouns
// 
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
            selectedLatinNoun = "poeta, poetae, m."; 
            englishMeaning = "poet";
    }
    else if  (selectedNoun === "fama") {
            selectedLatinNoun = "fama, famae, f."; 
            englishMeaning = "rumor";
    }
    else if  (selectedNoun === "cura") {
            selectedLatinNoun = "cura, curae, f."; 
            englishMeaning = "care";
    }
    else if  (selectedNoun === "puella") {
            selectedLatinNoun = "puella, puellae, f."; 
            englishMeaning = "girl";
    }
    else if  (selectedNoun === "rosa") {
            selectedLatinNoun = "rosa, rosae, f."; 
            englishMeaning = "rose";
    }
    else if  (selectedNoun === "vita") {
            selectedLatinNoun = "vita, vitae, f."; 
            englishMeaning = "life";
    }
    else if  (selectedNoun === "mora") {
            selectedLatinNoun = "mora, morae, f."; 
            englishMeaning = "delay";
    }
    else if  (selectedNoun === "nauta") {
            selectedLatinNoun = "nauta, nautae, m."; 
            englishMeaning = "sailor";
    }
    else if  (selectedNoun === "culpa") {
            selectedLatinNoun = "culpa, culpae, f."; 
            englishMeaning = "fault";
    }
    else if  (selectedNoun === "forma") {
            selectedLatinNoun = "forma, formae, f."; 
            englishMeaning = "form";
    }
    else if  (selectedNoun === "poena") {
            selectedLatinNoun = "poena, poenae, f."; 
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
            selectedLatinNoun = "oculus, oculi, m."; 
            englishMeaning = "eye";
    }
    else if  (selectedNoun === "animus") {
            selectedLatinNoun = "animus, animi, m."; 
            englishMeaning = "soul";
    }
    else if  (selectedNoun === "stultus") {
            selectedLatinNoun = "stultus, stulti, m."; 
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
            selectedLatinNoun = "arcus, arcus, m"; 
            englishMeaning = "bow";
    }
    else if  (selectedNoun === "cantus") {
            selectedLatinNoun = "cantus, cantus, m"; 
            englishMeaning = "song";
    }
    else if  (selectedNoun === "currus") {
            selectedLatinNoun = "currus, currus, m"; 
            englishMeaning = "chariot";
    }
    else if  (selectedNoun === "equitatus") {
            selectedLatinNoun = "equitatus, equitatus, m"; 
            englishMeaning = "cavalry";
    }
    else if  (selectedNoun === "gressus") {
            selectedLatinNoun = "gressus, gressus, m"; 
            englishMeaning = "step";
    }
    else if  (selectedNoun === "fructus") {
            selectedLatinNoun = "fructus, fructus, m"; 
            englishMeaning = "fruit";
    }
    else if  (selectedNoun === "natus") {
            selectedLatinNoun = "natus, natus, m"; 
            englishMeaning = "birth";
    }
    else if  (selectedNoun === "potus") {
            selectedLatinNoun = "potus, potus, m"; 
            englishMeaning = "drink";
    }
    else if  (selectedNoun === "risus") {
            selectedLatinNoun = "risus, risus, m"; 
            englishMeaning = "laugh";
    }
    else if  (selectedNoun === "senatus") {
            selectedLatinNoun = "senatus, senatus, m"; 
            englishMeaning = "senate";
    }
    else if  (selectedNoun === "sensus") {
            selectedLatinNoun = "sensus, sensus, m"; 
            englishMeaning = "feeling";
    }
    else if  (selectedNoun === "ritus") {
            selectedLatinNoun = "ritus, ritus, m."; 
            englishMeaning = "rite";
    }
    else if  (selectedNoun === "situs") {
            selectedLatinNoun = "situs, situs, m."; 
            englishMeaning = "site";
    }
    else if  (selectedNoun === "morsus") {
            selectedLatinNoun = "morsus, morsus, m."; 
            englishMeaning = "bite";
    }
    
    else if  (selectedNoun === "venu") {
            selectedLatinNoun = "venu, venus, n"; 
            englishMeaning = "javelin";
    }
    else if  (selectedNoun === "cornu") {
            selectedLatinNoun = "cornu, cornus, n."; 
            englishMeaning = "horn";
    }
    else if  (selectedNoun === "genu") {
            selectedLatinNoun = "genu, genus, n."; 
            englishMeaning = "knee";
    }
    else if  (selectedNoun === "gelu") {
            selectedLatinNoun = "gelu, gelus, n"; 
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
    declineNounCompletely(selectedLatinNoun, englishMeaning);
}




// ====================================================
// ====================================================
//      Enter your own noun
// ====================================================
// ====================================================

// Sets all of the Latin endings of selected nouns
// 
function declineUserEnteredNoun(id) {
    var selectedLatinNoun = document.getElementById("userLatinNoun").value;
    var englishMeaning = document.getElementById("userEnglishNoun").value;
    if (englishMeaning === "") {
        englishMeaning = "* Please enter a noun to decline *";
    }
    document.getElementById("SelectNounChartCaption").innerHTML = selectedLatinNoun + " (" + englishMeaning + ")";
    declineNounCompletely(selectedLatinNoun, englishMeaning);
    
    // Checks to see if the user has selected "Assignment screen"
    let assignmentButtons = document.getElementsByClassName("assignmentButton");
    let assignmentButtonsClassName = assignmentButtons[0].className;
    if (assignmentButtonsClassName.includes("checked") === true) {
        goToAssignmentScreenScreen();
            document.getElementById("assignmentNoun").innerHTML = selectedLatinNoun + " (" + englishMeaning + ")";
    }
    // If English is included, show that on the assignment page
    var englButtons = document.getElementsByClassName("englishButton");
    var englButtonsClassName = englButtons[0].className;
    if (englButtonsClassName.includes("checked") === true) {
        document.getElementById("assignmentLanguages").innerHTML = "in Latin and English.";
    }
    else {
        document.getElementById("assignmentLanguages").innerHTML = "in Latin.";
    }
}





// End of JS