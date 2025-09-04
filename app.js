// Add new training
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

// Search for courses
function searchCourses() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const suggestionsList = document.getElementById("suggestions-list");
  suggestionsList.innerHTML = "";

  if (!query) {
    alert("Please enter a keyword to search!");
    return;
  }

  // Dummy course suggestions (replace with API later if needed)
  const courses = [
    { name: "AI for Everyone – Coursera", url: "https://www.coursera.org/learn/ai-for-everyone" },
    { name: "Machine Learning – Coursera", url: "https://www.coursera.org/learn/machine-learning" },
    { name: "Leadership Principles – HBS Online", url: "https://online.hbs.edu/courses/leadership-principles/" },
    { name: "Emotional Intelligence – Coursera", url: "https://www.coursera.org/learn/emotional-intelligence" }
  ];

  const results = courses.filter(c => c.name.toLowerCase().includes(query));

  if (results.length > 0) {
    results.forEach(course => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${course.url}" target="_blank">${course.name}</a>`;
      suggestionsList.appendChild(li);
    });
  } else {
    suggestionsList.innerHTML = "<li>No courses found. Try another keyword.</li>";
  }
}
