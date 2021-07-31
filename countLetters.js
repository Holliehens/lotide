const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${actual} !== ${expected}`);
  }



};

const countLetters = function(phrase) {
  const results = {};

  for (const letter of phrase) {
    if (results[letter]) {    
      // ^ checks to see if the property represented by 'letter' exists in my 'results' object
      results[letter] += 1 // increments count of property
    } else {
      if (letter === ' ')continue 
      //if it sees a ' ' it will ignore the space & move to the next phase of the loop
      results[letter] = 1;
    }
    


  }
  
  return results;
};

console.log(countLetters("lighthouse in the house"));