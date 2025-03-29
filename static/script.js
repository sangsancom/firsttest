// static/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("student-form");
  const resultBox = document.getElementById("result");
  const googleId = document.getElementById("google-id");
  const googlePw = document.getElementById("google-pw");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentId = document.getElementById("student-id").value.trim();

    if (!studentId) {
      alert("학번을 입력해주세요.");
      return;
    }

    // 이메일과 비밀번호를 동일한 학번 기반으로 생성
    const emailPrefix = `sang${studentId}`;
    const email = `${emailPrefix}@g.jbedu.kr`;
    const pw = emailPrefix;

    // 결과 표시
    googleId.textContent = email;
    googlePw.textContent = pw;
    resultBox.classList.remove("hidden");
  });
});
