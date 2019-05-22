import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync');

const fun = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello,${name}`);

  for (let i = 0; i < 3; i++) {
    const num = Math.random() * 100000000000000000;
    console.log(`Question:${num}`);
    const answer = readlineSync.question('Your answer:');

    if(num % 2 == 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    else if(num % 2 !=0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
     else {
      console.log('Correct!');
    }

    if(i == 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
fun();
