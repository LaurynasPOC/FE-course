import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
