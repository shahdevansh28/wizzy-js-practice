//printing output using various methods
const contentContainer = document.getElementById("content");
contentContainer.innerHTML = "Hello World";
document.write("Hello World using document.write");
//window.alert("I am window.alert ");
console.log("Hello world using console.log");

//Variables
let z = "hello";
const y = 3.14;
console.log(x + " " + y + " " + z);
//Only var declared variables can be hoisted
var x = 10;

//example of let
{
  let a = "a has block scope";
  var b = "b has global scope";
  console.log("a is defined using let keyword:-" + a);
}
//console.log(a); // gives error since let supports block scops
console.log(b); // allows since var supports global scope

//Operators
let tmp = 10 ** 2;
console.log(tmp);

let res =
  tmp <= 100
    ? console.log(
        "Ternary oprator is used as conditional stmt:- variable is less than 100"
      )
    : console.log(
        "Ternary oprator is used as conditional stmt:- variable is greater than 100"
      );

//Timeout/intervals
// const timout = setTimeout(() => {
//     console.log("Printed after 1ms using setTimeout.");
// }, 1000);

// const interval = setInterval(()=>{
//     console.log("Printed after 2ms using setInterval.");
// },2000);

// clearTimeout(timout);
// clearInterval(interval);

//Function
function fibonacci(num) {
  if (num == 0) return 1;
  else if (num == 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}

var fib = fibonacci(5);
console.log("Fiboncci series using function = " + fib);

function canYouVote(age) {
  if (age < 18) return false;
  else return true;
}

let age = 22;
canYouVote(age)
  ? console.log("Congratulations you can vote.")
  : console.log("Sorry you have to wait.");

//Object

var car = {
  name: "Audi",
  model: "Q4",
  color: "white",
  details: function () {
    return (
      "Car details are:- " + this.name + " " + this.model + " " + this.color
    );
  },
};
console.log(car.details());

//Events
const button = document.getElementById("button");
function clickMe() {
  button.onmouseover = function () {
    console.log("Mouse Over");
  };
  document.getElementById("data").innerHTML = "You have clicked button";
}

//String
let text = "Hello World";
//String functions
console.log(text.charAt(0));
console.log(text.charCodeAt(0));

console.log(text.slice(3, 7));
console.log(text.substring(-1, 5));
console.log(text.substr(0, 5)); //deprecated funciton

console.log(text.toUpperCase());
console.log(text.toLowerCase());

let str1 = "Hello";
let str2 = "World";

let tmpstr1 = str1.concat(str2);
let tmpstr2 = str1 + str2;

if (tmpstr1 === tmpstr2) {
  console.log("true");
} else {
  console.log("false");
}

let string = "I am using Dell laptop";
console.log(string.replace("Dell", "Apple"));

string[0] = "W";
console.log(string); //Specific character of string can not be changed.It neither show error nor exception.

let str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
const word = str.split("");
console.log(word);

console.log(str.search("Ipsum"));
console.log(str.match(/ing/g));

console.log(str.matchAll("ing"));
console.log(str.includes("ing"));

const item = document.getElementById("item");
item.innerHTML = `<h1>${str}</h1>`;

//Array
const fruits = ["Orange", "Mango", "Apple"];
console.log(fruits.sort());

fruits.push("Kiwi");
fruits.forEach(upperCase);
function upperCase(value) {
  console.log(value.toUpperCase());
}

console.log(fruits.join("|"));

fruits.pop();
console.log(fruits);

fruits.push("Graps");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

const cricketers = new Array("MSD", "Rohit", "Kohli");

console.log(cricketers.concat(fruits));

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());

let favFruit = fruits.find(favouriteFriut);
function favouriteFriut(value) {
  return value === "Mango";
}
console.log(favFruit);

console.log(fruits.sort());

const myNum = new Array(40, 100, 1, 5, 25, 10);
console.log(
  myNum.sort(function (a, b) {
    return a - b;
  })
); //for assencding order

//Dates
console.log(new Date());
console.log(new Date().toDateString());
console.log(new Date().toISOString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleString());
console.log(new Date().toUTCString());

console.log(Date.parse("08-04-2024"));

//Conditional loops
let myAge = 20;

if (myAge < 16) {
  console.log("You are not eligible for liscence");
} else if (myAge >= 16 && myAge < 18) {
  console.log("You are eligible for only gear-less vehicle lisence");
} else {
  console.log("You are eligible for all kind of vehicle lisence");
}

let today = new Date().getDay();

switch (today) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

//Loops
//For in loop to iterate thorugh object
for (let obj in car) {
  console.log(car[obj]);
}

//For each loop to iterate through array
cricketers.forEach(lowerCase);
function lowerCase(value) {
  console.log(value.toLowerCase());
}

//for of loop for iterable object
for (let cricketer of cricketers) {
  console.log(cricketer.length);
}

//Exception handling
try {
  let num = 1;
  // if(isNaN('Hello')){
  //     throw new Error('This error is using thorw statment');
  // }
  num.toPrecision(500);
} catch (err) {
  console.log(err);
} finally {
  console.log("This code will be always executed");
}

//Arrow function
const addNum = (num1, num2) => {
  console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
};
addNum(5, 5);

//ES6
console.log("From here ES6 is started");

//this keyword
const user = {
  username: "Demo",
  call() {
    console.log(this);
  },
};
user.call(); //here this is referring to user object

const funCall = user.call;
funCall(); //here this is referring to global window object

//Arrow Function
const square = (num) => num ** 2;
console.log(square(50));

const vegetable = ["Tomato", "Potato", "Bitter Guard"];
vegetable.map((vegetable) => {
  console.log(vegetable.toUpperCase());
});

//Object Destruction
const animal = {
  name: "Dog",
  legs: 4,
  voice: () => {
    return "Can Bark";
  },
};

const { name, legs, voice } = animal;
console.log(
  "Animal name is " +
    name +
    " and has " +
    legs +
    " legs and make voice of " +
    voice()
);

//Spread operator
const combineArr = [...cricketers,'Using Spread',...fruits];
console.log(combineArr);

const combineObj = {...user, ...animal};
console.log(combineObj.username);

//Class

class Animal{
    constructor(name,horns){
        this.name = name;
        this.horns = horns;
    }
    details(){
        console.log("I am " + this.name + " with " + this.horns + " Horns");
    }
}

class Cow extends Animal{
    constructor(name,horns,legs){
        super(name,horns);
        this.legs = legs;
    }
    voice(){
        console.log("My voice is Mow Mow");
    }
}
const cow = new Cow("Cow",2,4);
cow.details();
cow.voice();

