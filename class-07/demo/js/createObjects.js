
console.log('\n');
console.log("Time to Create an Object."); 
console.log("Rather than creating separate variables, we can assign values to object keys."); 
console.log("The keys in this object are first, middle, last, fullName, dob, and age.");
console.log("Keys and values are separated by colons. Key-value pairs are ended with commas");
console.log('\n');
console.log("Keys can refer to strings, numbers, or boolean values");
console.log("a key can refer to a function that references other keys from the same object.");
console.log("The keyword this refers to the current object.");
console.log("A key can refer to an array");
console.log("This function calculates a person's age. First it obtains data about the current date");

var deltavTa = {
  first: 'Craig',
  middle: '8 Bit',
  last: 'Barkley',
 
  fullName: function() {
    return this.first + ' ' + this.middle + ' ' + this.last;
  },
  
  dob: [9, 17, 1972],
  // The getMonth function will result in 0 for January, 1 for February, etc. We add one to refer to human representations for months
  // The birth year is at index position 2 of the dob array
  // The birth month is at index position 0 of the dob array. The birth day is at index position 1 of the dob array.
  // Subtract one from the person's age if they haven't reached their birthday this year.
  age: function() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var myAge = year - this.dob[2];
    
    if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) 
    {
      myAge--;
    }
    return(myAge);
  }
};
console.log('\n');
// Print values by refering to the object, then using dot notation to refer to keys.
console.log(deltavTa.first);
// If a key refers to a function, don't forget to use parenthesis.
console.log('\n');
console.log(deltavTa.fullName());
console.log('\n');
console.log("As you can see my age is " + deltavTa.age() + ", which is very young still indeed.");






console.log('\n');


console.log("Each student in class shared their personal objects on Slack. We combine them together in an array. Each object is separated by a comma.");

var coolPeople = [
  {
    first: 'Bob',
    middle: 'Instructor',
    last: 'Smith',
    fullName: function() {
      return this.first + ' ' + this.middle + ' ' + this.last;
    },
    dob: [3, 3, 1998],
    age: function() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() +1;
      var day = today.getDate();
      var myAge = year - this.dob[2];
      if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
        myAge--;
      }
      return(myAge);
    }
  },
  {
    first: 'Craig',
    middle: 'back up data',
    last: 'Barkley',
    fullName: function() {
      return this.first + ' ' + this.middle + ' ' + this.last;
    },
    dob: [2, 15, 1981],
    age: function() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() +1;
      var day = today.getDate();
      var myAge = year - this.dob[2];
      if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
        myAge--;
      }
      return(myAge);
    }
  },
  {
   first: 'Steven',
   middle: 'middlename',
   last: 'Jones',
   fullName: function(){
     return this.first + ' ' + this.middle + ' ' + this.last;
   },
   dob: [3, 4, 1991],
   age: function(){
     var today = new Date();
     var year = today.getFullYear();
     var month = today.getMonth() + 1;
     var day = today.getDate();
     var myAge = year - this.dob[2];
     if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]){
       myAge--;
     }

     return(myAge);
   }
  },
  {
    first: "Jacob",
    middle: "middlename",
    last: "Richmond",
    fullName: function() {
      return this.first + ' ' + this.middle + ' ' + this.last;
    },
    dob: [4, 4, 2000],
    age: function() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var day = today.getDate();
      var myAge = year - this.dob[2]
      if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]){
        myAge--;
      }
      return(myAge)
    }
  },
  {
    first: 'Akira',
    middle: 'middlename',
    last: 'Allen',
    fullName: function() {
      return this.first + ' ' + this.middle + ' ' + this.last;
    },
    dob: [5, 3, 1998],
    age: function() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() +1;
      var day = today.getDate();
      var myAge = year - this.dob[2];
      if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
        myAge--;
      }
      return(myAge);
    }
  },
  {
    first: 'Wahyu',
    middle: 'null',
    last: 'Boentoro',
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    dob: [10,13,1994],
    age: function() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() +1;
      var day = today.getDate();
      var myAge = year - this.dob[2];
      if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
        myAge--;
      }
      return(myAge);
    }
  },
  {
    first: 'Adam',
    middle: 'J',
    last: 'Clark',
    fullName: function()
    {
        return this.first + ' ' + this.middle + ' ' + this.last;
    },
    dob: [2, 10, 1990],
    age: function()
    {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var myAge = year - this.dob[2];
        if (month < this.dob[0] || month === this.dob[0]
            && day < this.dob[1])
        {
          myAge--;
        }
        return(myAge);
    }
  }
];

// A forEach loop is similar to a for loop in that it runs through every value in an array, but it doesn't require all of the variable declarations and expressions.
// Start with the array name, followed by .forEach();
// Inside the parenthesis create a function that you want performed for every array object. The parameter of the function is a named representation of each of the objects in the array.
coolPeople.forEach(function(person) {
  console.log(person.fullName() + ' is ' + person.age() + ' years old!')
  console.log('\n');
});



console.log('\n');



console.log('\n');