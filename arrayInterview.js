'use strict';

//URLify a string

const makeUrl = (string) => {
  return string.replace(/ /g, '%20');
};

//console.log(makeUrl('tammy says hi'));
//O(n) 
//'/ /g' searches for matching characters globally in the string
//the processing time it takes to change each " " into a '%20' 
//depends on the length of the input string

//Filtering an array
//Input: [1,9,3,6,7,8,9]
//Output [9,6,7,8,9]

const filterLessThan5 = (array) => {
  let filteredArray = [];
  array.forEach(element => {
    if (element >= 5) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
};

//console.log(filterLessThan5([1,9,3,6,7,8,9]));
//O(n)
//The processing time is dependent on the length of the array
//It has to loop through the array once to check if the element is < 5
//It then has to push the item into an array 


//Max sum

// input: [1,2,3,4,-5, 1]
// output : 10
const maxSum = (array) =>{
  let currentMax = 0;
  let currentTotal = 0;
  array.forEach(element => {
    currentTotal += element;
    if (currentTotal > currentMax) {
      currentMax = currentTotal;
    }
  });
  return currentMax;
};

//console.log(maxSum([1,2,3,4,-5,1]));
//O(n)
//the processing time is equal to the length of the array

//Merge Arrays
//put in two arrays then merge and sort them
//input: [1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]
//output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

//Merged Arrays

const mergeTwoArrays = (arr1, arr2) => {
  let mergedArray = [...arr1, ...arr2];
  return mergedArray.sort((a,b) => {
    return a-b;
  });
};

//console.log(mergeTwoArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//O(n)
//it is dependent on how long each array to be copied must be


//Remove Characters
//deletes characters from a string
//takes in a string and characters to filter out
//returns a string with characters filered out

const removeCharacters = (string, filter) => {
  let filteredString ='';
  for (let i = 0; i < string.length; i ++){
    if (!filter.includes(string[i])){
      filteredString+=string[i];
    }
    
  }  
  return filteredString;
};
//O(n^2)
//as the string array increases in size, the operation time increases the size of the filter


//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


//Products
//should multiply everything in the array except the index
//input: [1,2,3,4]
//output: [24,12,8,6]

const products = (arr) => {
  let productArr = [];
  arr.forEach(element =>{
    let product = 1;
    for (let i = 0; i <arr.length; i ++){
      if(arr[i] !== element){
        product *= arr[i];
      }
    }
    productArr.push(product);
  });
  return productArr;
};

//console.log(products([1,2,3,4]));

//O(n^2)
//for each element added onto the array 
//the processing time increases by size of the array
//array [x][y]

//if array[0][0] = 0


//            [0][1]  [0][2]  [0][3]  [0][4]
//[0][0] = 0    0       0       0       0
//[1][0] = 0
//[2][0] = 0
//[3][0] = 0
//[4][0] = 0

// const createNewBoard = (array) => {
//   for (let i = 0; i > array.length; i++){
//     for (let j = 0; j > array[i].length; j++){
//       if(array[i][j] === 0) {
//         for(let newRow = 0; newRow < array[i].length; newRow++){
//           [i][newRow] = 0;
//         }

//         for(let newColumn = 0; newColumn < array.length; newColumn++){
//           [newColumn][j] = 0;
//         }
//       }
//     }
//   }
// };





//2D array
//input 2D array with 1 and 0s
//output rows and columns set to zero

const twoDemensionalArray = (arr) => {
  const createNewBoard = (array) => {
    for (let i = 0; i > array.length; i++){
      for (let j = 0; j > array[i].length; j++){
        if(array[i][j] === 0) {
          for(let newRow = 0; newRow < array[i].length; newRow++){
            [i][newRow] = 0;
          }
  
          for(let newColumn = 0; newColumn < array.length; newColumn++){
            [newColumn][j] = 0;
          }
        }
      }
    }
  };
  const newBoard = arr.map(createNewBoard);
  return newBoard;
};



console.log(twoDemensionalArray([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));