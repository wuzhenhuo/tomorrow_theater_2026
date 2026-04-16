import React, { createContext, useContext, useState } from 'react';

const ContactInquiryContext = createContext(null);

export function ContactInquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactInquiryContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ContactInquiryContext.Provider>
  );
}

export function useContactInquiry() {
  return useContext(ContactInquiryContext);
}
