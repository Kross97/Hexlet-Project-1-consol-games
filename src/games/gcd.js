
import { rounds, engine } from '../engine/brain-games';
import random from '../engine/random';
import searchGcd from '../engine/searchGcd';

export default () => {
  const conditionGame = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  const intervalRandom = 100;

  for (let i = 0; i < rounds; i += 1) {
    const elementData = [];
    const numeral1 = random(intervalRandom);
    const numeral2 = random(intervalRandom);

    const idGcd = searchGcd(numeral1, numeral2);

    elementData[1] = `${idGcd}`;
    elementData[0] = `Question:${numeral1} ${numeral2} `;
    gameData[i] = elementData;
  }
  engine(conditionGame, gameData);
};
