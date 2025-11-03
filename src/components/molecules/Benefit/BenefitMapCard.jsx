import BenefitCard from './BenefitCard';
import { BenefitSectionData } from '../../Data/BenefitSectionData';

const BenefitMapCard = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {BenefitSectionData.map((card, idx) => (
      <BenefitCard
        key={idx}
        icon={card.icon}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
      />
    ))}
  </div>
);
export default BenefitMapCard;
