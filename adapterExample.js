"use strict";

function singleInput(fn) {
  return function one(arg) {
    return fn(arg);
  };
}

function multipleInputs(...args) {
  return args;
}

let testAdapter = singleInput(multipleInputs);

console.log(testAdapter(1,2,3,4));