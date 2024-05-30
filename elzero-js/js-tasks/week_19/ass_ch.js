/* // ass - 1
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}

let car1 = new Car("Ferrari", 1, "200k");
let car2 = new Car("mercedese", 3, "300k");
let car3 = new Car("BMW", "x6", "200k");

console.log(
  `Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`
);
console.log(car1.run());
 */

/* // ass - 2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
console.log(`${TabletTwo.fullDetails()}`);
console.log(`${TabletThree.fullDetails()}`);
 */

/* // ass - 3 | ch
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData() {
    this.#c = `${this.#c}`.replace(/-/g, "");
    this.#c = this.#c.replace(/(.{4})/g, "$1-").slice(0, -1);
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
console.log(userTwo.showData);
console.log(userThree.showData);
console.log(userOne.c); // Undefined
 */

/* // ass - 4
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
 */

/* // ass - 5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  id: {
    enumerable: false,
  },
  score: {
    writable: false,
  },
});
delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
 */
