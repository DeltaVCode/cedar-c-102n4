// // How long would it take to print the numbers 0 to 100 using console.log? 
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// // Use a loop to run code many times
// console.log("While loops require a starting variable, in this case a variable set to 0");
// var count = 0;

// console.log("This code will run the loop as long as the variable above is less than or equal to 50");
// while(count <= 50) {
//   console.log(count);
//   count = count + 5;
// }
// console.log("While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs");
// // This loop counts down from 50 to 0, decreasing by -2 each time
// count = 50;
// while(count >= 40) {
//   console.log(count);
//   count = count - 2;
// }

// console.log("Count up from 0 to 60 by 10");
// count = 0;
// while(count <= 60) {
//   console.log(count);
//   count += 10;
// }


// // This loop will run forever, prompting the user to enter a number until they type 1. 
// var stop = '1'; //SENTINAL
// while(true){
//   var input = prompt('Give a number. Type 1 to exit. ');
//   if(input === stop) {
//     break;
//   }
// }




// ////////////////////////////










// console.log('\n');
// // This loop will run forever, prompting the user to enter a number until they type 10. 
// var avgNums = function() {

//   var sum = 100;
//   var count = 10;

//   while(true) {
//     var input = parseInt(prompt('Give a number to calculate an average. Type 10 to end. '));
//     if(input === 10) {
//       break;
//     } else {
//       // All numbers are added together during the loop and a count of numbers is kept
//       sum = sum + input;
//       count++;
//     }
//   }
//   // After the loop ends, the sum is divided by the count to result in the average.
//   return 'The average of your numbers is ' + sum/count;

//   //return 'The average of your numbers is ' + parseInt(sum/count);
// }

// console.log(avgNums());

// console.log('\n');

// console.log("For loops incorporate the 3 required parts of a loop on a single line: ");

//  console.log("(1) starting variable, ");
//  console.log("(2) an expression to end the loop, ");
//  console.log("(3) an expression to increment the starting variable. ");
//  console.log('\n');
// // This code prints 10, 20, 30, 40 , 50
// for(var count = 0; count <= 50; count+=10) {
//   console.log(count);
// }
// console.log('\n');
// console.log('Count Down Now. \n');
// // This code prints 100, 90, 70...10, 0
// for(var count = 50; count >= 0; count-=10) {
//   console.log(count);
// }


// console.log('\n');




// // Creates an array of strings
// var pizzaPlaces = ['Papa Vitos', 'Oven and Pizza Grinder', 'Aurelio\'s Pizza ', 'Pizza Port', 'ShotGun Dan\'s', 'Gumby\'s', 'The Wedge Pizza', 'Marchelloni\'s ', 'Corleones Italian Restaurant', 'Tamasos'];
// // Prints the Array object
// console.log(pizzaPlaces);

// console.log('\n');
// // Prints individial values from the array. The first value is always at index position 0
// console.log(pizzaPlaces[0]);
// console.log(pizzaPlaces[1]);
// console.log(pizzaPlaces[2]);
// console.log(pizzaPlaces[3] + " and " + pizzaPlaces[4] + " and " + pizzaPlaces[5]);

// console.log('\n');

// console.log("Use a for loop to print all of the values from the array. Note: Always create a variable that starts at 0 and uses .length to calculate the number of values in an array.");
// for(var x = 0; x < pizzaPlaces.length; x++) {

//   console.log(pizzaPlaces[x] + " I ate here!");

// }

// console.log('\n');


// // Create an empty array
// var myPizzaToppings = [];
// // Add values to the array with the push methos
// myPizzaToppings.push('Pepperonni');
// myPizzaToppings.push('Black Olive');
// myPizzaToppings.push('Onion');
// myPizzaToppings.push('Cheese');
// myPizzaToppings.push(null);
// myPizzaToppings.push('Sausage');
// console.log(myPizzaToppings);
// console.log('\n');
// console.log("reassign a value of an array using it's index position to add Mushrooms");
// myPizzaToppings[4] = 'Mushrooms';

// console.log(myPizzaToppings);

// console.log('\n');

// console.log("pop() Removes the last value and now Sausage is removed from array.");
// myPizzaToppings.pop(); 
// console.log(myPizzaToppings);


// console.log('\n');

// console.log(" indexOf will return the first position of the input value in the array"); 
// console.log("This function removes any value that matches a given input");
// console.log("If the input value is not in the array it will result in -1. If the value is found it will return a number 0 or higher");
// console.log(" Splice removes one or more values from an array. This code removes a single value at a given index value.");





























//new content from curriculum 102 class 8 demo 
/**
 * Add validation on one of the user inputs.
 * Keep asking until an acceptable value is entered.
 * Show an image related to your page's topic, repeated within your page.
 * Prompt the user with a relevant question for a number (e.g.: "How many cats do you want?" or "What star rating      would you give, 1-5?")
 * Use a loop in your JavaScript code to show the image that many times.
 * How could you use functions to make your code more readable?
 */

let imageElement = document.getElementById('imageSection');



let userInput = prompt('How many images would you like to see?');
console.log('Our user input is of type: ',typeof(userInput));


let userInputParsed = parseInt(userInput);
console.log('user input parsed to int: ', userInputParsed)

if(!isNaN(userInputParsed)){
  console.log('we have a valid number for input');
} else {
  userInputParsed = parseInt(prompt('How many images? Enter a Number.'));
}
console.table(typeof(userInput));
//We can talk about how to refactor this using a while loop. 



for(i = 0; i < userInputParsed; i++){
  // console.log('proof of life', i);
  let listImage = document.createElement('li');
  listImage.textContent = `image number ${i + 1}`;
  let image = document.createElement('img');
  image.setAttribute('src', 'images/codeImage.png');
  listImage.appendChild(image);
  console.log(listImage);
  imageElement.appendChild(listImage);
}














///////////////////////maybe//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var removeTopping = function(toppingName)
// {
//   var elementNum = myPizzaToppings.indexOf(toppingName);

//       if(elementNum > -1)
//       {
//          myPizzaToppings.splice(elementNum, 1);
//       } 
//       else 
//       {
//         console.log(toppingName + ' not found.');
//       }
// }

// removeTopping('Onion'); //removes the topping at position 1
// removeTopping('Mushrooms'); //Removes Mushrooms/
// console.log(myPizzaToppings);



// console.log('\n');



// console.log("Math.random returns a random decimal value between 0.00 and 0.9999");
// console.log("If the max value is 2, the result will be a value between 0.00 and 1.99998");
// console.log("Math.floor rounds a decimal number down removing all decimal places. If the max value is 2, the result will be either 0 or 1");

// // Used to generate a random number without decimals
// var getRandomInt = function(max) {
//   return (Math.random() * max);
// }
// console.log(getRandomInt(2));
// console.log(Math.floor(getRandomInt(2)));



// console.log('\n');
// console.log('\n');
// console.log("Creates an empty array that will store the feeding data");
// console.log("Results in either 0 or 1, each of equal probability"); 
// console.log("Adds one of two string values to the array");

// // Function that simulates watering a plant many times
// var feedingCycle = function(waterPlants){  
//   var feeding = [];
//   // Use a for loop to feed the plants and water the plants many times
//   for(var x = 0; x < waterPlants; x++) {
//     var randomNum = Math.floor(getRandomInt(2));
//     //console.log(randomNum);
//     if(randomNum === 0) 
//     {
//       feeding.push('Nitrogen');
//     } 
//     else 
//     {
//       feeding.push('Water');
//     }
//   }
//   // After the loop finishes, the array contains many heads and tails flips.
//   return feeding;
// };

// // A function that takes an array of flips and counts how many heads and tails were flipped
// var feedCounter = function(feedingList) {
//   var Nitrogen = 0;
//   var Water = 0;  
  
//   for(var i = 0; i < feedingList.length; i++) 
//   {
//     if(feedingList[i] === 'Nitrogen')
//       {
//         Nitrogen++;
//       } 
//       else 
//       {
//         Water++;
//       }
//   }
//   console.log('Feeding the Plants with Nitrogen ' + Nitrogen + ' times and water ' + Water + ' times.');
// };
// // Simulates feeding a plant 1000 times.
// feedCounter(feedingCycle(1000));
// console.log("Uses a for loop to count each feeding cycle one at a time.");


