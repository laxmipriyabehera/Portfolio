import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-content">

          <div className="about-heading">
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </div>

          <p className="about-text">
            Hi, I'm <strong>Laxmipriya Behera</strong>, an MCA graduate who is
            passionate about building modern, responsive and user-friendly web
            applications using React, JavaScript, HTML and CSS.
          </p>

          <p className="about-text">
            I enjoy solving real-world problems through coding and continuously
            improving my skills. Currently, I'm expanding my knowledge towards
            the MERN Stack by learning Node.js, Express.js and MongoDB while
            working on real-world projects.
          </p>

        
          <div className="about-cards">

            <div className="card">
              <h4>03+</h4>
              <span>Projects</span>
            </div>

            <div className="card">
              <h4>10+</h4>
              <span>Technologies</span>
            </div>

            <div className="card">
              <h4>MCA</h4>
              <span>Degree</span>
            </div>

            <div className="card">
              <h4>2025</h4>
              <span>Graduation</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;