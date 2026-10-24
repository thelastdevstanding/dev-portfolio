import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export default function App() {
  useEffect(() => {
    document.title = "Amina Ahmed · Portfolio";
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}