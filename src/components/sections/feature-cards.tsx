import React from 'react';
import { Building2, Layers, BookOpen, Briefcase, ArrowRight } from 'lucide-react';

/**
 * FeatureCard Component
 * Represents a single information card within the grid.
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-[30px] border border-[#dddddd] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col h-full">
      <div className="text-[#ed1c24] mb-5">
        {icon}
      </div>
      <h3 className="font-display text-[28px] font-[750] leading-[1.3] text-[#111111] mb-4">
        {title}
      </h3>
      <p className="font-body text-[16px] font-normal leading-[1.6] text-[#111111] mb-6 flex-grow">
        {description}
      </p>
      <a 
        href={link} 
        className="inline-flex items-center text-[#ed1c24] font-body text-[14px] font-semibold hover:underline"
      >
        Explore <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};

/**
 * FeatureCards Section
 * A four-column grid of white cards for Admissions, Courses, Academics, and Career.
 */
const FeatureCards: React.FC = () => {
  const cardsData = [
    {
      icon: <Building2 size={32} strokeWidth={2.5} />,
      title: "Admissions",
      description: "Shape your creativity into a bright future…. By taking admission in the best fashion design institute in India. Admissions & Scholarships at the institution is completely based on merit at best fashion design college in India; Indian Institute of Fashion & Design.",
      link: "https://iifd.in/admissions/"
    },
    {
      icon: <Layers size={32} strokeWidth={2.5} />,
      title: "Courses",
      description: "Still, deciding what do you want to study? Browse the full range of professional courses in India Best Fashion design college (Indian Institute of Fashion & Design). The college courses are job oriented which will bring bright prospects for your career.",
      link: "https://iifd.in/courses/"
    },
    {
      icon: <BookOpen size={32} strokeWidth={2.5} />,
      title: "Academics",
      description: "The Academics offers excellence through various academic courses in Chandigarh and out of the classrooms with esteemed experienced faculty members. To boost quality academic success IIFD ensures proper up-gradation of the institution.",
      link: "https://iifd.in/academics/"
    },
    {
      icon: <Briefcase size={32} strokeWidth={2.5} />,
      title: "Career",
      description: "Indian Institute of fashion & Design placement cell through its experienced placement team will help you locate the right job after completing fashion designing courses and other professional courses through the Indian Institute of Fashion & Designs.",
      link: "https://iifd.in/training-and-placement/"
    }
  ];

  return (
    <section className="py-[80px] px-4 md:px-0 bg-white">
      <div className="container mx-auto max-width-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {cardsData.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;