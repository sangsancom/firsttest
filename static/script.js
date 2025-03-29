// static/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("student-form");
  const resultBox = document.getElementById("result");
  const googleId = document.getElementById("google-id");
  const googlePw = document.getElementById("google-pw");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    const studentId = document.getElementById("student-id").value.trim();
    const studentName = document.getElementById("student-name").value.trim();

    // 여기서 입력값 확인
    if (studentId === "" || studentName === "") {
      alert("학번과 이름을 모두 입력해주세요.");
      return;
    }

    // 👉 임시로 가짜 데이터 생성 (실제로는 서버에서 받아올 부분)
    const fakeAccount = generateFakeAccount(studentId, studentName);

    // 결과 표시
    googleId.textContent = fakeAccount.id;
    googlePw.textContent = fakeAccount.pw;
    resultBox.classList.remove("hidden");
  });

  function generateFakeAccount(id, name) {
    // 구글 아이디는 학번+이름 조합, 비밀번호는 예시로 랜덤 4자리 숫자 사용
    const email = `${id}${name}@school.edu`.toLowerCase();
    const pw = `pw${Math.floor(1000 + Math.random() * 9000)}`; // pw1234 형태

    return {
      id: email,
      pw: pw
    };
  }
});
