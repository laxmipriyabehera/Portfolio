import profileImage from "../../assets/profile.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

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
          I build responsive and user-friendly web applications
          using React, JavaScript, HTML and CSS, with a focus
          on clean UI and seamless user experiences.
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
          <div className="hero-image">
              <img src={profileImage} alt="Laxmipriya Behera" />
               </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;