import readlineSync from 'readline-sync';
import welcome from './index';


export default (gameText, questions, results, typeAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  welcome(name);
  console.log(gameText);
  const raunds = 3;
  for (let i = 0; i < raunds; i += 1) {
    console.log(questions[i]);

    let answer;

    // Answer Type Number or Text
    if (typeAnswer === 'number') {
      const answerStr = readlineSync.question('Enter answer:');
      answer = parseInt(answerStr, 10);
    } else if (typeAnswer === 'text') {
      answer = readlineSync.question('Enter answer:');
    }

    if (answer === results[i]) {
      console.log('Correct!');
    }

    if (answer !== results[i]) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${results[i]}`);
      console.log(`Correct answer was Let's try again, ${name}!`);
      break;
    }

    if (i === raunds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
