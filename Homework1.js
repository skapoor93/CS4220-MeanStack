'use strict';

/**
 * Answer 1
 */
const dash = '-';
const arr1 = ['a', 'e', 'i', 'o', 'u' ];

function replaceLetters( str, arr)
{
    let len = str.length;
    for(let i = 0; i<len; i++)
    {   
        if(arr.includes(str.charAt(i)))
        {
            str = str.substr(0,i) + dash + str.substr(i+1);
        }
    }   

    return str;
}

console.log(replaceLetters( "node.js", arr1));

/**
 * Answer 2
 */
const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false];

function sumArray(arr)
 {
    let sum = 0;
    arr.forEach(element => {
        if(!isNaN(parseInt(element)))
        {
            sum = sum + parseInt(element);
        }
    });

    return sum;
 }

 console.log(sumArray(arr2));

 /**
  * Answer 3
  */
 const arr3 = ['hi', 'hi', 'hello', 'world', 'hello', 'hi' , 'greetings'];

 function countingWords(arr)
 {
     let myMap = new Map();

     arr.forEach(element => {
        if(myMap.has(element))
        {
            let count = 0;
            count = myMap.get(element)+1;
            myMap.set(element,count);
        } else{
            myMap.set(element,1);
        }
     } );

    let result = {};
    
    for(let [key,value] of myMap)
    {
        result[key] = value;
    }
    return result;
 }

 console.log(countingWords(arr3));

 /**
  * Answer 4
  */
 const arr4 =[

                [

                    { property: 'name', assign: 'Garfield'},

                    { property: 'owner', assign: 'Jon Arbuckle'},

                    { property: 'type', assign: 'cat' }

                ],

                [

                    { property: 'name',assign: 'Snoopy' },

                    { property: 'owner',assign: 'Charlie Brown' },

                    { property: 'type',assign: 'dog' }

                ]

            ];

function createAnimals(arr)
{
    let animals = {};
    let len = arr.length;
    for(let i = 0; i<len; i++)
    {
        animals[i] = {};
        for(let j = 0; j<arr[i].length; j++)
        {
            animals[i][arr[i][j].property] = arr[i][j].assign; 
        }
    }
   
     return animals;
}

console.log(createAnimals(arr4));