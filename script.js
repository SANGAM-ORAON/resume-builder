function generateResume() {
  document.getElementById("r-name").textContent =
    document.getElementById("name").value;

  document.getElementById("r-title").textContent =
    document.getElementById("title").value;

  document.getElementById("r-contact").textContent =
    `${email.value} | ${phone.value} | ${location.value}`;

  document.getElementById("r-summary").textContent =
    summary.value;

  const skillsList = document.getElementById("r-skills");
  skillsList.innerHTML = "";
  skills.value.split(",").forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  document.getElementById("r-experience").textContent =
    experience.value;

  document.getElementById("r-education").textContent =
    education.value;
}

function saveData() {
  const data = {};
  document.querySelectorAll("input, textarea").forEach(el => {
    data[el.id] = el.value;
  });
  localStorage.setItem("resumeData", JSON.stringify(data));
  alert("Saved");
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("resumeData"));
  if (!data) return;
  Object.keys(data).forEach(id => {
    document.getElementById(id).value = data[id];
  });
  generateResume();
}

function downloadPDF() {
  window.print();
}

loadData();
