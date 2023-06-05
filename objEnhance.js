//LET AND CONST
//ES2015 Global Constants
const PI = 3.14;

//Quiz
//What is the difference between var and let?
///Var may be redeclared and reassigned. Let can be reassigned but not redeclared.

//What is the difference between var and const?
///Const can not be redeclared or reassigned.

//What is the difference between let and const?
//Let may be reassigned, const can not. 

//What is hoisting?
///Hoisting allows for variables and function declarations to be made before
///they are defined later in the code. 

//OBJECT ENHANCEMENT
//Same keys and values

function createInstructor(firstName, lastName){
    return{
      firstName,
      lastName
    };
  }

  //Computed Property Names
  const favoriteNumber = 42;
  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  };


  //Object Methods
  const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  };

  //createAnimal function
  function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    };
  }

//DESTRUCTURING
//Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//Object Destructuring 2
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // 1846, 1659

//Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your first name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your first name is Melissa and you like green
getUserData({}) // Your first name is undefined and you like green

//Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); // The rest of the array

//Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // 10, 30, 20

//ES2015 Object Destructuring
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const {a, b} = obj.numbers;

//ES2015 Array Swap
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
const results = ([first, second, third, ...rest]) => ({first, second, third, rest});