const defer = state => new Promise((resolve, reject) => {
  console.log('# Gerando array');

  setTimeout(() => {
    if (state) {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    } else {
      reject('Error!');
    }
  }, 2000);
});

defer(true)
  .then((data) => {
    console.log(`## Array: ${data}`);
    return data.map(item => item * 2);
  })
  .then((data) => {
    console.log(`## Array * 2: ${data}`);
    return data.filter(item => item % 5 === 0);
  })
  .then((data) => {
    console.log(`## Array % 5: ${data}`);
  })
  .catch(err => console.log(err));

console.log('Antes da promise');
