import isDenom from '../addition/specialPredicat';
import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (roundValue) => {
  if (roundValue === 1 || roundValue === 0) {
    return false;
  }
  let idPrime = 0;

  for (let i = 2; i < roundValue; i += 1) {
    if (isDenom(roundValue, i)) {
      idPrime = i;
    }
  }
  if (idPrime !== 0) {
    return false;
  }
  return true;
};

export default () => {
  const gameData = [];
  const intervalRandom = 10;

  for (let i = 0; i < roundsCount; i += 1) {
    const roundValue = random(intervalRandom);
    const questionRound = `${roundValue}`;
    let expectedAnswer;
    if (isPrime(roundValue)) {
      expectedAnswer = 'yes';
    } else {
      expectedAnswer = 'no';
    }
    gameData[i] = [questionRound, expectedAnswer];
  }
  engine(taskGame, gameData);
};
