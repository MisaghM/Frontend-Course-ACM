/*
  ---------
  Variables
  ---------
*/

var x = 10;   // Creates function-scope variable
let y = 11;   // Creates local-scope variable (ES6)
const z = 12; // Creates local-scope constant variable (ES6)

// String type: double and single quotes are accepted.
// typeof string === 'string'
let string = "test";
string = 'test';

// Number type: can have decimals.
// typeof num === 'number'
let num = 10;
num = 10.23;

// Boolean type: true or false only.
// typeof bool === 'boolean'
let bool = true;
bool = false;

// Array object: can have any variable types in it.
// typeof arr === 'object'
let arr = [2, 3, 4, 'five'];
console.log(arr[2]);

// Object: key values.
// typeof me === 'object'
let me = {
    name: 'Misagh',
    age: 22,
    year: 2024,
    introduce: function () {
        return 'I am ' + this.name;
    }
}
let nameField = 'name';
console.log(me[nameField]);
console.log(me.name);
console.log(me.introduce());

// const vs (var or let)
const constVariable = { field: 10 };
constVariable['field'] = 2;
// constVariable = 2; // is error
console.log(constVariable);

// All 3 increase operatorTest by 1:
let operatorTest = 10;
operatorTest = operatorTest + 1;
operatorTest += 1;
operatorTest++;

// == vs === (strict equality check which also checks the type)
console.log(0 == '');
console.log(0 === '');

// A variable that is not defined and does not exist is 'undefined'
// Objects can be 'null' as well.
// typeof null === 'object'

/*
  ---------
  Functions
  ---------
*/

// This call works because of hoisting.
// (function declaration is moved to the top of the file)
printHi(2);

// Function declaration
function printHi(myNumber) { // new scope created
    let x = 'hi';
    console.log(x);
    return myNumber * 2;
} // scope end

// Function expression
// This way of writing functions does not get hoisted.
let printHello = function (what) {
    let x = 'hello';
    console.log(x);
}

let returnValue = printHi(12);
console.log(returnValue);

// ES6 arrow function
const thisFunction = param1 => console.log('Arrow Func', param1);
const thatFunction = (param1, param2) => {
    let longerFunc = 2;
    return 3;
}
const noParamFunction = () => 3;
thisFunction(10);

/*
  -----------------
  If, Switch & Loop
  -----------------
*/

let condition = true;
if (condition) { // new scope
    console.log('yes');
}
else {
    console.log('no');
}

function myFunc() {
    let x = 10;
    if (true) {
        var inner = 10; // function scope
    }
    console.log(inner); // This would be an error if inner was 'let' or 'const'.
}
myFunc();

// Ternary operator is a short if statement:
condition === true ? console.log('yes') : console.log('no');
const value = condition ? 1 : 2;

// Switch statement:
let switchVar = 3;
switch (switchVar) {
    case 0:
        console.warn('small');
        break;
    case 3:
        console.log('right');
        break;
    case 5:
        console.warn('big');
        break;
    default:
        console.error('unknown');
}

// for and while loops:
for (let i = 0; i < 5; i++) {
    console.info('for info!!:', i);
}

let j = 0;
while (j < 2) {
    console.info('while info!!:', j);
    j++;
}

/*
  ----------------
  DOM Manipulation
  ----------------
*/

// Selecting elements:
document.documentElement; // <html>
document.body; // <body>

let myH1 = document.getElementById('heading');
let myCards = document.getElementsByClassName('card');
// Use querySelector or querySelectorAll for selecting with CSS selectors:
console.log(document.querySelector('#heading'));
console.log(document.querySelectorAll('.card'));

// Change element content (entire HTML tree) or text:
myH1.innerHTML = 'This was changed!';
myH1.textContent = 'This was changed!';

// Change CSS
// document.querySelector('body') == document.body
document.body.style.backgroundColor = 'lightgrey';
myH1.style.color = 'blue';

// Changing the element class list:
myH1.classList.add('card');
myH1.classList.contains('card');
myH1.classList.remove('test');

// Changing element attributes:
myH1.setAttribute('data-my-heading', '10');
console.log(myH1.getAttribute('title'));
