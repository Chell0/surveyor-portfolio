import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];


  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" className="logo-link">
          Charles Ochieng'
        </Link>
      </div>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((open) => !menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="primary-nav" className={`nav ${menuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link ${location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to)) ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch →
        </Link>
      </nav>
    </header>
  );
}

export default Header;