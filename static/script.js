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

    // 학번 기반 고정 이메일/비밀번호 생성
    const email = `sang${studentId}@g.jbedu.kr`;
    const pw = `sang${studentId}`;

    // 결과 표시
    googleId.textContent = email;
    googlePw.textContent = pw;
    resultBox.classList.remove("hidden");
  });
});
