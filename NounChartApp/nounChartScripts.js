/* Intial variables */
var mainMenuScreen = document.getElementById("mainMenu");
var assignmentScreen = document.getElementById("assignmentPage");
var enterANounScreen = document.getElementById("enterANounScreen");
var aboutScreen = document.getElementById("aboutScreen");
var settingScreen = document.getElementById("settingScreen");
var nounEndingsScreen = document.getElementById("nounEndingsScreen");
var blankChartScreen = document.getElementById("blankChartScreen");
var randomNounScreen = document.getElementById("randomNounScreen");
//
//
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
// Initial div-hiders
assignmentScreen.style.display = "none";
enterANounScreen.style.display = "none";
aboutScreen.style.display = "none";
randomNounScreen.style.display = "none";
settingScreen.style.display = "none";
settingScreen.style.display = "none";
settingScreen.style.display = "none";








function goToBlankChartScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";  
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "block";
}
function goToNounEndingsScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";  
    nounEndingsScreen.style.display = "block";
    blankChartScreen.style.display = "none";
}
function goToRandomNounScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
    randomNounScreen.style.display = "none";
}


function goToSettingsScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "block";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
}

function goToAboutScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "block";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
}
function goToMainMenuScreen() {
    mainMenuScreen.style.display = "block";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
}
function goToAssignmentScreenScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "block";
    enterANounScreen.style.display = "none";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
}
function goToEnterANounScreenScreen() {
    mainMenuScreen.style.display = "none";
    assignmentScreen.style.display = "none";
    enterANounScreen.style.display = "block";
    aboutScreen.style.display = "none";
    settingScreen.style.display = "none";
    nounEndingsScreen.style.display = "none";
    blankChartScreen.style.display = "none";
}
/*
mainMenuScreen.style.display = "none";
assignmentScreen.style.display = "none";
enterANounScreen.style.display = "none";
aboutScreen.style.display = "none";
settingScreen.style.display = "none";
*/


var vocabIncluded = true;
var englishIncluded = true;
var showAssignmentPage = false;
var nounEndingsOnlyChoice = "1st declension";
var copyPasteMode = false;
var declension;
var nounBase;
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
    else if (genitiveSingularInput.endsWith("us") {
        declension = "4th";
        base = genitive.slice(0, genLength - 2);
    }
    else if (genitiveSingularInput.endsWith("ei") {
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
        //=== 1ST DECLENSION ===
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
        //=== 2ND DECLENSION MASCULINE === 
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
        //=== 2ND DECLENSION MASCULINE R=== 
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
        //=== 2ND DECLENSION NEUTER === 
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
        //=== 3RD DECLENSION MASCULINE OR FEMININE === 
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
        //=== 3RD DECLENSION NEUTER === 
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
        //=== 4TH DECLENSION NEUTER === 
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
        //=== 4TH DECLENSION MASCULINE AND FEMININE === 
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



//
// PRE-MADE NOUN SETTER
// Sets all of the Latin endings of selected nouns
function selectedNounSetter() {
    if (selectedNoun === "") {
        alert("ERROR! No noun selected!");
    }
    else if (selectedNoun === "filius - (son)") {
            noun = "filius, filii, m"; 
            englishMeaning = "son";	
    }
    else if	(selectedNoun === "ludus - (game)") {
            noun = "ludus, ludi, m"; 
            englishMeaning = "game";	
    }
    else if	(selectedNoun === "mundus - (world)") {
            noun = "mundus, mundi, m"; 
            englishMeaning = "world";		
    }
    else if	(selectedNoun === "vicinus - (neighbor)") {
            noun = "vicinus, vicini, m"; 
            englishMeaning = "neighbor";		
    }
    else if	(selectedNoun === "vulgus - (mob)") {
            noun = "vulgus, vulgi, m"; 
            englishMeaning = "mob";		
    }
    else if	(selectedNoun === "vicina - (neighbor)") {
            noun = "vicina, vicinae, f"; 
            englishMeaning = "neighbor";		
    }
    else if	(selectedNoun === "iudicium - (judgement)") {
            noun = "iudicium, iudicii, n"; 
            englishMeaning = "judgement";		
    }
    else if	(selectedNoun === "forum - (marketplace)") {
            noun = "forum, fori, n"; 
            englishMeaning = "marketplace";		
    }
    else if	(selectedNoun === "aedificium - (building)") {
            noun = "aedificium, aedificii, n"; 
            englishMeaning = "building";		
    }
    else if	(selectedNoun === "saxum - (rock)") {
            noun = "saxum, saxi, n"; 
            englishMeaning = "rock";		
    }
    /*
    ==============================
    ======= 1st Declension =======
    ==============================
    */
/*
    else if	(selectedNoun === "magistra - (teacher)") {
            noun = "magistra, magistrae, f";
            englishMeaning = "teacher";
    }
    else if  (selectedNoun === "discipula - (student)") {
            noun = "discipula, discipulae, f";
            englishMeaning = "student";
    }
    else if  (selectedNoun === "poeta - (poet)") {
            noun = "poeta, -ae, m."; 
            englishMeaning = "poet";
    }
    else if  (selectedNoun === "fama - (rumor)") {
            noun = "fama, -ae, f."; 
            englishMeaning = "rumor";
    }
    else if  (selectedNoun === "cura - (care)") {
            noun = "cura, -ae, f."; 
            englishMeaning = "care";
    }
    else if  (selectedNoun === "puella - (girl)") {
            noun = "puella, -ae, f."; 
            englishMeaning = "girl";
    }
    else if  (selectedNoun === "rosa - (rose)") {
            noun = "rosa, -ae, f."; 
            englishMeaning = "rose";
    }
    else if  (selectedNoun === "vita - (life)") {
            noun = "vita, -ae, f."; 
            englishMeaning = "life";
    }
    else if  (selectedNoun === "mora - (delay)") {
            noun = "mora, -ae, f."; 
            englishMeaning = "delay";
    }
    else if  (selectedNoun === "nauta - (sailor)") {
            noun = "nauta, -ae, m."; 
            englishMeaning = "sailor";
    }
    else if  (selectedNoun === "culpa - (fault)") {
            noun = "culpa, -ae, f."; 
            englishMeaning = "fault";
    }
    else if  (selectedNoun === "forma - (form)") {
            noun = "forma, -ae, f."; 
            englishMeaning = "form";
    }
    else if  (selectedNoun === "poena - (penalty)") {
            noun = "poena, -ae, f."; 
            englishMeaning = "penalty";
    }
    else if  (selectedNoun === "amica - (friend)") {
            noun = "amica, amicae, f ";
            englishMeaning = "friend";
    }
    else if  (selectedNoun === "ira - (rage)") {
            noun = "ira, irae, f ";
            englishMeaning = "rage";
    }
    else if  (selectedNoun === "pecunia - (money)") {
            noun = "pecunia, pecuniae, f";
            englishMeaning = "money";
    }
    else if  (selectedNoun === "porta - (gate)") {
            noun = "porta, portae, f";
            englishMeaning = "gate";	
    }
    else if  (selectedNoun === "pirata - (pirate)") {
            noun = "pirata, piratae, m";
            englishMeaning = "pirate";	
    }
    /*
    ========================================
    ======= 2nd Declension Masculine =======
    ========================================
    */
/*
    else if  (selectedNoun === "amicus - (friend)") {
            noun = "amicus, amici, m ";
            englishMeaning = "friend";
    }
    else if  (selectedNoun === "oculus - (eye)") {
            noun = "oculus, -i, m."; 
            englishMeaning = "eye";
    }
    else if  (selectedNoun === "animus - (soul)") {
            noun = "animus, -i, m."; 
            englishMeaning = "soul";
    }
    else if  (selectedNoun === "stultus - (fool)") {
            noun = "stultus, -i, m."; 
            englishMeaning = "fool";
    }
    else if  (selectedNoun === "discipulus - (student)") {
            noun = "discipulus, discipuli, m";
            englishMeaning = "student";
    }
    else if  (selectedNoun === "puer - (boy)") {
            noun = "puer, pueri, m."; 
            englishMeaning = "boy";
    }
    else if  (selectedNoun === "magister - (teacher)") {
            noun = "magister, magistri, m."; 
            englishMeaning = "teacher";
    }
    else if  (selectedNoun === "vir - (man)") {
            noun = "vir, viri, m."; 
            englishMeaning = "man";
    }
    else if  (selectedNoun === "ager - (field)") {
            noun = "ager, agri, m."; 
            englishMeaning = "field";
    }
    else if  (selectedNoun === "faber - (smith)") {
            noun = "faber, fabri, m."; 
            englishMeaning = "smith";
    }
    else if  (selectedNoun === "liber - (book)") {
            noun = "liber, libri, m."; 
            englishMeaning = "book";
    }
    /*
    =====================================
    ======= 2nd Declension Neuter =======
    =====================================
    */
/*
    else if  (selectedNoun === "basium - (kiss)") {
            noun = "basium, basii, n";
            englishMeaning = "kiss";
    }
    else if  (selectedNoun === "bellum - (war)") {
            noun = "bellum, belli, n";
            englishMeaning = "war";
    }
    else if  (selectedNoun === "consilium - (plan)") {
            noun = "consilium, consilii, n";
            englishMeaning = "plan";
    }
    else if  (selectedNoun === "donum - (gift)") {
            noun = "donum, doni, n ";
            englishMeaning = "gift";
    }
    else if  (selectedNoun === "exitium - (ruin)") {
            noun = "exitium, exitii, n"; 
            englishMeaning = "ruin";
    }
    else if  (selectedNoun === "officium - (duty)") {
            noun = "officium, officii, n"; 
            englishMeaning = "duty";
    }
    else if  (selectedNoun === "verbum - (word)") {
            noun = "verbum, verbi, n"; 
            englishMeaning = "word";
    }
    else if  (selectedNoun === "caelum - (heaven)") {
            noun = "caelum, caeli, n "; 
            englishMeaning = "heaven";
    }
    else if  (selectedNoun === "otium - (peace)") {
            noun = "otium, otii, n";
            englishMeaning = "peace";
    }
    else if  (selectedNoun === "periculum - (danger)") {
            noun = "periculum, periculi, n";
            englishMeaning = "danger";
    }
    else if  (selectedNoun === "remedium - (cure)") {
            noun = "remedium, remedii, n";
            englishMeaning = "cure";
    }
    /*
    =====================================================
    ======= 3rd Declension Masculine and Feminine =======
    =====================================================
    */
/*
    else if  (selectedNoun === "pater - (father)") {
            noun = "pater, patris, m"; 
            englishMeaning = "father";
    }
    else if  (selectedNoun === "mater - (mother)") {
            noun = "mater, matris, f"; 
            englishMeaning = "mother";
    }
    else if  (selectedNoun === "vox - (voice)") {
            noun = "vox, vocis, f"; 
            englishMeaning = "voice";
    }
    else if  (selectedNoun === "dux - (leader)") {
            noun = "dux, ducis, m"; 
            englishMeaning = "leader";
    }
    else if  (selectedNoun === "miles - (soldier)") {
            noun = "miles, militis, m"; 
            englishMeaning = "soldier";
    }
    else if  (selectedNoun === "homo - (human)") {
            noun = "homo, hominis, m"; 
            englishMeaning = "human";
    }
    else if  (selectedNoun === "aestas - (age)") {
            noun = "aestas, aestatis, f"; 
            englishMeaning = "age";
    }
    else if  (selectedNoun === "pax - (peace)") {
            noun = "pax, pacis, f"; 
            englishMeaning = "peace";
    }
    else if  (selectedNoun === "consul - (consul)") {
            noun = "consul, consulis, m"; 
            englishMeaning = "consul";
    }
    else if  (selectedNoun === "soror - (sister)") {
            noun = "soror, sororis, f"; 
            englishMeaning = "sister";
    }
    else if  (selectedNoun === "frater - (brother)") {
            noun = "frater, fratris, m"; 
            englishMeaning = "brother">
    }
    else if  (selectedNoun === "civitas - (city)") {
            noun = "civitas, civitatis, f"; 
            englishMeaning = "city";
    }
    else if  (selectedNoun === "pars - (part)") {
            noun = "pars, partis, f"; 
            englishMeaning = "part";
    }
    else if  (selectedNoun === "lux - (light)") {
            noun = "lux, lucis, f"; 
            englishMeaning = "light";
    }
    else if  (selectedNoun === "rex - (king)") {
            noun = "rex, regis, m";
            englishMeaning = "king";
    }
    /*
    =====================================
    ======= 3rd Declension Neuter =======
    =====================================
    */
/*
    else if  (selectedNoun === "corpus - (body)") {
            noun = "corpus, corporis, n";
            englishMeaning = "body";
    }
    else if  (selectedNoun === "scelus - (crime)") {
            noun = "scelus, sceleris, n"; 
            englishMeaning = "crime";
    }
    else if  (selectedNoun === "sidus - (constellation)") {
            noun = "sidus, sideris, n"; 
            englishMeaning = "constellation";
    }
    else if  (selectedNoun === "ius - (law)") {
            noun = "ius, iuris, n"; 
            englishMeaning = "law";
    }
    else if  (selectedNoun === "limen - (threshold)") {
            noun = "limen, liminis, n"; 
            englishMeaning = "threshold";
    }
    else if  (selectedNoun === "liquamen - (fish sauce)") {
            noun = "liquamen, liquaminis, n"; 
            englishMeaning = "fish sauce";
    }
    else if  (selectedNoun === "epigramma - (epigram)") {
            noun = "epigramma, epigrammatis, n"; 
            englishMeaning = "epigram";
    }
    else if  (selectedNoun === "diploma - (diploma)") {
            noun = "diploma, diplomatis, n"; 
            englishMeaning = "diploma";
    }
    else if  (selectedNoun === "opus - (work)") {
            noun = "opus, operis, n"; 
            englishMeaning = "work";
    }
    else if  (selectedNoun === "caput - (head)") {
            noun = "caput, capitis, n"; 
            englishMeaning = "head";
    }
    else if  (selectedNoun === "carmen - (song)") {
            noun = "carmen, carminis, n"; 
            englishMeaning = "song";
    }
    else if  (selectedNoun === "flumen - (river)") {
            noun = "flumen, fluminis, n"; 
            englishMeaning = "river";
    }
    else if  (selectedNoun === "iter - (trip)") {
            noun = "iter, itineris, n"; 
            englishMeaning = "trip";
    }
    else if  (selectedNoun === "nomen - (name)") {
            noun = "nomen, nominis, n"; 
            englishMeaning = "name";
    }
    else if  (selectedNoun === "tempus - (storm)") {
            noun = "tempus, temporis, n"; 
            englishMeaning = "storm";
    }
    else if  (selectedNoun === "vulnus - (wound)") {
            noun = "vulnus, vulneris, n"; 
            englishMeaning = "wound";
    }
    /*
    =====================================================
    ======= 4th Declension Masculine and Feminine =======
    =====================================================
    */
/*
    else if  (selectedNoun === "exercitus - (army)") {
            noun = "exercitus, exercitus, m";
            englishMeaning = "army";
    }
    else if  (selectedNoun === "arcus - (bow)") {
            noun = "arcus, -us, m"; 
            englishMeaning = "bow";
    }
    else if  (selectedNoun === "cantus - (song)") {
            noun = "cantus, -us, m"; 
            englishMeaning = "song";
    }
    else if  (selectedNoun === "currus - (chariot)") {
            noun = "currus, us, m"; 
            englishMeaning = "chariot";
    }
    else if  (selectedNoun === "equitatus - (cavalry)") {
            noun = "equitatus, us, m"; 
            englishMeaning = "cavalry ";
    }
    else if  (selectedNoun === "gressus - (step)") {
            noun = "gressus, us, m"; 
            englishMeaning = "step";
    }
    else if  (selectedNoun === "fructus - (fruit)") {
            noun = "fructus, us, m"; 
            englishMeaning = "fruit";
    }
    else if  (selectedNoun === "natus - (birth)") {
            noun = "natus, us, m"; 
            englishMeaning = "birth";
    }
    else if  (selectedNoun === "potus - (drink)") {
            noun = "potus, us, m"; 
            englishMeaning = "drink";
    }
    else if  (selectedNoun === "risus - (laugh)") {
            noun = "risus, us, m"; 
            englishMeaning = "laugh";
    }
    else if  (selectedNoun === "senatus - (senate)") {
            noun = "senatus, us, m"; 
            englishMeaning = "senate";
    }
    else if  (selectedNoun === "sensus - (feeling)") {
            noun = "sensus, -us, m"; 
            englishMeaning = "feeling";
    }
    else if  (selectedNoun === "ritus - (rite)") {
            noun = "ritus, -us, m."; 
            englishMeaning = "rite";
    }
    else if  (selectedNoun === "situs - (site)") {
            noun = "situs, -us, m."; 
            englishMeaning = "site";
    }
    else if  (selectedNoun === "morsus - (bite)") {
            noun = "morsus, -us, m."; 
            englishMeaning = "bite";
    }
    /*
    =====================================
    ======= 4th Declension Neuter =======
    =====================================
    */
/*
    else if  (selectedNoun === "venu - (javelin)") {
            noun = "venu, venus, n"; 
            englishMeaning = "javelin";
    }
    else if  (selectedNoun === "cornu - (horn)") {
            noun = "cornu, -us, n."; 
            englishMeaning = "horn";
    }
    else if  (selectedNoun === "genu - (knee)") {
            noun = "genu, -us, n."; 
            englishMeaning = "knee";
    }
    else if  (selectedNoun === "gelu - (frost)") {
            noun = "gelu, -us, n"; 
            englishMeaning = "frost";
    }
    else if  (selectedNoun === "pecu - (cow)") {
            noun = "pecu, pecus, n"; 
            englishMeaning = "cow";
    }
    else if  (selectedNoun === "veru - (javelin-tip)") {
            noun = "veru, verus, n."; 
            englishMeaning = "javelin-tip";
    }
    /*
    ==============================
    ======= 5th Declension =======
    ==============================
    */
/*
    else if  (selectedNoun === "congeries - (heap)") {
            noun = "congeries, congeriei, f."; 
            englishMeaning = "heap";
    }
    else if  (selectedNoun === "caries - (corruption)") {
            noun = "caries, cariei, f."; 
            englishMeaning = "corruption";
    }
    else if  (selectedNoun === "durities - (hardship)") {
            noun = "durities, duritiei, f."; 
            englishMeaning = "hardship";
    }
    else if  (selectedNoun === "macies - (poverty)") {
            noun = "macies, maciei, f."; 
            englishMeaning = "poverty";
    }
    else if  (selectedNoun === "pernicies - (ruin)") {
            noun = "pernicies, perniciei, f."; 
            englishMeaning = "ruin";
    }
    else if  (selectedNoun === "luxuries - (luxury)") {
            noun = "luxuries, luxuriei, f."; 
            englishMeaning = "luxury";
    }
    else if  (selectedNoun === "meridies - (noon)") {
            noun = "meridies, meridiei, m."; 
            englishMeaning = "noon";
    }
    else if  (selectedNoun === "acies - (edge)") {
            noun = "acies, aciei, f";
            englishMeaning = "edge";
    }
    else if  (selectedNoun === "facies - (shape)") {
            noun = "facies, faciei, f";
            englishMeaning = "shape";
    }
    else if  (selectedNoun === "effigies - (image)") {
            noun = "effigies, effigiei, f";
            englishMeaning = "image";
    }
    else if  (selectedNoun === "glacies - (ice)") {
            noun = "glacies, glaciei, f";
            englishMeaning = "ice";
    }
    else if  (selectedNoun === "fides - (pledge)") {
            noun = "fides, fidei, f";
            englishMeaning = "pledge";
    }
    else if  (selectedNoun === "spes - (hope)") {
            noun = "spes, spei, f";
            englishMeaning = "hope";
    }
    else if  (selectedNoun === "series - (row)") {
            noun = "series, seriei, f";
            englishMeaning = "row";
    }
    else if  (selectedNoun === "species - (sight)") {
            noun = "species, speciei, f";
            englishMeaning = "sight";
    }
}

*/