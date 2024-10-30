import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./shared/Nav";
import IntroductionPage from "./pages/intro";
import AboutMePage from "./pages/aboutMe";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
         <Route path="/about" element = {<AboutMePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
