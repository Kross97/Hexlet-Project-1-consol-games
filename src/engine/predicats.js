

export const predicatEven = (number, argument) => {
  if (number % argument === 0) {
    return true;
  }

  return false;
};


export const predicatPrime = (numeral) => {
  let idPrime = 0;

  for (let i = 2; i < numeral; i += 1) {
    if (predicatEven(numeral, i)) {
      idPrime = i;
    }
  }
  if (idPrime !== 0 || numeral === 1) {
    return false;
  }
  return true;
};
