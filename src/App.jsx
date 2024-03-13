import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages";
import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Router>
        <NavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isSecondOpen={isSecondOpen}
          setIsSecondOpen={setIsSecondOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isSecondOpen={isSecondOpen}
                setIsSecondOpen={setIsSecondOpen}
              />
            }
          />
        </Routes>
      </Router>
    </SkeletonTheme>
  );
};

export default App;
