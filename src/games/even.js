import { roundsCount, engine } from '../engine';
import isEven from '../addition/predicatEven';
import random from '../addition/random';

const taskGame = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const gameData = [];
  const intervalRandom = 100;

  for (let i = 0; i < roundsCount; i += 1) {
    const roundValue = random(intervalRandom);
    let expectedAnswer;
    if (isEven(roundValue)) {
      expectedAnswer = 'yes';
    } else {
      expectedAnswer = 'no';
    }
    const questionRound = `${roundValue}`;
    gameData[i] = [questionRound, expectedAnswer];
  }
  engine(taskGame, gameData);
};
