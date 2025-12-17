function generateResume() {
  document.getElementById("r-name").textContent =
    document.getElementById("name").value;

  document.getElementById("r-title").textContent =
    document.getElementById("title").value;

  document.getElementById("r-contact").textContent =
    `${document.getElementById("email").value} | ${document.getElementById("phone").value} | ${document.getElementById("location").value}`;

  document.getElementById("r-summary").textContent =
    document.getElementById("summary").value;

  const skillsList = document.getElementById("r-skills");
  skillsList.innerHTML = "";
  document.getElementById("skills").value.split(",").forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  const experienceList = document.getElementById("r-experience");
  experienceList.innerHTML = "";
  document.getElementById("experience").value.split(",").forEach(exp => {
    const li = document.createElement("li");
    li.textContent = exp.trim();
    experienceList.appendChild(li);
  });

  const educationList = document.getElementById("r-education");
  educationList.innerHTML = "";
  document.getElementById("education").value.split(",").forEach(edu => {
    const li = document.createElement("li");
    li.textContent = edu.trim();
    educationList.appendChild(li);
  });

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
