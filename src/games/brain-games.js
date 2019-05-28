import readlineSync from 'readline-sync';
import welcome from './index';
import even from './brain-even';
import calc from './brain-calc';
import gcd from './brain-gcd';
import prog from './brain-progression';
import prime from './brain-prime';

export default (argument) => {
  console.log('===========================');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');

  welcome(name);

  const bool = true; //  while uslovie
  let number = argument;


  while (bool) {
    if (number === undefined) {
      console.log('1.Brain-even');
      console.log('2.Brain-calculyator');
      console.log('3.Brain-GCD');
      console.log('4.Brain-progression');
      console.log('5.Brain-prime');
      console.log('9.Exit');
      const strNumber = readlineSync.question('Enter number game :');
      number = parseInt(strNumber, 10);
    }


    if (number === 1) {
      even(name);
      number = undefined;
    }

    if (number === 2) {
      calc(name);
      number = undefined;
    }

    if (number === 3) {
      gcd(name);
      number = undefined;
    }

    if (number === 4) {
      prog(name);
      number = undefined;
    }

    if (number === 5) {
      prime(name);
      number = undefined;
    }
    if (number === 9) {
      console.log('Good bye');
      console.log('Exit games....');
      break;
    }
  }
};
