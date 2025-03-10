console.log("hi linked");

function User(name) {
  this.name = name;
  this.isAdmin = false;
  return;
}
var user = User("julie");
console.log(user);

var fruits = ["apple", "orange", "kivi", "strawberry"];
fruits.splice(4, 1, "banaan");
console.log(fruits);

let numbers = [-23, 12, -17, 19, -20, 0, 1, -12, -5, 5, 20];
let even = numbers.filter((value) => value % 2 == 0);
console.log(even);

var words = ["one", "two", "three", "four"];
words.forEach(function (word) {
  console.log(word);
  if (word == "two") {
    words.shift();
  }
});

var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"];
var selected = students.slice(-4, -2);
console.log(selected);
