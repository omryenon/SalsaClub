import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'בית' },
  { to: '/about', label: 'אודות' },
  { to: '/group-lessons', label: 'קבוצות' },
  { to: '/private-lessons', label: 'פרטי' },
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
