import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync');

export default () => {
  const actual = readlineSync.question('May I have your name?: ');
  const text = `Hello,${actual}`;
  console.log(text);
};
