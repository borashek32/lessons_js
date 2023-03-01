console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// const sum = function (a: number) {
//   return function (b: number) {
//     return a + b
//   }
// }
// const sum1 = (a: number) => (b: number) => a + b
// console.log(sum(1)(3))
// console.log(sum1(1)(3))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// const makeCounter = () => {
//   let i = 1
//   return function() {
//     return i++
//   }
// }
//
// const counter = makeCounter()
// console.log(counter()) // 1
// console.log(counter()) // 2
//
// const counter2 = makeCounter()
// console.log(counter2()) // 1
// console.log(counter())  // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// const makeCounter = (num: number) => {
//
//   let value: number
//
//   const set = () => {
//     value = num
//     return value
//   }
//   const increase = () => {
//     value = value + 1
//     return value
//   }
//   const decrease = () => {
//     value = value - 1
//     return value
//   }
//   const reset = () => {
//     value = 0
//     return value
//   }
//
//   return {
//     increase: increase,
//     decrease: decrease,
//     reset: reset,
//     set: set
//   }
// }
//
// console.log("------------------------------")
//
// const counter = makeCounter(2)
// console.log("set: " + counter.set())
// console.log("increase: " + counter.increase())
// console.log("increase2: " + counter.increase())
// console.log("increase3: " + counter.increase())
// console.log("decrease: " + counter.decrease())
// console.log("reset: " + counter.reset())
//
// console.log("------------------------------")
//
// const counter2 = makeCounter(3)
// console.log("set: " + counter2.set())
// console.log("increase: " + counter2.increase())
// console.log("increase2: " + counter2.increase())
// console.log("increase3: " + counter2.increase())
// console.log("decrease: " + counter2.decrease())
// console.log("reset: " + counter2.reset())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
const factorial = (n: number): number => {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
const totalsSum = (n: number): number => {
  return (n != 1) ? n + totalsSum(n - 1) : 1;
}
const sumToLoop = (n: number) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const sumToRecursion = (n: number) => {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
}
const sumToProgression = (n: number) => {
  return n * (n + 1) / 2;
}
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
function flatten(array: Array<any>) {
  var flattend: Array<any> = [];

  (function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);

  return flattend;
}


// just a plug
export default () => {
};