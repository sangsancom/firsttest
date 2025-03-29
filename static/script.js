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

    const emailPrefix = `sang${studentId}`;
    const email = `${emailPrefix}@g.jbedu.kr`;
    const pw = emailPrefix;

    googleId.textContent = email;
    googlePw.textContent = pw;
    resultBox.classList.remove("hidden");
  });

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetText = document.getElementById(targetId).textContent;

      navigator.clipboard.writeText(targetText).then(() => {
        alert("클립보드에 복사되었습니다: " + targetText);
      }).catch(() => {
        alert("복사에 실패했습니다. 수동으로 복사해주세요.");
      });
    });
  });
});
