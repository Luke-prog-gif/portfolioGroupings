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
          github="https://github.com/ivory19?fbclid=IwY2xjawUXaVBwZG9mA2V4dG4DYWVtAjExAHNydGMGYXBwX2lkATAAAR5vpsAtS3OD-okPH74pqlxhiaoncmlfHMbVhusHSs2x_eMfcSuNYQCbxiFF0Q_aem_TPSIFDZ6xN9DupV4v1csEQ"
          facebook="https://www.facebook.com/jelaineivorymrn"
        />

        <TeamMemberCard
          number="03"
          name="Luke Gabriel M. Reyes"
          role="FULL STACK DEVELOPER"
          description="Working with databases, backend systems, and reliable application logic."
          image={LGMR}
          github="https://github.com/Luke-prog-gif?fbclid=IwY2xjawUXaQJwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUNob1Q2bml4aVpHV2hQRVVzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeBGzBJDJPICea1yg5EUtqi37bbSQSwC67u15YctBG4eUw7FrQbGhDOZyvl-s_aem_UCOzFlxrX4LOTAEvNipp3A"
          facebook="https://www.facebook.com/luke.reyes.564"
        />

      </div>
    </section>
  );
}

export default Team;

