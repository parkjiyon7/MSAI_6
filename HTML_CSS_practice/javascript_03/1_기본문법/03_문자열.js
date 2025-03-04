console.log(typeof "Hello");
console.log(typeof `Hello`);

//백텍으로 감싸면 여러 줄을 쉽게 표현 가능
let a = `Hello
    World`;

console.log(a);

// 벡틱 내에서 ${}안에 표현식(값으로 평가될 수 있는 것) 삽입
let username = "홍길동";
let age = 20;
console.log(`${username}님, 내년에는 ${age + 1}이 되시겠네요.`);

//문자열 다루기
const message = "Hello, World!";
console.log(message.length);
console.log(message[0]); //H
console.log(message[-1]); ///undefined (마이너스 인덱스 없음)
console.log(message[100]); //undefined(인덱스의 범위를 벗어남)

//특정 문자의 인덱스
console.log(message.indexOf("W"));
console.log(message.indexOf("a"));
console.log(message.indexOf("l"));

//특정문자 포함 여부
console.log(message.includes("Hello"));

//문자열 슬라이스
console.log(message.substring(0, 5));
console.log(message.substring(5, 0));
console.log(message.substring(7));
console.log(message.slice(0, 5));
console.log(message.slice(0, 5));

//대소문자 변환
console.log(message.toUpperCase());
console.log(message.toLowerCase());

//문자 치환
console.log(message.replace("World!", "Python"));

//문자 분리하기
console.log(message.split(","));

//특정 문자로 시작하거나 끝나는 지 확인
console.log(message.startsWith("He"));
console.log(message.endsWith("?"));

//앞 뒤 공백 없애기
const message2 = "     hello world        ";
console.log(message2.trim());

//문자 반복하기
const message3 = "ha";
console.log(message3.repeat(3));
