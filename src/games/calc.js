
import engine from '../engine/brain-games';


export default () => {
  const gameText = 'What is the result of the expression?';
  const questionsArray = [];
  const resultArray = [];
  const typeAnswer = 'number';
  const arrOperation = ['+', '-', '*', '+', '-', '*', '+', '-', '*', '+'];
  const raunds = 3;

  for (let i = 0; i < raunds; i += 1) {
    const operationIndex = Math.floor(Math.random() * 10);
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);

    questionsArray[i] = `Question: ${number1} ${arrOperation[operationIndex]} ${number2} `;

    let result = 0;

    if (arrOperation[operationIndex] === '+') {
      result = number1 + number2;
    }

    if (arrOperation[operationIndex] === '-') {
      result = number1 - number2;
    }

    if (arrOperation[operationIndex] === '*') {
      result = number1 * number2;
    }
    resultArray[i] = result;
  }

  engine(gameText, questionsArray, resultArray, typeAnswer);
};
