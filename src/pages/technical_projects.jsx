import "../App.css";
import photo from "../assets/smiley.jpg";
import databaseSearch from "../assets/database-search.png";
import DropDownButton from "../dropdown_button";

function TechnicalProjects() {


  return (
    <>
      <DropDownButton />

      <section id="database-search">
        <div className="projects-section">
          <div className="projects-text">
            <h2>Database Search</h2>
            <div className="projects-layout">
              <img
                className="projects-photo"
                src={databaseSearch}
                alt="Database Search"
              />
              <ul className="tech-projects-content">
                <li>
                  Redesigned the UW–Madison Database Search website using
                  contextual inquiry and usability testing as a team.
                </li>
                <li>
                  Utilized bullseye and affinity diagramming to decide changes
                  and additions desired to the website.
                </li>
                <li>
                  Created{" "}
                  <a
                    href="https://www.figma.com/design/Lsb5MCIYDY8EQ5KiYEpH6c/CS570-Step4-High-fidelity-prototype?node-id=0-1&p=f"
                    target="_blank"
                    style={{ color: "#eb5f87" }}
                  >
                    Figma prototypes{" "}
                  </a>
                  for redesigned website and article pages based on user
                  feedback.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="badgerbuddies-adoption-web-app">
        <div className="projects-section">
          <div className="projects-text">
            <h2>BadgerBuddies Adoption Web App</h2>
            <div className="projects-layout">
              <img className="projects-photo" src={photo} alt="Helen Wang" />
              <ul className="tech-projects-content">
                <li>
                  Built a responsive multi-page social platform using
                  JavaScript, React, React Router, and React-Bootstrap.
                </li>
                <li>
                  Applied shared state management with the Context API and
                  persistent user workflows using sessionStorage.
                </li>
                <li>
                  Developed reusable components with dynamic routing, and image
                  carousels for enhanced UX.
                </li>
                <li>
                  Ensured responsive design using React-Bootstrap grid layouts
                  and empty-state handling.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="badger-news-mobile-app">
        <div className="projects-section">
          <div className="projects-text">
            <h2>Badger News Mobile App</h2>
            <div className="projects-layout">
              <img className="projects-photo" src={photo} alt="Helen Wang" />
              <ul className="tech-projects-content">
                <li>
                  Developed a cross-platform mobile news application using
                  JavaScript, React Native, and Expo.
                </li>
                <li>
                  Added tab and stack navigation with React Navigation to
                  support article browning and detailed views.
                </li>
                <li>
                  Fetched and displayed news data from REST APIs, including
                  asynchronous loading states.
                </li>
                <li>
                  Built a preference-based filtering system using Context API,
                  enabling users to customize content dynamically.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnicalProjects;
