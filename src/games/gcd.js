import isDenom from '../addition/specialPredicat';
import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Find the greatest common divisor of given numbers.';

const searchGcd = (roundValue1, roundValue2) => {
  let gcd = 0;
  for (let i = 0; i < roundValue2; i += 1) {
    if (isDenom(roundValue1, i) && isDenom(roundValue2, i)) {
      gcd = i;
    }
  }
  return gcd;
};

export default () => {
  const gameData = [];
  const intervalRandom = 100;

  for (let i = 0; i < roundsCount; i += 1) {
    const roundValue1 = random(intervalRandom);
    const roundValue2 = random(intervalRandom);

    const gcd = searchGcd(roundValue1, roundValue2);

    const questionRound = `${roundValue1} ${roundValue2}`;
    const expectedAnswer = `${gcd}`;
    gameData[i] = [questionRound, expectedAnswer];
  }
  engine(taskGame, gameData);
};
