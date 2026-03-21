import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-grid">
      <div className="hero-image-card">
        <img
          src="/assets/images/marry.jpg"
          alt="תמונת אווירה לסלסה"
        />
        <div className="image-note">תמונה של הסטודיו</div>
      </div>

      <div className="hero-copy">
        <h2>אווירה וחיבור דרך הריקוד</h2>
        <p>
          זה מקום מצוין לכתוב כמה שורות קצרות על הסגנון, למי השיעורים מתאימים,
          ומה מיוחד בחוויה של השיעורים.
        </p>
        <ul>
          <li>מתחילות ומתחילים</li>
          <li>זוגות או יחידים</li>
          <li>שיעורים פרטיים וקבוצתיים</li>
          <li>ליווי אישי בקצב שלך</li>
        </ul>
        <Link className="cta-button" to="/contact">
          בואו לרקוד איתי
        </Link>
      </div>
    </section>
  );
}
