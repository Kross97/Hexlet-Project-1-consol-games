
import { rounds, engine } from '../engine/brain-games';
import random from '../engine/random';
import { predicatPrime } from '../engine/predicats';

export default () => {
  const conditionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  const intervalRandom = 10;

  for (let i = 0; i < rounds; i += 1) {
    const elementData = [];
    const numeral = random(intervalRandom);

    elementData[0] = `${numeral}`;

    if (predicatPrime(numeral)) {
      elementData[1] = 'yes';
    } else {
      elementData[1] = 'no';
    }
    gameData[i] = elementData;
  }

  engine(conditionGame, gameData);
};
