
import engine from '../engine/brain-games';

export default () => {
  const gameText = 'Answer "yes" if number even otherwise answer "no".';
  const resultArray = [];
  const questionsArray = [];
  const typeAnswer = 'text';

  const raunds = 3;

  for (let i = 0; i < raunds; i += 1) {
    const number = Math.floor(Math.random() * 100);

    if (number % 2 === 0) {
      resultArray[i] = 'yes';
    } else {
      resultArray[i] = 'no';
    }

    questionsArray[i] = `Question:${number}`;
  }

  engine(gameText, questionsArray, resultArray, typeAnswer);
};
