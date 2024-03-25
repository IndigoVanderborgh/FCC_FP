// Return a Sorted Array Without Changing the Original Array

// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    return [].concat(arr).sort(function(a, b) {
        return a - b;
    });
  // Only change code above this line
}

nonMutatingSort(globalArray);


// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line


//   // Only change code above this line
// }

// nonMutatingSort(globalArray);

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// Let's break this down:

// return [].concat(arr).sort(function(a, b) 
// 1) [] -> we initialize an empty array with []. This will be our starting point for concat.
// 2) .concat(arr) -> creates new array by combining the empty array ([]) and the existing arr. It basically makes a shallow copy of the arr array
// 3) .sort(function(a, b) {...}) -> sorts the elements of the copied array.
//     return a - b;
// 4) Sorting in ascending order, as if the result is positive, then b comes before a and vice versa.

// });