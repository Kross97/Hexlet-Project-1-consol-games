#!/usr/bin/env node
import readlineSync from 'readline-sync';
import predicate from './even-predicat';

export default (name) => {
  console.log('=========================================');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const raunds = 3;

  for (let i = 0; i < raunds; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question:${number}`);
    const answer = readlineSync.question('Your answer:');
    const predicatValue = predicate(number, answer);
    if (predicatValue === true) {
      console.log('Correct!');
    } else if (predicatValue === false) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answer==='yes' ? 'no' : 'yes'}`);
      console.log(`Correct answer was Let's try again, ${name}!`);
      break;
    }

    if (i === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
