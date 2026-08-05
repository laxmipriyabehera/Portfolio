import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-container">

        <div className="skill-card">

          <h3>Frontend</h3>

          <div className="skill">
            <span>HTML</span>
            <div className="progress">
              <div className="progress-bar html"></div>
            </div>
          </div>

          <div className="skill">
            <span>CSS</span>
            <div className="progress">
              <div className="progress-bar css"></div>
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="progress">
              <div className="progress-bar js"></div>
            </div>
          </div>

          <div className="skill">
            <span>React</span>
            <div className="progress">
              <div className="progress-bar react"></div>
            </div>
          </div>

        </div>

        <div className="skill-card">

          <h3>Backend</h3>

          <div className="skill">
            <span>Node.js</span>
            <div className="progress">
              <div className="progress-bar node"></div>
            </div>
          </div>

          <div className="skill">
            <span>Express.js</span>
            <div className="progress">
              <div className="progress-bar express"></div>
            </div>
          </div>

          <div className="skill">
            <span>MongoDB</span>
            <div className="progress">
              <div className="progress-bar mongo"></div>
            </div>
          </div>

        </div>

        <div className="skill-card">

          <h3>Tools</h3>

          <div className="skill">
            <span>Git</span>
            <div className="progress">
              <div className="progress-bar git"></div>
            </div>
          </div>

          <div className="skill">
            <span>GitHub</span>
            <div className="progress">
              <div className="progress-bar github"></div>
            </div>
          </div>

          <div className="skill">
            <span>VS Code</span>
            <div className="progress">
              <div className="progress-bar vscode"></div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;