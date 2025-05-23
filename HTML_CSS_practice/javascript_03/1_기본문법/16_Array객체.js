const arr = ["red", "orange", "yelllow"];

console.log(typeof arr);

// 배열 인덱싱
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[100]); // 범위를 벗어나면 undefined
console.log(arr[-2]); // 음수 인덱싱 x

console.log("==========요소 추가==========");

// 요소 추가
arr[3] = "blue";
console.log(arr);

arr[6] = "purple";
console.log(arr);

// arr["오"] = 6;
// console.log(arr);

console.log("==========요소 수정==========");
// 요소 수정
arr[3] = "green";
console.log(arr);

console.log("==========요소 삭제==========");
// 요소 삭제
delete arr[6];
console.log(arr);

console.log("==========슬라이스==========");
// 슬라이스
const arr2 = arr.slice(0, 4);
console.log(arr2);

console.log("==========push, pop==========");
//배열의 끝에 요소 추가
arr2.push("blue");
console.log("arr2:", arr2);

//배열의 마지막 요소 리턴 후 삭제
console.log(arr2.pop());
console.log("arr2:", arr2);

// 배열에 특정 요소가 있는 지 확인
console.log(arr.includes("green"));
console.log(arr.includes("blue"));

// 배열의 특정 요소의 인덱스 확인
console.log(arr.indexOf("green"));
console.log(arr.indexOf("blue"));

// 배열 연결
const arr3 = arr2.concat(["blue", "navy", "purple"]);
console.log(arr3);
console.log(arr2);

// 배열 요소를 문자열로 연결
console.log(arr.join(","));

// 정렬(원본이 정렬됨)
//오름차순
arr3.sort();
console.log(arr3);
//내림차순
arr3.sort().reverse();
console.log(arr3);

// 배열로 반복
for (let idx in arr3) {
  console.log(idx);
}

//forEach()
// 각 요소에 1을 더한 새로운 배열 arr6 만들기
let arr5 = [1, 2, 3];
const arr6 = [];
arr5.forEach((item, idx, arr) => {
  arr6.push(item + 1);
});

console.log(arr6);

// map
const arr8 = [1, 2, 3, 4, 5];
console.log(arr8.map((item) => item * 100));

// filter()
console.log(arr8.filter((item) => item % 2 == 0));
