
import readlineSync from 'readline-sync';
import itog from './itog';

export default (name) => {
  console.log('==================================================');
  console.log('Find the greatest common divisor of given numbers.');
  const raunds = 3;

  for (let j = 0; j < raunds; j += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    let idGcd = 0;
    for (let i = 1; i < number2; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        idGcd = i;
      }
    }
    console.log(`Question:${number1} ${number2} `);

    const answerStr = readlineSync.question('Enter answer:');
    const answerNumber = parseInt(answerStr, 10);

    if (answerNumber === idGcd) {
      console.log('Correct!');
    } else {
      itog(answerNumber, idGcd, name);
      break;
    }
    if (j === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
