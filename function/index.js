// printing numbers from 1 to 10 //

function list() {
    let i;
    for (i = 1; i <= 10; i++) {
        console.log(i + "<br>");
    }
}
list();


// missing value from array //

function findMissingNumbers(array) {
    let missingNumbers = [];

    for (let i = 0; i < array.length - 1; i++) {
        let currentNumber = array[i];
        let nextNumber = array[i + 1];

        if (nextNumber - currentNumber > 1) {
            console.log(nextNumber, currentNumber);
            for (let j = currentNumber + 1; j < nextNumber; j++) {
                missingNumbers.push(j);
            }
        }
    }

    return missingNumbers;
}

const array = [1, 2, 3, 5, 7, 9, 10, 11, 12, 15, 19, 20, 21, 22, 25, 27, 29, 30];
const missingNumbers = findMissingNumbers(array);
console.log("Missing numbers:", missingNumbers);

// temprature converter //

let text = "The temperature is " + toCelsius(77) + " Celsius.";


function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

toCelsius(text);


function a(p1, p2) {
    return 'I Am ' + p1 + ' and surname is  ' + p2;
}
function b(my1, my2) {
    return function () {
        return a(my1, my2);
    }
}
let m1 = "Atharva";
m2 = "Aher";
var wrapper = b(m1, m2);
console.log(wrapper());