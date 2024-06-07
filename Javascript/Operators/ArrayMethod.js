// Array Methods 

const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
let size = fruits.length;
let string = fruits.toString();
let joins = fruits.join(":")
let remove = fruits.pop();
fruits.push("Pineapple")
console.log(fruits);


const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
fruits.unshift("Mango");
console.log(fruits);


const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
fruits[1] = "Pineapple"
console.log(fruits);

const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
fruits[fruits.length] = "Pineapple"
console.log(fruits);


const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
console.log(fruits);
delete fruits[0];
console.log(fruits);



const firstName = ['Reshab', 'Rahul']
const lastName = ['Kumar', 'Raj']
const city = ['Kolkata', 'Pune']

const fullName = firstName.concat(lastName, city)
console.log(fullName);


const arr = [[1,2],[3,4],[5,6]]
const newArr = arr.flat();
console.log(newArr);

// splice and slice

// splice will add new item to array as well as it will help to remove the elements
// slice will remove out an item from an array 

const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
fruits.splice(0,2);
console.log(fruits);

const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
const newFruit = fruits.slice(1);
console.log(fruits);
console.log(newFruit);

const fruits = ["Mango", "Banana", "Apple", "Kiwi"];
fruits.sort()
fruits.reverse();
console.log(fruits);


const num = [30,20,45,12,47,3,6];
num.sort(function(a,b) {return b - a})
console.log(num);

const num = [30,20,45,12,47,3,6];
num.sort(function() {return 0.5 - Math.random() })
console.log(num);


const points = [40,100,1,5,25,10]

for(let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i]
    points[i] = points[j];
    points[j] = k;
}

console.log(points);


const cars = [
    {type: "Tata", year: 2023},
    {type: "Kia", year: 2022},
    {type: "Maruti", year: 2021},  
]

cars.sort(function(a,b) { return a.year - b.year});

console.log(cars);


