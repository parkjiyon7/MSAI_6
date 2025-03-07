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

// 객체의 프로퍼티 추가/수정
