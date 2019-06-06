import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const operations = ['+', '-', '*'];
const taskGame = 'What is the result of the expression?';

export default () => {
  const gameData = [];

  const intervalRandom = 10;
  const intervalRandom2 = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const operationIndex = random(intervalRandom2);
    const roundValue1 = random(intervalRandom);
    const roundValue2 = random(intervalRandom);

    const questionRound = ` ${roundValue1} ${operations[operationIndex]} ${roundValue2}`;

    let result;

    switch (operations[operationIndex]) {
      case '+':
        result = roundValue1 + roundValue2;
        break;

      case '-':
        result = roundValue1 - roundValue2;
        break;

      default:
        result = roundValue1 * roundValue2;
        break;
    }
    const expectedAnswer = `${result}`;
    gameData[i] = [questionRound, expectedAnswer];
  }
  engine(taskGame, gameData);
};
