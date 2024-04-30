/* function add(a, b){
    return a+b;
} */

/* var add = function add(a, b){
    return a+b;
} */

/* var add = (a,b) => {return a + b} */

/* var add = (a, b) => a+b;

var result = add(2,3);
console.log(result); */

// Self Callable function
/* (function(a,b){
    console.log('Hello Samy !!');
})(); */

// Callback functions (Method 1)
/* function callback(){
    console.log("Adding successfully !!");
}

const add = function (a, b, callback){
    var result = a + b;
    console.log(`Result : ${result}`);
    callback();
}

add(2,65, callback);
*/

// Callback functions (Method 2) [Inline Function]
/* const add = function (a, b, callback){
    var result = a + b;
    console.log(`Result : ${result}`);
    callback();
}

add(4,6, function(){
    console.log("Add completed in inline function");
});

add(2,6, () => console.log("add done - very short method by Arrow function")); */

var fs = require('fs');
var os = require('os');
const notes = require('./notes');
var _ = require('lodash');

var user = os.userInfo();
console.log(user);
console.log(user.username);

// (Filepath, data, Callback())
fs.appendFile('greeting.txt', `hi ${user.username} ! \n`, () => {
    console.log("File is created !!");
});


var age = notes.age
var result = notes.addNumber(age+2 , 10);

console.log(`Age from Notes file : ${age}`)
console.log(`Result is now : ${result}`);

// using Lodash 
var data  = ["person", "person", 1, 2, 4, 5, 'name', 'age', 'name', '2'];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString(true));