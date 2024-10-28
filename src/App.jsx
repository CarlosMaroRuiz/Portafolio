import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./shared/Nav";
import IntroductionPage from "./pages/intro";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />

      </Routes>
    </Router>
  );
}

export default App;
