// 요일 이름 변경하기
//0:sun ~ 6:sat

let week = 0;
let weekName;

switch (week) {
  case 0:
    weekName = "Sun";
    break;
  case 1:
    weekName = "Mon";
    break;
  case 2:
    weekName = "Tue";
    break;
  case 3:
    weekName = "Wed";
    break;
  case 4:
    weekName = "Thu";
    break;
  case 5:
    weekName = "Fri";
    break;
  case 4:
    weekName = "Sat";
    break;
}

console.log(weekName);
