// function chunk(arr , size){
//   const chunked = [];

//   for(let element of arr){
//     const lastElement = chunked[chunked.length - 1]
//     console.log(lastElement)
//     if( !lastElement ||  lastElement.length === size){
//       chunked.push([element]);
//     } else{
//       lastElement.push(element)
//     }
//   }
//   return chunked
// }

function chunk(arr , size){
  const chunked = [];
  let index = 0;
  while(index < arr.length){
    const hi  = chunked.push( arr.slice(index, index+size ));
    index += size;
    console.log(hi)
  }
return chunked;
}

chunk([1,2,3,4,5] , 2)