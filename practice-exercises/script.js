// Task 1: Make this print: You have 3 items. Total: $14.97

// const price = "4.99";
// const qty = 3;

// fix the line below
// console.log("You have " + qty + " items. Total: $" + price * qty);

const price = "4.99";
const qty = 3;
let priceNum = parseInt(price, 10);

console.log("You have " + qty + " items. Total: $" + priceNum * qty);

// Task 2: Create calcTotal(bill, tipPercent) that returns the final total.

// calcTotal(40, 20) should return 48
// calcTotal(18.5, 15) should return 21.28 (rounded to 2 decimals)

function calcTotal(bill, tipPercent) {
    const tip = tipPercent / 100;
    const tipAmount = bill * tip;
    const total = bill + tipAmount;

    const finalBill = Math.round((total + Number.EPSILON) * 100) / 100;
    return finalBill;
}

console.log(calcTotal(40, 20));
console.log(calcTotal(18.5, 15));

// Task 3: 

// Given:

// const nums = [3, 12, 7, 20, 5, 10];

// Create a new array that contains only even numbers, then square them.
// Expected result: [144, 400, 100]

const nums = [3, 12, 7, 20, 5, 10];
const evenNums = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        const sqNum = nums[i] ** 2;
        evenNums.push(sqNum);
    }
}

console.log(evenNums);

// Task 4: Write countWords(words) that returns an object like { apple: 2, pear: 1 }.

// countWords(["apple", "pear", "apple", "orange", "pear", "apple"]);

// Expected: { apple: 3, pear: 2, orange: 1 }

function countWords(words) {
    counts = {}
}