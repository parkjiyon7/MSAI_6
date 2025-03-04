// 함수 호출
plus = add(3, 4);
console.log(plus);

// 두 수를 더한 값을 리턴하는 함수 정의
function add(x, y) {
  return x + y;
}
console.log("====================");

const add2 = function (x, y) {
  return x + y;
};

console.log(add2(1, 2));

console.log("====================");

//화살표 함수

const add3 = (x, y) => {
  return x + y;
};
console.log(add3(5, 6));
