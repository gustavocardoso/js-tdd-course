const front = ['Vue', 'React', 'Angular'];
const back = ['Ruby', 'NodeJS', 'PHP'];

console.log(...front);
console.log(...back);

let tech = [];

tech = tech.concat(front);
tech = tech.concat(back);

console.log(tech);

const fullstack = [...front, 'RxJS', ...back];

console.log(fullstack);

console.log(['Wind', 'Rain', 'Fire'].join(' + '));

function makeSandwich(bread, cheese, sauce) {
  console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
}

const ingredients = ['white', 'cheddar', 'ranch'];

makeSandwich(...ingredients);
