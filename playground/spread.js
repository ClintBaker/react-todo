// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));


// var groupA = ['Tony', 'Alejandro', 'Isabella'];
// var groupB = ['Vikram', 'Chingadera'];
// var final = [...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 23];
var person2 = ['Billy', 25];
var people = [person, person2];

var hi = (person, age) => {
  console.log(`Hi ${person}, you are ${age}`);
}

people.forEach((person) => {
  hi(...person);
});

var names = ['Mike', 'Ben'];
var final = ['Clinton'];
final.push(...names);

final.forEach((name) => {
  console.log('Wussup ' + name);
});
