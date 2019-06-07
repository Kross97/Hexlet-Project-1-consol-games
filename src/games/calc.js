import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const operations = ['+', '-', '*'];
const taskGame = 'What is the result of the expression?';
const maxValueRandom = 10;
const minValueRandom = 0;
const operationsCount = operations.length();

export default () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const operationIndex = random(minValueRandom, operationsCount);
    const question1 = random(minValueRandom, maxValueRandom);
    const question2 = random(minValueRandom, maxValueRandom);

    const questionGame = ` ${question1} ${operations[operationIndex]} ${question2}`;

    let answerGame;

    switch (operations[operationIndex]) {
      case '+':
        answerGame = question1 + question2;
        break;

      case '-':
        answerGame = question1 - question2;
        break;

      default:
        answerGame = question1 * question2;
        break;
    }
    gameData[i] = [questionGame, answerGame.toString()];
  }
  engine(taskGame, gameData);
};
