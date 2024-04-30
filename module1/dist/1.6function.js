"use strict";
// learning function
// Normal function
// you can assign the function parameters type LIKE which type of parameters you want to use here
//  you can assign the function return type 
// also you can assign default value
// example:
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(5, 6);
// error will be shown if you give other types of arguments here instead of number
//  add(5, "2")
// Arrow function
const addArrow = (num1, num2) => num1 + num2;
