import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxValueRandom = 100;
const minValueRandom = 2;

const isPrime = (questionGame) => {
  if (questionGame < 0) {
    return false;
  }
  for (let i = 2; i < questionGame / 2; i += 1) {
    if (questionGame % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const questionGame = random(minValueRandom, maxValueRandom);
    const answerGame = isPrime(questionGame) ? 'yes' : 'no';
    gameData[i] = [questionGame.toString(), answerGame];
  }
  engine(taskGame, gameData);
};
