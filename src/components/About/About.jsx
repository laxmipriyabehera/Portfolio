import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-container">

        <div className="about-image">
          {/* Profile Image */}
        </div>

        <div className="about-content">

          <h3>Full Stack Developer (MERN)</h3>

          <p>
            Hi, I'm Laxmipriya Behera, an MCA graduate and passionate Full
            Stack Developer specializing in the MERN stack.
          </p>

          <p>
            I enjoy building modern, responsive and scalable web applications
            using React, Node.js, Express.js and MongoDB.
          </p>

          <div className="about-cards">

            <div className="card">
              <h4>3+</h4>
              <span>Projects</span>
            </div>

            <div className="card">
              <h4>10+</h4>
              <span>Technologies</span>
            </div>

            <div className="card">
              <h4>MCA</h4>
              <span>Graduate</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;