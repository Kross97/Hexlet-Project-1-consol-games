#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (name) => {
  console.log('=====================================');
  console.log('What is the result of the expression?');
  const raunds = 3;
  
  const arrOperation = ['+', '-', '*', '+', '-', '*', '+', '-', '*', '+'];

  for (let i = 0; i < raunds; i += 1) {
    const operationIndex = Math.floor(Math.random() * 10);
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    if (arrOperation[operationIndex] === '+') {
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

    if (arrOperation[operationIndex] === '-') {
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

    if (arrOperation[operationIndex] === '*') {
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
