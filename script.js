function updateResume() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;

  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const projects = document.getElementById("projects").value;


  document.getElementById("previewName").textContent =
    name || "Your Name";

  document.getElementById("previewContact").textContent =
    `${email || "Email"} | ${phone || "Phone"} | ${location || "Location"}`;

  document.getElementById("previewSummary").textContent =
    summary || "Your professional summary will appear here.";

  document.getElementById("previewEducation").textContent =
    education || "Your education will appear here.";

  document.getElementById("previewExperience").textContent =
    experience || "Your experience will appear here.";

  document.getElementById("previewSkills").textContent =
    skills || "Your skills will appear here.";

  document.getElementById("previewProjects").textContent =
    projects || "Your projects will appear here.";
}