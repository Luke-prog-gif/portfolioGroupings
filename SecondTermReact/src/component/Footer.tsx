import "../assets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>Port hub</h2>

            <p>
              Three Minds, One Future
            </p>
          </div>

          <div className="footer-members">

            <div className="member">
              <h4>Jay Florenz</h4>
              <div className="member-links">
                <a href="https://www.facebook.com/jay.florenz.dominguez">Facebook</a>
              </div>
            </div>

            <div className="member">
              <h4>Jelaine Ivory</h4>
              <div className="member-links">
                <a href="https://www.facebook.com/share/1Ec69FDzRi/?mibextid=wwXIfr">Facebook</a>
              </div>
            </div>

            <div className="member">
              <h4>Luke Gabriel</h4>
              <div className="member-links">
                <a href="https://www.facebook.com/luke.reyes.564/">Facebook</a>
              </div>
            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <p>
            © 2026 Port hub. All rights reserved.
          </p>

          <a href="#overview" className="back-to-top">
            Back to top
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;