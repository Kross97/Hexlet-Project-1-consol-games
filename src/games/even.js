import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Answer "yes" if number even otherwise answer "no".';
const maxValueRandom = 100;
const minValueRandom = 1;

const isEven = number => number % 2 === 0;

export default () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = random(minValueRandom, maxValueRandom);
    const answer = isEven(question) ? 'yes' : 'no';
    gameData[i] = [question.toString(), answer];
  }
  engine(taskGame, gameData);
};
