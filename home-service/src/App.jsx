import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Hero } from "./pages/hero/Hero";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/team" element={<h1>Services</h1>} />
          <Route path="/contacts" element={<h1>Contact</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
