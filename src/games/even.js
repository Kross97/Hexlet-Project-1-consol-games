import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Answer "yes" if number even otherwise answer "no".';
const maxValueRandom = 100;
const minValueRandom = 1;

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = random(minValueRandom, maxValueRandom);
    const answerGame = isEven(question) ? 'yes' : 'no';
    const questionGame = question.toString();
    gameData[i] = [questionGame, answerGame];
  }
  engine(taskGame, gameData);
};
