
import readlineSync from 'readline-sync';
import itog from './itog';

export default (name) => {
  console.log('=====================================');
  console.log('What is the result of the expression?');
  const raunds = 3;

  const arrOperation = ['+', '-', '*', '+', '-', '*', '+', '-', '*', '+'];

  for (let i = 0; i < raunds; i += 1) {
    const operationIndex = Math.floor(Math.random() * 10);
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);

    console.log(`Question: ${number1} ${arrOperation[operationIndex]} ${number2} `);

    let result = 0;

    if (arrOperation[operationIndex] === '+') {
      result = number1 + number2;
    }

    if (arrOperation[operationIndex] === '-') {
      result = number1 - number2;
    }

    if (arrOperation[operationIndex] === '*') {
      result = number1 * number2;
    }

    const answerStr = readlineSync.question('Enter answer:');
    const answerNumber = parseInt(answerStr, 10);

    if (answerNumber === result) {
      console.log('Correct!');
    } else {
      itog(answerNumber, result, name);
      break;
    }

    if (i === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
