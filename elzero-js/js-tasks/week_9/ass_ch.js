// Ass 1
/* function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nm = zName.split(" ", 2);
    nm[1] = nm[1][0].toUpperCase() + ".";
    nm = nm.join(" ");
    return nm;
  }
  function ageWithMessage(zAge) {
    let age = zAge.slice(0, 2);
    let agMessage = `Your Age Is ${age}`;
    return agMessage;
  }
  function countryTwoLetters(zCountry) {
    let con = zCountry.slice(0, 2);
    let conMessage = `You Live In ${con.toUpperCase()}`;
    return conMessage;
    // Syria => You Live In SY
  }
  function fullDetails() {
    let fMessage = `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
    return fMessage;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt")); 
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria")); 
// Hello Ahmed A., Your Age Is 32, You Live In SY
 */

// Ass 2
/* // ---- Normal functions ---- //
    // function itsMe() {
    //   return `Iam A Normal Function`;
    // }
    // console.log(itsMe()); // Iam A Normal Function

    // function urlCreate(protocol, web, tld) {
    //   return `${protocol}://www.${web}.${tld}`;
    // }
    // console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// ---- Arrow functions ---- //
    let itsMe = () => `Iam An Arrow Function`;
    console.log(itsMe()); // Iam An Arrow Function

    let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
    console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
 */

// Ass 3
/* // ---- normal functions ---- //
    // function checker(zName) {
    //   return function (status) {
    //     return function (salary) {
    //       return status === "Available"
    //         ? `${zName}, My Salary Is ${salary}`
    //         : `Iam Not Avaialble`;
    //     };
    //   };
    // }
    // console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
    // console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ---- Arrow functions ---- //
    let checker = (zName) => (status) => (salary) =>
    status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;

    console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
    console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
 */

// Ass 4
/* function specialMix(...data) {
  let sum = 0;
  let N;
  for (let i = 0; i < data.length; i++) {
    N = isNaN(parseInt(data[i]));
    if (typeof data[i] === "number") sum += data[i];
    else if (typeof data[i] === "string" && N) continue;
    else if (typeof data[i] === "string" && !N) sum += parseInt(data[i]);
  }
  if (sum === 0) return "ALL Is String";
  else return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
 */
