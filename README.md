# mapfilterreduce

my own created map,filter,function methods screen shots with outputs refer here:https://github.com/manuhegde198924/mapfilterreduce/issues/1


Javascript is a prototype-based language. 



It means that every native function can receive custom functions or having its original functions modified.


the filter function is an array prototype function that returns all elements that match against the callback passed as argument
const data = [1, 2, 3, 4, 5];
Array.prototype.myCustomFilter = function (fn) {
  const filtered = []; // it will receive all values that match to condition passed in fn callback.

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const filteredData = data.myCustomFilter(function (el) {
  if (el > 2) return el;
});
console.log(filteredData);
The skeleton of the method is:

Array.prototype.myFilter=function(callback){}

We will write the function in four steps:

   Array.prototype.myFilter=function(callback){}
   We will write the function in four steps:

 this gives us the array and callback is the function passed to be invoked later.

We check using if condition whether the condition is met. 
We collect only those elements in the array that pass the test.
own reduce function
Array.prototype.myReduce = function (callback) {


  let a = 0;

  
  for (let i = 0; i < this.length; i++) {


  
    callback((a = a + this[i]));
  }

  
  return a;
  
};


const arr = [5, 21, 61, 8, 1];



let result = arr.myReduce((acc, item) => acc + item);


console.log(result);


arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])


Array.prototype.myReduce = function(callback)(){}


Declare an accumulator


Run a for loop from 1 to n



Accumulate the sum all the elements in the array in the accumulator


Return the accumulator



This myReduce() works just like the original reduce()method. And gives us the correct output.


Array.prototype.myMap = function (callback) {


  const arr = [];

  
  for (let i = 0; i < this.length; i++) {

  
    arr.push(callback(this[i]));
  }

  
  return arr;

  
};
const arr = [5, 2, 6, 8];


const r = arr.myMap((item) => item * 3);


console.log(r);


Declare an array that stores the results.


Run a loop from 1 to n. ( n is the length of the array).


Push the results in the array declared in step


Return the result array


this is a keyword in JavaScript. 

this gives us the array that invoked the myMap() method



