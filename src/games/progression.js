import { roundsCount, engine } from '../engine';
import random from '../addition/random';

const taskGame = 'What number is missing in the progression?';
const maxValueRandom = 100;
const minValueRandom = 1;
const progressionLength = 10;

const createProgression = () => {
  const progression = [];
  const startValue = random(minValueRandom, maxValueRandom);
  const stepProgression = random(minValueRandom, maxValueRandom);
  for (let i = 0; i < progressionLength; i += 1) {
    const elementValue = startValue + stepProgression * i;
    progression[i] = elementValue;
  }
  return progression;
};

export default () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const progression = createProgression();
    const secretIndex = random(minValueRandom, progressionLength - 1);
    const answer = progression[secretIndex];
    progression[secretIndex] = '...';
    const question = progression.join();
    gameData[i] = [question, answer.toString()];
  }
  engine(taskGame, gameData);
};
