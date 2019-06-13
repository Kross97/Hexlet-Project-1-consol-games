import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'What number is missing in the progression?';
const maxValueRandom = 100;
const minValueRandom = 1;
const length = 10;

const createProgression = (startValue, stepProgression, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const elementValue = startValue + stepProgression * i;
    progression[i] = elementValue;
  }
  return progression;
};

export default () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const startValue = random(minValueRandom, maxValueRandom);
    const stepProgression = random(minValueRandom, maxValueRandom);
    const progression = createProgression(startValue, stepProgression, length);
    const secretIndex = random(minValueRandom, length - 1);
    const answer = progression[secretIndex];
    progression[secretIndex] = '...';
    const question = progression.join();
    gameData[i] = [question, answer.toString()];
  }
  engine(taskGame, gameData);
};
