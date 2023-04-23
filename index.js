/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

// write your code here
const truncate = (str, num) => {
  let splitStr = str.split(" ");
  return splitStr.slice(0, num).join(" ");
};

console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"

/* 2. Write a JavaScript function to alphabetize a given string. */

// write your code here
const alphabetize_string = (str) => {
  let lowerCase = str.toLowerCase();
  return lowerCase.split("").sort().join("").trimStart();
};
console.log(alphabetize_string("United States"));
//"adeeinsstttu"

// /* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
//  */

// // write your code here
const ascii_to_hexa = (numStr) => {
  let result = [];
  let strLength = numStr.length;
  for (let i = 0; i < strLength; i++) {
    let hex = Number(numStr.charCodeAt(i).toString(16));
    result.push(hex);
  }
  return result.join("");
};

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

// /* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
//  */

// // write your code here
const humanize = (num) => {
  let ones = num % 10;
  let tens = num % 100;
  // console.log(ones, tens);
  if (ones === 1 && tens !== 11) {
    return num + "st";
  } else if (ones === 2 && tens !== 12) {
    return num + "nd";
  } else if (ones === 3 && tens !== 13) {
    return num + "rd";
  }
  return num + "th";
};

console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"

// /* 5. Write a JavaScript function to get the successor of a string. */

// // write your code here

// console.log(successor("abcd")); // "abce"
// console.log(successor("THX1138")); // "THX1139"
// console.log(successor("< >")); // "< >"
// console.log(successor("1999zzz")); // "2000aaa"
// console.log(successor("ZZZ9999")); // "AAAA0000"

// /* 6. Write a JavaScript function to sort the following array of objects by title value. */

// // write your code here
const compare_to_sort = (obj) => {
  return obj.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
};
let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

console.log(compare_to_sort(library));

// /* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

// // write your code here
const num_string_range = (charA, charZ, num) => {
  let result = [];
  let j = charZ.charCodeAt(0);
  console.log(j);
  for (let i = charA.charCodeAt(0); i <= j; i++) {
    result.push(String.fromCharCode(i));
    result.slice(1, 2);
  }
  return result.filter((item, i) => {
    return i % num == 0;
  });
};

console.log(num_string_range("a", "z", 2));
// // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// /* 8. Write a JavaScript program to create a Clock.
//    `Note`: The output will come every second. */

// // write your code here
class my_Clock {
  constructor() {
    this.today = new Date();
    this.hour = this.today.getHours();
    this.minutes = this.today.getMinutes();
    this.seconds = this.today.getSeconds();
  }
  run() {
    if (this.hour === 0) {
      this.hour = 12;
    } else if (this.hour > 12) {
      this.hour -= 12;
    }
    this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    return `${this.hour}:${this.minutes}:${this.seconds} `;
  }
}

let clock = new my_Clock();
console.log(clock.run());
// // "14:37:42";
// // "14:37:43";
// // "14:37:44";
// // "14:37:45";
// // "14:37:46";
// // "14:37:47";

// /* 9. Write a JavaScript function to print all the methods in an JavaScript object.
//  */

// // write your code here
const all_properties = (obj) => {
  return Object.getOwnPropertyNames(obj).filter((property) => {
    return typeof obj[property] === "function";
  });
};

console.log(all_properties(Array));
// // ["isArray", "from", "of"]
console.log(all_properties(Math));
// // ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

// /* 10. Write a JavaScript function to print all the properties in an JavaScript object. */

// // write your code here
const all_properties2 = (obj) => {
  return Object.getOwnPropertyNames(obj);
};
console.log(all_properties2(Math));
// // ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties2(Array));
// // ["length", "name", "prototype", "isArray", "from", "of"]
