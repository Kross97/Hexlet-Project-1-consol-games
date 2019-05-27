#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (name) => {
  console.log('=====================================');
  console.log('What is the result of the expression?');
  const raunds = 3;
  for (let i = 0; i < raunds; i += 1) {
    const operationRand = Math.floor(Math.random() * 10);
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    if (operationRand === 1 || operationRand === 4 || operationRand === 7 || operationRand === 10) {
      const sum = number1 + number2;
      console.log(`Question: ${number1} + ${number2} `);

      const answerStr = readlineSync.question('Enter answer:');
      const answerNumber = parseInt(answerStr);

      if (answerNumber === sum) {
        console.log('Correct!');
      } else {
        console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (operationRand === 2 || operationRand === 5 || operationRand === 8) {
      const sum = number1 - number2;
      console.log(`Question: ${number1} - ${number2} `);

      const answerStr = readlineSync.question('Enter answer:');
      const answerNumber = parseInt(answerStr);

      if (answerNumber === sum) {
        console.log('Correct!');
      } else {
        console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (operationRand === 3 || operationRand === 6 || operationRand === 9) {
      const sum = number1 * number2;
      console.log(`Question: ${number1} * ${number2} `);

      const answerStr = readlineSync.question('Enter answer:');
      const answerNumber = parseInt(answerStr);

      if (answerNumber === sum) {
        console.log('Correct!');
      } else {
        console.log(`${answerNumber} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (i === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
