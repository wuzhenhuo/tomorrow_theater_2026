import React, { createContext, useContext, useState } from 'react';

const WaitlistContext = createContext(null);

export function WaitlistProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WaitlistContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  return useContext(WaitlistContext);
}
