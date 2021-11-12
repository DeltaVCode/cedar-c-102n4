'use strict';
console.log('app.js is connected.');


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