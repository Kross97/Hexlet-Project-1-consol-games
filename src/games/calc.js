
import { rounds, engine } from '../engine/brain-games';
import random from '../engine/random';

const operations = ['+', '-', '*'];

export default () => {
  const conditionGame = 'What is the result of the expression?';
  const gameData = [];

  const intervalRandom = 10;
  const intervalRandom2 = 3;

  for (let i = 0; i < rounds; i += 1) {
    const elementData = [];
    const operationIndex = random(intervalRandom2);
    const numeral1 = random(intervalRandom);
    const numeral2 = random(intervalRandom);

    elementData[0] = `Question: ${numeral1} ${operations[operationIndex]} ${numeral2}`;

    let result = 0;

    switch (operations[operationIndex]) {
      case '+':
        result = numeral1 + numeral2; break;

      case '-':
        result = numeral1 - numeral2; break;

      default:
        result = numeral1 * numeral2; break;
    }
    elementData[1] = `${result}`;
    gameData[i] = elementData;
  }
  engine(conditionGame, gameData);
};
