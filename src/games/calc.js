import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const operations = ['+', '-', '*'];
const taskGame = 'What is the result of the expression?';
const maxValueRandom = 10;
const minValueRandom = 0;

export default () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const indexOperation = random(0, operations.length - 1);
    const a = random(minValueRandom, maxValueRandom);
    const b = random(minValueRandom, maxValueRandom);
    const question = `${a} ${operations[indexOperation]} ${b}`;
    let answer;
    switch (operations[indexOperation]) {
      case '+':
        answer = a + b;
        break;
      case '-':
        answer = a - b;
        break;
      default:
        answer = a * b;
        break;
    }
    gameData[i] = [question, answer.toString()];
  }
  engine(taskGame, gameData);
};
