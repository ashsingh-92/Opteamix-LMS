// -------- TRAININGS --------
function addTraining() {
  const input = document.getElementById("new-training");
  const trainingName = input.value.trim();
  if (trainingName) {
    const list = document.getElementById("training-list");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${trainingName}</strong> – Enrolled: None yet`;
    list.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a training name!");
  }
}

// -------- COURSE SUGGESTIONS --------
function searchCourses() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const suggestionsList = document.getElementById("suggestions-list");
  suggestionsList.innerHTML = "";

  if (!query) {
    alert("Please enter a keyword to search!");
    return;
  }

  // Curated sample links
  const courses = [
    { name: "AI for Everyone – Coursera", url: "https://www.coursera.org/learn/ai-for-everyone" },
    { name: "Machine Learning – Coursera", url: "https://www.coursera.org/learn/machine-learning" },
    { name: "Leadership Principles – HBS Online", url: "https://online.hbs.edu/courses/leadership-principles/" },
    { name: "Emotional Intelligence – Coursera", url: "https://www.coursera.org/learn/emotional-intelligence" },
    { name: "Python for Everybody – Coursera", url: "https://www.coursera.org/specializations/python" },
    { name: "Data Science MicroMasters – edX", url: "https://www.edx.org/micromasters/mitx-statistics-and-data-science" },
    { name: "Project Management – Coursera", url: "https://www.coursera.org/professional-certificates/google-project-management" }
  ];

  const results = courses.filter(c => c.name.toLowerCase().includes(query));

  if (results.length > 0) {
    results.forEach(course => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${course.url}" target="_blank" rel="noopener">${course.name}</a>`;
      suggestionsList.appendChild(li);
    });
  } else {
    suggestionsList.innerHTML = "<li>No courses found. Try another keyword.</li>";
  }
}

// -------- PROGRESS TRACKER --------
function updateProgress(employee) {
  const progressBar = document.getElementById(`${employee}-progress`);
  const input = document.getElementById(`${employee}-input`);
  const newValue = parseInt(input.value, 10);

  if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
    progressBar.value = newValue;
    localStorage.setItem(`${employee}-progress`, String(newValue));
    input.value = "";
  } else {
    alert("Please enter a number between 0 and 100.");
  }
}

// -------- FORM HANDLERS --------
document.addEventListener("DOMContentLoaded", () => {
  // Restore saved progress
  ["aishwarya", "raj"].forEach(emp => {
    const saved = localStorage.getItem(`${emp}-progress`);
    if (saved !== null) {
      const bar = document.getElementById(`${emp}-progress`);
      if (bar) bar.value = parseInt(saved, 10);
    }
  });

  // Trainings form
  const trainingForm = document.getElementById("training-form");
  if (trainingForm) {
    trainingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTraining();
    });
  }

  // Search form
  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchCourses();
    });
  }

  // Progress forms
  const progressForms = document.querySelectorAll(".progress-item");
  progressForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emp = form.getAttribute("data-emp");
      if (emp) updateProgress(emp);
    });
  });
});
