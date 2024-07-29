function validateEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 정규표현식
  const errorId = document.getElementById("errorId");

  if (!emailPattern.test(email)) {
    errorId.textContent = "이메일 주소를 정확히 입력해주세요.";
    errorId.style.color = "red";
    emailInput.style.borderBottom = "1px solid red";
    return false;
  } else {
    errorId.textContent = "";
    emailInput.style.borderBottom = "1px solid #EBEBEB";
    return true;
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const errorPw = document.getElementById("errorPw");

  if (password.length < 8) {
    errorPw.textContent = "비밀번호는 8자 이상이어야 합니다.";
    errorPw.style.color = "red";
    passwordInput.style.borderBottom = "1px solid red";
    return false;
  } else {
    errorPw.textContent = "";
    passwordInput.style.borderBottom = "1px solid #EBEBEB";
    return true;
  }
}

function validateForm() {
  const loginBtn = document.getElementById("loginBtn");
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (emailValid && passwordValid) {
    loginBtn.style.color = "#fff";
    loginBtn.style.backgroundColor = "#000";
  } else {
    loginBtn.style.color = "#ffffff";
    loginBtn.style.backgroundColor = "#ebebeb";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("email").addEventListener("input", function () {
    if (validateEmail()) {
      validateForm();
    }
  });

  document.getElementById("password").addEventListener("input", function () {
    if (validatePassword()) {
      validateForm();
    }
  });

  document.getElementById("loginBtn").addEventListener("click", function () {
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (emailValid && passwordValid) {
      alert("로그인 성공");
    } else {
      alert("이메일과 비밀번호를 확인하세요.");
    }
  });
});
