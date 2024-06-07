// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()


let index = text.indexOf("am");
let index2 = text.search(/am/)
let index3 = text.match(/Reshab/g);
let index4 = text.includes("found");
console.log(index4);
// console.log(index);
// console.log(index2);
// console.log(index3);
let text = "Hello I am Reshab am Kumar and Reshab and he is Reshab";
let index5 = text.startsWith("Reshab");
let index6 = text.endsWith("Reshab");
console.log(index5);
console.log(index6);