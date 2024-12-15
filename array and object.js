// Array and Object exercises
// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];

//  Request 1: .forEach()
// The zoos want to display both the scientific name and the animal name in front of the habitats.
// Populate the displayNames array with only the animal_name and scientific_name of each animal.
// displayNames will be an array of strings, and each string should follow this
// pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

// function displayNames(array) {
//   return array.map(function (element) {
//     return `Name: ${element.animal_name}, Scientific: ${element.scientific_name}`;
//   });
// }

// console.log(displayNames(zooAnimals));

/* Request 2: .map()
The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings
 named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
*/
// function lowCaseAnimalNames(arr) {
//   return arr.map(function (element) {
//     return element.animal_name.toLowerCase();
//   });
// }
// console.log(lowCaseAnimalNames(zooAnimals));

/* Request 3: .filter()
The zoos are concerned about animals with a lower population count. Using filter, create a new array of
 objects called lowPopulationAnimals which contains only the animals with a population less than 5.
*/

// function lowPopulationAnimals(arr){
//     return arr.filter(function (element){
//         return element.population < 5
//     })

// }
// console.log(lowPopulationAnimals(zooAnimals));

/* Request 4: .reduce()
The zoos need to know their total animal population across the United States. Find the total population from all
 the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args),
  and an initial value for the count.
*/

// function totalPopulation(arr) {
//   return arr.reduce(function (accumulator, element) {
//     return accumulator + element.population;
//   }, 0);
// }
// console.log(totalPopulation(zooAnimals));

// ==== Callbacks ====

//  Step 1: Create a higher-order function
// * Create a higher-order function named consume with 3 parameters: a, b and cb
// * The first two parameters can take any argument (we can pass any value as argument)
// * The last parameter accepts a callback
// * The consume function should return the invocation of cb, passing a and b into cb as arguments

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 10))

//  Step 2: Create several functions to callback with consume();
//  * Create a function named add that returns the sum of two numbers

// function add(arr, num){
//   return arr, num
// }
// console.log(4, 5);

//  * Create a function named multiply that returns the product of two numbers
// function multiply(num1, num2){
//   return num1 * num2
// }
// console.log(multiply(5, 6));

//  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
//  */

// function greeting(name1, name2){
//   return `Hello ${name1} ${name2}, nice to meet you!`
// }
// console.log(greeting("Boldo", "baatra"));

//  Step 3: Check your work by un-commenting the following calls to consume(): */
// // 4
// // 160 // Hello Mary Poppins, nice to meet you!

///////////////Menu Items (MVP)///////////////////

// const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
// const burger = { name: "Burger", price: 18, category: "Lunch" };
// const breakfastBurrito = {
//   name: "Breakfast Burrito",
//   price: 16,
//   category: "Breakfast",
// };

/* Task 1a: write a function to return more menu items with the same format as the items above. */

// function createMenuItem(name, cost, category) {
//   return {
//     name: name,
//     price: cost,
//     category: category
//   };
// }
// console.log(createMenuItem("Cafe Latte", 4, "Drinks"));
// console.log(createMenuItem("Burger", 18, "Lunch"));

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.
Your method should accept:
(1) A string (teacher, student, or public)
and should return a number.
For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

// const burger = {
//   name: "Burger",
//   price: 10,
//   discount: function (userType) {
//     if (userType === "teacher" || userType === "student") {
//       return burger.price * 0.75;
//     } else if (userType === "public") {
//       return burger.price * 0.9;
//     } else {
//       return burger.price;
//     }
//   },
// };

// console.log(burger.discount("teacher"));
// console.log(burger.discount("student"));
// console.log(burger.discount("public"));

///////////////Reviews (MVP)///////////////////

const reviews = [
  {
    name: "Daniela",
    rating: 5,
    feedback: "Beautiful atmosphere and wonderful vegan options!",
  },
  {
    name: "Jack",
    rating: 3,
    feedback:
      "A little too hipster for my taste, but the burger was decent, if overpriced",
  },
  { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
  {
    name: "Wen",
    rating: 4.5,
    feedback:
      "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
  },
  {
    name: "Brett",
    rating: 3,
    feedback:
      "great selection of snacks and a nice cafe area to get work done during the day.",
  },
  {
    name: "Julius",
    rating: 2,
    feedback:
      "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",
  },
  {
    name: "Lauren",
    rating: 4,
    feedback:
      "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",
  },
  { name: "Reyna", rating: 3.5, feedback: "" },
];

/* Task 3: Console.log just Julius' feedback */

// function feedback(arr) {
//   const juliusReview = arr.find(review => review.name === "Julius");
//   return juliusReview.feedback
// }

// console.log(feedback(reviews));

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

// function feedback(arr) {
//   const juliusReview = arr.find(review => review.name === "Julius");
//   return juliusReview.rating
// }

// console.log(feedback(reviews));

// Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
// function feedback(arr){
//   const reyna = arr.find(value => value.name === "Reyna")
//   return reyna.rating
// }
// console.log(feedback(reviews));

//   Task 6: Write a function to return a review based on the index of the review in the array.
// Your function should take two arguments:
// (1) an array which holds all of the reviews
// (2) a number which is the desired index in the array.
// and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
// * For example, if getReviewByIndex is invoked with reviews and the number 0
// * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
// */
// function rating(arr, index){
//   const realrating = arr[index]
//   return `${realrating.name} gave the restaurant a ${realrating.rating} star review and their feedback was : ${realrating.feedback}`
// }
// console.log(rating(reviews, 0));

// Expected output: "Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!"

// Exercise 12

// Create the use object and the object should have following key
// firstName
// lastName
// currentLocation
// favoriteSongs
// age

// 1. console log 'hello user's firstname and Lastname'
// 2.How's the weather in 'currentLocation'
// 3. console log user's favorite songs

// const data = {
//   firstName: "Gantur",
//   lastName: "Tuvshinsaihan",
//   currentLocation: "Ulaanbaatar",
//   favoriteSongs: "Faz De CHICOTE",
// };
// console.log(`hello ${data.firstName} ${data.lastName}`);

// /* STRETCH 3:  This challenge is not related to the data above!
// Write a function called carMarker
// Your function should accept:
// (1) a single odometer argument (a number)
// and return an object.
// The returned object should have the following characteristics:
//      it has an `odometer` property that contains the argument passed in.
//      it has a `drive` method that takes a distance as its argument, and
//          (1) causes the odometer in the object to be increased by the distance,
//          (2) returns the updated value of the `odometer`.

const carMaker = {
  odometer: 200,
  drive: 100,
}
console.log(`Odometer = ${carMaker.odometer+carMaker.drive}`);


function carMarker(odometer) {
  return {
    odometer: odometer,  // Initialize odometer from the argument
    drive: function(distance) {
      this.odometer += distance;  // Increase odometer by the distance driven
      return this.odometer;  // Return the updated odometer value
    }
  };
}

// Example usage:
const myCar = carMarker(200);  // Initialize a car with an odometer reading of 200
console.log(`Initial Odometer = ${myCar.odometer}`);  // Output: Initial Odometer = 200

// Now drive the car for a distance of 100
console.log(`Odometer after driving 100 miles = ${myCar.drive(100)}`);  // Output: Odometer after driving 100 miles = 300

// Drive the car again for a distance of 50
console.log(`Odometer after driving 50 miles = ${myCar.drive(50)}`);  // Output: Odometer after driving 50 miles = 350



// */

// function carMaker(/* code here */) {
//   /* code here */
// }

// /*
//   To get started:
//   1. Remove the lines involving the removeThisToStart variable, so that the
//      program doesn't exit early.
//   2. Implement userCanAffordSofa
// */

// // Exercise 13

// let superChimpOne = {
//   name: "Chad",
//   species: "Chimpanzee",
//   mass: 9,
//   age: 6,
//   astronautID: 1,
//   move: move(),
// };
// let salamander = {
//   name: "Lacey",
//   species: "Axolotl Salamander",
//   mass: 0.1,
//   age: 5,
//   astronautID: 10,
//   move: move(),
// };
// let animal1 = {
//   name: "Brad",
//   species: "Chimpanzee",
//   mass: 11,
//   age: 6,
//   astronautID: 5,
//   move: move(),
// };
// let animal2 = {
//   name: "Leroy",
//   species: "Beagle",
//   mass: 14,
//   age: 5,
//   astronautID: 7,
//   move: move(),
// };
// let animal3 = {
//   name: "Almina",
//   species: "Tardigrade",
//   mass: 0.0000000001,
//   age: 1,
//   astronautID: 3,
//   move: move(),
// };
// function move() {
//   return Math.round(Math.random() * 10);
// }
// // After you have created the other object literals, add the astronautID property to each one.
// //Create an array to hold the animal objects.

// // Print out the relevant information about each animal.
// // return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
// function crewReports(animal) {}

// // Exercise 14

// var movieDatabase = {
//   title: "Pulp Fiction",
//   duration: 120,
//   stars: ["Bruce Willis", "Uma Thurman"],
// };
// // write the function to return Movie name and duration and start

// // Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// // const recipe = {
// //   title: "Mole",
// //   servings: 2,
// //   ingredients: ["cumin", "cinnamon", "cocoa"],
// // };
// // console.log title of the recipe
// // console.log 'Servings: recipe servings'
// //console.log the ingredients one by one

// // //Task2

// // let programming = {
// //   languages: ["JavaScript", "Python", "Ruby"],
// //   isChallenging: true,
// //   isRewarding: true,
// //   difficulty: 8,
// //   jokes:
// //     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// // };

// // Write the command to add the language "Go" to the end of the languages array.
// // Change the difficulty to the value of 7.
// // Using the delete keyword, write the command to remove the jokes key from the programming object.
// // Write the command to add a new key called isFun and a value of true to the programming object.
// // Using a loop, iterate through the languages array and console.log all of the languages.
// // Using a loop, console.log all of the keys in the programming object.
// // Using a loop, console.log all of the values in the programming object.

// // /Menu Items (MVP)///////////////////

// // const latte = {
// //   name: "Cafe Latte",
// //   price: 4,
// //   category: "Drinks",
// // };

// // const burger = { name: "Burger", price: 18, category: "Lunch" };
// // const breakfastBurrito = {
// //   name: "Breakfast Burrito",
// //   price: 16,
// //   category: "Breakfast",
// // };

// // /* Task 1a: write a function to return more menu items with the same format as the items above. */

// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Coffee", 5, "Dinner"));
// // /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

// // /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.

// // console.log(burger.discount("student"));
// // console.log(burger.discount("public"));
// // c;