import readlineSync from 'readline-sync';

export const rounds = 3;

export const engine = (conditionGame, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello , ${name}`);
  console.log(conditionGame);

  for (let i = 0; i < rounds; i += 1) {
    console.log(gameData[i][0]);

    const answer = readlineSync.question('Enter answer:');

    if (answer === gameData[i][1]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gameData[i][1]}`);
      console.log(`Correct answer was Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
