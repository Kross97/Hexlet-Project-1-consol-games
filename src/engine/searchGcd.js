import { predicatEven } from './predicats';

export default (numeral1, numeral2) => {
  let idGcd = 0;
  for (let i = 0; i < numeral2; i += 1) {
    if (predicatEven(numeral1, i) && predicatEven(numeral2, i)) {
      idGcd = i;
    }
  }
  return idGcd;
};
