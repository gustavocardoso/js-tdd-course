function multiply(mult, arg1, arg2, arg3) {
  const arr = [];
  arr.push(mult * arg1);
  arr.push(mult * arg2);
  arr.push(mult * arg3);
  return arr;
}

console.log(multiply(2, 2, 4, 6));

function multiplyRest(mult, ...args) {
  return args.map(arg => arg * mult);
}

console.log(multiplyRest(5, 2, 4, 6));
