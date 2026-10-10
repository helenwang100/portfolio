import "../App.css";
import photo from "../assets/smiley.jpg";
import DropDownButton from "../dropdown_button";

function About() {
  return (
    <>
      <DropDownButton />
      
      <section id="about">
        <div className="about-section">
          <div className="about-text">
            <h2>About Me!</h2>
            <p className="about-content">
              Hi! I'm a developer who enjoys frontend development and design. 
              I've explored everything from React development to UI/UX design. 
              I'm always excited to learn new things, experiment with different designs, 
              and create experiences that people enjoy using!
            </p>
          </div>
          <img className="photo" src={photo} alt="Helen Wang" />
        </div>
      </section>
    </>
  );
}

export default About;
