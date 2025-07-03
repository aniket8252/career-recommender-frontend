const form = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let scores = {
    tech: 0,
    "non-tech": 0,
    design: 0
  };

  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    scores[value]++;
  }

  let recommendedCareer = "";

  if (scores.design > scores.tech && scores.design > scores["non-tech"]) {
    recommendedCareer = "UI/UX Designer";
  } else if (scores.tech >= scores["non-tech"]) {
    recommendedCareer = "Software Developer or Data Scientist";
  } else {
    recommendedCareer = "Business Analyst or HR Manager";
  }

  resultDiv.textContent = `Recommended Career Path: ${recommendedCareer}`;
  resultDiv.classList.remove("hidden");

  localStorage.setItem("careerResult", recommendedCareer);
});
