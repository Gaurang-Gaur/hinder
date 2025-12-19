// let a = 10;

// const heavyComputationPromise1 = new Promise(solvePromise1);
// const heavyComputationPromise2 = new Promise(solvePromise2);

// function solvePromise2(resolve, reject) {
//   setTimeout(() => {
//     resolve("I fulfilled the Promise2");
//   }, 5000);
// }
// function solvePromise1(resolve, reject) {
//   setTimeout(() => {
//     resolve("I fulfilled the Promise1");
//   }, 10000);
// }

// function test() {
//   console.log("starting of function");
//   const valOfComputation1 = heavyComputationPromise1.then((data) =>
//     console.log(data)
//   );
//   console.log("In between Promise");
//   const valOfComputation2 = heavyComputationPromise2.then((data) =>
//     console.log(data)
//   );

//   console.log("ending of function");
// }
// test();
// console.log("Program end");

//  function test1() {
//   console.log("i am ");
//   const promiseMe = new Promise((resolve, reject) => resolve("I am resolve"));

//   return promiseMe;
// }

// console.log(test1());
// console.log("End!");

// const p = () => {
//   return new Promise((resolve, reject) => resolve("I am resolving by await"));
// };

// async function test1() {
//   console.log("i am ");
//   const promiseMe = await p(); //block code
//   console.log("I am hola");

//   console.log(promiseMe);

//   return "data";
// }

// test1().then((data) => {
//   console.log(data);
// });
// console.log("End!");
