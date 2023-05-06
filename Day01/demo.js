/**
 * == Let .. var .. const --> Done
 * == Spread operator --> Done
 * == rest parameters --> Done
 * == Destructring --> Done
 * == String API --> Done
 * == Object Features --> Done
 * == Arrow Functions --> Done
 * == Array API --> Done
 * ---------------------------
 */
/**=======================
 * Var
 * =======================
 *  == reassign
 *  == redeclartion
 *  == Hoisting
 *  == function scope
 *  == added on window Object
 * -----------------------------
 * let
 * -----------------------------
 * == reassign
 * == can't redeclartion
 * == can't Hoisting
 * == block scope
 * == not added on window object
 * -----------------------------
 * const
 * -----------------------------
 * == can't  reassign
 * == can't redeclartion
 * == can't Hoisting
 * == block scope
 * == not added on window object
 *
 *
 * ========= */

// function test() {
//   let fname = "mona";
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//     console.log(fname);
//   }
// }

// test();

// const PI = 3.14;
// PI = 2;

// const arr = ["ahmed", "ali"]; // refence

// const person = { fname: "ali" };

// person = {} // reassign

/** ===========Spread Operator ============ */

// let arr1 = ["ahmed", "ali"];
// let arr2 = [true, "mona", ...arr1, "new value"];

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let numbers = [20, 30, 10, 3, 5, 80];
// console.log(Math.min(...numbers));

// let person1 = {
//   fname: "ali",
//   age: 20,
// };

// let person2 = { id: 1, ...person1, color: "red" };

// console.log("person1 :", person1);
// console.log("person2 :", person2);

/** ================= rest Parameters ==================== */

// function display(a, b, ...rest) {
//   console.log(rest);
// }

// display("ahmed", "ali");
/**============ Destrcuring ================ */

// function useArr() {
//   return [
//     0,
//     function () {
//       console.log("Hello");
//     },
//   ];
// }

// let [x, y] = useArr();

// y()

// let person = { fname: "ali", qunatity: 20, lname: "ahmed", color: "red" };

// let { qunatity } = person; // syntax suger

// console.log(qunatity);
// let fname = "ahmed";
// let age = 20;

// let person = {
//   fname,
//   age,
//   display() {
//     console.log(this.fname);
//   },
// };

// console.log(person);

// person.display();

// let person = { fname: "Ali", lname: "ahmed", color: "red" };

// let keys = Object.entries(person);

// console.log(keys);

/** Object.assign ---> Search */

/*** String API */

// let fname = "           ahmed";
// let lname = "ali";

// console.log(`Hello from ITI ${fname.trimStart()},${lname}`);
/**
 * include
 * trim
 * startWith
 * endWith
 * TrimStart
 * TrimLeft
 * includes
 */

// let str = "Hello from iti";
// console.log(str.includes("Hello"));
/** */

/**IIFE -->  */

// (function (fname) {
//   console.log("Hello", fname);
// })("mona");

/**
 * Arrow Function
 */

// let add = (a) => a + a; // arrow function
// console.log(add(5, 10));

// var fname = "ahmed";

// // this .. window

// let person = {
//   fname: "ali",
//   display: function () {
//     // this... person

//     setTimeout(() => {
//       console.log(this.fname);
//     }, 2000);
//   },
// };

// person.display();
/** =========================
 *  == find
 *  == findIndex
 *  == filter
 *  == map
 *  == every
 *  == some
 *  == foreach
 *  == reduce (Search)
 * =============================
 */

// let products = [
//   {
//     id: 1,
//     pName: "laptop",
//     price: 200,
//     cat: "elec",
//   },
//   {
//     id: 2,
//     pName: "phone",
//     price: 100,
//     cat: "elec",
//   },
//   {
//     id: 3,
//     pName: "Book",
//     price: 100,
//     cat: "school",
//   },
//   {
//     id: 4,
//     pName: "Pen",
//     price: 50,
//     cat: "school",
//   },
//   {
//     id: 5,
//     pName: "iphone",
//     price: 50,
//     cat: "elec",
//   },
// ];

// var itiTracks = [
//   { id: 1, fname: "ali" },
//   { id: 1, fname: "ahmed" },
// ];

let arr = ["mona", "hhmango", "mm"];

arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});
// var result = arr.some((item) => item.startsWith("m"));
// console.log(result);

// var result = itiTracks.map((item, index) => {
//   return { ...item, color: "red" };
// });

// console.log(result);
// var result = products.filter((item, index) => index >= 1);
// console.log(result);

// var result = arr.findIndex((item) => item.startsWith("a"));

// console.log(result);

// function test(a, b) {
//   console.log(a);
//   console.log(b);

//   console.log("--------------");
// }

// for (let i = 0; i < arr.length; i++) {
//   test(arr[i], i, arr);
// }
// js
// arr.find(function () {
//   console.log(arguments);
// });

/*


var result = findElement();

console.log(result);

function display(item, index) {
  console.log(item);
  console.log(index);
}

// js
for (let i = 0; i < arr.length; i++) {
  display(arr[i], i, arr);
  console.log("-----");
}
*/

/**
 *
 *
 */

// a = 3
// b = 4

// a = 4
// b = 3 // Temp

// function displat(){
//     return
// }
