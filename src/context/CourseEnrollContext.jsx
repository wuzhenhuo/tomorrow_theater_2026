import React, { createContext, useContext, useState } from 'react';

const CourseEnrollContext = createContext(null);

export function CourseEnrollProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CourseEnrollContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </CourseEnrollContext.Provider>
  );
}

export function useCourseEnroll() {
  return useContext(CourseEnrollContext);
}
