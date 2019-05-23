import readlineSync from 'readline-sync';


export default (name) => {
  console.log('What number is missing in the progression?');
  for (let j=0 ; j<3 ; j++) {
  const arr = [];
  const step = readlineSync.question('Enter step:');
  let all = 0;
  for(let i=0 ; i<10 ; i++) {
    all = all - (-step);
    arr[i]=all;
  }
 const el = Math.floor(Math.random()*10);
 const s = arr[el];
 arr[el]="...";
 for(let i=0 ; i<10 ; i++){
   console.log(arr[i]);
 }
 const answer = readlineSync.question('Enter answer:');
 if(answer==s){
   console.log('Correct!');
 } else {
   console.log(`${answer} is wrong answer ;(. Correct answer was ${s}.`);
   console.log(`Let's try again, ${name}!`);
   break;
 }
 if(j==2) {
   console.log(`Congratulations, ${name}!`);
    }
  }
};
