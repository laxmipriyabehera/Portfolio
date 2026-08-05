import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <h2>My Projects</h2>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-container">

        {/* Project 1 */}

        <div className="project-card">

          <div className="project-image">
            Job Portal
          </div>

          <div className="project-content">

            <h3>Job Portal</h3>

            <p>
              A responsive job portal where users can browse jobs,
              view job details and apply for opportunities.
            </p>

            <div className="tech-stack">

              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>

            </div>

            <div className="project-buttons">

              <button className="live-btn">
                Live Demo
              </button>

              <button className="code-btn">
                GitHub
              </button>

            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <div className="project-image">
            Student Management
          </div>

          <div className="project-content">

            <h3>Student Management System</h3>

            <p>
              Manage student records with add, edit, delete and search
              functionality using React.
            </p>

            <div className="tech-stack">

              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>

            </div>

            <div className="project-buttons">

              <button className="live-btn">
                Live Demo
              </button>

              <button className="code-btn">
                GitHub
              </button>

            </div>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <div className="project-image">
            Hostel Management
          </div>

          <div className="project-content">

            <h3>Hostel Management System</h3>

            <p>
              A hostel management application for handling rooms,
              students and hostel information efficiently.
            </p>

            <div className="tech-stack">

              <span>React</span>
              <span>Node</span>
              <span>MongoDB</span>

            </div>

            <div className="project-buttons">

              <button className="live-btn">
                Live Demo
              </button>

              <button className="code-btn">
                GitHub
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;