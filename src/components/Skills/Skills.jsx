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
            <div className="skill-info">
            <span>HTML</span>
            <span>90%</span>
            </div>

            <div className="progress">
              <div className="progress-bar html"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>CSS</span>
            <span>90%</span>
            </div>

            <div className="progress">
              <div className="progress-bar css"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>JavaScript</span>
            <span>85%</span>
            </div>

            <div className="progress">
              <div className="progress-bar js"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>React</span>
            <span>80%</span>
            </div>

            <div className="progress">
              <div className="progress-bar react"></div>
            </div>
          </div>

        </div>

        <div className="skill-card">

          <h3>Backend</h3>

          <div className="skill">
            <div className="skill-info">
            <span>Node.js</span>
            <span>80%</span>
            </div>

            <div className="progress">
              <div className="progress-bar node"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>Express.js</span>
            <span>75%</span>
            </div>

            <div className="progress">
              <div className="progress-bar express"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>MongoDB</span>
            <span>85%</span>
            </div>

            <div className="progress">
              <div className="progress-bar mongo"></div>
            </div>
          </div>

        </div>

        <div className="skill-card">

          <h3>Tools</h3>

          <div className="skill">
            <div className="skill-info">
            <span>Git</span>
            <span>85%</span>
            </div>

            <div className="progress">
              <div className="progress-bar git"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>GitHub</span>
            <span>80%</span>
            </div>

            <div className="progress">
              <div className="progress-bar github"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
            <span>VS Code</span>
            <span>95%</span>
            </div>

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