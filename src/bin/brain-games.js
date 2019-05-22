
import welcome from '..';
import readlineSync from 'readline-sync';
import even from './brain-even';
import calc from './brain-calc';
console.log('===========================');
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');

welcome(name);


let i;
while (true) {
  console.log('1.Brain-even');
  console.log('2.Brain-calculyator');
  console.log('9.Exit');
  const number = readlineSync.question('Enter number game :' );

if (number==1){
  even(name);
}

if (number==2){
  calc(name);
}

else if (number==9) {
  console.log('Good bye');
  console.log('Exit games....');
  break;
}

i++;
}
