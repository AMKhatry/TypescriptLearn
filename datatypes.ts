"use strict";
let fname;
fname = "Naani";
let newname = fname.toUpperCase();
console.log(newname);

let age: number;
age = 28;

let isValid : boolean = true;
console.log(isValid);

let listA : string[];
listA = ["A", "B","C"];

let listNum : Array<number>;
listNum = [1,2,3,4,5];
let results = listNum.filter((num)=>num>2);
let num = listNum.find((num)=> num ===2);
console.log(results);
