
import engine from '../engine/brain-games';

export default () => {
  const gameText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsArray = [];
  const resultsArray = [];
  const typeAnswer = 'text';

  const raunds = 3;

  for (let j = 0; j < raunds; j += 1) {
    const number = Math.floor(Math.random() * 10) + 1;
    let idPrime = 0;

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        idPrime = i;
      }
    }

    questionsArray[j] = `${number}`;


    if (idPrime !== 0 || number === 1) {
      resultsArray[j] = 'no';
    } else {
      resultsArray[j] = 'yes';
    }
  }

  engine(gameText, questionsArray, resultsArray, typeAnswer);
};
