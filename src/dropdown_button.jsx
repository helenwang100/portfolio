import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function DropDownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const pageTitles = {
    "/": "Helen Wang",
    "/about": "Helen Wang",
    "/technical-projects": "Technical Projects",
    "/fun-projects": "Fun Projects",
  };

  const title = pageTitles[location.pathname] || "Helen Wang";

  return (
    <section id="name">
      <div className="header">
        <h1 className="title">{title}</h1>
        <div className="dropdown">
          <button
            type="button"
            className="dropdownbtn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            ▼
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/about">About Me</Link>
              <Link to="/technical-projects">Technical Projects</Link>
              <Link to="/fun-projects">Fun Projects</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DropDownButton;
