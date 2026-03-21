import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionButton from '../components/SectionButton';
import ClassCard from '../components/ClassCard';

const cards = [
  {
    title: 'ליידי סטייל',
    image: 'https://picsum.photos/seed/salsa-card-1/1200/700',
    to: '/about'
  },
  {
    title: 'לימוד ריקוד לזוגות',
    image: 'https://picsum.photos/seed/salsa-card-2/1200/700',
    to: '/group-lessons'
  },
  {
    title: 'לימוד ריקוד לגברים',
    text: 'בלוק שלישי שאפשר לשנות לכל שירות אחר: שיעורים פרטיים, סדנאות, ימי גיבוש ועוד.',
    image: 'https://picsum.photos/seed/salsa-card-3/1200/700',
    to: '/private-lessons'
  }
];

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      {/* <SectionButton to="/schedule">בלוק כפתור</SectionButton> */}

      <section className="cards-section">
        {cards.map((card) => (
          <ClassCard key={card.title} {...card} />
        ))}
      </section>
    </Layout>
  );
}
