/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // This is already correct for Implicit Type Conversion, but adding the Number() method for Explicit Type Conversion improves clarity
console.log("The result is: " + result); 

let isValid = Boolean("false");
if (isValid) {
    console.log(Boolean("This is valid!")); // Updated console.log to include the Boolean() method for Explicit Type Conversion - now evaluating to 'true'
}

let age = "25";
let totalAge = Number(age) + 5; // Updated age to include the Number() method for Explicit Type Conversion - correcting string concatenation to addition (25 + 5)
console.log("Total Age: " + totalAge);

// Part 2:

let total = "10" * 2;
console.log("The total is: " + total); // Example of Implicit Type Conversion

let number = null;
let implicitValue = number;
console.log("The value of null is: " + implicitValue); // Example of Implicit Type Conversion prior to implementing Explicit Type Conversion

let value = null;
let numberValue = Number(value);
console.log("The value of null is: " + numberValue); // Example of Explicit Type Conversion - using null
