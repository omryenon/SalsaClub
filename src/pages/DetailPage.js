import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function DetailPage({ title, text, imageSeed }) {
  return (
    <Layout>
      <section className="detail-page">
        <div className="detail-image-wrap">
          <img
            src={`https://picsum.photos/seed/${imageSeed}/1200/700`}
            alt={title}
          />
        </div>

        <div className="detail-box">
          <h2>{title}</h2>
          {text.map((line, index) => (
            <div style={{fontSize: "25px"}} key={index}>{line}</div>
          ))}
          <div className="detail-actions">
            <Link className="section-button" to="/">
              חזרה לעמוד הראשי
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
