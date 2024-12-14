// task 1

const result = 5 + 5 + "5";

console.log(result);

console.log(typeof result);

// task 2
const email = "example@gmail.com";

const checkEmail = email.includes("@");

const countSymbolsOfEmail = email.indexOf("@");

const lengthOfEmail = email.length;

console.log(checkEmail, countSymbolsOfEmail, lengthOfEmail);

// task 3

const my = "My";
const name = "name";
const is = "is";
const dot = ".";

const userName = "Victor";

let fullName = `${my} ${name} ${is}`;
fullName = fullName + userName;

const fullName2 = my + name + is + userName;

// task 4

const userrName = "Олександро";
const payment = 300;
alert(`Дякую, ${userrName} До сплати ${payment} гривень`);

//  task 5

const fruit = "апельсин";
console.log(fruit[0]);
console.log(fruit[fruit.length - 1]);

// task 6

const str = "Jason Neis".toLowerCase();
const searchString = "neiS";
console.log(str.indexOf(searchString.toLowerCase()));




