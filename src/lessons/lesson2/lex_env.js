// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }
//
// let counter1 = makeCounter();
// let counter2 = makeCounter();
//
// console.log( counter1() ); // 0
// console.log( counter1() ); // 1
// console.log( counter1() ); // 2
//
// console.log( counter2() ); // 0 (независимо)

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

// ----------------------------------------- //
// function getAddress() {
//   const surname = "Zueva"
//   const name = "Nataly"
//   const address = {
//     city: {
//       name: "Alanya",
//       country: "Turkey"
//     },
//     house: 4,
//     flat: 23
//   }
//   function getName() {
//     return surname + " " + name
//   }
//
//   return getName() + address.city.country + " " + address.city.name + " " + address.house + " " + address.flat
// }
//
// console.log(getAddress())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число
// в качестве аргумента и это число было стартовым значением
// счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeCounter = (num) => {
//
//   let value
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
//   const reset = (value) => {
//     value = 0
//     return value
//   }
//
//   return {
//     value,
//     increase: increase,
//     decrease: decrease,
//     reset: reset,
//     set: set
//   }
// }
//
// console.log("------------------------------")
// const counter = makeCounter(2)
// console.log("set: " + counter.set())
// console.log("increase: " + counter.increase())
// console.log("increase2: " + counter.increase())
// console.log("increase3: " + counter.increase())
// console.log("decrease: " + counter.decrease())
// console.log("reset: " + counter.reset())
// console.log("------------------------------")
//
// const counter2 = makeCounter(3)
// console.log("set: " + counter2.set())
// console.log("increase: " + counter2.increase())
// console.log("increase2: " + counter2.increase())
// console.log("increase3: " + counter2.increase())
// console.log("decrease: " + counter2.decrease())
// console.log("reset: " + counter2.reset())

// const ordinarySum = (a, b) => a + b
// function sum(a) {
//   return function (b) {
//     return a + b
//   }
// }
//
// console.log(sum(1)(2))

function curry(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let superSum = curry(sum);

// console.log(superSum(0))
// console.log(superSum(3)(2)(5)(3))
// console.log(superSum(3)(2)(5,3))
// console.log(superSum(3)(2,5,3))
// console.log(superSum(3)(2,5)(3))
// console.log(superSum(3)(2,5)(3,9))

// recursion
// const recursion = () => {
//   let a = 1
//   const inc = () => {
//     a++
//     console.log(a)
//     if (a > 10) return a
//     inc()
//   }
//   inc()
// }
// recursion()

// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// console.log( factorial(5) );


const fact = (num) => {
  let counter = num
  let arr = [num]
  for (let i = 0; i < counter; i++) {
    num = num - 1
    arr.push(num)
  }
  console.log(arr)
  const total = arr.reduce(function (mult, current) {
    return mult + current;
  }, 0)
  console.log(total)
}
fact(100)

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

function pow1(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow1(x, n - 1);
  }
}

console.log( pow1(2, 3) ); // 8

const pow = (num, n) => {
  if (n !== 1) {
    return num * pow(num,n - 1)
  } else {
    return num
  }
}
console.log(pow(2, 3))

// var arr = ["Есть", "жизнь", "на", "Марсе"];
// let arrLength = arr.map(a => a.length)
// console.log("arr " + arrLength ); // 4,5,2,5

// function totalsSum(n) {
//   return (n != 1) ? n + totalsSum(n - 1) : 1;
// }
// console.log( totalsSum(100) );
















