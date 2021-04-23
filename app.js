'use strict';
const number = process.argv[2] ||0; //選択的代入：左がfalsyなら右の値を代入する。
let sum = 0;
for(let i=1; i <=number; i++){
    sum = sum+i;
}
console.log(sum);