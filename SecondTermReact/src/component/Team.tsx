import TeamMemberCard from "./TeamMemberCard";
import JFBD from "../assets/img/JFBD.jpg";
import LGMR from "../assets/img/LGMR.jpg";
import JIFM from "../assets/img/JIFM.jpg";
import "../assets/Team.css";

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-cards">

        <TeamMemberCard
          number="01"
          name="Jay Florenz B. Dominguez"
          role="FULL STACK DEVELOPER"
          description="Building web applications and exploring modern technologies to create useful digital experiences."
          image={JFBD}
          github="https://github.com/jaynmsz"
          facebook="https://www.facebook.com/jay.florenz.dominguez"
        />

        <TeamMemberCard
          number="02"
          name="Jelaine Ivory F. Mariano"
          role="FRONTEND DEVELOPER"
          description="Focused on creating clean, responsive, and user-friendly interfaces."
          image={JIFM}
          github="https://github.com/"
          facebook="https://facebook.com/"
        />

        <TeamMemberCard
          number="03"
          name="Luke Gabriel M. Reyes"
          role="FULL STACK DEVELOPER"
          description="Working with databases, backend systems, and reliable application logic."
          image={LGMR}
          github="https://github.com/"
          facebook="https://facebook.com/"
        />

      </div>
    </section>
  );
}

export default Team;

