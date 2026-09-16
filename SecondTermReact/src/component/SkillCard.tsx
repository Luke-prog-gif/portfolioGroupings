type SkillCardProps = {
  name: string;
  category: string;
  members: string;
  percentage: number;
};

function SkillCard({
  name,
  category,
  members,
  percentage,
}: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <h3>{name}</h3>

        <span className="skill-percentage">
          {percentage}%
        </span>
      </div>

      <span className={`skill-category skill-category-${category.toLowerCase()}`}>
        {category}
      </span>

      <p className="skill-members">{members}</p>

      <div className="skill-progress">
        <div
          className="skill-progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;

