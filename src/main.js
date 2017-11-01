const cities = ['São Paulo', 'Bagé', 'Bauru', 'Porto Alegre'];

const love = cities.map((city) => {
  return `I love ${city}`;
});

const loveSingle = cities.map(city => `I love ${city}`);

console.log(love);

console.log('');

console.log(loveSingle);

console.log('');

const loveChain = cities
  .filter(city => city === 'São Paulo')
  .map(city => `But, I really love ${city}`);

console.log(loveChain);

const firstName = 'Gustavo';
const lastName = 'Cardoso';
const age = 40;

const person = {
  firstName,
  lastName,
  age,

  hello() {
    console.log('Hello');
  }
}

console.log(person);

person.hello();
