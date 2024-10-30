// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./shared/Nav";
import IntroductionPage from "./pages/intro";
import AboutMePage from "./pages/aboutMe";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/about" element={<AboutMePage />} />
        {/* Ruta para la página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
