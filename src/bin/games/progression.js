import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../../index';


const condition = 'What number is missing in the progression?';

const gameLogic = () => {
  let arrAnswer = '';
  let result = [];
  const randomNumber = getRandomInt(2, 11);
  const randomIndex = getRandomInt(2, 6);
  const arr = [];

  for (let i = 0, j = 1; i < 10; i++) {
    arr.push(j);
    j += randomIndex;
  }

  result = arr[randomNumber];
  arr[randomNumber] = '..';

  for (let i = 0; i < 10; i++) {
    arrAnswer += `${arr[i]} `;
  }

  console.log(`Question: ${arrAnswer}`);
  const getInput = +readlineSync.question('Your answer: ');
  const resultСomparison = getInput === result;
  return cons(resultСomparison, cons(getInput, result));
};

const gameFunc = () => {
  engine(gameLogic, condition);
};

export default gameFunc;
