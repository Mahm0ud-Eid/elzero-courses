/* //  Destructuring - Challenge

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function dest(ch) {
  switch (ch) {
    case 1:
      var [
        {
          title: tl,
          age: a,
          available: av,
          skills: [, lskill],
        },
      ] = myFriends;
      break;
    case 2:
      var [
        ,
        {
          title: tl,
          age: a,
          available: av,
          skills: [, lskill],
        },
      ] = myFriends;
      break;
    case 3:
      var [
        ,
        ,
        {
          title: tl,
          age: a,
          available: av,
          skills: [, lskill],
        },
      ] = myFriends;
      break;
    default:
      break;
  }

  console.log(tl);
  console.log(a);
  if (av) console.log("available");
  else console.log("not Available");
  console.log(lskill);
}

dest(chosen);
 */

// Ass-1
/* let myNumbers = [1, 2, 3, 4, 5];

let [a, , , , e] = myNumbers;

console.log(a * e); // 5
 */

/* // Ass-2
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
 */

/* //Ass-3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let arr = arr3.concat(arr1, arr2);
let [, a, b, c, ...rest] = arr;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
 */

/* // Ass-4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

let {
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
 */

/* // Ass-5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

let { title: t, developer: d, releases: rl } = game;
let { ["Ark Of Napishtim"]: g1, ["Oath In Felghana"]: g0, Origin: or } = rl;
let [u, j] = g0;
let { US: u_price, JAP: j_price } = g1;

let ob = Object.keys(game.releases);
let o = ob[0];
let a = ob[1];

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is 'YS' Style

console.log(`And I Love ${d} Games`);
// And I Love 'Falcom' Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is 'Oath In Felghana' It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love 'Ark Of Napishtim'

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is '20 USD'

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
 */

// Ass-6
let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {
  title: t,
  age: a,
  available: av,
  skills: [, two],
} = myFriends[chosen - 1];

let available = av ? "available" : "not available";

console.log(t);
console.log(a);
console.log(available);
console.log(two);
