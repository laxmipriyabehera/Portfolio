import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-greeting">
          👋 Hello, I'm
        </p>

        <h1 className="hero-name">
          Laxmipriya <br /> Behera
        </h1>

        <h2 className="hero-role">
          Frontend Developer
        </h2>

        <p className="hero-description">
          Building modern, responsive and user-friendly web
          applications using React, JavaScript, HTML and CSS.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-circle">

        </div>

      </div>

    </section>
  );
}

export default Hero;