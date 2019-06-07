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
    const questionGame = random(minValueRandom, maxValueRandom);
    const answerGame = isEven(questionGame) ? 'yes' : 'no';
    gameData[i] = [questionGame.toString(), answerGame];
  }
  engine(taskGame, gameData);
};
