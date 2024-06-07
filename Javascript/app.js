const a = [1,6,3,2,3,4,5,2,3,5,6,8,9,4,2,1];
a.sort(() => {
    console.log(a)
})

const d = new Date("2020-05-23")
console.log('d',d);

const e = new Date("2020-04-22T12:00:00Z")
console.log(e);

const f = new Date("03/25/2020")
console.log(f);

const g = new Date("2020-3-23")
console.log(g);

const h = new Date("25 Mar 2020")
console.log(h);

const i = Date.parse("March 24, 2020")
console.log(i);

// const j = new Date("2022-03-23")
// const k = j.getFullYear();
// console.log(k);

const j = new Date("2022-03-23")
const k = j.getHours();
console.log(k);


// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const l = new Date("2023-04-24")
// let day = days[d.getDay()];
// console.log(day);


const ms = Date.now()
console.log(ms);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year)
console.log(years);

// const d = new Date()
// let get = d.setDate(10);
// console.log(get);







