import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages";
import { useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SkeletonTheme
      baseColor={isDarkMode ? "#3E3E3E" : "#CCCCCC"}
      highlightColor={isDarkMode ? "#848484" : "#E0E0E0"}
    >
      <Router>
        <NavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsSecondOpen={setIsSecondOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
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
                isDarkMode={isDarkMode}
              />
            }
          />
        </Routes>
      </Router>
    </SkeletonTheme>
  );
};

export default App;
