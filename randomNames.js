const fs = require('fs'); 

const firstNamesMales = ['Adam', 'Leszek', 'Robert', 'Tomek', 'Bob', 'Bill', 'Walter', 'Jacek', 'Mirek'];
const firstNamesFemales = ['Ada', 'Alicja', 'Joanna', 'Jolanta', 'Eva', 'Ursula', 'Jagoda', 'Barbara', 'Beata']
const secondNames = ['Adamowicz', 'Gacek', 'Gąsek', 'Bociak', 'Klimowicz', 'Kraska', 'Rogalik', 'Kowalczyk', 'Kowalik', 'Kawka', 'Barańczak', 'Prońko', 'Grobisz', 'Darnik', 'Derdo', 'Grzęda'];
const genders = ['F', 'M']
const minAge = 18;
const maxAge = 78;
const numberOfNames = 20;

const randomInteger = (upperExclusiveLimit) => Math.floor(Math.random() * upperExclusiveLimit);
const randomName = () => {
  const gender = genders[randomInteger(genders.length)];
  return {
    gender,
    firstName: gender === 'F' ? 
      firstNamesFemales[randomInteger(firstNamesFemales.length)] :
      firstNamesMales[randomInteger(firstNamesMales.length)],
    secondName: secondNames[randomInteger(secondNames.length)],
    age: randomInteger(maxAge - minAge + 1) + 18,
  };
};
const randomNames = () => Array(numberOfNames).fill().map(() => randomName());

fs.writeFile('randomNames.json', JSON.stringify(randomNames()), (err) => {
  if (err) {
    throw err;
  } else {
    console.log('randomNames.json file was saved');
  }
});