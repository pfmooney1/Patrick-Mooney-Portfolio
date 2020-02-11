function conjugateTheWholeDamnVerb(id) {
    //
    // Verb Conjugation IDer
    var chosenVerb = document.getElementById(id).value;
    chosenVerb = chosenVerb.trim();
    chosenVerb = chosenVerb.toLowerCase();
    //
    // Takes verb and takes apart the principle parts of the verb
    var verbParts = chosenVerb.match(/\w+/g);
    var firstPP = verbParts[0];
    var secondPP = verbParts[1];
    var thirdPP = verbParts[2];
    var fourthPP = verbParts[3];
    //
    //This gets the present stem from the 2nd principle part
    var presBase = secondPP.slice(0, secondPP.length - 3);
    //
    //This gets the perfect stem from the 3rd principle part
    var perfBase = thirdPP.slice(0, thirdPP.length - 1);
    //
    //This sees the fourth PP ends with us, a, or um, then removes it to get the base
    var fourthPPBase;
    if (fourthPP.endsWith("us") || fourthPP.endsWith("um") === true) {
        fourthPPBase = fourthPP.slice(0, fourthPP.length - 2);
    }
    else if (fourthPP.endsWith("a") === true) {
        fourthPPBase = fourthPP.slice(0, fourthPP.length - 1);
    }
    else {
        alert("Error: the fourth principle part must end in either US, A, or UM");
    }
    //
    //This IDs the conjugation of the verb and whether it is normal or IO
    function iDVerbConjugation() { 
        var x = firstPP.slice(firstPP.length - 2, firstPP.length);
      var y = secondPP.slice(secondPP.length - 3, secondPP.length);
      if (y === "are") {
        return "first";
        }
      else if (y === "ire") {
        return "fourth";
      }
      else if (y === "ere" && x.indexOf("eo") === -1) {
          if (x.indexOf("io") === -1) {
            return "thirdNormal";
            }
          else if (x.indexOf("io") >= 0) {
            return "thirdIO";
          }
          else {
              alert("Error: It is third, but we cant ID what kind!");
          }
      }
      else if (x.indexOf("eo") !== -1) {
        return "second";
      }
      else {
          alert("ERROR!");
        return "Error! Conjugation could not be IDed";
      }
    }
    var chosenConjugation = iDVerbConjugation();
    //
    //
    // This decides if the user wants the English, then takes the English and preps it.
    var englishIncluded;
    if (document.getElementById("usersChoiceEnglish").value === "") {
        englishIncluded = false;
        }
    else {
        englishIncluded = true;
        }
    var userEnglishBefore = document.getElementById("usersChoiceEnglish").value;
    userEnglishBefore = userEnglishBefore.trim();
    trimmedUserEnglish = userEnglishBefore.replace("to ", "");
    trimmedUserEnglish = trimmedUserEnglish.trim();
    var presentEnglish = trimmedUserEnglish;
    //This statement figures out the "He/She/It verbs" form of the English
    if (presentEnglish.endsWith("ch") || presentEnglish.endsWith("o") || presentEnglish.endsWith("x") || presentEnglish.endsWith("sh") || presentEnglish.endsWith("ss") || presentEnglish.endsWith("z") === true) {
        var presentEnglishThirdSingular = presentEnglish + "es";
    }
    else if (presentEnglish.endsWith("y") === true) {
        var presentEnglishThirdSingular = presentEnglish.slice(0, presentEnglish.length - 1) + "ies";
    }
    else {
        var presentEnglishThirdSingular = presentEnglish + "s";
    }
    //This statement figures out the past tense form of the English
    if (presentEnglish.endsWith("e") === true) {
        var perfectEnglish = presentEnglish + "d";
    }
    else {
        var perfectEnglish = presentEnglish + "ed";
    }
    //This statement figures out the imperfect tense form of the English
    if (presentEnglish.endsWith("e") === true) {
        var imperfectEnglish = presentEnglish.slice(0, presentEnglish.length - 1) + "ing";
    }
    else {
        var imperfectEnglish = presentEnglish + "ing";
    }
    //This statement figures out if the English is irregular and deals with it accordingly
    if (presentEnglish.includes("give") === true) {
        var perfectEnglish = "gave";
    }
    //
    //
    // ACTIVE INDICATIVE
    //
    // This conjugates the Present Active Indicative 
    function presentActiveIndicativeWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var presActInd1stSing = presBase + "o";
                var presActInd2ndSing = presBase + "as";
                var presActInd3rdSing = presBase + "at";
                var presActInd1stPl = presBase + "amus";
                var presActInd2ndPl = presBase + "atis";
                var presActInd3rdPl = presBase + "ant";
                break;
            case "second": 
                var presActInd1stSing = presBase + "eo";
                var presActInd2ndSing = presBase + "es";
                var presActInd3rdSing = presBase + "et";
                var presActInd1stPl = presBase + "emus";
                var presActInd2ndPl = presBase + "etis";
                var presActInd3rdPl = presBase + "ent";
                break;
            case "thirdNormal": 
                var presActInd1stSing = presBase + "o";
                var presActInd2ndSing = presBase + "is";
                var presActInd3rdSing = presBase + "it";
                var presActInd1stPl = presBase + "imus";
                var presActInd2ndPl = presBase + "itis";
                var presActInd3rdPl = presBase + "unt";
                break;
            case "thirdIO": 
                var presActInd1stSing = presBase + "io";
                var presActInd2ndSing = presBase + "is";
                var presActInd3rdSing = presBase + "it";
                var presActInd1stPl = presBase + "imus";
                var presActInd2ndPl = presBase + "itis";
                var presActInd3rdPl = presBase + "iunt";
                break;                  
            case "fourth": 
                var presActInd1stSing = presBase + "io";
                var presActInd2ndSing = presBase + "is";
                var presActInd3rdSing = presBase + "it";
                var presActInd1stPl = presBase + "imus";
                var presActInd2ndPl = presBase + "itis";
                var presActInd3rdPl = presBase + "iunt";
                break;     
            default:
                var presActInd1stSing = "Error!";
                var presActInd2ndSing = "Error!";
                var presActInd3rdSing = "Error!";
                var presActInd1stPl = "Error!";
                var presActInd2ndPl = "Error!";
                var presActInd3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("presActInd_1stSing").innerHTML = presActInd1stSing + "<br>" + "I " + presentEnglish;
            document.getElementById("presActInd_2ndSing").innerHTML = presActInd2ndSing + "<br>" + "you " + presentEnglish;
            document.getElementById("presActInd_3rdSing").innerHTML = presActInd3rdSing + "<br>" + "he/she/it " + presentEnglishThirdSingular;
            document.getElementById("presActInd_1stPl").innerHTML = presActInd1stPl + "<br>" + "we " + presentEnglish;
            document.getElementById("presActInd_2ndPl").innerHTML = presActInd2ndPl + "<br>" + "y'all " + presentEnglish;
            document.getElementById("presActInd_3rdPl").innerHTML = presActInd3rdPl + "<br>" + "they " + presentEnglish;
        }
        else {
            document.getElementById("presActInd_1stSing").innerHTML = presActInd1stSing;
            document.getElementById("presActInd_2ndSing").innerHTML = presActInd2ndSing;
            document.getElementById("presActInd_3rdSing").innerHTML = presActInd3rdSing;
            document.getElementById("presActInd_1stPl").innerHTML = presActInd1stPl;
            document.getElementById("presActInd_2ndPl").innerHTML = presActInd2ndPl;
            document.getElementById("presActInd_3rdPl").innerHTML = presActInd3rdPl;
        }
    }
    presentActiveIndicativeWriter();     
    //
    // This conjugates the Imperfect Active Indicative 
    function imperfectActiveIndicativeWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var impActInd1stSing = presBase + "abam";
                var impActInd2ndSing = presBase + "abas";
                var impActInd3rdSing = presBase + "abat";
                var impActInd1stPl = presBase + "abamus";
                var impActInd2ndPl = presBase + "abatis";
                var impActInd3rdPl = presBase + "abant";
                break;
            case "second": 
                var impActInd1stSing = presBase + "ebam";
                var impActInd2ndSing = presBase + "ebas";
                var impActInd3rdSing = presBase + "ebat";
                var impActInd1stPl = presBase + "ebamus";
                var impActInd2ndPl = presBase + "ebatis";
                var impActInd3rdPl = presBase + "ebant";
                break;
            case "thirdNormal": 
                var impActInd1stSing = presBase + "ebam";
                var impActInd2ndSing = presBase + "ebas";
                var impActInd3rdSing = presBase + "ebat";
                var impActInd1stPl = presBase + "ebamus";
                var impActInd2ndPl = presBase + "ebatis";
                var impActInd3rdPl = presBase + "ebant";
                break;
            case "thirdIO": 
                var impActInd1stSing = presBase + "iebam";
                var impActInd2ndSing = presBase + "iebas";
                var impActInd3rdSing = presBase + "iebat";
                var impActInd1stPl = presBase + "iebamus";
                var impActInd2ndPl = presBase + "iebatis";
                var impActInd3rdPl = presBase + "iebant";
                break;                  
            case "fourth": 
                var impActInd1stSing = presBase + "iebam";
                var impActInd2ndSing = presBase + "iebas";
                var impActInd3rdSing = presBase + "iebat";
                var impActInd1stPl = presBase + "iebamus";
                var impActInd2ndPl = presBase + "iebatis";
                var impActInd3rdPl = presBase + "iebant";
                break;     
            default:
                var impActInd1stSing = "Error!";
                var impActInd2ndSing = "Error!";
                var impActInd3rdSing = "Error!";
                var impActInd1stPl = "Error!";
                var impActInd2ndPl = "Error!";
                var impActInd3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("impActInd_1stSing").innerHTML = impActInd1stSing + "<br> I was " + imperfectEnglish;
            document.getElementById("impActInd_2ndSing").innerHTML = impActInd2ndSing + "<br> you were " + imperfectEnglish;
            document.getElementById("impActInd_3rdSing").innerHTML = impActInd3rdSing + "<br> he/she/it was " + imperfectEnglish;
            document.getElementById("impActInd_1stPl").innerHTML = impActInd1stPl + "<br> we were " + imperfectEnglish;
            document.getElementById("impActInd_2ndPl").innerHTML = impActInd2ndPl + "<br> y'all were " + imperfectEnglish;
            document.getElementById("impActInd_3rdPl").innerHTML = impActInd3rdPl + "<br> they were " + imperfectEnglish;
        }
        else {
            document.getElementById("impActInd_1stSing").innerHTML = impActInd1stSing;
            document.getElementById("impActInd_2ndSing").innerHTML = impActInd2ndSing;
            document.getElementById("impActInd_3rdSing").innerHTML = impActInd3rdSing;
            document.getElementById("impActInd_1stPl").innerHTML = impActInd1stPl;
            document.getElementById("impActInd_2ndPl").innerHTML = impActInd2ndPl;
            document.getElementById("impActInd_3rdPl").innerHTML = impActInd3rdPl;
        }
    }
    imperfectActiveIndicativeWriter(); 
    //
    // This conjugates the Future Active Indicative
    function futureActiveIndicativeWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var futActInd1stSing = presBase + "abo";
                var futActInd2ndSing = presBase + "abis";
                var futActInd3rdSing = presBase + "abit";
                var futActInd1stPl = presBase + "abimus";
                var futActInd2ndPl = presBase + "abitis";
                var futActInd3rdPl = presBase + "abunt";
                break;
            case "second": 
                var futActInd1stSing = presBase + "ebo";
                var futActInd2ndSing = presBase + "ebis";
                var futActInd3rdSing = presBase + "ebit";
                var futActInd1stPl = presBase + "ebimus";
                var futActInd2ndPl = presBase + "ebitis";
                var futActInd3rdPl = presBase + "ebunt";
                break;
            case "thirdNormal": 
                var futActInd1stSing = presBase + "am";
                var futActInd2ndSing = presBase + "es";
                var futActInd3rdSing = presBase + "et";
                var futActInd1stPl = presBase + "emus";
                var futActInd2ndPl = presBase + "etis";
                var futActInd3rdPl = presBase + "ent";
                break;
            case "thirdIO": 
                var futActInd1stSing = presBase + "iam";
                var futActInd2ndSing = presBase + "ies";
                var futActInd3rdSing = presBase + "iet";
                var futActInd1stPl = presBase + "iemus";
                var futActInd2ndPl = presBase + "ietis";
                var futActInd3rdPl = presBase + "ient";
                break;                  
            case "fourth": 
                var futActInd1stSing = presBase + "iam";
                var futActInd2ndSing = presBase + "ies";
                var futActInd3rdSing = presBase + "iet";
                var futActInd1stPl = presBase + "iemus";
                var futActInd2ndPl = presBase + "ietis";
                var futActInd3rdPl = presBase + "ient";
                break;     
            default:
                var futActInd1stSing = "Error!";
                var futActInd2ndSing = "Error!";
                var futActInd3rdSing = "Error!";
                var futActInd1stPl = "Error!";
                var futActInd2ndPl = "Error!";
                var futActInd3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("futActInd_1stSing").innerHTML = futActInd1stSing + "<br>" + "I will " + presentEnglish;
            document.getElementById("futActInd_2ndSing").innerHTML = futActInd2ndSing + "<br>" + "you will " + presentEnglish;
            document.getElementById("futActInd_3rdSing").innerHTML = futActInd3rdSing + "<br>" + "he/she/it will " + presentEnglish;
            document.getElementById("futActInd_1stPl").innerHTML = futActInd1stPl + "<br>" + "we will " + presentEnglish;
            document.getElementById("futActInd_2ndPl").innerHTML = futActInd2ndPl + "<br>" + "y'all will " + presentEnglish;
            document.getElementById("futActInd_3rdPl").innerHTML = futActInd3rdPl + "<br>" + "they will " + presentEnglish;
        }
        else {
            document.getElementById("futActInd_1stSing").innerHTML = futActInd1stSing;
            document.getElementById("futActInd_2ndSing").innerHTML = futActInd2ndSing;
            document.getElementById("futActInd_3rdSing").innerHTML = futActInd3rdSing;
            document.getElementById("futActInd_1stPl").innerHTML = futActInd1stPl;
            document.getElementById("futActInd_2ndPl").innerHTML = futActInd2ndPl;
            document.getElementById("futActInd_3rdPl").innerHTML = futActInd3rdPl;   
        }
    }
    futureActiveIndicativeWriter();
    //
    // This conjugates the Perfect Active Indicative
    function perfectActiveIndicativeWriter() {
        var perfActInd1stSing = perfBase + "i";
        var perfActInd2ndSing = perfBase + "isti";
        var perfActInd3rdSing = perfBase + "it";
        var perfActInd1stPl = perfBase + "imus";
        var perfActInd2ndPl = perfBase + "istis";
        var perfActInd3rdPl = perfBase + "erunt";
        if (englishIncluded === true) {
            document.getElementById("perfActInd_1stSing").innerHTML = perfActInd1stSing + "<br>" + "I " + perfectEnglish;
            document.getElementById("perfActInd_2ndSing").innerHTML = perfActInd2ndSing + "<br>" + "you " + perfectEnglish;
            document.getElementById("perfActInd_3rdSing").innerHTML = perfActInd3rdSing + "<br>" + "he/she/it " + perfectEnglish;
            document.getElementById("perfActInd_1stPl").innerHTML = perfActInd1stPl + "<br>" + "we " + perfectEnglish;
            document.getElementById("perfActInd_2ndPl").innerHTML = perfActInd2ndPl + "<br>" + "y'all " + perfectEnglish;
            document.getElementById("perfActInd_3rdPl").innerHTML = perfActInd3rdPl + "<br>" + "they " + perfectEnglish;
        }
        else {
            document.getElementById("perfActInd_1stSing").innerHTML = perfActInd1stSing;
            document.getElementById("perfActInd_2ndSing").innerHTML = perfActInd2ndSing;
            document.getElementById("perfActInd_3rdSing").innerHTML = perfActInd3rdSing;
            document.getElementById("perfActInd_1stPl").innerHTML = perfActInd1stPl;
            document.getElementById("perfActInd_2ndPl").innerHTML = perfActInd2ndPl;
            document.getElementById("perfActInd_3rdPl").innerHTML = perfActInd3rdPl;
        }
    }
    perfectActiveIndicativeWriter();
    //
    // This conjugates the Pluperfect Active Indicative
    function pluperfectActiveIndicativeWriter() {
        var pluperfActInd1stSing = perfBase + "eram";
        var pluperfActInd2ndSing = perfBase + "eras";
        var pluperfActInd3rdSing = perfBase + "erat";
        var pluperfActInd1stPl = perfBase + "eramus";
        var pluperfActInd2ndPl = perfBase + "eratis";
        var pluperfActInd3rdPl = perfBase + "erant"; 
        if (englishIncluded === true) {
            document.getElementById("pluperfActInd_1stSing").innerHTML = pluperfActInd1stSing + "<br>" + "I had " + perfectEnglish;
            document.getElementById("pluperfActInd_2ndSing").innerHTML = pluperfActInd2ndSing + "<br>" + "you had " + perfectEnglish;
            document.getElementById("pluperfActInd_3rdSing").innerHTML = pluperfActInd3rdSing + "<br>" + "he/she/it had " + perfectEnglish;
            document.getElementById("pluperfActInd_1stPl").innerHTML = pluperfActInd1stPl + "<br>" + "we had " + perfectEnglish;
            document.getElementById("pluperfActInd_2ndPl").innerHTML = pluperfActInd2ndPl + "<br>" + "y'all had " + perfectEnglish;
            document.getElementById("pluperfActInd_3rdPl").innerHTML = pluperfActInd3rdPl + "<br>" + "they had " + perfectEnglish;
        }
        else {
            document.getElementById("pluperfActInd_1stSing").innerHTML = pluperfActInd1stSing;
            document.getElementById("pluperfActInd_2ndSing").innerHTML = pluperfActInd2ndSing;
            document.getElementById("pluperfActInd_3rdSing").innerHTML = pluperfActInd3rdSing;
            document.getElementById("pluperfActInd_1stPl").innerHTML = pluperfActInd1stPl;
            document.getElementById("pluperfActInd_2ndPl").innerHTML = pluperfActInd2ndPl;
            document.getElementById("pluperfActInd_3rdPl").innerHTML = pluperfActInd3rdPl;
        }
    }
    pluperfectActiveIndicativeWriter();
    //
    // This conjugates the Future Perfect Active Indicative
    function futurePerfectActiveIndicativeWriter() {
        var futPerfActInd1stSing = perfBase + "ero";
        var futPerfActInd2ndSing = perfBase + "eris";
        var futPerfActInd3rdSing = perfBase + "erit";
        var futPerfActInd1stPl = perfBase + "erimus";
        var futPerfActInd2ndPl = perfBase + "eritis";
        var futPerfActInd3rdPl = perfBase + "erint";
        if (englishIncluded === true) {
            document.getElementById("futPerfActInd_1stSing").innerHTML = futPerfActInd1stSing + "<br>" + "I will have " + perfectEnglish;
            document.getElementById("futPerfActInd_2ndSing").innerHTML = futPerfActInd2ndSing + "<br>" + "you will have " + perfectEnglish;
            document.getElementById("futPerfActInd_3rdSing").innerHTML = futPerfActInd3rdSing + "<br>" + "he/she/it will have " + perfectEnglish;
            document.getElementById("futPerfActInd_1stPl").innerHTML = futPerfActInd1stPl + "<br>" + "we will have " + perfectEnglish;
            document.getElementById("futPerfActInd_2ndPl").innerHTML = futPerfActInd2ndPl + "<br>" + "y'all will have " + perfectEnglish;
            document.getElementById("futPerfActInd_3rdPl").innerHTML = futPerfActInd3rdPl + "<br>" + "they will have " + perfectEnglish;
        }
        else {
            document.getElementById("futPerfActInd_1stSing").innerHTML = futPerfActInd1stSing;
            document.getElementById("futPerfActInd_2ndSing").innerHTML = futPerfActInd2ndSing;
            document.getElementById("futPerfActInd_3rdSing").innerHTML = futPerfActInd3rdSing;
            document.getElementById("futPerfActInd_1stPl").innerHTML = futPerfActInd1stPl;
            document.getElementById("futPerfActInd_2ndPl").innerHTML = futPerfActInd2ndPl;
            document.getElementById("futPerfActInd_3rdPl").innerHTML = futPerfActInd3rdPl;
        }
    }
    futurePerfectActiveIndicativeWriter();
    //
    //
    //
    //
    //PASSIVE INDICATIVE
    //
    //
    //
    // This conjugates the Present Passive Indicative 
    function presentPassiveIndicativeWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var presPassInd1stSing = presBase + "or";
                var presPassInd2ndSing = presBase + "aris";
                var presPassInd3rdSing = presBase + "atur";
                var presPassInd1stPl = presBase + "amur";
                var presPassInd2ndPl = presBase + "amini";
                var presPassInd3rdPl = presBase + "antur";
                break;
            case "second": 
                var presPassInd1stSing = presBase + "eor";
                var presPassInd2ndSing = presBase + "eris";
                var presPassInd3rdSing = presBase + "etur";
                var presPassInd1stPl = presBase + "emur";
                var presPassInd2ndPl = presBase + "emini";
                var presPassInd3rdPl = presBase + "entur";
                break;
            case "thirdNormal": 
                var presPassInd1stSing = presBase + "or";
                var presPassInd2ndSing = presBase + "eris";
                var presPassInd3rdSing = presBase + "itur";
                var presPassInd1stPl = presBase + "imur";
                var presPassInd2ndPl = presBase + "imini";
                var presPassInd3rdPl = presBase + "untur";
                break;
            case "thirdIO": 
                var presPassInd1stSing = presBase + "ior";
                var presPassInd2ndSing = presBase + "eris";
                var presPassInd3rdSing = presBase + "itur";
                var presPassInd1stPl = presBase + "imur";
                var presPassInd2ndPl = presBase + "imini";
                var presPassInd3rdPl = presBase + "iuntur";
                break;                  
            case "fourth": 
                var presPassInd1stSing = presBase + "ior";
                var presPassInd2ndSing = presBase + "iris";
                var presPassInd3rdSing = presBase + "itur";
                var presPassInd1stPl = presBase + "imur";
                var presPassInd2ndPl = presBase + "imini";
                var presPassInd3rdPl = presBase + "iuntur";
                break;     
            default:
                var presPassInd1stSing = "Error!";
                var presPassInd2ndSing = "Error!";
                var presPassInd3rdSing = "Error!";
                var presPassInd1stPl = "Error!";
                var presPassInd2ndPl = "Error!";
                var presPassInd3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("presPassInd_1stSing").innerHTML = presPassInd1stSing + "<br>" + "I am " + perfectEnglish;
            document.getElementById("presPassInd_2ndSing").innerHTML = presPassInd2ndSing + "<br>" + "you are " + perfectEnglish;
            document.getElementById("presPassInd_3rdSing").innerHTML = presPassInd3rdSing + "<br>" + "he/she/it is " + perfectEnglish;
            document.getElementById("presPassInd_1stPl").innerHTML = presPassInd1stPl + "<br>" + "we are " + perfectEnglish;
            document.getElementById("presPassInd_2ndPl").innerHTML = presPassInd2ndPl + "<br>" + "y'all are " + perfectEnglish;
            document.getElementById("presPassInd_3rdPl").innerHTML = presPassInd3rdPl + "<br>" + "they are " + perfectEnglish;
        }
        else {
            document.getElementById("presPassInd_1stSing").innerHTML = presPassInd1stSing;
            document.getElementById("presPassInd_2ndSing").innerHTML = presPassInd2ndSing;
            document.getElementById("presPassInd_3rdSing").innerHTML = presPassInd3rdSing;
            document.getElementById("presPassInd_1stPl").innerHTML = presPassInd1stPl;
            document.getElementById("presPassInd_2ndPl").innerHTML = presPassInd2ndPl;
            document.getElementById("presPassInd_3rdPl").innerHTML = presPassInd3rdPl;
        }
    }
    presentPassiveIndicativeWriter();     
    //
    // This conjugates the Imperfect Passive Indicative 
    function imperfectPassiveIndicativeWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var impPassInd1stSing = presBase + "abar";
                var impPassInd2ndSing = presBase + "abaris";
                var impPassInd3rdSing = presBase + "abatur";
                var impPassInd1stPl = presBase + "abamur";
                var impPassInd2ndPl = presBase + "abamini";
                var impPassInd3rdPl = presBase + "abantur";
                break;
            case "second": 
                var impPassInd1stSing = presBase + "ebar";
                var impPassInd2ndSing = presBase + "ebaris";
                var impPassInd3rdSing = presBase + "ebatur";
                var impPassInd1stPl = presBase + "ebamur";
                var impPassInd2ndPl = presBase + "ebamini";
                var impPassInd3rdPl = presBase + "ebantur";
                break;
            case "thirdNormal": 
                var impPassInd1stSing = presBase + "ebar";
                var impPassInd2ndSing = presBase + "ebaris";
                var impPassInd3rdSing = presBase + "ebatur";
                var impPassInd1stPl = presBase + "ebamur";
                var impPassInd2ndPl = presBase + "ebamini";
                var impPassInd3rdPl = presBase + "ebantur";
                break;
            case "thirdIO": 
                var impPassInd1stSing = presBase + "iebar";
                var impPassInd2ndSing = presBase + "iebaris";
                var impPassInd3rdSing = presBase + "iebatur";
                var impPassInd1stPl = presBase + "iebamur";
                var impPassInd2ndPl = presBase + "iebamini";
                var impPassInd3rdPl = presBase + "iebantur";
                break;                  
            case "fourth": 
                var impPassInd1stSing = presBase + "iebar";
                var impPassInd2ndSing = presBase + "iebaris";
                var impPassInd3rdSing = presBase + "iebatur";
                var impPassInd1stPl = presBase + "iebamur";
                var impPassInd2ndPl = presBase + "iebamini";
                var impPassInd3rdPl = presBase + "iebantur";
                break;     
            default:
                var impPassInd1stSing = "Error!";
                var impPassInd2ndSing = "Error!";
                var impPassInd3rdSing = "Error!";
                var impPassInd1stPl = "Error!";
                var impPassInd2ndPl = "Error!";
                var impPassInd3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("impPassInd_1stSing").innerHTML = impPassInd1stSing + "<br>" + "I was being " + perfectEnglish;
            document.getElementById("impPassInd_2ndSing").innerHTML = impPassInd2ndSing + "<br>" + "you were being " + perfectEnglish;
            document.getElementById("impPassInd_3rdSing").innerHTML = impPassInd3rdSing + "<br>" + "he/she/it was being " + perfectEnglish;
            document.getElementById("impPassInd_1stPl").innerHTML = impPassInd1stPl + "<br>" + "we were being " + perfectEnglish;
            document.getElementById("impPassInd_2ndPl").innerHTML = impPassInd2ndPl + "<br>" + "y'all were being " + perfectEnglish;
            document.getElementById("impPassInd_3rdPl").innerHTML = impPassInd3rdPl + "<br>" + "they were being " + perfectEnglish;
        }
        else {
            document.getElementById("impPassInd_1stSing").innerHTML = impPassInd1stSing;
            document.getElementById("impPassInd_2ndSing").innerHTML = impPassInd2ndSing;
            document.getElementById("impPassInd_3rdSing").innerHTML = impPassInd3rdSing;
            document.getElementById("impPassInd_1stPl").innerHTML = impPassInd1stPl;
            document.getElementById("impPassInd_2ndPl").innerHTML = impPassInd2ndPl;
            document.getElementById("impPassInd_3rdPl").innerHTML = impPassInd3rdPl;
        }
    }
    imperfectPassiveIndicativeWriter(); 
    //
    // This conjugates the Future Passive Indicative
    function futurePassiveIndicativeWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var futPassInd1stSing = presBase + "abor";
                var futPassInd2ndSing = presBase + "aberis";
                var futPassInd3rdSing = presBase + "abitur";
                var futPassInd1stPl = presBase + "abimur";
                var futPassInd2ndPl = presBase + "abimini";
                var futPassInd3rdPl = presBase + "abuntur";
                break;
            case "second": 
                var futPassInd1stSing = presBase + "ebor";
                var futPassInd2ndSing = presBase + "eberis";
                var futPassInd3rdSing = presBase + "ebitur";
                var futPassInd1stPl = presBase + "ebimur";
                var futPassInd2ndPl = presBase + "ebimini";
                var futPassInd3rdPl = presBase + "ebuntur";
                break;
            case "thirdNormal": 
                var futPassInd1stSing = presBase + "ar";
                var futPassInd2ndSing = presBase + "eris";
                var futPassInd3rdSing = presBase + "etur";
                var futPassInd1stPl = presBase + "emur";
                var futPassInd2ndPl = presBase + "emini";
                var futPassInd3rdPl = presBase + "entur";
                break;
            case "thirdIO": 
                var futPassInd1stSing = presBase + "iar";
                var futPassInd2ndSing = presBase + "ieris";
                var futPassInd3rdSing = presBase + "ietur";
                var futPassInd1stPl = presBase + "iemur";
                var futPassInd2ndPl = presBase + "iemini";
                var futPassInd3rdPl = presBase + "ientur";
                break;                  
            case "fourth": 
                var futPassInd1stSing = presBase + "iar";
                var futPassInd2ndSing = presBase + "ieris";
                var futPassInd3rdSing = presBase + "ietur";
                var futPassInd1stPl = presBase + "iemur";
                var futPassInd2ndPl = presBase + "iemini";
                var futPassInd3rdPl = presBase + "ientur";
                break;     
            default:
                var futPassInd1stSing = "Error!";
                var futPassInd2ndSing = "Error!";
                var futPassInd3rdSing = "Error!";
                var futPassInd1stPl = "Error!";
                var futPassInd2ndPl = "Error!";
                var futPassInd3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("futPassInd_1stSing").innerHTML = futPassInd1stSing + "<br>" + "I will be " + perfectEnglish;
            document.getElementById("futPassInd_2ndSing").innerHTML = futPassInd2ndSing + "<br>" + "you will be " + perfectEnglish;
            document.getElementById("futPassInd_3rdSing").innerHTML = futPassInd3rdSing + "<br>" + "he/she/it will be " + perfectEnglish;
            document.getElementById("futPassInd_1stPl").innerHTML = futPassInd1stPl + "<br>" + "we will be " + perfectEnglish;
            document.getElementById("futPassInd_2ndPl").innerHTML = futPassInd2ndPl + "<br>" + "y'all will be " + perfectEnglish;
            document.getElementById("futPassInd_3rdPl").innerHTML = futPassInd3rdPl + "<br>" + "they will be " + perfectEnglish;
        }
        else {
            document.getElementById("futPassInd_1stSing").innerHTML = futPassInd1stSing;
            document.getElementById("futPassInd_2ndSing").innerHTML = futPassInd2ndSing;
            document.getElementById("futPassInd_3rdSing").innerHTML = futPassInd3rdSing;
            document.getElementById("futPassInd_1stPl").innerHTML = futPassInd1stPl;
            document.getElementById("futPassInd_2ndPl").innerHTML = futPassInd2ndPl;
            document.getElementById("futPassInd_3rdPl").innerHTML = futPassInd3rdPl;
        }
    }
    futurePassiveIndicativeWriter();
    //
    // This conjugates the Perfect Passive Indicative
    function perfectPassiveIndicativeWriter() {
        var perfPassInd1stSing = fourthPPBase + "us/a/um" + " sum";
        var perfPassInd2ndSing = fourthPPBase + "us/a/um" + " es";
        var perfPassInd3rdSing = fourthPPBase + "us/a/um" + " est";
        var perfPassInd1stPl = fourthPPBase + "i/ae/a" + " sumus";
        var perfPassInd2ndPl = fourthPPBase + "i/ae/a" + " estis";
        var perfPassInd3rdPl = fourthPPBase + "i/ae/a" + " sunt";
        if (englishIncluded === true) {
            document.getElementById("perfPassInd_1stSing").innerHTML = perfPassInd1stSing + "<br>" + "I was " + perfectEnglish;
            document.getElementById("perfPassInd_2ndSing").innerHTML = perfPassInd2ndSing + "<br>" + "you were " + perfectEnglish;
            document.getElementById("perfPassInd_3rdSing").innerHTML = perfPassInd3rdSing + "<br>" + "he/she/it was " + perfectEnglish;
            document.getElementById("perfPassInd_1stPl").innerHTML = perfPassInd1stPl + "<br>" + "we were " + perfectEnglish;
            document.getElementById("perfPassInd_2ndPl").innerHTML = perfPassInd2ndPl + "<br>" + "y'all were " + perfectEnglish;
            document.getElementById("perfPassInd_3rdPl").innerHTML = perfPassInd3rdPl + "<br>" + "they were " + perfectEnglish;
        }
        else {
            document.getElementById("perfPassInd_1stSing").innerHTML = perfPassInd1stSing;
            document.getElementById("perfPassInd_2ndSing").innerHTML = perfPassInd2ndSing;
            document.getElementById("perfPassInd_3rdSing").innerHTML = perfPassInd3rdSing;
            document.getElementById("perfPassInd_1stPl").innerHTML = perfPassInd1stPl;
            document.getElementById("perfPassInd_2ndPl").innerHTML = perfPassInd2ndPl;
            document.getElementById("perfPassInd_3rdPl").innerHTML = perfPassInd3rdPl;
        }
    }
    perfectPassiveIndicativeWriter();
    //
    // This conjugates the Pluperfect Passive Indicative
    function pluperfectPassiveIndicativeWriter() {
        var pluperfPassInd1stSing = fourthPPBase + "us/a/um" + " eram";
        var pluperfPassInd2ndSing = fourthPPBase + "us/a/um" + " eras";
        var pluperfPassInd3rdSing = fourthPPBase + "us/a/um" + " erat";
        var pluperfPassInd1stPl = fourthPPBase + "i/ae/a" + " eramus";
        var pluperfPassInd2ndPl = fourthPPBase + "i/ae/a" + " eratis";
        var pluperfPassInd3rdPl = fourthPPBase + "i/ae/a" + " erant"; 
        if (englishIncluded === true) {
            document.getElementById("pluperfPassInd_1stSing").innerHTML = pluperfPassInd1stSing + "<br>" + "I had been " + perfectEnglish;
            document.getElementById("pluperfPassInd_2ndSing").innerHTML = pluperfPassInd2ndSing + "<br>" + "you had been " + perfectEnglish;
            document.getElementById("pluperfPassInd_3rdSing").innerHTML = pluperfPassInd3rdSing + "<br>" + "he/she/it had been " + perfectEnglish;
            document.getElementById("pluperfPassInd_1stPl").innerHTML = pluperfPassInd1stPl + "<br>" + "we had been " + perfectEnglish;
            document.getElementById("pluperfPassInd_2ndPl").innerHTML = pluperfPassInd2ndPl + "<br>" + "y'all had been " + perfectEnglish;
            document.getElementById("pluperfPassInd_3rdPl").innerHTML = pluperfPassInd3rdPl + "<br>" + "they had been " + perfectEnglish;
        }
        else {
            document.getElementById("pluperfPassInd_1stSing").innerHTML = pluperfPassInd1stSing;
            document.getElementById("pluperfPassInd_2ndSing").innerHTML = pluperfPassInd2ndSing;
            document.getElementById("pluperfPassInd_3rdSing").innerHTML = pluperfPassInd3rdSing;
            document.getElementById("pluperfPassInd_1stPl").innerHTML = pluperfPassInd1stPl;
            document.getElementById("pluperfPassInd_2ndPl").innerHTML = pluperfPassInd2ndPl;
            document.getElementById("pluperfPassInd_3rdPl").innerHTML = pluperfPassInd3rdPl;
        }
    }
    pluperfectPassiveIndicativeWriter();
    //
    // This conjugates the Future Perfect Passive Indicative
    function futurePerfectPassiveIndicativeWriter() {
        var futPerfPassInd1stSing = fourthPPBase + "us/a/um" + " ero";
        var futPerfPassInd2ndSing = fourthPPBase + "us/a/um" + " eris";
        var futPerfPassInd3rdSing = fourthPPBase + "us/a/um" + " erit";
        var futPerfPassInd1stPl = fourthPPBase + "i/ae/a" + " erimus";
        var futPerfPassInd2ndPl = fourthPPBase + "i/ae/a" + " eritis";
        var futPerfPassInd3rdPl = fourthPPBase + "i/ae/a" + " erunt";
        if (englishIncluded === true) {
            document.getElementById("futPerfPassInd_1stSing").innerHTML = futPerfPassInd1stSing + "<br>" + "I will have been " + perfectEnglish;
            document.getElementById("futPerfPassInd_2ndSing").innerHTML = futPerfPassInd2ndSing + "<br>" + "you will have been " + perfectEnglish;
            document.getElementById("futPerfPassInd_3rdSing").innerHTML = futPerfPassInd3rdSing + "<br>" + "he/she/it will have been " + perfectEnglish;
            document.getElementById("futPerfPassInd_1stPl").innerHTML = futPerfPassInd1stPl + "<br>" + "we will have been " + perfectEnglish;
            document.getElementById("futPerfPassInd_2ndPl").innerHTML = futPerfPassInd2ndPl + "<br>" + "y'all will have been " + perfectEnglish;
            document.getElementById("futPerfPassInd_3rdPl").innerHTML = futPerfPassInd3rdPl + "<br>" + "they will have been " + perfectEnglish;
        }
        else {
        document.getElementById("futPerfPassInd_1stSing").innerHTML = futPerfPassInd1stSing;
        document.getElementById("futPerfPassInd_2ndSing").innerHTML = futPerfPassInd2ndSing;
        document.getElementById("futPerfPassInd_3rdSing").innerHTML = futPerfPassInd3rdSing;
        document.getElementById("futPerfPassInd_1stPl").innerHTML = futPerfPassInd1stPl;
        document.getElementById("futPerfPassInd_2ndPl").innerHTML = futPerfPassInd2ndPl;
        document.getElementById("futPerfPassInd_3rdPl").innerHTML = futPerfPassInd3rdPl;
        }
    }
    futurePerfectPassiveIndicativeWriter(); 
    //
    //
    //
    //
    // ACTIVE SUBJUNCTIVE
    //
    // This conjugates the Present Active Subjunctive 
    function presentActiveSubjunctiveWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var presActSubj1stSing = presBase + "em";
                var presActSubj2ndSing = presBase + "es";
                var presActSubj3rdSing = presBase + "et";
                var presActSubj1stPl = presBase + "emus";
                var presActSubj2ndPl = presBase + "etis";
                var presActSubj3rdPl = presBase + "ent";
                break;
            case "second": 
                var presActSubj1stSing = presBase + "eam";
                var presActSubj2ndSing = presBase + "eas";
                var presActSubj3rdSing = presBase + "eat";
                var presActSubj1stPl = presBase + "eamus";
                var presActSubj2ndPl = presBase + "eatis";
                var presActSubj3rdPl = presBase + "eant";
                break;
            case "thirdNormal": 
                var presActSubj1stSing = presBase + "am";
                var presActSubj2ndSing = presBase + "as";
                var presActSubj3rdSing = presBase + "at";
                var presActSubj1stPl = presBase + "amus";
                var presActSubj2ndPl = presBase + "atis";
                var presActSubj3rdPl = presBase + "ant";
                break;
            case "thirdIO": 
                var presActSubj1stSing = presBase + "iam";
                var presActSubj2ndSing = presBase + "ias";
                var presActSubj3rdSing = presBase + "iat";
                var presActSubj1stPl = presBase + "iamus";
                var presActSubj2ndPl = presBase + "iatis";
                var presActSubj3rdPl = presBase + "iant";
                break;                  
            case "fourth": 
                var presActSubj1stSing = presBase + "iam";
                var presActSubj2ndSing = presBase + "ias";
                var presActSubj3rdSing = presBase + "iat";
                var presActSubj1stPl = presBase + "iamus";
                var presActSubj2ndPl = presBase + "iatis";
                var presActSubj3rdPl = presBase + "iant";
                break;     
            default:
                var presActSubj1stSing = "Error!";
                var presActSubj2ndSing = "Error!";
                var presActSubj3rdSing = "Error!";
                var presActSubj1stPl = "Error!";
                var presActSubj2ndPl = "Error!";
                var presActSubj3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("presActSubj_1stSing").innerHTML = presActSubj1stSing + "<br>" + "I may " + presentEnglish;
            document.getElementById("presActSubj_2ndSing").innerHTML = presActSubj2ndSing + "<br>" + "you may " + presentEnglish;
            document.getElementById("presActSubj_3rdSing").innerHTML = presActSubj3rdSing + "<br>" + "he/she/it may " + presentEnglish;
            document.getElementById("presActSubj_1stPl").innerHTML = presActSubj1stPl + "<br>" + "we may " + presentEnglish;
            document.getElementById("presActSubj_2ndPl").innerHTML = presActSubj2ndPl + "<br>" + "y'all may " + presentEnglish;
            document.getElementById("presActSubj_3rdPl").innerHTML = presActSubj3rdPl + "<br>" + "they may " + presentEnglish;
        }
        else {
            document.getElementById("presActSubj_1stSing").innerHTML = presActSubj1stSing;
            document.getElementById("presActSubj_2ndSing").innerHTML = presActSubj2ndSing;
            document.getElementById("presActSubj_3rdSing").innerHTML = presActSubj3rdSing;
            document.getElementById("presActSubj_1stPl").innerHTML = presActSubj1stPl;
            document.getElementById("presActSubj_2ndPl").innerHTML = presActSubj2ndPl;
            document.getElementById("presActSubj_3rdPl").innerHTML = presActSubj3rdPl;
        }
    }
    presentActiveSubjunctiveWriter();     
    //
    // This conjugates the Imperfect Active Subjunctive 
    function imperfectActiveSubjunctiveWriter() {
        //This figures out what endings to add.
        if (englishIncluded === true) {
            document.getElementById("impActSubj_1stSing").innerHTML = secondPP + "m" + "<br>" + "I might " + presentEnglish;
            document.getElementById("impActSubj_2ndSing").innerHTML = secondPP + "s" + "<br>" + "you might " + presentEnglish;
            document.getElementById("impActSubj_3rdSing").innerHTML = secondPP + "t" + "<br>" + "he/she/it might " + presentEnglish;
            document.getElementById("impActSubj_1stPl").innerHTML = secondPP + "mus" + "<br>" + "we might " + presentEnglish;
            document.getElementById("impActSubj_2ndPl").innerHTML = secondPP + "tis" + "<br>" + "y'all might " + presentEnglish;
            document.getElementById("impActSubj_3rdPl").innerHTML = secondPP + "nt" + "<br>" + "they might " + presentEnglish;
        }
        else {
            document.getElementById("impActSubj_1stSing").innerHTML = secondPP + "m";
            document.getElementById("impActSubj_2ndSing").innerHTML = secondPP + "s";
            document.getElementById("impActSubj_3rdSing").innerHTML = secondPP + "t";
            document.getElementById("impActSubj_1stPl").innerHTML = secondPP + "mus";
            document.getElementById("impActSubj_2ndPl").innerHTML = secondPP + "tis";
            document.getElementById("impActSubj_3rdPl").innerHTML = secondPP + "nt";
        }
    }
    imperfectActiveSubjunctiveWriter(); 
    //
    // This conjugates the Perfect Active Subjunctive
    function perfectActiveSubjunctiveWriter() {
        var perfActSubj1stSing = perfBase + "erim";
        var perfActSubj2ndSing = perfBase + "eris";
        var perfActSubj3rdSing = perfBase + "erit";
        var perfActSubj1stPl = perfBase + "erimus";
        var perfActSubj2ndPl = perfBase + "eritis";
        var perfActSubj3rdPl = perfBase + "erint";
        if (englishIncluded === true) {
            document.getElementById("perfActSubj_1stSing").innerHTML = perfActSubj1stSing + "<br>" + "I may have " + perfectEnglish;
            document.getElementById("perfActSubj_2ndSing").innerHTML = perfActSubj2ndSing + "<br>" + "you may have " + perfectEnglish;
            document.getElementById("perfActSubj_3rdSing").innerHTML = perfActSubj3rdSing + "<br>" + "he/she/it may have " + perfectEnglish;
            document.getElementById("perfActSubj_1stPl").innerHTML = perfActSubj1stPl + "<br>" + "we may have " + perfectEnglish;
            document.getElementById("perfActSubj_2ndPl").innerHTML = perfActSubj2ndPl + "<br>" + "y'all may have " + perfectEnglish;
            document.getElementById("perfActSubj_3rdPl").innerHTML = perfActSubj3rdPl + "<br>" + "they may have " + perfectEnglish;
        }
        else {
            document.getElementById("perfActSubj_1stSing").innerHTML = perfActSubj1stSing;
            document.getElementById("perfActSubj_2ndSing").innerHTML = perfActSubj2ndSing;
            document.getElementById("perfActSubj_3rdSing").innerHTML = perfActSubj3rdSing;
            document.getElementById("perfActSubj_1stPl").innerHTML = perfActSubj1stPl;
            document.getElementById("perfActSubj_2ndPl").innerHTML = perfActSubj2ndPl;
            document.getElementById("perfActSubj_3rdPl").innerHTML = perfActSubj3rdPl;
        }
    }
    perfectActiveSubjunctiveWriter();
    //
    // This conjugates the Pluperfect Active Subjunctive
    function pluperfectActiveSubjunctiveWriter() {
        var pluperfActSubj1stSing = perfBase + "issem";
        var pluperfActSubj2ndSing = perfBase + "isses";
        var pluperfActSubj3rdSing = perfBase + "isset";
        var pluperfActSubj1stPl = perfBase + "issemus";
        var pluperfActSubj2ndPl = perfBase + "issetis";
        var pluperfActSubj3rdPl = perfBase + "issent"; 
        if (englishIncluded === true) {
            document.getElementById("pluperfActSubj_1stSing").innerHTML = pluperfActSubj1stSing + "<br>" + "I might have " + perfectEnglish;
            document.getElementById("pluperfActSubj_2ndSing").innerHTML = pluperfActSubj2ndSing + "<br>" + "you might have " + perfectEnglish;
            document.getElementById("pluperfActSubj_3rdSing").innerHTML = pluperfActSubj3rdSing + "<br>" + "he/she/it might have " + perfectEnglish;
            document.getElementById("pluperfActSubj_1stPl").innerHTML = pluperfActSubj1stPl + "<br>" + "we might have " + perfectEnglish;
            document.getElementById("pluperfActSubj_2ndPl").innerHTML = pluperfActSubj2ndPl + "<br>" + "y'all might have " + perfectEnglish;
            document.getElementById("pluperfActSubj_3rdPl").innerHTML = pluperfActSubj3rdPl + "<br>" + "they might have " + perfectEnglish;
        }
        else {
            document.getElementById("pluperfActSubj_1stSing").innerHTML = pluperfActSubj1stSing;
            document.getElementById("pluperfActSubj_2ndSing").innerHTML = pluperfActSubj2ndSing;
            document.getElementById("pluperfActSubj_3rdSing").innerHTML = pluperfActSubj3rdSing;
            document.getElementById("pluperfActSubj_1stPl").innerHTML = pluperfActSubj1stPl;
            document.getElementById("pluperfActSubj_2ndPl").innerHTML = pluperfActSubj2ndPl;
            document.getElementById("pluperfActSubj_3rdPl").innerHTML = pluperfActSubj3rdPl;
        }
    }
    pluperfectActiveSubjunctiveWriter();
    //
    //
    //
    //PASSIVE SUBJUNCTIVE
    //
    // This conjugates the Present Passive Subjunctive 
    function presentPassiveSubjunctiveWriter() {
        //This figures out what endings to add.
        switch (chosenConjugation) {
            case "first":
                var presPassSubj1stSing = presBase + "er";
                var presPassSubj2ndSing = presBase + "eris";
                var presPassSubj3rdSing = presBase + "etur";
                var presPassSubj1stPl = presBase + "emur";
                var presPassSubj2ndPl = presBase + "emini";
                var presPassSubj3rdPl = presBase + "entur";
                break;
            case "second": 
                var presPassSubj1stSing = presBase + "ear";
                var presPassSubj2ndSing = presBase + "earis";
                var presPassSubj3rdSing = presBase + "eatur";
                var presPassSubj1stPl = presBase + "eamur";
                var presPassSubj2ndPl = presBase + "eamini";
                var presPassSubj3rdPl = presBase + "eantur";
                break;
            case "thirdNormal": 
                var presPassSubj1stSing = presBase + "ar";
                var presPassSubj2ndSing = presBase + "aris";
                var presPassSubj3rdSing = presBase + "atur";
                var presPassSubj1stPl = presBase + "amur";
                var presPassSubj2ndPl = presBase + "amini";
                var presPassSubj3rdPl = presBase + "antur";
                break;
            case "thirdIO": 
                var presPassSubj1stSing = presBase + "iar";
                var presPassSubj2ndSing = presBase + "iaris";
                var presPassSubj3rdSing = presBase + "iatur";
                var presPassSubj1stPl = presBase + "iamur";
                var presPassSubj2ndPl = presBase + "iamini";
                var presPassSubj3rdPl = presBase + "iantur";
                break;                  
            case "fourth": 
                var presPassSubj1stSing = presBase + "iar";
                var presPassSubj2ndSing = presBase + "iaris";
                var presPassSubj3rdSing = presBase + "iatur";
                var presPassSubj1stPl = presBase + "iamur";
                var presPassSubj2ndPl = presBase + "iamini";
                var presPassSubj3rdPl = presBase + "iantur";
                break;     
            default:
                var presPassSubj1stSing = "Error!";
                var presPassSubj2ndSing = "Error!";
                var presPassSubj3rdSing = "Error!";
                var presPassSubj1stPl = "Error!";
                var presPassSubj2ndPl = "Error!";
                var presPassSubj3rdPl = "Error!";
        }
        if (englishIncluded === true) {
            document.getElementById("presPassSubj_1stSing").innerHTML = presPassSubj1stSing + "<br>" + "I may be " + perfectEnglish;
            document.getElementById("presPassSubj_2ndSing").innerHTML = presPassSubj2ndSing + "<br>" + "you may be " + perfectEnglish;
            document.getElementById("presPassSubj_3rdSing").innerHTML = presPassSubj3rdSing + "<br>" + "he/she/it may be " + perfectEnglish;
            document.getElementById("presPassSubj_1stPl").innerHTML = presPassSubj1stPl + "<br>" + "we may be " + perfectEnglish;
            document.getElementById("presPassSubj_2ndPl").innerHTML = presPassSubj2ndPl + "<br>" + "y'all may be " + perfectEnglish;
            document.getElementById("presPassSubj_3rdPl").innerHTML = presPassSubj3rdPl + "<br>" + "they may be " + perfectEnglish;
        }
        else {
            document.getElementById("presPassSubj_1stSing").innerHTML = presPassSubj1stSing;
            document.getElementById("presPassSubj_2ndSing").innerHTML = presPassSubj2ndSing;
            document.getElementById("presPassSubj_3rdSing").innerHTML = presPassSubj3rdSing;
            document.getElementById("presPassSubj_1stPl").innerHTML = presPassSubj1stPl;
            document.getElementById("presPassSubj_2ndPl").innerHTML = presPassSubj2ndPl;
            document.getElementById("presPassSubj_3rdPl").innerHTML = presPassSubj3rdPl;
        }
    }
    presentPassiveSubjunctiveWriter();     
    //
    // This conjugates the Imperfect Passive Subjunctive 
    function imperfectPassiveSubjunctiveWriter() {
        //This figures out what endings to add.
        if (englishIncluded === true) {
            document.getElementById("impPassSubj_1stSing").innerHTML = secondPP + "r" + "<br>" + "I might be " + perfectEnglish;
            document.getElementById("impPassSubj_2ndSing").innerHTML = secondPP + "ris" + "<br>" + "you might be " + perfectEnglish;
            document.getElementById("impPassSubj_3rdSing").innerHTML = secondPP + "tur" + "<br>" + "he/she/it might be " + perfectEnglish;
            document.getElementById("impPassSubj_1stPl").innerHTML = secondPP + "mur" + "<br>" + "we might be " + perfectEnglish;
            document.getElementById("impPassSubj_2ndPl").innerHTML = secondPP + "mini" + "<br>" + "y'all might be " + perfectEnglish;
            document.getElementById("impPassSubj_3rdPl").innerHTML = secondPP + "ntur" + "<br>" + "they might be " + perfectEnglish;          
        }
        else {
            document.getElementById("impPassSubj_1stSing").innerHTML = secondPP + "r";
            document.getElementById("impPassSubj_2ndSing").innerHTML = secondPP + "ris";
            document.getElementById("impPassSubj_3rdSing").innerHTML = secondPP + "tur";
            document.getElementById("impPassSubj_1stPl").innerHTML = secondPP + "mur";
            document.getElementById("impPassSubj_2ndPl").innerHTML = secondPP + "mini";
            document.getElementById("impPassSubj_3rdPl").innerHTML = secondPP + "ntur";
        }
    }
    imperfectPassiveSubjunctiveWriter(); 
    //
    // This conjugates the Perfect Passive Subjunctive
    function perfectPassiveSubjunctiveWriter() {
        var perfPassSubj1stSing = fourthPPBase + "us/a/um" + " sim";
        var perfPassSubj2ndSing = fourthPPBase + "us/a/um" + " sis";
        var perfPassSubj3rdSing = fourthPPBase + "us/a/um" + " sit";
        var perfPassSubj1stPl = fourthPPBase + "i/ae/a" + " simus";
        var perfPassSubj2ndPl = fourthPPBase + "i/ae/a" + " sitis";
        var perfPassSubj3rdPl = fourthPPBase + "i/ae/a" + " sint";
        if (englishIncluded === true) {
            document.getElementById("perfPassSubj_1stSing").innerHTML = perfPassSubj1stSing + "<br>" + "I may have been " + perfectEnglish;
            document.getElementById("perfPassSubj_2ndSing").innerHTML = perfPassSubj2ndSing + "<br>" + "you may have been " + perfectEnglish;
            document.getElementById("perfPassSubj_3rdSing").innerHTML = perfPassSubj3rdSing + "<br>" + "he/she/it may have been " + perfectEnglish;
            document.getElementById("perfPassSubj_1stPl").innerHTML = perfPassSubj1stPl + "<br>" + "we may have been " + perfectEnglish;
            document.getElementById("perfPassSubj_2ndPl").innerHTML = perfPassSubj2ndPl + "<br>" + "y'all may have been " + perfectEnglish;
            document.getElementById("perfPassSubj_3rdPl").innerHTML = perfPassSubj3rdPl + "<br>" + "they may have been " + perfectEnglish;
        }
        else {
            document.getElementById("perfPassSubj_1stSing").innerHTML = perfPassSubj1stSing;
            document.getElementById("perfPassSubj_2ndSing").innerHTML = perfPassSubj2ndSing;
            document.getElementById("perfPassSubj_3rdSing").innerHTML = perfPassSubj3rdSing;
            document.getElementById("perfPassSubj_1stPl").innerHTML = perfPassSubj1stPl;
            document.getElementById("perfPassSubj_2ndPl").innerHTML = perfPassSubj2ndPl;
            document.getElementById("perfPassSubj_3rdPl").innerHTML = perfPassSubj3rdPl;
        }
    }
    perfectPassiveSubjunctiveWriter();
    //
    // This conjugates the Pluperfect Passive Subjunctive
    function pluperfectPassiveSubjunctiveWriter() {
        var pluperfPassSubj1stSing = fourthPPBase + "us/a/um" + " essem";
        var pluperfPassSubj2ndSing = fourthPPBase + "us/a/um" + " esses";
        var pluperfPassSubj3rdSing = fourthPPBase + "us/a/um" + " esset";
        var pluperfPassSubj1stPl = fourthPPBase + "i/ae/a" + " essemus";
        var pluperfPassSubj2ndPl = fourthPPBase + "i/ae/a" + " essetis";
        var pluperfPassSubj3rdPl = fourthPPBase + "i/ae/a" + " essent"; 
        if (englishIncluded === true) {
            document.getElementById("pluperfPassSubj_1stSing").innerHTML = pluperfPassSubj1stSing + "<br>" + "I might have been " + perfectEnglish;
            document.getElementById("pluperfPassSubj_2ndSing").innerHTML = pluperfPassSubj2ndSing + "<br>" + "you might have been " + perfectEnglish;
            document.getElementById("pluperfPassSubj_3rdSing").innerHTML = pluperfPassSubj3rdSing + "<br>" + "he/she/it might have been " + perfectEnglish;
            document.getElementById("pluperfPassSubj_1stPl").innerHTML = pluperfPassSubj1stPl + "<br>" + "we may might been " + perfectEnglish;
            document.getElementById("pluperfPassSubj_2ndPl").innerHTML = pluperfPassSubj2ndPl + "<br>" + "y'all may might been " + perfectEnglish;
            document.getElementById("pluperfPassSubj_3rdPl").innerHTML = pluperfPassSubj3rdPl + "<br>" + "they may might been " + perfectEnglish;
        }
        else {
            document.getElementById("pluperfPassSubj_1stSing").innerHTML = pluperfPassSubj1stSing;
            document.getElementById("pluperfPassSubj_2ndSing").innerHTML = pluperfPassSubj2ndSing;
            document.getElementById("pluperfPassSubj_3rdSing").innerHTML = pluperfPassSubj3rdSing;
            document.getElementById("pluperfPassSubj_1stPl").innerHTML = pluperfPassSubj1stPl;
            document.getElementById("pluperfPassSubj_2ndPl").innerHTML = pluperfPassSubj2ndPl;
            document.getElementById("pluperfPassSubj_3rdPl").innerHTML = pluperfPassSubj3rdPl;
        }
    }
    pluperfectPassiveSubjunctiveWriter();
    //
    //
    // OTHER: Participles, Infinitives, Imperatives
    //
    //
    // This forms the participles
    function participleWriter() {
        switch (chosenConjugation) {
            case "first":
                var thematicVowel = "a";
                break;
            case "second": 
                var thematicVowel = "e";
                break;
            case "thirdNormal": 
                var thematicVowel = "e";
                break;
            case "thirdIO": 
                var thematicVowel = "ie";
                break;  
            case "fourth": 
                var thematicVowel = "ie";
                break;
            default:
                alert("Error: Thematic vowel could not be determined");
        }
        var presActParticiple = presBase + thematicVowel + "ns, ntis";
        var perfPassParticiple = fourthPPBase + "us/a/um";
        var futActParticiple = fourthPPBase + "urus/ura/urum";
        var futPassParticiple = presBase + thematicVowel + "ndus, nda, ndum"; 
        if (englishIncluded === true) {
            document.getElementById("presActParticiple").innerHTML = presActParticiple + "<br>" + imperfectEnglish;
            document.getElementById("perfPassParticiple").innerHTML = perfPassParticiple + "<br>" + "having been " + perfectEnglish;
            document.getElementById("futActParticiple").innerHTML = futActParticiple + "<br>" + "about to " + presentEnglish;
            document.getElementById("futPassParticiple").innerHTML = futPassParticiple + "<br>" + "about to be " + perfectEnglish;
        }
        else {
            document.getElementById("presActParticiple").innerHTML = presActParticiple;
            document.getElementById("perfPassParticiple").innerHTML = perfPassParticiple;
            document.getElementById("futActParticiple").innerHTML = futActParticiple;
            document.getElementById("futPassParticiple").innerHTML = futPassParticiple;
        }
    }
    participleWriter(); 
    //
    //
    //
    // This forms the infinitives
    function infinitiveWriter() {
        switch (chosenConjugation) {
            case "first":
                var presPassEnding = "ari";
                break;
            case "second": 
                var presPassEnding = "eri";
                break;
            case "thirdNormal": 
                var presPassEnding = "i";
                break;
            case "thirdIO": 
                var presPassEnding = "i";
                break;  
            case "fourth": 
                var presPassEnding = "iri";
                break;
            default:
                alert("Error: Present Passive Infinitive could not be formed.");
        }
        var presActInfinitive = secondPP;
        var presPassInfinitive = presBase + presPassEnding;
        var perfActInfinitive = perfBase + "isse";
        var perfPassInfinitive = fourthPPBase + "us/a/um" + " esse";
        var futActInfinitive = fourthPPBase + "urus/a/um" + " esse";
        var futPassInfinitive = fourthPPBase + "um" + " iri"; 
        if (englishIncluded === true) {
            document.getElementById("presActInfinitive").innerHTML = presActInfinitive + "<br>" + "to " + presentEnglish;
            document.getElementById("presPassInfinitive").innerHTML = presPassInfinitive + "<br>" + "to be " + perfectEnglish;
            document.getElementById("perfActInfinitive").innerHTML = perfActInfinitive + "<br>" + "to have " + perfectEnglish;
            document.getElementById("perfPassInfinitive").innerHTML = perfPassInfinitive + "<br>" + "to have been " + perfectEnglish;
            document.getElementById("futActInfinitive").innerHTML = futActInfinitive + "<br>" + "about to " + presentEnglish;
            document.getElementById("futPassInfinitive").innerHTML = futPassInfinitive + "<br>" + "to about to be " + perfectEnglish;
        }
        else {
            document.getElementById("presActInfinitive").innerHTML = presActInfinitive;
            document.getElementById("presPassInfinitive").innerHTML = presPassInfinitive;
            document.getElementById("perfActInfinitive").innerHTML = perfActInfinitive;
            document.getElementById("perfPassInfinitive").innerHTML = perfPassInfinitive;
            document.getElementById("futActInfinitive").innerHTML = futActInfinitive;
            document.getElementById("futPassInfinitive").innerHTML = futPassInfinitive;
        }
    }
    infinitiveWriter(); 
    //
    //
    //
    // This forms the Imperatives
    function imperativeWriter() {
        if (firstPP === "dico") {
            var singPosImperative = "dic";
            var plPosImperative = "dicite";
        }
        else if (firstPP === "duco") {
            var singPosImperative = "duc";
            var plPosImperative = "ducite";
        }
        else if (firstPP === "facio") {
            var singPosImperative = "fac";
            var plPosImperative = "facite";
        }
        else if (firstPP === "fero") {
            var singPosImperative = "fer";
            var plPosImperative = "ferte";
        }
        else if (chosenConjugation === "first") {
            var singPosImperative = presBase + "a";
            var plPosImperative = presBase + "ate";
        }
        else if (chosenConjugation === "second") {
            var singPosImperative = presBase + "e";
            var plPosImperative = presBase + "ete";
        }
        else if (chosenConjugation === "thirdNormal") {
            var singPosImperative = presBase + "e";
            var plPosImperative = presBase + "ite";
        }
        else if (chosenConjugation === "thirdIO") {
            var singPosImperative = presBase + "e";
            var plPosImperative = presBase + "ite";
        }
        else if (chosenConjugation === "fourth") {
            var singPosImperative = presBase + "i";
            var plPosImperative = presBase + "ite";
        }
        else {
            alert("Error: imperatives could not be formed.");
        }
        var singNegImperative = "noli " + secondPP;
        var plNegImperative = "nolite " + secondPP;
        if (englishIncluded === true) {
            document.getElementById("singPosImperative").innerHTML = singPosImperative + "<br>" + presentEnglish + "!";
            document.getElementById("singNegImperative").innerHTML = singNegImperative + "<br>" + "do not " + presentEnglish + "!";;
            document.getElementById("plPosImperative").innerHTML = plPosImperative + "<br>" + presentEnglish + "!";;
            document.getElementById("plNegImperative").innerHTML = plNegImperative + "<br>" + "do not " + presentEnglish + "!";;
        }
        else {
            document.getElementById("singPosImperative").innerHTML = singPosImperative;
            document.getElementById("singNegImperative").innerHTML = singNegImperative;
            document.getElementById("plPosImperative").innerHTML = plPosImperative;
            document.getElementById("plNegImperative").innerHTML = plNegImperative;
        }
    }
    imperativeWriter(); 
}