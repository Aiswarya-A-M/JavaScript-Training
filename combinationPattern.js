/* print
 1.  Input = 1   Output = ()  
 2.  Input = 2   Output = ()() , (()) 
 3.  Input = 3   Output = ()()(), ((())) , (()()) , (())() , ()(()) 
*/

function generatePattern(n) {
  const result = [];
  const arrayOfCombination = [];
  combination(0, 0, arrayOfCombination, result, n);
  return result;
}

function combination(
  openBracketNumber,
  closedBracketNumber,
  arrayOfCombination,
  result,
  n
) {
  if (openBracketNumber === closedBracketNumber && openBracketNumber === n) {
    result.push(arrayOfCombination.join(""));
    return;
  }

  if (openBracketNumber < n) {
    //open bracket will move to array if number of elements in array are less than total number.
    arrayOfCombination.push("(");
    combination(
      openBracketNumber + 1,
      closedBracketNumber,
      arrayOfCombination,
      result,
      n
    );
    arrayOfCombination.pop();
  }

  if (closedBracketNumber < openBracketNumber) {
    //closed bracket will move to array if number of closed brackets are less than open brackets.
    arrayOfCombination.push(")");
    combination(
      openBracketNumber,
      closedBracketNumber + 1,
      arrayOfCombination,
      result,
      n
    );
    arrayOfCombination.pop();
  }
}

const pattern = generatePattern(3);
console.log(pattern);
