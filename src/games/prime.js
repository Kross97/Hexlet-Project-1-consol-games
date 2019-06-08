import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxValueRandom = 100;
const minValueRandom = 2;

const isPrime = (question) => {
  if (question < 0) {
    return false;
  }
  for (let i = 2; i < question / 2; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = random(minValueRandom, maxValueRandom);
    const answerGame = isPrime(question) ? 'yes' : 'no';
    const questionGame = question.toString();
    gameData[i] = [questionGame, answerGame];
  }
  engine(taskGame, gameData);
};
