import React, { createContext, useContext, useState } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext(null);

export const languages = [
  { code: 'zh-CN', label: '简体' },
  { code: 'zh-TW', label: '繁体' },
  { code: 'en', label: 'EN' },
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh-CN');

  // t(key) resolves dot-notation keys like 'nav.home' from the shared translations
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
