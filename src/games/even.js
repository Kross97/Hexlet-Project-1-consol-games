import { rounds, engine } from '../engine/brain-games';
import { predicatEven } from '../engine/predicats';
import random from '../engine/random';

export default () => {
  const conditionGame = 'Answer "yes" if number even otherwise answer "no".';
  const gameData = [];
  const intervalRandom = 100;

  for (let i = 0; i < rounds; i += 1) {
    const elementData = [];
    const numeral = random(intervalRandom);

    if (predicatEven(numeral, 2)) {
      elementData[1] = 'yes';
    } else {
      elementData[1] = 'no';
    }

    elementData[0] = `Question:${numeral}`;
    gameData[i] = elementData;
  }

  engine(conditionGame, gameData);
};
