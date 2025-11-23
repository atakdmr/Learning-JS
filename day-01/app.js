//? Class 01 - Introduction to JavaScript
console.log("Hi there! Welcome to JavaScript.");

let a = 100; //! number
let b = 200;
let c = 300;
let kdv = 0.18;

let str = "Hello"; //! string

a = 150;

console.log("KDV'siz Fiyat: " + a);
console.log("KDV'li Fiyat: " + (a + a * kdv));

//! only english characters and _ are allowed in variable names
let firstName = "Ata";
let lastName = "Akdemir";

firstName = "John";
console.log("Full Name: " + firstName + " " + lastName);

//? Class 02 - Data Types in JavaScript
let productName = "Iphone 16"; //! string ""
let productPrice = 28999; //! number 100
let isAvailable = true; //! boolean true/false
let productColor; //! undefined 
let productSize = null; //! null

console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof isAvailable);
console.log(typeof productColor);
console.log(typeof productSize);

//? Class 03 - Variables
//! Student 1 - Lisa Gilby
let student1_Name = "Lisa";
let student1_Surname = "Gilby"
let student1_DateOfBirth = 2012;
let student1_Age = 2025 - student1_DateOfBirth;
let student1_Math_1 = 70;
let student1_Math_2 = 70;
let student1_Math_3 = 80;

let student1_Math_Avg = ((student1_Math_1 + student1_Math_2 + student1_Math_3) / 3);
let student1_Success_Status = (student1_Math_Avg >= 50);
console.log(parseInt(student1_Math_Avg));
console.log(student1_Success_Status);
//! Student 2 - John Gilby
let student2_Name = "John";
let student2_Surname = "Gilby"
let student2_DateOfBirth = 2010;
let student2_Age = 2025 - student2_DateOfBirth;
let student2_Math_1 = 40;
let student2_Math_2 = 40;
let student2_Math_3 = 50;

let student2_Math_Avg = ((student2_Math_1 + student2_Math_2 + student2_Math_3) / 3);
let student2_Success_Status = (student2_Math_Avg >= 50);
console.log(parseInt(student2_Math_Avg));
console.log(student2_Success_Status);


//? Class 04 - Strings
let userName = "Kim";
let userSurname = "Possible";
let age = 17;
let city = "Izmir"

let message = "My name is: " + userName + " and my surname is: " + userSurname + ". " + city + " is the city I'm living." + "I have left " + (65-age) + " years to retire."

//! Template strings ``
mesaj = `My name is: ${userName} and my surname is: ${userSurname}. ${city} is the city I'm living.I have left ${65-age} years to retire.`
console.log(message);


//? Class 05 - String Methods
let courseName = "Full Stack Web Development";
let final;

final = courseName.toLowerCase(); //! convert all characters to lowercase
final = courseName.toUpperCase(); //! convert all characters to uppercase
final = courseName.length; //! get number of characters in the string
final = courseName[0]; //! get the first character of the string
final = courseName.slice(0,4); //! extract substring from index 0 up to (not including) 4
final = courseName.slice(11); //! extract substring from index 11 to the end
final = courseName.slice(-11); //! extract the last 11 characters
final = courseName.substring(0,11); //! get substring from index 0 up to (not including) 11
final = courseName.replace("Full","Half"); //! replace first occurrence of "Full" with "Half"
final = courseName.trim(); //! remove whitespace from both ends of the string
final = courseName.trimStart(); //! remove whitespace from the start (left) of the string
final = courseName.indexOf("Web"); //! find starting index of the substring "Web" (or -1 if not found)
final = courseName.split(" "); //! split string into an array of words using space as separator
final = courseName.split(" ")[3]; //! get the fourth word from the split array (index 3)


console.log(final);

//? Class 06 - String Method Assignments
let url = "https://www.sadikturan.com/";
let courseName_2 = "Full Stack Web Development";
let final_2;
//todo Question - 1 : What is the length of url?

final_2 = url.length;

console.log(final_2);

//todo Question - 2 : How many words in courseName_2?

final_2 = courseName_2.split(" ");

console.log(final_2);

//todo Question - 3 : Does url starts with [https]?

final_2 = url.startsWith("https");

console.log(final_2);

//todo Question 4 : Does courseName_2 has 'Learning' words in the variable?

final_2 = courseName_2.includes("Learning");

console.log(final_2);

//todo Question 4 : Create a string information using url and courseName_2 with the following information.
//? https://www.sadikturan.com/full-stack-web-development

final_2 = courseName_2.toLowerCase().split(" ").join("-"); //! splits " " and replace them with "-"
let courseUrl = url + final_2;
console.log(courseUrl);

