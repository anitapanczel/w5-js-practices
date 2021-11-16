/*
window.addEventListener("load", function() {
    console.log("Az oldal betöltődött.");
});

var myFirstString = 'Ez egy string.';
var mySecondString = "Ez is egy string.";
var myThirdString = `Ez a backtick for 
longer string. `;

var myFirstNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 6518000;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo Sapiens"];
var mySecondArray = [1984, "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo Sapiens"];

var myFirstObject = {
    title: "Mester és Margarita",
    year: 1966,
    author: "Mihail Bulgakov",
    translations: ["EN", "HU", "DE", "FR"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add(firstNumber, secondNumber) {
    if (firstNumber > 0) {
        console.log("Az első szám nagyobb, mint nulla.");
    } else {
        secondNumber - firstNumber;
    }
    console.log(firstNumber + secondNumber);
}

function extract(number1, number2) {
    if (number1 > number2) {
        console.log(number1 - number2);
    } else {
        console.log(number2 - number1);
    }
};

extract(10, 15);

function ifElseCheck(text) {
    if (text === "Hello") {
        console.log("A text az volt, hogy Hello.");
    } else if (text === "Hello") {
        console.log("Második if-else ág is Hello.")
    }

    if (text === "Hello") {
        console.log("Ez egy másik viszgálat.");
    }
}
ifElseCheck("Hello");

function compare(a, b) {
    console.log("==", a == b);
    console.log("===", a === b);
    console.log(b + a);
    var c = a + b;
    console.log(typeof c);
}

compare("1984", 1984);

compare("Nyitva", "tartás");

compare(myFirstArray[0], mySecondArray[0]);

var myFirstFunctionVariable = function() {
    console.log("ez egy függvény, amit változóban tároltunk el.");
}

myFirstFunctionVariable();

(function(text) {
    console.log("ezt a függvényt egyből meghívtuk, amikor leírtuk");
    console.log(text);
}("Hello"));

var mySecondFunctionVariable = function() {
    console.log("Ez vajon mikor fut le?");
}

var anotherVar = mySecondFunctionVariable();

var theLastFunction = function(text) {
    console.log(text);
}

theLastFunction(function() {
    return "I am calling the LastFunction.";
})

 var window = {
addEventListener:function (eventName, eventFunction) {  }
}
*/