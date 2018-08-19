// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// first solution
// function reverse(str) {
//     splitted = str.split('').reverse().join('')
//     console.log(splitted);

// }
// // second solution
// function reverse(str) {
//   let reversed = '';
//   for(char of str){
//    reversed = char + reversed
//   }
// console.log(reversed)
// }
// third solution
function reverse(str) {
  return str.split('').reduce( (rev , char) => char + rev ,'');
}

reverse("!hello")