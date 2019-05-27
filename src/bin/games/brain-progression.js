#!/usr/bin/env node
import readlineSync from 'readline-sync';
import itog from './itog';

export default (name) => {
  console.log('What number is missing in the progression?');

  const raunds = 3;
  const arrayLength = 10;

  for (let j = 0; j < raunds; j += 1) {
    const array = [];

    const stepStr = readlineSync.question('Enter step:');
    const step = parseInt(stepStr, 10);

    let value = 0;
    for (let i = 0; i < arrayLength; i += 1) {
      value += step;
      array[i] = value;
    }
    const elementSecret = Math.floor(Math.random() * 10);
    const answerValue = array[elementSecret];
    array[elementSecret] = '...';

    console.log(`${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]} ${array[5]} ${array[6]} ${array[7]} ${array[8]} ${array[9]}`);

    const answerStr = readlineSync.question('Enter answer:');
    const answerNumber = parseInt(answerStr, 10);
    if (answerNumber === answerValue) {
      console.log('Correct!');
    } else {
      itog(answerNumber, answerValue, name);
      break;
    }
    if (j === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
