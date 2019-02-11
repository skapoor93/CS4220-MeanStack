/**
 *
 *  Write a function called replaceLetters and that takes a string and an array of letters.
 */
const array = ["a", "e", "i", "o", "u"];

function ReplaceLetters(string, arr2) {
  let len = string.length;
  for (let i = 0; i < len; i++) {
    if (arr2.includes(string.charAt(i))) {
      string = string.substr(0, i) + "-" + string.substr(i + 1);
    }
  }

  return string;
}
console.log(ReplaceLetters("node.js", array));
/**
Write a function called sumArray.The sumArray function should sums all the numbers in an array of mixed primatives. The function should be able to sum both numbers and any string that can be converted to a number. Booleans, Array and or Objects should not be treated as numbers. 

 */

const arr = [5, 2, "a", 4, "7", true, "b", "c", 7, "8", false];

function sumArray(arr1) {
  let Sum = 0;
  arr1.forEach(ele => {
    if (!isNaN(parseInt(ele))) {
      Sum = Sum + parseInt(ele);
    }
  });

  return Sum;
}

console.log(sumArray(arr));

/**
 *
 *  Write a function called countingWords and it counts the number of times they are present in the array.
 * The countingWords function accepts an array argument. The answer should be an object wit the key as the word and the count as the value.
 */

const arr2 = ["hi", "hi", "hello", "world", "hello", "hi", "greetings"];

function countingWords(arr) {
  let map = new Map();

  arr.forEach(element => {
    if (map.has(element)) {
      let count = 0;
      count = map.get(element) + 1;
      map.set(element, count);
    } else {
      map.set(element, 1);
    }
  });

  let res = {};

  for (let [key, value] of map) {
    res[key] = value;
  }
  return res;
}

console.log(countingWords(arr2));

/**
 *
 * Write a function called createAnimals and is able to create an object.
 */
/**
 * The function createAnimals accepts a nested array of objects which contain a property and what that property should be assigned to. The function should create a nested object with the key as the index from the array and the value which is the object created from the property and assignment.
 */
const array1 = [
  [
    { property: "name", assign: "Garfield" },

    { property: "owner", assign: "Jon Arbuckle" },

    { property: "type", assign: "cat" }
  ],

  [
    { property: "name", assign: "Snoopy" },

    { property: "owner", assign: "Charlie Brown" },

    { property: "type", assign: "dog" }
  ]
];

function CreateAnimals(arr) {
  let len = arr.length;
  let anim = {};
  for (let i = 0; i < len; i++) {
    anim[i] = {};
    for (let j = 0; j < arr[i].length; j++) {
      anim[i][arr[i][j].property] = arr[i][j].assign;
    }
  }

  return anim;
}

console.log(CreateAnimals(array1));