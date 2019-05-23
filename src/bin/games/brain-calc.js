import readlineSync from 'readline-sync';

export default (name) => {
  console.log('=====================================');
  console.log('What is the result of the expression?');

  for (let i=0 ; i<3 ; i++) {
    const opr = Math.floor(Math.random() * 10);
    const numb1 = Math.floor(Math.random() * 10);
    const numb2 = Math.floor(Math.random() * 10);
    if(opr==1 || opr==4 || opr==7 || opr==10) {
      const sum = numb1 + numb2;
      console.log(`Question: ${numb1} + ${numb2} `)
      const answer = readlineSync.question('Your answer: ');
      if(answer==sum) {
        console.log(`Correct!`);
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`)
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if(opr==2 || opr==5 || opr==8) {
      const sum = numb1 - numb2;
      console.log(`Question: ${numb1} - ${numb2} `)
      const answer = readlineSync.question('Your answer: ');
      if(answer==sum) {
        console.log(`Correct!`);
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`)
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if(opr==3 || opr==6 || opr==9 ) {
      const sum = numb1 * numb2;
      console.log(`Question: ${numb1} * ${numb2} `)
      const answer = readlineSync.question('Your answer: ');
      if(answer==sum) {
        console.log(`Correct!`);
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`)
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
   else if (i==2){
    console.log(`Congratulations, ${name}!`);
   }
  }
};
