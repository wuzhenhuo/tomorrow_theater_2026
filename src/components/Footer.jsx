import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo2 from '../assets/images/logo2.png';
import { useLanguage } from '../context/LanguageContext';
import { useWaitlist } from '../context/WaitlistContext';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconPatreon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M14.82 2.41C11.53 2.41 8.85 5.1 8.85 8.39c0 3.28 2.68 5.95 5.97 5.95 3.28 0 5.95-2.67 5.95-5.95 0-3.29-2.67-5.98-5.95-5.98M3.28 21.59h3.1V2.41H3.28z" />
  </svg>
);

const Social = ({ href, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    style={{
      width: 36, height: 36,
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-muted-vis)',
      textDecoration: 'none',
      backgroundColor: 'var(--bg-card)',
      transition: 'color 0.15s, border-color 0.15s, background-color 0.15s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.color = 'var(--accent)';
      e.currentTarget.style.borderColor = 'var(--border-accent)';
      e.currentTarget.style.backgroundColor = 'var(--accent-lo)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.color = 'var(--text-muted-vis)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.backgroundColor = 'var(--bg-card)';
    }}
  >
    {children}
  </a>
);

const Footer = () => {
  const { t, language } = useLanguage();
  const { open: openWaitlist } = useWaitlist();

  const navLinks = [
    { to: '/platform',  label: t('footer.links.platform') },
    { to: '/courses',   label: t('footer.links.courses') },
    { to: '/team',      label: t('footer.links.team') },
    { to: '/research',  label: t('footer.links.research') },
    { to: '/media',     label: t('footer.links.media') },
    { to: '/resources', label: t('footer.links.resources') },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 40px' }}>

        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18, textDecoration: 'none' }}>
              <img src={logo2} alt="明日剧场" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15,
                letterSpacing: '-0.01em',
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {language === 'en' ? 'Theater of Tomorrow' : '明日剧场'}
              </span>
            </Link>

            <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.7, maxWidth: 300, margin: '0 0 20px 0' }}>
              {t('footer.description')}
            </p>

            <button
              onClick={openWaitlist}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-pill)',
                padding: '6px 14px',
                background: 'var(--accent-lo)',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
                marginBottom: 24,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <ExternalLink size={11} /> {t('footer.tryPlatform')}
            </button>

            <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
              <Social href="https://www.instagram.com/theateroftomorrow/" title="Instagram"><IconInstagram /></Social>
              <Social href="https://github.com/wuzhenhuo?tab=repositories" title="GitHub"><IconGithub /></Social>
              <Social href="https://x.com/WZhenhuo" title="X / Twitter"><IconX /></Social>
              <Social href="https://www.patreon.com/c/ZhenWu?vanity=user" title="Patreon"><IconPatreon /></Social>
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.04em', color: 'var(--text-muted-vis)' }}>
              {t('footer.copyright')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-label" style={{ marginBottom: 16 }}>{t('footer.quickLinks')}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.to} style={{ borderBottom: '1px solid var(--border)' }}>
                  <Link
                    to={link.to}
                    style={{ display: 'block', padding: '9px 0', fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-label" style={{ marginBottom: 16 }}>{t('footer.contactInfo')}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Phone size={12} />, text: '(853) 66810358' },
                { icon: <Phone size={12} />, text: '+86 13810745684' },
                { icon: <Mail size={12} />, text: 'tot@alexzhenwu.com' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--text-muted-vis)', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{item.text}</span>
                </li>
              ))}
              {(t('footer.addresses') || []).map((addr, i) => (
                <li key={`a${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: 'var(--text-muted-vis)', flexShrink: 0, marginTop: 2 }}><MapPin size={12} /></span>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{addr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 48, paddingTop: 20,
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.04em', color: 'var(--text-muted-vis)', margin: 0 }}>
            {t('footer.support')}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[t('footer.badge1'), t('footer.badge2'), t('footer.badge3')].map((badge) => (
              <span key={badge} className="tag" style={{ fontSize: 10 }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
