import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <img 
          src="/src/assets/profile.jpg" 
          className="profile-img" 
          alt="profile"
        />

        <h1>Hi, I'm Mithila 👋</h1>
        <p>A passionate Web Developer</p>

        {/* Download CV Button */}
        <a href="/cv.pdf" download>
          <button className="btn">Download CV</button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>I am learning React and building modern web applications.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>Project 1</h3>
          <p>Short description of project</p>
          <a 
            href="https://github.com/Kaniz-Reza/CSE412-Demo" 
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>Short description of project</p>
          <a 
            href="https://github.com/Kaniz-Reza/CSE412-Demo" 
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: Kanizrezamithila@gmail.com</p>
      </section>
    </div>
  );
}

export default App;