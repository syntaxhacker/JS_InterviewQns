// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//  

// function vowels(str){
//   let counter = 0;
//   const alphas = ['a' , 'e' ,'i' ,'o' ,'u' ];


//   for(let char of str.toLowerCase()){
//     if(alphas.includes(char)){
//       counter++;
//     }
  
//   }
  
//   return counter
// }

function vowels(str){
  const matches  = str.match( /[aeiou]/gi );
  return matches ? matches : 0
}
vowels("dahhahbueisisk")