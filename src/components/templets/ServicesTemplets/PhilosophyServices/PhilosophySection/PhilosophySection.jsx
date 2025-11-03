import PhilosophyCard from "../PhilosophyCard/PhilosophyCard";

function PhilosophySection() {
  const beliefs = [
    "In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence.",
    "That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership.",
    "In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being.",
  ];

  return (
    <PhilosophyCard
      title="We believe:"
      subtitle="Philosophy"
      beliefs={beliefs}
    />
  );
}

export default PhilosophySection;