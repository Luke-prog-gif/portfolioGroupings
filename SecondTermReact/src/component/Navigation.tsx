import "../assets/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-container">

        <a href="#overview" className="logo">
          L2J Portfolio
        </a>

        <div className="nav-links">
          <a href="#header">Overview</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#footer">Contact</a>
        </div>

        <a href="#contact" className="get-in-touch">
          Get in touch
        </a>

      </div>
    </nav>
  );
}

export default Navigation;