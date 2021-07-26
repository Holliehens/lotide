const assertEqual = function(param1, param2) {

  if (param1 === param2) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${param1}  ===  ${param2}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${param1} !== ${param2}`);
  }



};
const tail = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
    
  }
  newArray.shift();
  console.log(newArray);
  
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");



