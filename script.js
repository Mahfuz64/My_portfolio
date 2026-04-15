const projects = [
  {
    title: "Weather App",
    description: "Live weather forecasting with API & caching.",
    tech: "Flutter, Provider",
    github: "",
    live: ""
  },
  {
    title: "To-Do App",
    description: "Task manager with notifications.",
    tech: "Flutter, Hive",
    github: "",
    live: ""
  },
  {
    title: "Expense Tracker",
    description: "Track income & expenses.",
    tech: "Flutter",
    github: "",
    live: ""
  },
//   {
//     title: "QR Scanner",
//     description: "Scan QR from camera & gallery.",
//     tech: "Flutter",
//     github: "",
//     live: ""
//   },
  
];

const container = document.getElementById("projects-container");
container.innerHTML = "";

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p class="small">Tech: ${project.tech}</p>

    <div class="project-links">
      ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
      ${project.live ? `<a href="${project.live}" target="_blank">Live</a>` : ""}
    </div>
  `;

  container.appendChild(card);
});