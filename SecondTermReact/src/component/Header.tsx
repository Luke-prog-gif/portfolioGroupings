import "../assets/Header.css";
import TEAM from "../assets/img/TEAM.jpg";

function Header() {
  return (
    <header className="team-header-section">
      <div
        className="team-header-background"
        style={{ backgroundImage: `url(${TEAM})` }}
      ></div>

      <section id="header">
        <div className="team-intro">
          <p className="team-label">COMBINED PORTFOLIO · 2026</p>

          <h2>Three minds, one vision.</h2>

          <p className="team-description">
            We're a trio of developers crafting purposeful digital
            experiences together.
          </p>

          <div className="team-header-buttons">
            <a
              href="#projects"
              className="header-button primary-button"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              View our work ↗
            </a>

            <a
              href="#team"
              className="header-button secondary-button"
              onClick={(e) => {
                e.preventDefault();

                document.getElementById("team")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              Meet the team ↗
            </a>
          </div>

          <p className="scroll-text">SCROLL TO EXPLORE</p>
        </div>
      </section>
    </header>
  );
}

export default Header;

