console.log(`9. An Advanced Look at Functions`);

/*###################################*/
/* ====== 1. Function Scope [07:01] ====== */
/*###################################*/

// https://www.youtube.com/watch?v=5aSvDIOSa7M
function myAvrg(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  let avg = sum / arr.length
  return avg
}

function isItPangram(sec){
  let vault = 'abcdefghijklmnopqrstuvwxyz'
  for(let char of vault){
    if(!sec.includes(char)){
      return false
    }
  }
  return true
}

console.log(isItPangram('The quick brown fox jumps over the lazy dog'));





/*######################################*/
/* ====== 2. Block Scope [12:07] ====== */
/*######################################*/
/*###################################*/
/* ====== 3. Lexical Scope [06:36] ====== */
/*###################################*/
/*###################################*/
/* ====== 4. Function Expressions [05:40] ====== */
/*###################################*/
/*###################################*/
/* ====== 5. Higher Order Functions [07:19] ====== */
/*###################################*/
/*###################################*/
/* ====== 6. Functions as Arguments [07:23] ====== */
/*###################################*/
/*###################################*/
/* ====== 7. Functions as Return Values [13:21] ====== */
/*###################################*/
/*###################################*/
/* ====== 8. Callbacks [08:19] ====== */
/*###################################*/
/*###################################*/
/* ====== 9. Hoisting [08:10] ====== */
/*###################################*/