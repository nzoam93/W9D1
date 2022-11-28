function sum() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}

function sumTwo(...args) {
    let sum = 0;
    for (i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum
}

console.log(sum(1, 2, 3, 4))
console.log(sumTwo(1, 2, 3, 4))

// Function.prototype.myBind = function(context) {
//     let that = this;
//     let bindArgs = Array.from(arguments).slice(1)
//     return function () {
//         let callArgs = Array.from(arguments)
//         args = bindArgs.concat(callArgs)
//         return that.apply(context, args)
//     }
// }

Function.prototype.myBind = function(context, ...bindArgs){
  let that = this; 
  return function(...callArgs){
    return that.apply(context, bindArgs.concat(callArgs));
  }
}

curriedSum = function(numArgs){
  // let fxn = this; 
  let args = [];
  return function _curriedSum(ele) {
    args.push(ele);
    if(args.length < numArgs){
      return _curriedSum;
    }
    else{
      let sum = 0;
      args.forEach(ele => {
        sum += ele; 
      })
      return sum;
    }
  }
}
const sum2 = curriedSum(4);
console.log(sum2(5)(30)(20)(1)); // => 56

