//? Class 01 / If - Else
let username = 'atakdmr';
let password = 1234;
let condition = (username == 'atakdmr');

if (condition) {
    if (password == 1234) {
        console.log('you have joined the app.');
    }
    else {
        console.log('wrong password.')
    }
}

else {
    console.log('wrong username');
}


//? Class 02 / If - Else 2

//! age >= 18
//! graduation == 'highschool' or 'university'

let age = 20;
let graduation = 'university';

if (age >= 18 && (graduation == 'highschool' || graduation == 'university')) {
    console.log("you can get the driver license.");
}
else {
    console.log("you cant get the driver license.");
}

//! and(&&) / or(||)

//? If/Else Applications
let num = 66;
//todo 1- Check whether a number is between 50 and 100.
if (num >= 50 && num <= 100) {
    console.log('the numbere is higher than 50, lower than 100: ' + num);
}
else {
    console.log('the number is lower than 50 or higher than 100:' + num);
}

//todo 2- Check whether a number is a positive even number.
if (num > 0) {
    if (num % 2 == 0) {
        console.log('number is positive and even. -> ' + num);
    }
    else {
        console.log('number is not even. -> ' + num);
    }
}
else {
    console.log('number is not positive -> ' + num);
}

//todo 3- Compare the sizes of x, y, z numbers. (Homework: use else if)
let x = 10, y = 15, z = 5;

if (x > y && x > z) {
    console.log('x is the largest.');
}
else if (y > x && y > z) {
    console.log('y is the largest.');
}
else if (z > x && z > y) {
    console.log('z is the largest.');
}
else {
    console.log('some numbers are equal.');
}
//todo 4- Calculate the average based on 2 visa (40%) and 1 final (60%).
//    a- If the average is 50 or above, write "passed", otherwise "failed".
//    b- To pass, even if the average is 50, the final grade must be at least 50.
//    c- If 70 is received on the final, consider it passed even if the average is below 50.
//todo 4 - Q:1
let visa1 = 20;
let visa2 = 60;
let final = 70;

let avg = parseInt((((visa1 + visa2) / 2) * .4) + (final * .6));

if (avg >= 50) {
    console.log('you have passed the exam. your note: ' + avg);
}
else {
    console.log('you failed. your note: ' + avg)
}

//todo 4 - Q:2
if (avg >= 50 && final >= 50) {
    console.log('you have passed the exam. your note: ' + avg);
}
else {
    console.log('you failed. your note: ' + avg)
}

//todo 4 - Q:3
if (final >= 70) {
    console.log('you have passed the exam. your note: ' + avg);
}
else {
    console.log('you failed. your note: ' + avg)
}


//? Class 03 / For Loop

// for(let i = 1; i <= 100;i++){
//     console.log(i);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 12, 53];
// let toplam = 0;
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);

//     toplam += numbers[i];
// }

// console.log('Total: ' + toplam);


//? Class 04 / While Loop
//! break - continue
// let i = 1;
// while (i <= 10) {
//     i++;
//     if (i % 2 == 1) {
//         break;
//     }
//     console.log(i);
// }

//? Application: Loops

let numbers = [3, 5, 7, 8, 12, 23, 45, 66];

//todo 1- Print the square of each number in the array.
// for (let i = 0; i < numbers.length; i++) {
//     console.log(Math.pow(numbers[i], 2));
// }

//todo 2- Which numbers in the list are multiples of 5?
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 == 0) {
//         console.log(numbers[i]);
//     }
// }

//todo 3- Print the numbers between 50-100 in descending order.
// for (let i = 100; i > 50; i--) {
//     console.log(i);
// }

// let products = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];
// //todo 4- Convert all products in the list to uppercase.
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].toUpperCase());
// }

//todo 5- How many items in the product list contain the word "samsung"
// let count = 0;
// for (let i = 0; i < products.length; i++) {
//     if(products[i].toLowerCase().includes('samsung')){
//         count++;
//     }
// }
// console.log(count + ' samsung.');

let students = [
    { "ad": "ata", "soyad": "akdemir", "notlar": [21, 17, 30] },
    { "ad": "ada", "soyad": "tan", "notlar": [80, 50, 75] },
    { "ad": "rick", "soyad": "grimes", "notlar": [70, 70, 80] }
];

//todo 6- Print each student's average grade and pass/fail status from the student list.
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grades = student.notlar;

    let total = 0;

    // notları toplama
    for (let j = 0; j < grades.length; j++) {
        total += grades[j];
    }

    let avg = total / grades.length;
    let status = avg >= 60 ? "Geçti" : "Kaldı";

    console.log(student.ad + " " + student.soyad + " | Ortalama: " + avg + " | " + status);
}



//todo 7- What is the overall average of all students?
let overallTotal = 0;

for (let i = 0; i < students.length; i++) {
    let grades = students[i].notlar;
    let total = 0;

    for (let j = 0; j < grades.length; j++) {
        total += grades[j];
    }

    let avg = total / grades.length;
    overallTotal += avg;
}

let overallAvg = overallTotal / students.length;
console.log("Overall Average:", overallAvg);
