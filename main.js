'use strict';

// console.log(10 +3);

// console.log(10 -3);

// console.log(10 * 3);

// console.log(10 / 3);

// console.log(10 % 3);

// let x;
// console.log(x);
// x = 1;
// console.log(x);
// x = 2;
// console.log(x);
// let x;

// let y = 10;
// console.log(y);
// y = 11;
// console.log(y);

// let str = 'Hello JavaScript'
// let str = "Hello JavaScript"
// console.log(str)

// let i, j, k;


// const a = 1;
// console.log(a);

// const prefecture = 'Tokyo';
// console.log(prefecture);

// console.log('Hello! I'm Yuta Nakamura.');
// console.log('Hello! I\'m Yuta Nakamura.');

// console.log('\¥ \t AAA \n BBB');

// console.log("Hello! I'm Yuta Nakamura.");
// console.log('"Nakamura"-san.');

// let num = 10;

// インクリメント
// num++;
// console.log(num)

// デクリメント
// num--;
// console.log(num);

// 前置演算子
// ++num;
// console.log(num);

// 後置演算子
// --num;
// console.log(num);

// let num1 = 10;
// let num2 = 10;
// let ans1 = ++num1;
// let ans2 = num2++;

// console.log(ans1);
// console.log(ans2);

// const x = 100;
// const x = 99;
// if(x >= 100) {
//   console.log('100以上の値です');
// } else {
//   console.log('100未満の値です');
// }


// const x = 59;
// if(x >= 90) {
//   console.log('A');
// } else if(x >= 80) {
//   console.log('B');
// } else if(x >= 60) {
//   console.log('C');
// } else {
//   console.log('D');
// }


// let num = 100;
// let str = '100';

// if(num == str) {
//   console.log('同じ');
// } else {
//   console.log('同じではない');
// }

// if(num === str) {
//   console.log('同じ');
// } else {
//   console.log('同じではない');
// }

// const n = 1;
// switch(n) {
//   case 1:
//     console.log('one');
//     break;
//   case 2:
//     console.log('two');
//     break;
//   case 3:
//     console.log('three');
//     break;
//   default:
//     console.log('other');
//     break;
// }

// const age = 12;
// if(age >= 12) {
//   console.log('5000yen');
// } else if(age >=6) {
//   console.log('2500yen');
// } else {
//   console.log('1000yen');
// }

// for(let i = 1; i <= 3; i++){
//   console.log(i);
// }

// let i = 1;
// while(i <= 3) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while(i <= 3);


// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//   // sum = sum + i;
//   sum += i;
// }
  
// console.log(sum);

// const colors = ['Red', 'Green', 'Blue'];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const user = {name: 'Olivia', gender: 'Woman', birth: '1990/1/1'};
// console.log(user.name);
// console.log(user.gender);
// console.log(user.birth);

// const scores = [100, 90, 80, 70, 60];
// let sum = 0;
// for(let i = 0; i < scores.length; i++) {
//   sum = sum + scores[i]
// }

// const average = sum / scores.length;
// console.log(sum);
// console.log(average);



// function getRectangle(height, width) {
//   return height * width;
// }

// console.log(getRectangle(3, 5));



// const getRectangle = function(height, width){
//   return height * width;
// }

// console.log(getRectangle(3, 5));


// const getRectangle
//   = new Function('height', 'width', 'return height * width');
// console.log(getRectangle(3, 5));


// const getRectangle = (height, width) => {
//   return height * width;
// }

// console.log(getRectangle(3, 5));



function price(unitPrice, n){
  return unitPrice * n;
}

console.log(price(100, 13));