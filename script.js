// alert("JS is working");
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using HTML, CSS, JS",
    link: "https://github.com/Keshav-Gautam134/portfolio-website"
  },
  {
    title: "Student Management System",
    description: "Built using Java and DBMS concepts",
    link: "#"
  }
];

const container = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.classList.add("project-card");

  div.innerHTML = `
  <h3>${project.title}</h3>
  <p>${project.description}</p>
  <a href="${project.link}" target="_blank">View Project</a>
`;
container.appendChild(div);
});
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";

  form.reset();
});
