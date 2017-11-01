const data = {
  name: 'Gustavo',
  surname: 'Cardoso',
  age: 40,
  blog: 'https://gustavocardoso.me',
  social: {
    twitter: '@gustavocardoso',
    facebook: '/gucardoso',
  },
};

const { name, surname } = data;

console.log(name);
console.log(surname);

const { facebook, twitter } = data.social;

console.log(facebook);
console.log(twitter);

const { facebook: fb } = data.social;

console.log(fb);

const { city = 'Bauru' } = data;

console.log(city);


const infos = ['Gustavo', 'Cardoso', 40, 'Bauru'];

const [myName, mySurname, myAge, myCity] = infos;

console.log(`My infos: ${myName} ${mySurname} - ${myAge} - ${myCity}`);


// destructuring swap

let a = 42;
let b = 24;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);
