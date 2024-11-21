document.addEventListener("DOMContentLoaded", () => {
    const projects = []; 
  
    const projectForm = document.getElementById("project-form");
    const projectsContainer = document.getElementById("projects-container");
  
    // Function to render projects
    function renderProjects() {
      projectsContainer.innerHTML = "";
      projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p>Goal: $${project.goal}</p>
          <p>Raised: $${project.raised}</p>
          <button data-index="${index}" class="contribute-btn">Contribute $10</button>
        `;
        projectsContainer.appendChild(card);
      });
  
      // Add event listeners for contribution buttons
      document.querySelectorAll(".contribute-btn").forEach((button) =>
        button.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          projects[index].raised += 10; // Simulate contribution
          renderProjects();
        })
      );
    }
  
    // Handle project creation
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const goal = parseFloat(document.getElementById("goal").value);
  
      projects.push({
        title,
        description,
        goal,
        raised: 0, // Start with $0 raised
      });
  
      projectForm.reset();
      renderProjects();
    });
  });
  


