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
//
//

/*
var vocabIncluded = true;
var englishIncluded = true;
var showAssignmentPage = false;
var nounEndingsOnlyChoice = "1st declension";
var copyPasteMode = false;
var declension;
var nounBase;

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
        englishMeaningPlural to "men";
    }
    else if (englishMeaning === "body") {
        englishMeaningPlural to "bodies";
    }
    else if (englishMeaning === "knife") {
        englishMeaningPlural to "knives";
    }
    else if (englishMeaning === "wolf") {
        englishMeaningPlural to "wolves";
    }
    else if (englishMeaning === "mouse") {
        englishMeaningPlural to "mice";
    }
    else if (englishMeaning === "foot") {
        englishMeaningPlural to "feet";
    }
    else if (englishMeaning === "child") {
        englishMeaningPlural to "children";
    }
    else if (englishMeaning === "goose") {
        englishMeaningPlural to "geese";
    }
    else if (englishMeaning === "tooth") {
        englishMeaningPlural to "teeth";
    }
    else if (englishMeaning === "cactus") {
        englishMeaningPlural to "cacti";
    }
    else if (englishMeaning === "ox") {
        englishMeaningPlural to "oxen";
    }
    else if (englishMeaning === "codex") {
        englishMeaningPlural to "codices";
    }
    else if (englishMeaning === "crisis") {
        englishMeaningPlural to "crises";
    }
    else if (englishMeaning === "deer") {
        englishMeaningPlural to "deer";
    }
    else if (englishMeaning === "fish") {
        englishMeaningPlural to "fishes";
    }
    else if (englishMeaning === "half") {
        englishMeaningPlural to "halves";
    }
    else if (englishMeaning === "moose") {
        englishMeaningPlural to "moose";
    }
    else if (englishMeaning === "oasis") {
        englishMeaningPlural to "oases";
    }
    else if (englishMeaning === "quiz") {
        englishMeaningPlural to "quizzes";
    }
    else if (englishMeaning === "salmon") {
        englishMeaningPlural to "salmon";
    }
    else if (englishMeaning === "sheep") {
        englishMeaningPlural to "sheep";
    }
    else if (englishMeaning === "syllabus") {
        englishMeaningPlural to "syllabi";
    }
    else if (englishMeaning === "thief") {
        englishMeaningPlural to "thieves";
    }
    else if (englishMeaning === "wife") {
        englishMeaningPlural to "wives";
    }
    else if (englishMeaning === "woman") {
        englishMeaningPlural to "women";
    }
    else if (englishMeaning === "kiss") {
        englishMeaningPlural to "kisses";
    }
    else if (englishMeaning === "duty") {
        englishMeaningPlural to "duties";
    }
    else if (englishMeaning === "life") {
        englishMeaningPlural to "lives";
    }
    else if (englishMeaning === "glory") {
        englishMeaningPlural to "glories";
    }
    else if (englishMeaning === "penalty") {
        englishMeaningPlural to "penalties";
    }
    else if (englishMeaning === "philosophy") {
        englishMeaningPlural to "philosophies";
    }
    else if (englishMeaning === "luxury") {
        englishMeaningPlural to "luxuries";
    }
    else if (englishMeaning === "poverty") {
        englishMeaningPlural to "poverty";
    }
    else if (englishMeaning === "city") {
        englishMeaningPlural to "cities";
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
        nomSing to nominative;
        genSing to base + "ae";
        datSing to base + "ae";
        accSing to base + "am";
        ablSing to base + "ā";
        vocSing to nomSing;
        nomPl to base + "ae";
        genPl to base + "arum";
        datPl to base + "is";
        accPl to base + "as";
        ablPl to base + "is";
        vocPl to nomPl;
    }
    else if ((declension === "2nd") && (gender === "m") && (nomLastLetter === "s")) {
        //=== 2ND DECLENSION MASCULINE === 
        nomSing to nominative;
        genSing to base + "i";
        datSing to base + "o";
        accSing to base + "um";
        ablSing to base + "o";
        vocSing to base + "e";
        nomPl to base + "i";
        genPl to base + "orum";
        datPl to base + "is";
        accPl to base + "os";
        ablPl to base + "is";
        vocPl to nomPl;
    }
    
    else if ((declension === "2nd") && (gender === "m") && (nomLastLetter === "r")) {
        //=== 2ND DECLENSION MASCULINE R=== 
        nomSing to nominative;
        genSing to base + "i";
        datSing to base + "o";
        accSing to base + "um";
        ablSing to base + "o";
        vocSing to nominative;
        nomPl to base + "i";
        genPl to base + "orum";
        datPl to base + "is";
        accPl to base + "os";
        ablPl to base + "is";
        vocPl to nomPl;
    }
    else if ((declension === "2nd") && (gender === "n")) {
        //=== 2ND DECLENSION NEUTER === 
        nomSing to nominative;
        genSing to base + "i";
        datSing to base + "o";
        accSing to nominative;
        ablSing to base + "o";
        vocSing to nominative;
        nomPl to base + "a";
        genPl to base + "orum";
        datPl to base + "is";
        accPl to nomPl;
        ablPl to base + "is";
        vocPl to nomPl;
    }
    else if (declension === "3rd" && gender !== "n") {
        //=== 3RD DECLENSION MASCULINE OR FEMININE === 
        nomSing to nominative;
        genSing to base + "is";
        datSing to base + "i";
        accSing to base + "em";
        ablSing to base + "e";
        vocSing to nomSing;
        nomPl to base + "es";
        genPl to base + "um";
        datPl to base + "ibus";
        accPl to base + "es";
        ablPl to base + "ibus";
        vocPl to nomPl;
        }
    else if (declension === "3rd" && gender === "n") {
        //=== 3RD DECLENSION NEUTER === 
        nomSing to nominative;
        genSing to base + "is";
        datSing to base + "i";
        accSing to nomSing;
        ablSing to base + "e";
        vocSing to nomSing;
        nomPl to base + "a";
        genPl to base + "um";
        datPl to base + "ibus";
        accPl to nomPl;
        ablPl to base + "ibus";
        vocPl to nomPl;
    }
    else if (declension === "4th" && gender === "n") {
        //=== 4TH DECLENSION NEUTER === 
        nomSing to nominative;
        genSing to base + "us";
        datSing to base + "u";
        accSing to base + "u";
        ablSing to base + "u";
        vocSing to base + "u";
        nomPl to base + "ua";
        genPl to base + "uum";
        datPl to base + "ibus";
        accPl to nomPl;
        ablPl to base + "ibus";
        vocPl to nomPl;
    }
    else if (declension === "4th" && (gender === "m" || "f")) {
        //=== 4TH DECLENSION MASCULINE AND FEMININE === 
        nomSing to nominative;
        genSing to base + "us";
        datSing to base + "ui";
        accSing to base + "um";
        ablSing to base + "u";
        vocSing to nomSing;
        nomPl to base + "us";
        genPl to base + "uum";
        datPl to base + "ibus";
        accPl to nomPl;
        ablPl to base + "ibus";
        vocPl to nomPl;
    }
    else if (declension === "5th") {
        //=== 5TH DECLENSION  === 
        nomSing to nominative;
        genSing to base + "ei";
        datSing to base + "ei";
        accSing to base + "em";
        ablSing to base + "e";
        vocSing to base + "es";
        nomPl to base + "es";
        genPl to base + "erum";
        datPl to base + "ebus";
        accPl to nomPl;
        ablPl to base + "ebus";
        vocPl to nomPl;
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
            noun to "filius, filii, m"; 
            englishMeaning to "son";	
    }
    else if	(selectedNoun === "ludus - (game)") {
            noun to "ludus, ludi, m"; 
            englishMeaning to "game";	
    }
    else if	(selectedNoun === "mundus - (world)") {
            noun to "mundus, mundi, m"; 
            englishMeaning to "world";		
    }
    else if	(selectedNoun === "vicinus - (neighbor)") {
            noun to "vicinus, vicini, m"; 
            englishMeaning to "neighbor";		
    }
    else if	(selectedNoun === "vulgus - (mob)") {
            noun to "vulgus, vulgi, m"; 
            englishMeaning to "mob";		
    }
    else if	(selectedNoun === "vicina - (neighbor)") {
            noun to "vicina, vicinae, f"; 
            englishMeaning to "neighbor";		
    }
    else if	(selectedNoun === "iudicium - (judgement)") {
            noun to "iudicium, iudicii, n"; 
            englishMeaning to "judgement";		
    }
    else if	(selectedNoun === "forum - (marketplace)") {
            noun to "forum, fori, n"; 
            englishMeaning to "marketplace";		
    }
    else if	(selectedNoun === "aedificium - (building)") {
            noun to "aedificium, aedificii, n"; 
            englishMeaning to "building";		
    }
    else if	(selectedNoun === "saxum - (rock)") {
            noun to "saxum, saxi, n"; 
            englishMeaning to "rock";		
    }
    /*
    ==============================
    ======= 1st Declension =======
    ==============================
    */
/*
    else if	(selectedNoun === "magistra - (teacher)") {
            noun to "magistra, magistrae, f";
            englishMeaning to "teacher";
    }
    else if  (selectedNoun === "discipula - (student)") {
            noun to "discipula, discipulae, f";
            englishMeaning to "student";
    }
    else if  (selectedNoun === "poeta - (poet)") {
            noun to "poeta, -ae, m."; 
            englishMeaning to "poet";
    }
    else if  (selectedNoun === "fama - (rumor)") {
            noun to "fama, -ae, f."; 
            englishMeaning to "rumor";
    }
    else if  (selectedNoun === "cura - (care)") {
            noun to "cura, -ae, f."; 
            englishMeaning to "care";
    }
    else if  (selectedNoun === "puella - (girl)") {
            noun to "puella, -ae, f."; 
            englishMeaning to "girl";
    }
    else if  (selectedNoun === "rosa - (rose)") {
            noun to "rosa, -ae, f."; 
            englishMeaning to "rose";
    }
    else if  (selectedNoun === "vita - (life)") {
            noun to "vita, -ae, f."; 
            englishMeaning to "life";
    }
    else if  (selectedNoun === "mora - (delay)") {
            noun to "mora, -ae, f."; 
            englishMeaning to "delay";
    }
    else if  (selectedNoun === "nauta - (sailor)") {
            noun to "nauta, -ae, m."; 
            englishMeaning to "sailor";
    }
    else if  (selectedNoun === "culpa - (fault)") {
            noun to "culpa, -ae, f."; 
            englishMeaning to "fault";
    }
    else if  (selectedNoun === "forma - (form)") {
            noun to "forma, -ae, f."; 
            englishMeaning to "form";
    }
    else if  (selectedNoun === "poena - (penalty)") {
            noun to "poena, -ae, f."; 
            englishMeaning to "penalty";
    }
    else if  (selectedNoun === "amica - (friend)") {
            noun to "amica, amicae, f ";
            englishMeaning to "friend";
    }
    else if  (selectedNoun === "ira - (rage)") {
            noun to "ira, irae, f ";
            englishMeaning to "rage";
    }
    else if  (selectedNoun === "pecunia - (money)") {
            noun to "pecunia, pecuniae, f";
            englishMeaning to "money";
    }
    else if  (selectedNoun === "porta - (gate)") {
            noun to "porta, portae, f";
            englishMeaning to "gate";	
    }
    else if  (selectedNoun === "pirata - (pirate)") {
            noun to "pirata, piratae, m";
            englishMeaning to "pirate";	
    }
    /*
    ========================================
    ======= 2nd Declension Masculine =======
    ========================================
    */
/*
    else if  (selectedNoun === "amicus - (friend)") {
            noun to "amicus, amici, m ";
            englishMeaning to "friend";
    }
    else if  (selectedNoun === "oculus - (eye)") {
            noun to "oculus, -i, m."; 
            englishMeaning to "eye";
    }
    else if  (selectedNoun === "animus - (soul)") {
            noun to "animus, -i, m."; 
            englishMeaning to "soul";
    }
    else if  (selectedNoun === "stultus - (fool)") {
            noun to "stultus, -i, m."; 
            englishMeaning to "fool";
    }
    else if  (selectedNoun === "discipulus - (student)") {
            noun to "discipulus, discipuli, m";
            englishMeaning to "student";
    }
    else if  (selectedNoun === "puer - (boy)") {
            noun to "puer, pueri, m."; 
            englishMeaning to "boy";
    }
    else if  (selectedNoun === "magister - (teacher)") {
            noun to "magister, magistri, m."; 
            englishMeaning to "teacher";
    }
    else if  (selectedNoun === "vir - (man)") {
            noun to "vir, viri, m."; 
            englishMeaning to "man";
    }
    else if  (selectedNoun === "ager - (field)") {
            noun to "ager, agri, m."; 
            englishMeaning to "field";
    }
    else if  (selectedNoun === "faber - (smith)") {
            noun to "faber, fabri, m."; 
            englishMeaning to "smith";
    }
    else if  (selectedNoun === "liber - (book)") {
            noun to "liber, libri, m."; 
            englishMeaning to "book";
    }
    /*
    =====================================
    ======= 2nd Declension Neuter =======
    =====================================
    */
/*
    else if  (selectedNoun === "basium - (kiss)") {
            noun to "basium, basii, n";
            englishMeaning to "kiss";
    }
    else if  (selectedNoun === "bellum - (war)") {
            noun to "bellum, belli, n";
            englishMeaning to "war";
    }
    else if  (selectedNoun === "consilium - (plan)") {
            noun to "consilium, consilii, n";
            englishMeaning to "plan";
    }
    else if  (selectedNoun === "donum - (gift)") {
            noun to "donum, doni, n ";
            englishMeaning to "gift";
    }
    else if  (selectedNoun === "exitium - (ruin)") {
            noun to "exitium, exitii, n"; 
            englishMeaning to "ruin";
    }
    else if  (selectedNoun === "officium - (duty)") {
            noun to "officium, officii, n"; 
            englishMeaning to "duty";
    }
    else if  (selectedNoun === "verbum - (word)") {
            noun to "verbum, verbi, n"; 
            englishMeaning to "word";
    }
    else if  (selectedNoun === "caelum - (heaven)") {
            noun to "caelum, caeli, n "; 
            englishMeaning to "heaven";
    }
    else if  (selectedNoun === "otium - (peace)") {
            noun to "otium, otii, n";
            englishMeaning to "peace";
    }
    else if  (selectedNoun === "periculum - (danger)") {
            noun to "periculum, periculi, n";
            englishMeaning to "danger";
    }
    else if  (selectedNoun === "remedium - (cure)") {
            noun to "remedium, remedii, n";
            englishMeaning to "cure";
    }
    /*
    =====================================================
    ======= 3rd Declension Masculine and Feminine =======
    =====================================================
    */
/*
    else if  (selectedNoun === "pater - (father)") {
            noun to "pater, patris, m"; 
            englishMeaning to "father";
    }
    else if  (selectedNoun === "mater - (mother)") {
            noun to "mater, matris, f"; 
            englishMeaning to "mother";
    }
    else if  (selectedNoun === "vox - (voice)") {
            noun to "vox, vocis, f"; 
            englishMeaning to "voice";
    }
    else if  (selectedNoun === "dux - (leader)") {
            noun to "dux, ducis, m"; 
            englishMeaning to "leader";
    }
    else if  (selectedNoun === "miles - (soldier)") {
            noun to "miles, militis, m"; 
            englishMeaning to "soldier";
    }
    else if  (selectedNoun === "homo - (human)") {
            noun to "homo, hominis, m"; 
            englishMeaning to "human";
    }
    else if  (selectedNoun === "aestas - (age)") {
            noun to "aestas, aestatis, f"; 
            englishMeaning to "age";
    }
    else if  (selectedNoun === "pax - (peace)") {
            noun to "pax, pacis, f"; 
            englishMeaning to "peace";
    }
    else if  (selectedNoun === "consul - (consul)") {
            noun to "consul, consulis, m"; 
            englishMeaning to "consul";
    }
    else if  (selectedNoun === "soror - (sister)") {
            noun to "soror, sororis, f"; 
            englishMeaning to "sister";
    }
    else if  (selectedNoun === "frater - (brother)") {
            noun to "frater, fratris, m"; 
            englishMeaning to "brother">
    }
    else if  (selectedNoun === "civitas - (city)") {
            noun to "civitas, civitatis, f"; 
            englishMeaning to "city";
    }
    else if  (selectedNoun === "pars - (part)") {
            noun to "pars, partis, f"; 
            englishMeaning to "part";
    }
    else if  (selectedNoun === "lux - (light)") {
            noun to "lux, lucis, f"; 
            englishMeaning to "light";
    }
    else if  (selectedNoun === "rex - (king)") {
            noun to "rex, regis, m";
            englishMeaning to "king";
    }
    /*
    =====================================
    ======= 3rd Declension Neuter =======
    =====================================
    */
/*
    else if  (selectedNoun === "corpus - (body)") {
            noun to "corpus, corporis, n";
            englishMeaning to "body";
    }
    else if  (selectedNoun === "scelus - (crime)") {
            noun to "scelus, sceleris, n"; 
            englishMeaning to "crime";
    }
    else if  (selectedNoun === "sidus - (constellation)") {
            noun to "sidus, sideris, n"; 
            englishMeaning to "constellation";
    }
    else if  (selectedNoun === "ius - (law)") {
            noun to "ius, iuris, n"; 
            englishMeaning to "law";
    }
    else if  (selectedNoun === "limen - (threshold)") {
            noun to "limen, liminis, n"; 
            englishMeaning to "threshold";
    }
    else if  (selectedNoun === "liquamen - (fish sauce)") {
            noun to "liquamen, liquaminis, n"; 
            englishMeaning to "fish sauce";
    }
    else if  (selectedNoun === "epigramma - (epigram)") {
            noun to "epigramma, epigrammatis, n"; 
            englishMeaning to "epigram";
    }
    else if  (selectedNoun === "diploma - (diploma)") {
            noun to "diploma, diplomatis, n"; 
            englishMeaning to "diploma";
    }
    else if  (selectedNoun === "opus - (work)") {
            noun to "opus, operis, n"; 
            englishMeaning to "work";
    }
    else if  (selectedNoun === "caput - (head)") {
            noun to "caput, capitis, n"; 
            englishMeaning to "head";
    }
    else if  (selectedNoun === "carmen - (song)") {
            noun to "carmen, carminis, n"; 
            englishMeaning to "song";
    }
    else if  (selectedNoun === "flumen - (river)") {
            noun to "flumen, fluminis, n"; 
            englishMeaning to "river";
    }
    else if  (selectedNoun === "iter - (trip)") {
            noun to "iter, itineris, n"; 
            englishMeaning to "trip";
    }
    else if  (selectedNoun === "nomen - (name)") {
            noun to "nomen, nominis, n"; 
            englishMeaning to "name";
    }
    else if  (selectedNoun === "tempus - (storm)") {
            noun to "tempus, temporis, n"; 
            englishMeaning to "storm";
    }
    else if  (selectedNoun === "vulnus - (wound)") {
            noun to "vulnus, vulneris, n"; 
            englishMeaning to "wound";
    }
    /*
    =====================================================
    ======= 4th Declension Masculine and Feminine =======
    =====================================================
    */
/*
    else if  (selectedNoun === "exercitus - (army)") {
            noun to "exercitus, exercitus, m";
            englishMeaning to "army";
    }
    else if  (selectedNoun === "arcus - (bow)") {
            noun to "arcus, -us, m"; 
            englishMeaning to "bow";
    }
    else if  (selectedNoun === "cantus - (song)") {
            noun to "cantus, -us, m"; 
            englishMeaning to "song";
    }
    else if  (selectedNoun === "currus - (chariot)") {
            noun to "currus, us, m"; 
            englishMeaning to "chariot";
    }
    else if  (selectedNoun === "equitatus - (cavalry)") {
            noun to "equitatus, us, m"; 
            englishMeaning to "cavalry ";
    }
    else if  (selectedNoun === "gressus - (step)") {
            noun to "gressus, us, m"; 
            englishMeaning to "step";
    }
    else if  (selectedNoun === "fructus - (fruit)") {
            noun to "fructus, us, m"; 
            englishMeaning to "fruit";
    }
    else if  (selectedNoun === "natus - (birth)") {
            noun to "natus, us, m"; 
            englishMeaning to "birth";
    }
    else if  (selectedNoun === "potus - (drink)") {
            noun to "potus, us, m"; 
            englishMeaning to "drink";
    }
    else if  (selectedNoun === "risus - (laugh)") {
            noun to "risus, us, m"; 
            englishMeaning to "laugh";
    }
    else if  (selectedNoun === "senatus - (senate)") {
            noun to "senatus, us, m"; 
            englishMeaning to "senate";
    }
    else if  (selectedNoun === "sensus - (feeling)") {
            noun to "sensus, -us, m"; 
            englishMeaning to "feeling";
    }
    else if  (selectedNoun === "ritus - (rite)") {
            noun to "ritus, -us, m."; 
            englishMeaning to "rite";
    }
    else if  (selectedNoun === "situs - (site)") {
            noun to "situs, -us, m."; 
            englishMeaning to "site";
    }
    else if  (selectedNoun === "morsus - (bite)") {
            noun to "morsus, -us, m."; 
            englishMeaning to "bite";
    }
    /*
    =====================================
    ======= 4th Declension Neuter =======
    =====================================
    */
/*
    else if  (selectedNoun === "venu - (javelin)") {
            noun to "venu, venus, n"; 
            englishMeaning to "javelin";
    }
    else if  (selectedNoun === "cornu - (horn)") {
            noun to "cornu, -us, n."; 
            englishMeaning to "horn";
    }
    else if  (selectedNoun === "genu - (knee)") {
            noun to "genu, -us, n."; 
            englishMeaning to "knee";
    }
    else if  (selectedNoun === "gelu - (frost)") {
            noun to "gelu, -us, n"; 
            englishMeaning to "frost";
    }
    else if  (selectedNoun === "pecu - (cow)") {
            noun to "pecu, pecus, n"; 
            englishMeaning to "cow";
    }
    else if  (selectedNoun === "veru - (javelin-tip)") {
            noun to "veru, verus, n."; 
            englishMeaning to "javelin-tip";
    }
    /*
    ==============================
    ======= 5th Declension =======
    ==============================
    */
/*
    else if  (selectedNoun === "congeries - (heap)") {
            noun to "congeries, congeriei, f."; 
            englishMeaning to "heap";
    }
    else if  (selectedNoun === "caries - (corruption)") {
            noun to "caries, cariei, f."; 
            englishMeaning to "corruption";
    }
    else if  (selectedNoun === "durities - (hardship)") {
            noun to "durities, duritiei, f."; 
            englishMeaning to "hardship";
    }
    else if  (selectedNoun === "macies - (poverty)") {
            noun to "macies, maciei, f."; 
            englishMeaning to "poverty";
    }
    else if  (selectedNoun === "pernicies - (ruin)") {
            noun to "pernicies, perniciei, f."; 
            englishMeaning to "ruin";
    }
    else if  (selectedNoun === "luxuries - (luxury)") {
            noun to "luxuries, luxuriei, f."; 
            englishMeaning to "luxury";
    }
    else if  (selectedNoun === "meridies - (noon)") {
            noun to "meridies, meridiei, m."; 
            englishMeaning to "noon";
    }
    else if  (selectedNoun === "acies - (edge)") {
            noun to "acies, aciei, f";
            englishMeaning to "edge";
    }
    else if  (selectedNoun === "facies - (shape)") {
            noun to "facies, faciei, f";
            englishMeaning to "shape";
    }
    else if  (selectedNoun === "effigies - (image)") {
            noun to "effigies, effigiei, f";
            englishMeaning to "image";
    }
    else if  (selectedNoun === "glacies - (ice)") {
            noun to "glacies, glaciei, f";
            englishMeaning to "ice";
    }
    else if  (selectedNoun === "fides - (pledge)") {
            noun to "fides, fidei, f";
            englishMeaning to "pledge";
    }
    else if  (selectedNoun === "spes - (hope)") {
            noun to "spes, spei, f";
            englishMeaning to "hope";
    }
    else if  (selectedNoun === "series - (row)") {
            noun to "series, seriei, f";
            englishMeaning to "row";
    }
    else if  (selectedNoun === "species - (sight)") {
            noun to "species, speciei, f";
            englishMeaning to "sight";
    }
}

*/