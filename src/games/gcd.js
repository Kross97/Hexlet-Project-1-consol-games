import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'Find the greatest common divisor of given numbers.';
const maxValueRandom = 100;
const minValueRandom = 1;

const searchGcd = (question1, question2) => {
  if (question2 === 0) {
    return question1;
  }
  return searchGcd(question2, question1 % question2);
};

export default () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question1 = random(minValueRandom, maxValueRandom);
    const question2 = random(minValueRandom, maxValueRandom);

    const answerGame = searchGcd(question1, question2);

    const questionGame = `${question1} ${question2}`;
    gameData[i] = [questionGame, answerGame.toString()];
  }
  engine(taskGame, gameData);
};
