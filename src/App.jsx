import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import TechnicalProjects from "./pages/technical_projects";
import FunProjects from "./pages/fun_projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/technical-projects" element={<TechnicalProjects />} />
        <Route path="/fun-projects" element={<FunProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;