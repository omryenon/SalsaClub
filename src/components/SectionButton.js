import { Link } from 'react-router-dom';

export default function SectionButton({ to, children }) {
  return (
    <div className="center-button-wrap">
      <Link className="section-button" to={to}>
        {children}
      </Link>
    </div>
  );
}
