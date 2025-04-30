
import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import AchievementCard from './AchievementCard';
import SectionTitle from './SectionTitle';

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800" id="achievements">
      <div className="container mx-auto px-4">
        <SectionTitle title="Achievements" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <AchievementCard
            title="Winner - Hacknovate 6.0"
            description="Led our team to 1st place at Hacknovate 6.0, outperforming over 500+ participating teams. The runner-up was an international team from outside India, making our victory even more meaningful on a global stage. The competition tested innovation, teamwork, and execution under pressure, and our solution stood out for its impact and originality."
            date="2025"
            icon={<Trophy className="w-8 h-8" />}
            delay={300}
          />
          <AchievementCard
            title="Winner - IIT Indore Fluxus HCMS Hackathon"
            description="Led a team to victory in developing an comprehensive Healthcare Management System to streamline patient care and medical record management. The system included basic diagnosis using symptoms, medical certificate generation, student health record management, appointment scheduling, an automated documentation system, and a personalized chatbot for user support and guidance."
            date="2025"
            icon={<Trophy className="w-8 h-8" />}
            delay={150}
          />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;