/* // ass - 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regex = /\d{4}:\w+\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
console.log(ip.match(regex));
 */

/* // ass - 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regex = /Os\d*O/g;
console.log(specialNames.match(regex));
// Output: ['Os10O', 'OsO', 'Os100O'] 
*/

/* // ass - 3
let phone = "+(995)-123 (4567)";
let regex = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(regex)); 
*/

// ass - 4
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/* 
// 1. `/https?:\/\//`
   - `/`: Delimiter for the start of the regular expression.
   - `https?`: Matches "http" followed by an optional "s", allowing both "http" and "https".
   - `:\/\/`: Matches the literal "://" characters.

// 2. `(?:[-\w]+\.)?`
   - `(?:...)`: Non-capturing group.
   - `[-\w]+`: Matches one or more occurrences of any word character (letters, digits, or underscore) or hyphen.
   - `\.`: Matches a literal dot (period).
   - `?`: Makes the preceding group optional, allowing for an optional subdomain.

// 3. `([-\w]+)`
   - `()`: Capturing group.
   - `[-\w]+`: Matches one or more occurrences of any word character (letters, digits, or underscore) or hyphen.
   - Captures the main domain name.

// 4. `\.\w+`
   - `\.`: Matches a literal dot (period).
   - `\w+`: Matches one or more word characters (letters, digits, or underscore).
   - Matches the top-level domain (e.g., ".com", ".org", etc.).

// 5. `(?:\.\w+)?`
   - `(?:...)`: Non-capturing group.
   - `\.\w+`: Matches a literal dot (period) followed by one or more word characters (letters, digits, or underscore).
   - `?`: Makes the preceding group optional, allowing for an optional second-level domain.

// 6. `\/?.*`
   - `\/?`: Matches an optional forward slash.
   - `.*`: Matches zero or more of any character (except newlines).
   - Matches any path or query parameters in the URL.

// 7. `/i`
   - `/`: Delimiter for the end of the regular expression.
   - `i`: Case-insensitive flag, allowing for a case-insensitive match.
 */

/* // ass - 5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\s|\s-\s|\/)\d{2}(\s|\s-\s|\/)\d{2,4}/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
 */

// ass - 6 | ch
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /(?:https?:\/\/)?(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
