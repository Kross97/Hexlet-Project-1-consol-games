#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const raunds = 3;
  for (let j = 0; j < raunds; j += 1) {
    const number = Math.floor(Math.random() * 10);
    let idPrime = 0;

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        idPrime = i;
      }
    }
    console.log(`Number=${number}`);
    const answer = readlineSync.question('You Answer: ');
    if (idPrime === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (idPrime === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was yes.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (idPrime !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (idPrime !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was no.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (j === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
