// static/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("student-form");
  const resultBox = document.getElementById("result");
  const googleId = document.getElementById("google-id");
  const googlePw = document.getElementById("google-pw");

  // ✅ 학번-이름-구글계정 데이터를 저장한 객체
  const studentData = {
    "2023001": {
      name: "홍길동",
      email: "2023001hong@school.edu",
      pw: "pw1234"
    },
    // 여기에 다른 학생들도 추가 가능
    // "2023002": { name: "김영희", email: "...", pw: "..." }
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentId = document.getElementById("student-id").value.trim();
    const studentName = document.getElementById("student-name").value.trim();

    // 유효성 검사
    if (!studentId || !studentName) {
      alert("학번과 이름을 모두 입력해주세요.");
      return;
    }

    const student = studentData[studentId];

    if (!student) {
      alert("해당 학번의 정보가 없습니다.");
      return;
    }

    if (student.name !== studentName) {
      alert("이름이 일치하지 않습니다.");
      return;
    }

    // 결과 출력
    googleId.textContent = student.email;
    googlePw.textContent = student.pw;
    resultBox.classList.remove("hidden");
  });
});
