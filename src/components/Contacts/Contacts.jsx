import "./Contacts.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <h2>Contact Me</h2>
        <p>Let's connect and build something amazing together.</p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-card">
            <h3>Email</h3>
            <p>beheralaxmipriya725@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Bhubaneswar, Odisha</p>
          </div>

          <div className="info-card">
            <h3>Education</h3>
            <p>MCA Graduate</p>
          </div>

          <div className="info-card">
            <h3>Availability</h3>
            <p>Open to Frontend & MERN Opportunities</p>
          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;