type SkillCardProps = {
  name: string;
  type: string;
};

function SkillCard({ name, type }: SkillCardProps) {
  return (
    <div className={`skill-card skill-${type}`}>
      {name}
    </div>
  );
}

export default SkillCard;
