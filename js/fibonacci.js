// const numberFibonacci = (n) => {
//   if (n <= 1) {
//     return [0, 1];
//   } else {
//     const fib = numberFibonacci(n - 1);
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fib;
//   }
// };
// console.log(numberFibonacci(20));

// -------------------------------------------------------------------------
// let fib = [0, 1];
// const numberFibonacci = (n) => {
//   if (n <= 1) {
//     return;
//   } else {
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     numberFibonacci(n - 1);
//   }
// };
// numberFibonacci(20);
// console.log(fib);

// -------------------------------------------------------------------------

// const resArr = [0, 1];
// function fib(n) {
//   for (let i = 2; i <= n; i++) {
//     resArr.push(resArr[i - 2] + resArr[i - 1]);
//   }
// }
// fib(15);
// console.log(resArr);

// -----------------------------------------------------------------------------------

// function f2(n) {
//   let a = 0;
//   let b = 1;
//   const arr = [0];
//   do {
//     let temp = a + b;
//     b = a;
//     a = temp;

//     arr.push(temp);
//   } while (arr.length <= n);

//   return arr;
// }

// console.log(f2(15));
