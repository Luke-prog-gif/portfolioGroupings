import "../assets/Footer.css";

import fbIcon from "../assets/img/fb.webp";
import phoneIcon from "../assets/img/phonee.png";
import emailIcon from "../assets/img/email.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand" id="footer">
            <h2>L2J Portfolio</h2>

            <p>
              Three minds, one vision.
            </p>
          </div>


          <div className="footer-members">

            <div className="member">

              <div className="member-info">
                <img src={fbIcon} alt="Facebook" />

                <a
                  href="https://www.facebook.com/jay.florenz.dominguez"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jay Florenz Dominguez
                </a>
              </div>

              <div className="member-info">
                <img src={phoneIcon} alt="Phone" />

                <a>09661450061</a>
              </div>

              <div className="member-info">
                <img src={emailIcon} alt="Email" />

                <a>dominguez.jayflorenz@clsu2.edu.ph</a>
              </div>

            </div>


            <div className="member">

              <div className="member-info">
                <img src={fbIcon} alt="Facebook" />

                <a
                  href="https://www.facebook.com/share/1Ec69FDzRi/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jelaine Ivory Mariano
                </a>
              </div>

              <div className="member-info">
                <img src={phoneIcon} alt="Phone" />

                <a>09557710069</a>
              </div>

              <div className="member-info">
                <img src={emailIcon} alt="Email" />

                <a>mariano.jelaineivory@clsu2.edu.ph</a>
              </div>

            </div>


            <div className="member">

              <div className="member-info">
                <img src={fbIcon} alt="Facebook" />

                <a
                  href="https://www.facebook.com/luke.reyes.564/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Luke Gabriel Reyes
                </a>
              </div>

              <div className="member-info">
                <img src={phoneIcon} alt="Phone" />

                <a>09087928976</a>
              </div>

              <div className="member-info">
                <img src={emailIcon} alt="Email" />

                <a>reyes.lukegabriel@clsu2.edu.ph</a>
              </div>

            </div>

          </div>

        </div>


        <div className="footer-divider"></div>


        <div className="footer-bottom">

          <p>
            © 2026 L2J Portfolio. All rights reserved.
          </p>

          <a href="#header" className="back-to-top">
            Back to top
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;