var v1; //변수 선언
v1 = 1; //변수 값 할당
console.log("v1:", v1);

//변수를 선언하기 전에 참조하면 undefined
console.log("v2:", v2);
console.log("v3:", v3);

var v2 = 2;
var v3 = 3;

//var 변수는 재선언 가능하다
var v3 = 5;
console.log("v2:", v2);
console.log("v3:", v3);

//let
let l1;
console.log("l1:", l1);
l1 = 1;
console.log("l1:", l1);

//선언하기 전에 참조할 수 없다
//console.log("l2:", l2);
let l2 = 2;
console.log("l2:", l2);

//let 변수는 값을 재할당 할 수 있다
l2 = 3;
console.log("l2:", l2);

//let 변수는 재선언 할 수 없다
//let l2 = 3;

//const
//console.log("c1:", c1);
const c1 = 1;

//값을 재할당 할 수 없음
//c1 = 2;

//재선언할 수 없다
//const c1 = 2;
