// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.


// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------


// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers 
// (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = arr => { // equal to function squarelist(arr) {...}
    // Only change code below this line

    return arr
        // Filters the elements of the input array. It keeps only the which are greater than 0 (num > 0)
        // And where the number is an integer (num % parseInt(num) === 0)
        // the parseInt(num) === 0 is there to ensure it is an actual integer.
        .filter(num => num > 0 && num % parseInt(num) === 0)

        // Arrow Fn to traditional Fn looks like this:
        // .filter(function(num) {
        //   return num > 0 && num % parseInt(num) === 0;
        // })

        // Maps each remaining element of the filtered array to its square using the Math.pow() function .
        // It raises each element (num) to the power of 2 via (Math.pow(num, 2))) 
        .map(num => Math.pow(num, 2));

        // Arrow Fn to traditional Fn looks like this:
        // .map(function(num) {
        //   return Math.pow(num, 2);
        // });

    // Only change code above this line
};
//   const squareList = arr => {
//     // Only change code below this line
//     return arr;
//     // Only change code above this line
//   };

//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);


// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------


