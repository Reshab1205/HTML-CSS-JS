let person = "Reshab Kumar";

let MyDetail = {
    fname: "Reshab", 
    lname: "Kumar", 
    city: "Vaishali"
};
console.log(MyDetail);

let personDetail = {};
personDetail.fname = "Reshab";
personDetail.lname = "Kumar";
personDetail.city = "Vaishali";

console.log(personDetail);

const copy = personDetail
copy.city = "Delhi"
console.log(copy);