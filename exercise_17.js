// Sort an Array Alphabetically using the sort Method

// The sort method sorts the elements of an array according to the callback function.

// For example:

// function ascendingOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }

// ascendingOrder([1, 5, 2, 3, 4]);

// This would return the value [1, 2, 3, 4, 5].

// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a === b ? 0 : a < b ? 1 : -1;
//   });
// }

// reverseAlpha(['l', 'h', 'z', 'b', 's']);

// This would return the value ['z', 's', 'l', 'h', 'b'].

// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------

// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    })
    // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//   function alphabeticalOrder(arr) {
//     // Only change code below this line

//     return arr
//     // Only change code above this line
//   }

//   alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// First lets go over the '?', which is a ternary operator.
// Syntax:
// condition ? val1 : val2
// If the condition is true, the oeprator has the value of val1. Otherwise it has the value of val2.

// For example:
// const status = age >= 18 ? "adult" : "minor";
// This statement assigns the value "adult" to the variable "status" if age is 18 or more. Otherwise, assign it minor

// Second, lets go over the sort() basics.
// 2 Syntaxes:
// sort(), sort(compareFn)

// Let's dive into the compareFn.
// A function that determines the order of the elements. The function is called with the following arguments.
// 'a' - The first element for comparison
// 'b' - The second element for comparison

// It should return a number where:
// 1) a negative number indicates that a should come before b
// 2) a positive value indicates that a should come after b
// 3) zero or NaN indicates that a and b are considered equal

// for memory purposes: (a, b) => a - b sorts in ascending order

// Now sorting array of objects is a little different, as you sort by values of one of their properties.
// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];

//   // sort by value
//   items.sort((a, b) => a.value - b.value);

//   // sort by name
//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     // names must be equal
//     return 0;
//   });

// For our example, not exercise we see: 
// a === b ? 0 : a < b ? 1 : -1;
// Which can be translated into if a is less than b, return 1, if not return -1. if equal, then 0