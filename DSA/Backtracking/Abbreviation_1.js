/*
You are given a string ‘STR’ consisting of English lowercase letters.

Your task is to find out all the generalised abbreviations of ‘STR’ and print an array/list of these abbreviations sorted in increasing order.

Note:

A string is said to be a generalised abbreviations string of ‘STR’ if we remove a substring of length ‘X’ from ‘STR’ and put the number ‘X’ at the place of the removed substring.

We can not remove two consecutive substrings or we can say generalised abbreviations will never have two consecutive numbers.
For example:

If ‘STR’ = “abc”,
Sorted generalized abbreviations of ‘STR’ are: [“1b1”, “1bc”, “2c”, “3”, “a1c”, “a2”, “ab1”, “abc”].
*/

const printAbbreviations = (str, subAns, count, currIndex) => {
  // Base Case
  if (currIndex == str.length) {
    // 2 possible instances
    // 1. if count is zero
    if (count) {
      console.log(`${count}${subAns}`);
    } else {
      console.log(subAns);
    }
    return;
  }

  // Two choices
  // 1. Select the string into answer
  let newSubAns = '';
  if (count) {
    newSubAns = `${count}${subAns}${str[currIndex]}`;
  }else{
    newSubAns=`${subAns}${str[currIndex]}`
  }
  printAbbreviations(str, newSubAns, 0, currIndex + 1);
  // 2. Don't select the char att curr index
  printAbbreviations(str, subAns, count + 1, currIndex + 1);
};

printAbbreviations('PeP', '', 0, 0);
