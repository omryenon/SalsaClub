import Header from './Header';
import FooterNav from './FooterNav';

export default function Layout({ children }) {
  return (
    <div className="page-shell">
      <div className="paper">
        <Header />
        {children}
        <FooterNav />
      </div>
    </div>
  );
}
