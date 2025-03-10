let user = {
  userName: "홍길동",
  userAge: 20,
  nextAge: function () {
    this.userAge++;
    return this.userAge;
  },
};

// userName을 확인하는 여러 방법
console.log(user);
console.log(user["userName"]);
console.log(user.userName);

// 이름 변경
user.userName = "김철수";
console.log(user.userName);

// 나이 변경(+1) -> 메소드 호출하여 속성 변경
console.log(user.nextAge());
console.log(user.userAge);

<<<<<<< HEAD:HTML_CSS_practice/javascript_03/1_기본문법/14_객체타입.js
// 객체의 프로퍼티 추가/수정
=======
// 객체의 프로퍼티 추가/수정 - 키 추가
user.height = 170.5;
console.log(user);

user.height = 173.5;
console.log(user);

//프로퍼티 삭제
delete user.height;
console.log(user);
>>>>>>> 02833d9 (Remove sensitive data):HTML_CSS_JS_practice/javascript_03/1_기본문법/14_객체타입.js
