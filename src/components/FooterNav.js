import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'בית' },
  { to: '/about', label: "ליידי סטייל" },
  { to: '/group-lessons', label: 'לימוד ריקוד לזוגות' },
  { to: '/private-lessons', label: 'לימוד ריקוד לגברים' },
  { to: '/contact', label: 'צור קשר' }
];

export default function FooterNav() {
  return (
    <nav className="footer-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? 'footer-nav-link active' : 'footer-nav-link'
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
