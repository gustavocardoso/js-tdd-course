const text = 'Gustavo';

console.log(Array.from(text));


const bucket = Array.of('Gustavo', 12, 4, { name: 'Olívia' });

console.log(bucket);

const data = [
  {
    name: 'Gustavo Cardoso',
    age: 40,
    city: 'Bauru',
  },
  {
    name: 'Rosele Martins',
    age: 40,
    city: 'Bagé',
  },
];

const sample = [4, -5, 0, -1];

const underZero = sample.find(x => x < 0);

console.log(underZero);

const underZeroIndex = sample.findIndex(x => x < 0);

console.log(underZeroIndex);

const gus = data.find(person => person.name === 'Gustavo Cardoso');

const ro = data.findIndex(person => person.name === 'Rosele Martins');

console.log(gus);

console.log(ro);


const arr = new Array(10);

arr.fill('lol', 3, 6);

console.log(arr);

const newArr = [1, 2, 3, 4, 5, 6];

newArr.fill('lol', 1, 3);

console.log(newArr);
