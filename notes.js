const assertEqual = function(param1, param2) {

  if (param1 === param2) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${param1}  ===  ${param2}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${param1} !== ${param2}`);
  }



};

const head = function (arr) {
  return arr[0];
}


  
const tail = function (array) {
  //declare new array to be a copy of array in order to avoide manipulating original array
  let newArray = [];
  //for loop that copies index by index of array into newArray
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i]; // copy
  }
  //logging newArray should display same array as array
  console.log(newArray);
  //shift() deletes first index of new array while array remains intact
  newArray.shift();
  //index 0 of newArray is gone. newArray has been manipulated
  console.log(newArray);
  //logging original array has not changed after manipulating newArray
  console.log(array); // array doesn't change
  
  return newArray;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"