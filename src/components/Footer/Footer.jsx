import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Laxmipriya Behera</h2>
          <p>
            Frontend | MERN Stack | Full Stack Developer
          </p>
        </div>

        <div className="footer-links">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/laxmipriyabehera"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="beheralaxmipriya725@gmail.com">
            Email
          </a>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Laxmipriya Behera. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;