import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'What number is missing in the progression?';
const maxValueRandom = 100;
const minValueRandom = 0;
const progressionLength = 10;

export default () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const progression = [];
    const step = random(minValueRandom, maxValueRandom);

    let value = 0;
    for (let j = 0; j < progressionLength; j += 1) {
      value += step;
      progression[j] = value;
    }
    const secretIndex = random(minValueRandom, progressionLength);
    const answerGame = progression[secretIndex];
    progression[secretIndex] = '...';

    const questionGame = progression.join();
    gameData[i] = [questionGame, answerGame.toString()];
  }
  engine(taskGame, gameData);
};
