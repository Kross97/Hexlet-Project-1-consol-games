import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const engine = (taskGame, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello , ${name}`);
  console.log(taskGame);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rigthAnswer] = gameData[i];
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Enter answer: ');

    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rigthAnswer}`);
      console.log(`Correct answer was Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
