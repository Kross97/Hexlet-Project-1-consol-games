
import engine from '../engine/brain-games';

export default () => {
  const gameText = 'What number is missing in the progression?';
  const questionsArray = [];
  const resultArray = [];
  const typeAnswer = 'number';

  const raunds = 3;
  const arrayLength = 10;

  for (let j = 0; j < raunds; j += 1) {
    const array = [];
    const step = Math.floor(Math.random() * 100);

    let value = 0;
    for (let i = 0; i < arrayLength; i += 1) {
      value += step;
      array[i] = value;
    }
    const elementSecret = Math.floor(Math.random() * 10);
    resultArray[j] = array[elementSecret];
    array[elementSecret] = '...';

    questionsArray[j] = `${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]} ${array[5]} ${array[6]} ${array[7]} ${array[8]} ${array[9]}`;
  }
  engine(gameText, questionsArray, resultArray, typeAnswer);
};
