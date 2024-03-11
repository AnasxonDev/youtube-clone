import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />} />
      </Routes>
    </Router>
  );
};

export default App;
