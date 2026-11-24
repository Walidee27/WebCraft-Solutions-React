import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import InscriptionPage from './pages/InscriptionPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import useScrollToTop from './hooks/useScrollToTop.jsx';
import './App.css';

function App() {
  useScrollToTop();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller directement au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/formations" element={<CoursesPage />} />
          <Route path="/inscription/:courseId?" element={<InscriptionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
