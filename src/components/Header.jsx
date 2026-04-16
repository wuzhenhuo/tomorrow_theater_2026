import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo2 from '../assets/images/logo2.png';
import { useLanguage, languages } from '../context/LanguageContext';
import { useWaitlist } from '../context/WaitlistContext';

const Header = ({ theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { open: openWaitlist } = useWaitlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.platform'), href: '/platform' },
    { name: t('nav.courses'), href: '/courses' },
    { name: t('nav.team'), href: '/team' },
    { name: t('nav.research'), href: '/research' },
    { name: t('nav.media'), href: '/media' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--bg-base) 92%, transparent)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="container" style={{ maxWidth: 1200, padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <img src={logo2} alt="明日剧场" style={{ width: 34, height: 34, objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {language === 'en' ? 'Theater of Tomorrow' : '明日剧场'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex" style={{ alignItems: 'center', gap: 2 }}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '6px 11px',
                  borderRadius: 8,
                  color: isActive(item.href) ? 'var(--accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  backgroundColor: isActive(item.href) ? 'var(--accent-lo)' : 'transparent',
                  transition: 'color 0.15s, background-color 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden xl:flex" style={{ alignItems: 'center', gap: 10 }}>
            {/* Language switcher */}
            <div style={{
              display: 'flex',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-pill)',
              padding: 3,
              gap: 2,
              backgroundColor: 'var(--bg-surface)',
            }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: language === lang.code ? 'var(--accent)' : 'transparent',
                    color: language === lang.code ? '#fff' : 'var(--text-secondary)',
                    transition: 'all 0.15s',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={onThemeToggle}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                width: 36,
                height: 36,
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-strong)';
              }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* CTA */}
            <button
              className="btn btn-primary"
              style={{ fontSize: 13, padding: '8px 18px', minHeight: 36 }}
              onClick={openWaitlist}
            >
              {t('nav.tryPlatform')}
            </button>
          </div>

          {/* Mobile controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                width: 34, height: 34, borderRadius: 8,
                background: 'none', border: '1px solid var(--border-strong)',
                color: 'var(--text-secondary)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg-surface)',
            padding: '12px 0 16px',
          }}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-ui)',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '10px 16px',
                  color: isActive(item.href) ? 'var(--accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {item.name}
              </Link>
            ))}

            <div style={{ padding: '14px 16px 0', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--radius-pill)',
                padding: 3, gap: 2,
                backgroundColor: 'var(--bg-card)',
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-pill)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: language === lang.code ? 'var(--accent)' : 'transparent',
                      color: language === lang.code ? '#fff' : 'var(--text-secondary)',
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <button
                className="btn btn-primary"
                style={{ flex: 1, fontSize: 13, padding: '8px 16px', minHeight: 38 }}
                onClick={openWaitlist}
              >
                {t('nav.tryPlatform')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
