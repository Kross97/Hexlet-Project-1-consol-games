import readlineSync from 'readline-sync';

export default (name) => {
  console.log('=====================================');
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i++) {
    const operation = Math.floor(Math.random() * 10);
    const numb1 = Math.floor(Math.random() * 10);
    const numb2 = Math.floor(Math.random() * 10);
    if (operation == 1 || operation == 4 || operation == 7 || operation == 10) {
      const sum = numb1 + numb2;
      console.log(`Question: ${numb1} + ${numb2} `);
      const answer = readlineSync.question('Your answer: ');
      if (answer == sum) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (operation == 2 || operation == 5 || operation == 8) {
      const sum = numb1 - numb2;
      console.log(`Question: ${numb1} - ${numb2} `);
      const answer = readlineSync.question('Your answer: ');
      if (answer == sum) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (operation == 3 || operation == 6 || operation == 9) {
      const sum = numb1 * numb2;
      console.log(`Question: ${numb1} * ${numb2} `);
      const answer = readlineSync.question('Your answer: ');
      if (answer == sum) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } else if (i == 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
