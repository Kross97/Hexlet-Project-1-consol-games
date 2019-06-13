import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxValueRandom = 100;
const minValueRandom = 2;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = random(minValueRandom, maxValueRandom);
    const answer = isPrime(question) ? 'yes' : 'no';
    gameData[i] = [question, answer];
  }
  engine(taskGame, gameData);
};
