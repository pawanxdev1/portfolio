import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import profile from './data/profile';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section exists (e.g. after navigating from /projects/:id back to /#projects)
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    document.title = profile.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', profile.seo.description);
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToHash />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
