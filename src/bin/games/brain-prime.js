import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let j = 0; j < 3; j++) {
    const numb = Math.floor(Math.random() * 10);
    let id = 0;

    for (let i = 2; i < numb; i++) {
      if (numb%i == 0) {
        id = i;
      }
    }
    console.log(`Number=${numb}`);
    const answer = readlineSync.question('You Answer: ');
    if (id == 0 && answer == 'yes') {
      console.log('Correct!');
    } else if (id==0 && answer!='yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was yes.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (id!=0 && answer=='no') {
      console.log('Correct!');
    } else if (id!=0 && answer!='no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was no.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (j==2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
