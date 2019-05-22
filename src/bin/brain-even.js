import readlineSync from 'readline-sync';


export default (name) => {
  console.log('Answer "yes" if number even otherwise answer "no".');


  for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question:${num}`);
    const answer = readlineSync.question('Your answer:');

    if (num % 2 == 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    else if (num % 2 !=0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
     else {
      console.log('Correct!');
    }

    if (i == 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
