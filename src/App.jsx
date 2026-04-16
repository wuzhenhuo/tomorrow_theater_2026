import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import CourseEnrollModal from './components/CourseEnrollModal';
import ContactInquiryModal from './components/ContactInquiryModal';
import { LanguageProvider } from './context/LanguageContext';
import { WaitlistProvider } from './context/WaitlistContext';
import { CourseEnrollProvider } from './context/CourseEnrollContext';
import { ContactInquiryProvider } from './context/ContactInquiryContext';
import { useTheme } from './hooks/useTheme';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import CoursesPage from './pages/CoursesPage';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import MediaPage from './pages/MediaPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function AppInner() {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Header theme={theme} onThemeToggle={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WaitlistModal />
      <CourseEnrollModal />
      <ContactInquiryModal />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <WaitlistProvider>
        <CourseEnrollProvider>
          <ContactInquiryProvider>
            <Router>
              <AppInner />
            </Router>
          </ContactInquiryProvider>
        </CourseEnrollProvider>
      </WaitlistProvider>
    </LanguageProvider>
  );
}

export default App;
