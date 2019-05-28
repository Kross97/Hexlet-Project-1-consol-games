

export default (number, answer) => {
  if (number % 2 === 0 && answer !== 'yes') {
    return false;
  } if (number % 2 !== 0 && answer !== 'no') {
    return false;
  }
  return true;
};
