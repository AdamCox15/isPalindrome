// Write your code below
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