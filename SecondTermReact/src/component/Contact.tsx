import { useState, type FormEvent } from "react";
import "../assets/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Thank you, ${name}! Your message has been submitted.`);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="contact-header">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>Let's work together</h2>

          <p className="contact-description">
            Have a project in mind or want to collaborate? We'd love to
            <br />
            hear from you.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-info-item">
              <p className="info-label">EMAIL</p>
              <p>porthub@gmail.com</p>
            </div>

            <div className="contact-info-item">
              <p className="info-label">LOCATION</p>
              <p>Bantug, Science City of Munoz, Nueva Ecija</p>
            </div>

            <div className="contact-info-item">
              <p className="info-label">AVAILABILITY</p>
              <p>We are open for opportunities and to work with you.</p>
            </div><br></br><br></br>

            <div className="info-divider"></div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What's this all about?"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                placeholder="Write a message or question you want to address."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;