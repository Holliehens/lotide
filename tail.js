const tail = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
    
  }
  newArray.shift();
  console.log(newArray);
  
  return newArray;
};


module.exports = tail;

