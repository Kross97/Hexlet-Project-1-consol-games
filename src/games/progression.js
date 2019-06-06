import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'What number is missing in the progression?';

export default () => {
  const gameData = [];
  const intervalRandom = 100;
  const intervalRandom2 = 10;

  for (let i = 0; i < roundsCount; i += 1) {
    const numbers = [];
    const step = random(intervalRandom);

    const numbersCount = 10;
    let value = 0;
    for (let j = 0; j < numbersCount; j += 1) {
      value += step;
      numbers[j] = value;
    }
    const secretIndex = random(intervalRandom2);
    const expectedAnswer = `${numbers[secretIndex]}`;
    numbers[secretIndex] = '...';

    const questionRound = `${numbers.join()}`;
    gameData[i] = [questionRound, expectedAnswer];
  }
  engine(taskGame, gameData);
};
