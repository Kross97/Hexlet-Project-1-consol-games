import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const engine = (taskGame, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello , ${name}`);
  console.log(taskGame);

  for (let i = 0; i < roundsCount; i += 1) {
    const [questionRound, expectedAnswer] = gameData[i];
    console.log(`Question:${questionRound}`);

    const answer = readlineSync.question('Enter answer:');

    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedAnswer}`);
      console.log(`Correct answer was Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
