//아이디 유효성 검증
//영어 대소문자,숫자만 허용,길이 6~12

function idcheck(userid) {
  let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}/;

  //userid 사용자 입력값 가져오기
  //   let userid = document.querySelector("#userid").value;
  let flag = regId.test(userid);

  //유효성 검증 - 메세지 띄우기
  if (!flag) {
    alert("아이디 형식을 다시 확인해 주세요.");
    // document.querySelector("#userid").focus();
    document.querySelector("#userid").select();
    return;
  }
}

//비밀번호 유효성 검증
//영어 대소문자,숫자만 허용,특수문자 허용,길이 8~15

function passwordCheck(password) {
  let regPwd =
    /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}/;

  return regPwd.test(password);
}

function pwdCheck1(password) {
  if (!passwordCheck(password.value)) {
    alert("비밀번호를 올바른 형태로 작성하세요.");
    password.select();
    return;
  }
}

function pwdCheck2(password) {
  if (!passwordCheck(password.value)) {
    alert("비밀번호를 올바른 형태로 작성하세요.");
    password.select();
    return;
  }
  if (document.querySelector("#userpw").value !== password.value) {
    alert("이전 비밀번호와 다릅니다.");
    password.select();
    return;
  }
}

//성별 :  둘 중 무조건 하나 선택
function genderCheck() {
  //제일 첫번째 요소
  // let gender = document.querySelector("[name='gender']");
  // if(!gender.checked){
  //      alert("성별을 확인하세요.");
  //  }
  let genders = document.querySelector("[name='gender']");
  genders.forEach((element) => {
    if (!element.checked) {
      alert(element.value);
    }
  });
}

//이메일 :
function emailCheck(email) {
  let reg = /\w+@[A-Za-z]+\.(com|org|edu|ent)$/;
  if (!reg.test(email)) {
    alert("이메일 형식에 맞게 작성하세요");
    document.querySelector("#email").select();
    return;
  }
}

// 핸드폰 번호 : 000-0000-0000 규칙
function tekCheck(tel) {
  let reg = /^\d{3}-\d{4}-\d{4}$/;
  if (!reg.test(tel)) {
    alert("핸드폰 형식에 맞게 작성하세요");
    document.querySelector("#mobile").select();
    return;
  }
}
