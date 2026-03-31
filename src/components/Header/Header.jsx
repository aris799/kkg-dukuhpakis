import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../common/Container';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Materi', path: '/materi' },
    { label: 'Profil', path: '/profil' },
    { label: 'Aplikasi', path: '/aplikasi' },
    { label: 'Galeri', path: '/galeri' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <Container className="header__wrapper">
        {/* Logo & Title */}
        <div className="header__brand">
          <img 
            src="https://res.cloudinary.com/diogvlobw/image/upload/v1774918543/logokkgdukuhpakis_by0jxy.png" 
            alt="KKG Dukuh Pakis Logo" 
            className="brand__logo"
          />
          <div className="brand__text">
            <h1 className="brand__title">KKG Dukuh Pakis</h1>
            <p className="brand__subtitle">Kota Surabaya</p>
          </div>
        </div>

        {/* Hamburger Menu Toggle */}
        <button
          className={`header__menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-toggle__line"></span>
          <span className="menu-toggle__line"></span>
          <span className="menu-toggle__line"></span>
        </button>

        {/* Navigation */}
        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.path} className="nav__item">
                <a
                  href={item.path}
                  className={`nav__link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
