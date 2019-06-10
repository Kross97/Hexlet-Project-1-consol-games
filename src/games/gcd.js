import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Find the greatest common divisor of given numbers.';
const maxValueRandom = 100;
const minValueRandom = 1;

const searchGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return searchGcd(number2, number1 % number2);
};

export default () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const a = random(minValueRandom, maxValueRandom);
    const b = random(minValueRandom, maxValueRandom);
    const answer = searchGcd(a, b);
    const question = `${a} ${b}`;
    gameData[i] = [question, answer.toString()];
  }
  engine(taskGame, gameData);
};
