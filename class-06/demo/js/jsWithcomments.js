'use strict';
console.log('app.js is connected.');


//Comment is js is two forward slashes 

/**
 * multiline comments
 * 
 * 
 * 
 */

//Prompt is method and it looks like this prompt()       log()
//                    Added some text, which we like to call a string. 
// variable declaration and assignment. 
let userName = prompt('What is your name?');
//   then userName gets it  <----------we get the data  
//equal sign is an assignment operator. 
console.log('User Name:',userName);
//this will tell us what type of data it is. 
console.log(typeof(userName));

// let hourNow = Number(prompt('What time is it, in Military time?'));

let confirmMessage = confirm('Do you want to continue?');


let hourNow = prompt('What time is it, in Military time?');
console.log('hour now:', hourNow);
console.log(typeof(hourNow));



//variable declaration!
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
//we can concatonate our variables with our string welcome to output a new message. 
document.write('Welcome ' + userName + ' ' + greeting);