type TeamMemberCardProps = {
  number: string;
  name: string;
  role: string;
  description: string;
  image: string;
  github: string;
  facebook: string;
};

function TeamMemberCard({
  number,
  name,
  role,
  description,
  image,
  github,
  facebook,
}: TeamMemberCardProps) {
  return (
    <div className="team-card">
      <div className="team-card-number">{number}</div>

      <img src={image} alt={name} className="team-card-image" />

      <h3>{name}</h3>

      <p className="team-card-role">{role}</p>

      <p className="team-card-description">{description}</p>

      <div className="team-card-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>

        <a href={facebook} target="_blank" rel="noreferrer">
          Facebook ↗
        </a>
      </div>
    </div>
  );
}

export default TeamMemberCard;