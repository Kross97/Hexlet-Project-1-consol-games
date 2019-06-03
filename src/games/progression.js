
import { rounds, engine } from '../engine/brain-games';
import random from '../engine/random';

export default () => {
  const conditionGame = 'What number is missing in the progression?';
  const gameData = [];
  const intervalRandom = 100;
  const intervalRandom2 = 10;
  const lengthArr = 10;

  for (let i = 0; i < rounds; i += 1) {
    const elementData = [];
    const numbersGame = [];
    const step = random(intervalRandom);

    let value = 0;
    for (let j = 0; j < lengthArr; j += 1) {
      value += step;
      numbersGame[j] = value;
    }
    const elementSecret = random(intervalRandom2);
    elementData[1] = `${numbersGame[elementSecret]}`;
    numbersGame[elementSecret] = '...';

    elementData[0] = `${numbersGame.map(element => element)}`;
    gameData[i] = elementData;
  }
  engine(conditionGame, gameData);
};
