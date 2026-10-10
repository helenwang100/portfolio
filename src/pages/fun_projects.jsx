import "../App.css";
import leo from "../assets/front.jpg";
import DropDownButton from "../dropdown_button";

function FunProjects() {
  return (
    <>
      <DropDownButton />

      <section id="3d-character-model">
        <div className="projects-section">
          <div className="projects-text">
            <h2>Leo</h2>
            <div className="projects-layout">
              <a
                href={leo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                className="projects-photo"
                  src={leo}
                  alt="Leo"
                />
              </a>
              <p className="fun-projects-content">
                Created a 3D character model using Maya. I love cats (despite
                not having one), so I decided to create one. I created Leo with
                a somewhat pretentious personality in mind, hence the monocle,
                the bowtie, and of course the mustache.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="badgerbuddies-adoption-web-app">
        <div className="projects-section">
          <div className="projects-text">
            <h2>BadgerBuddies Adoption Web App</h2>
            <div className="projects-layout">
              <iframe
                src="https://giphy.com/embed/PZYqyo1OaPpJcyuoen"
                className="projects-photo"
                width="480"
                height="480"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
              <p className="fun-projects-content">
                Created a GIF using Photoshop by piecing together multiple
                images in a simple animation. I thought this was fun because I
                didn't know you could make one so easily! Obviously if I wanted
                a GIF with more frames, there'd be more work, but I still
                thought this was pretty cool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="badger-news-mobile-app">
        <div className="projects-section">
          <div className="projects-text">
            <h2>Badger News Mobile App</h2>
            <div className="projects-layout">
              <img className="projects-photo" src={leo} alt="Helen Wang" />
              <ul className="projects-content">
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

export default FunProjects;
