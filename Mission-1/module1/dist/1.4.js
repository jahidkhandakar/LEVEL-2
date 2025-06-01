"use strict";
//*______________________Basic Data Types_______________________________
//string---------------------------------------------
let firstName = "Jahid";
//number
let roll = 123;
//boolean
let isActive = true;
//undefined
let x = undefined;
//null
let y = null;
//Array-----------------------------------------------
let frinds = ["Jahid", "Sakib", "Shakib"];
let rolls = [1, 2, 3, 4, 5];
rolls.push(6); //push method is used to add a new element in the array
//Tuple-----------------------------------------------
//Tuple-> array-> order-> type of values
let coOrdinates = [12.34, 45.67];
let ageName = [23, "Jahid", true];
ageName.push(45);
ageName.push("Sakib");
ageName.push(false);
ageName[0] = 47;
console.log(ageName); // 47
