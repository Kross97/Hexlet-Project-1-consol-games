
import readlineSync from 'readline-sync';


export default () => {
  console.log('Welcome to the Brain Games!');

  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello,${name}`);
  const number = Math.random();
  readlineSync.answer(`Question:${number}`);
};
