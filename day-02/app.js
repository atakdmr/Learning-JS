//? Class 01 - Numbers
let final_1 = '10'; //! string
final_1 = Number(final_1); //! 10 (number)
final_1 = parseInt(final_1); //! 10 (number)
final_1 = parseFloat(final_1 + .7); //! 10.7
final_1 = parseInt('a'+final_1); //! NaN (not a number)
final_1 = Number.isInteger(final_1); //! false

let number = 10.98723;
final_1 = number.toPrecision(5);
final_1 = number.toFixed(2);
final_1 = Math.round(3.5); //! closest
final_1 = Math.floor(Math.random() * 100 + 1); //! 1 mean starts with 1 and floor means rollin down

// console.log(typeof final_1);
// console.log(final_1);


//? Class 02 - Arrays
// let product1 = 'Iphone 15';
// let product2 = 'Iphone 16';
// let product3 = 'Iphone 17';

let products = ['Iphone 15', 'Iphone 16', 'Iphone 17'];
let prices = [100, 200, 300]; 
let colors = ['Cherry', 'White', 'Green'];

let final_2;

final_2 = (products[0] + ' - ' + prices[0] + ' - ' + colors[0]);
final_2 = (products[1] + ' - ' + prices[1] + ' - ' + colors[1]);
final_2 = (products[2] + ' - ' + prices[2] + ' - ' + colors[2]);

let product1 = [
     'Iphone 15',
     100,
     ['Cherry', 'White', 'Green']
];

let product2 = ['Iphone 16', 200, 'White'];
let product3 = ['Iphone 17', 300, 'Green'];

// //! edit
product1[0] = 'Iphone 15 Pro'

final_2 = product1[0] + ' - ' + product1[1] + ' - ' + product1[2][0];

console.log(final_2);


//? Class 03 - Array Methods
let students = ['John','Ada','Ata'];

let final_3;

final_3 = students.length;
final_3 = students.toString(); //! John,Ada,Ata
final_3 = students.join(' ');//! John Ada Ata

// //! delete the last item
final_3 = students.pop();

// //! delete the first item
final_3 = students.shift();

// //! adding the item to the last index
final_3 = students.push('Rick');

// //! adding the item to the first index
final_3 = students.unshift('Rick');

// //! searching for the item
final_3 = students.indexOf('Ata');

// //! searching for the item - 2
final_3 = students.includes('Ata');

// //! delete, add at the same time
final_3 = students.splice(0,1,'Karen','Daryl');

console.log(final_3);
console.log(students);


//? Class 03 - Array Assignments
let final_4;
//todo Q:1 Create an array that has 4 random fruits.
let fruits = ['Melon','Banana','Peach','Cherry'];
console.log(fruits);

//todo Q:2 What is the length of the array?
final_4 = fruits.length;
console.log(final_4);

//todo Q:3 Print the first and the last items of fruits array.
final_4 = fruits[0];
console.log(final_4);
final_4 = fruits[fruits.length - 1]; //! length = 4, 4-1 = 3. last item of an array.
console.log(final_4);

//todo Does watermelon is in the array?
final_4 = fruits.includes('Watermelon');
console.log(final_4);

//todo Add strawberry to last length of an array.
final_4 = fruits.push('Strawberry');
console.log(fruits);

//todo Delete the last 2 item of array.
final_4 = fruits.splice(fruits.length - 2,2);
console.log(fruits);

//todo Store the following information in an array and calculate each student's age and grade point average.
let student1 = [
    'Ata',
    'Akdemir',
    2008,
    [60,50,20]
];

let student2 = [
    'Ada',
    'Tan',
    2010,
    [90,90,70]
];

let student3 = [
    'Rick',
    'Grimes',
    1980,
    [30,100,20]
];

let s1_age = 2025 - student1[2];
let s2_age = 2025 - student2[2];
let s3_age = 2025 - student3[2];
console.log('Age: ' + s1_age);
console.log('Age: ' + s2_age);
console.log('Age: ' + s3_age);let avg_grade_s1 = (student1[3][0] + student1[3][1] + student1[3][2]) / 3;
let avg_grade_s2 = (student2[3][0] + student2[3][1] + student2[3][2]) / 3;
let avg_grade_s3 = (student3[3][0] + student3[3][1] + student3[3][2]) / 3;console.log('Grade: ' + parseInt(avg_grade_s1));
console.log('Grade: ' + parseInt(avg_grade_s2));
console.log('Grade: ' + parseInt(avg_grade_s3));


//? Class 04 - Objects
//! key - value
let user1 = {
    'name': 'ata',
    'surname': 'akdemir',
    'age': 17,
    'address': {
        'city': 'izmir',
        'state': 'torbali'
    },
    'hobbies': [
        'books', 'hiking'
    ]
};

let user2 = {
    'name': 'ada',
    'surname': 'tan',
    'age': 15,
    'address': {
        'city': 'antep',
        'state': 'cop'
    },
    'hobbies': [
        'crying', 'music'
    ]
};

let users = [user1, user2]; let final_5; final_5 = user1['name'];
final_5 = user1['surname'];
final_5 = user1['address'];
final_5 = user1['address']['city'];
final_5 = user1.address.state;
final_5 = user1.hobbies[1]; console.log(users[1].address.state);
console.log(final_5);


//? Objects Assignments
//todo Q:1 Store the order information within the object.
let product4 = {
    'p_id': 5,
    'p_name': 'iphone-16-pro',
    'p_url': 'https://abc.com/iphone-16-pro/',
    'p_price': 75000
};

let product5 = {
    'p_id': 6,
    'p_name': 'iphone-17-pro',
    'p_url': 'https://abc.com/iphone-17-pro/',
    'p_price': 85000
};

let order1 = {
    'o_id': 101,
    'customer-id': 12,
    'o_date': '31.12.2025',
    'payment_method': 'credit-card',
    'cargo_address': {
        'city': 'izmir',
        'state': 'torbali'
    },
    'purchased_products': [
        product4,
        product5
    ],
};

let order2 = {
    'o_id': 102,
    'customer-id': 12,
    'o_date': '30.11.2025',
    'payment_method': 'credit-card',
    'cargo_address': {
        'city': 'izmir',
        'state': 'selcuk'
    },
    'purchased_products': product5,
};

// //todo Q:2 Calculate the total amount paid including VAT for each order separately. (VAT 20%)
let vat = 1.20;

// //! lets calculate order 1's products first.
let totalAmountOfOrder1 = (order1.purchased_products[0].p_price + order1.purchased_products[1].p_price) * vat;
console.log('Order 1: ' + totalAmountOfOrder1);

let totalAmountOfOrder2 = (order2.purchased_products.p_price) * vat;
console.log('Order 2: ' + totalAmountOfOrder2);

//todo Q:3 Calculate the total amount paid including VAT for all orders.
let totalAmountOfAllOrders = 'Total Amount of All Orders: ' + (totalAmountOfOrder1 + totalAmountOfOrder2);
console.log(totalAmountOfAllOrders);


//? Operators
let final_6;
let a = 10, b = 10, c = 20;

//! arithmetic operators - aritmetik operatorler - basic math operators.
final_6 = (a + b); //! 20
final_6 = (a - b); //! 0
final_6 = (a * b); //! 100
final_6 = (a / b); //! 1
final_6 = (a % b); //! 0
final_6 = a++;
final_6 = --a;
console.log(final_6);

//! assignment operators - atama operatorleri
final_6 = a;
final_6 = (a + b);
final_6 = a + final_6;
final_6 += a;
final_6 %= a;
console.log(final_6);
//! comparison operators - karsilastirma operatorleri
final_6 = (a == b);
final_6 = (a == c);
final_6 = (a != b);
final_6 = (2 == '2');
final_6 = (1 === '1');
final_6 = (a > b);
console.log(final_6);
//! logical operators - mantiksal operatorler

//! -> on day - 03! <-

console.log(final_6);