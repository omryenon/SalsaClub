import { Link } from 'react-router-dom';

export default function ClassCard({ title, text, image, to }) {
  return (
    <article className="class-card">
      {/* <img src={image} alt={title} className="class-card-image" /> */}
      <Link className="class-card-content" to={to}>
        <h3>{title}</h3>
      </Link>
    </article>
  );
}
