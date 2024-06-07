// // // function myFunction() {
// // //         document.write('Hello JavaScript');
// // //     }

// // // document.getElementById('add').innerHTML = 5+6;
// // // document.getElementById('sub').innerHTML = 15-6;
// // // document.getElementById('mult').innerHTML = 5*6;
// // // document.getElementById('div').innerHTML = 25/5;

// // // alert('Hello I am alert')

// // // // const [x,y,z] = [1,2,3];
// // // // console.log('[x,y,z]', [x]);
// // // // let a,b,c;
// // // // a = 5;
// // // // b = 6;
// // // // c = a + b;
// // // // console.log('c', c);


// // // const name = 'Reshab Kumar';
// // // console.log('name', name.length);
// // // const data = 'Helllo I am \"Reshab Kumar\" '
// // // console.log('data', data);


// // // const x = new String("Reshab");
// // // console.log('x', x);

// // // let cars = 'Tata, Maruti, KIA';
// // // let y = cars.slice(7,13);
// // // console.log(y);

// // // 2
// // // let myData = ''
// // const array1=[10,'simran'];
// // const array2=[];
// // console.log(array);

// // const str="";
// // console.log(str);
// // arr3=array2.concat(array1);
// // console.log(arr3);

// // const arr=new Array(" "," ");
// // console.log(arr);

// // console.log(array1.toString());

// // const arr5=[5,3,8,9];
// // console.log(arr5.sort());



// // const name = ['Reshab', 'Rishav', 'Ravi', 'Baibhav', 'Shubham'];
// // const len = name[2];
// // console.log(len);


// // const num = [1,3,5,6,7];
// // num.forEach(function(val) {
// //     console.log(val);
// // });

// // // const num = [1,3,5,6,7];
// // // num.map((val) => {
// // //     console.log(val * 2);
// // // });

// // const num = [1,3,5,6,7];
// // num.flatMap((val) => {
// //     console.log(val * 2);
// // });



// // const num = [1,3,5,6,7];
// // num.forEach(function(val) {
// //     console.log(val);
// // });

// // const num = [3,4,5,6,7,8];
// // num.forEach(function (val) {
// //     console.log(val);
// // })

// // const num = [2,3,4,5,6,7,9]
// // const sum = num.reduce(myFunction, 100);

// // function myFunction(total, value) {
// //     return total + value;
// // }
// // console.log(sum);


// // function welcome(name) {
// //     console.log('Hello' + ' ' + name);
// // }
// // function welcome1(hello) {
// //     console.log('Hello' + ' ' + hello);
// // }

// // function hello() {
// //     console.log('Hii');
// // }
// // setTimeout(welcome(), 2000);
// // welcome('Reshab')
// // // welcome1()


// // function greet (name, myFunction) {
// //     console.log('Hello World');

// //     myFunction(name)
// // }

// // function sayName(name) {
// // console.log('Hello' + ' ' + name);
// // }

// // setTimeout(greet, 2000, 'Reshab', sayName);

// let func1 = 'Reshab'

// function func1() {
//     console.log('Hii I am Func 1');
// }
// function func2() {
//     console.log('Hii I am Func 2');
// }
// function func3() {
//     console.log('Hii I am Func 3');
// }
// function func4() {
//     console.log('Hii I am Func 4');
// }

// func1();
// setTimeout(func2, 4000);
// func3();
// func4();

/**
 * Checks if a given number is prime.
 * @param {number} num - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   }
//   function primeCryptography(lowerLimit, upperLimit) {
//     const pairs = [];
  
//     for (let i = lowerLimit; i <= upperLimit; i++) {
//       if (isPrime(i)) {
//         for (let j = i + 1; j <= upperLimit; j++) {
//           if (isPrime(j)) {
//             const diff = Math.abs(i - j);
//             if (isPrime(diff)) {
//               pairs.push([i, j]);
//             }
//           }
//         }
//       }
//     }
  
//     return pairs;
//   }
//   const lowerLimit = 10;
//   const upperLimit = 50;
//   const result = primeCryptography(lowerLimit, upperLimit);
//   console.log(result);
    

// function convertTemperature(temperature, unit) {
//     if (unit === "C") {
//       return (temperature * 9/5) + 32;
//     } else if (unit === "F") {
//       return (temperature - 32) * 5/9;
//     } else {
//       return NaN;
//     }
//   }

//   const celsiusTemperature = 20;
// const fahrenheitTemperature = convertTemperature(celsiusTemperature, "C");
// console.log(fahrenheitTemperature); // Output: 68

// const convertedBackToCelsius = convertTemperature(fahrenheitTemperature, "F");
// console.log(convertedBackToCelsius); // Output: 20


// function myDisplayer(some) {
// console.log(some);}

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
