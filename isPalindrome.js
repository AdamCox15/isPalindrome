// Write your code below
//Solution 1
function isPalindrome(word){
    let word1 = word.split('');
    for(let i = 0; i < word1.length; i++){
   if(word1[i] !== word1[word1.length - 1 - i])
   return false;
    }
        return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hat'));

//Solution2

function palindrome(str){
    let regString = str.toLowerCase();
    let revString = str.split('').reverse().join('');
    if(revString === regString){
        console.log(true);
    } else {
        console.log(false);
    }
}
  palindrome('tacocat');


//Solution3
const palindrome = (str) => {
    let check = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(check, '');
    let len = str.length;
    for (let i= 0; i < len / 2; i++){
      if (str[i] !== str[len - 1 - i]){
        return false
      }
    }
    return true;
  }
  console.log(palindrome('Racecar'))

  //Solution 4

  const iPalindrome = (str) => {
    // Need to check if a word is spelled the same way forwards and backwards
    // I could do a nested for-loop  to compare the first letter of the string to the last letter of the string, but that's more complicated than it needs to be. 
    // Why not see if there is a way to just reverse the string?
  
    // USING A LOOP
     let newString = ''
  
     for(let i = str.length -1; i >= 0; i--){
       newString += str[[i]]
     }
  
     if(str === newString){
       console.log(true)
     }else{
       console.log(false)
     }
    
    
    // USING ARRAY METHODS
    let splitString = str.split('')
    let reverseString = splitString.reverse()
    let joinedReverseString = reverseString.join('')
  
    if(str === joinedReverseString){
      console.log(true)
    }else{
      console.log(false)
    }
  
  
  
    // USING A TERNARY
    str === str.split('').reverse().join('') ? console.log(true) : console.log(false)
    
  }
  
  isPalindrome('racecar')
  isPalindrome('a')
  isPalindrome('asdf')
  isPalindrome('madam')