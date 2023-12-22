// ProjectsSection.js
import React from "react";

const ProjectsSection = () => {
  
  return (
    <section className="projects-section">
      <h1 className="titles">Projects</h1>
      <div className="project-box-container">
        <div className="project-box info-box">
          <h1>MEGA Project 1 </h1>
          <p>Calculator</p>
          <p>HTML & CSS</p>
          <div className="project-links">
            <a
              href="https://github.com/BetulEseroglu/MEGA/tree/main/mega_project_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link🔗
            </a>
          </div>
          <img src="src\Components\simon.png" alt="imgsimon" />
        </div>
        <div className="project-box info-box">
          <h1>MEGA Project 2</h1>
          <p>Sudoku</p>
          <p>HTML, CSS</p>
          <div className="project-links">
            <a
              href="https://github.com/BetulEseroglu/MEGA/tree/main/mega_project_2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>MEGA Project 3</h1>
          <p>Basic Blog</p>
          <p>HTML, CSS, JavaScript, Bootstrap</p>
          <div className="project-links">
            <a
              href="https://github.com/BetulEseroglu/MEGA/blob/main/mega_project_3/bootstrap.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
        
        <div className="project-box info-box">
          <h1>MEGA Project 4 </h1>
          <p>Random Photos Galleryr</p>
          <p>HTML, CSS, JavaScript, Bootstrap</p>
          <div className="project-links">
            <a
              href="https://github.com/BetulEseroglu/MEGA/tree/main/mega_project_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link🔗
            </a>
          </div>
          <img src="src\Components\simon.png" alt="imgsimon" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
