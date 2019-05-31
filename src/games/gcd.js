
import engine from '../engine/brain-games';

export default () => {
  const gameText = 'Find the greatest common divisor of given numbers.';
  const questionsArray = [];
  const resultsArray = [];
  const typeAnswer = 'number';
  const raunds = 3;

  for (let j = 0; j < raunds; j += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    let idGcd = 0;
    for (let i = 0; i < number2; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        idGcd = i;
      }
    }
    resultsArray[j] = idGcd;
    questionsArray[j] = `Question:${number1} ${number2} `;
  }
  engine(gameText, questionsArray, resultsArray, typeAnswer);
};
