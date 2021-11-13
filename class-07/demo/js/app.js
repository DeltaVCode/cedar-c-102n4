// 'use strict';
// console.log('app.js is connected.');


let userName = prompt('What is your name?');
let confirmMessage = confirm('Do you want to continue?');
let hourNow = prompt('What time is it, in Military time?');
let greeting;

if(hourNow > 18 && hourNow < 24){
    greeting = 'Good Evening';
} else if(hourNow >12 && hourNow < 18){
    greeting = 'Good Afternoon';
}else if(hourNow > 6 && hourNow <12){
    greeting = 'Good Morning!, Get some OJ!';
} else {
    greeting = 'Why arent you in bed!!!! go to sleep';
}
console.log('this is the greeting',greeting);
document.write('Welcome ' + userName + ' ' + greeting);

////////////////////////////////////////review the js from class six in class 7 start with lets display the welcome///////

// let today = new Date();
// console.log('this is the letiable today',today);
// let hourNow = today.getHours(); 
// let greeting;
// if (hourNow > 18 && hourNow < 24) {
//   greeting = 'Good evening, Class!';
// } else if (hourNow > 12 && hourNow < 24) {
//   greeting = 'Good afternoon, Class!';
// } else if (hourNow >= 0 && hourNow < 24) {
//   greeting = 'Good morning!';
// } else {
//   greeting = 'Welcome!';
// }
// document.write('<h3>' + greeting + '</h3>');


// /** 
////////////  REVIEW these concepts. 

// JavaScript - Coding language of the web. Used to create and control dynamic website content.

// conditionals - A series of checks that determine an outcome. If something happens, the do this. If that does not happen but this happens, do this. If all else fails, then do this last thing.

// operators - Series of symbols that perform arithmetic on numbers. (+, -, *, **, /, %. ++, --)


// data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array. 
// There are more advanced data types that will be introduced in 401.


// variable - a representation or nick name for some type of data.

// */








//STart with a standard function set up. 

function runGreeting() {
    var hourNow = prompt('What time is it? 0-23');
    var greeting;
    if(hourNow > 18 && hourNow < 24){
        greeting = 'Good Evening.';
    } else if(hourNow >12 && hourNow < 18) {
        greeting = 'Good Afternoon';
    } else if( hourNow >= 0 && hourNow < 24){
        greeting = 'Good Morning.';
    } else {
        greeting = 'wait, you didnt give me the right response.';
    }
      
       console.log('Our Response: ', greeting);
       document.write('<h3>' + greeting + '</h3>');
   }
   runGreeting();










   // function expression 
 //  The function keyword can be used to define a function inside an expression.
var makeSandwich = function(bread, meat, cheese) {
//Do these after the console log
    // var bread = prompt("What type of bread?");
    // var meat = prompt("What type of meat or veggies?");
    // var cheese = prompt("What type of cheese?");
 
    return "Here is a sandwich on  " + bread + ", containing " + meat + " and " + cheese;
 
  };
 
  //Do these first 
  var lunchTimeSandwich = makeSandwich("Rye","Turkey","Swiss");
  console.log(lunchTimeSandwich);





//End with this function. 


// Message and Target are parameters of runGreeting function Class 7
function  runGreetingTwo(message, target) {
// We still use the prompt method and use 
// the message parameter value the argument as the 
// prompt message to the user. 
    var hourNow = prompt(message);
    //Declare a variable called greeting.
    var greeting;
    if(hourNow >= 0 && hourNow <= 12){
        greeting = 'Good Morning ' + target;
    } else if (hourNow >= 12 && hourNow <= 18) {
        //The assigned greeting will be.
        greeting = 'Good Afternoon, ' + target;
    } else if(hourNow >= 18 && hourNow <= 24) {
        //The assigned greeting will be.
        greeting = 'Good evening, ' + target;
    } else {
        greeting = 'Wait, you did not give me a proper respone.'
    }
    //Console Log Greeting
    console.log('Our Response: ', greeting);
    document.write(greeting);
}
// This is where we 'Call' our function.
runGreetingTwo('What time is it? ', 'everyone!');




