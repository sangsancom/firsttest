// static/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("student-form");
  const resultBox = document.getElementById("result");
  const googleId = document.getElementById("google-id");
  const googlePw = document.getElementById("google-pw");

  // 비밀번호는 고정 또는 랜덤 예시로 구성
  const defaultPassword = "changeme123";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentId = document.getElementById("student-id").value.trim();
    const studentName = document.getElementById("student-name").value.trim();

    if (!studentId || !studentName) {
      alert("학번과 이름을 모두 입력해주세요.");
      return;
    }

    // 학번 기반으로 이메일 생성
    const email = `sang${studentId}@g.jbedu.kr`;

    // 결과 출력
    googleId.textContent = email;
    googlePw.textContent = defaultPassword;
    resultBox.classList.remove("hidden");
  });
});
