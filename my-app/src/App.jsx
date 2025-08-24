import Features from "./components/Features";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import doctor from "./assets/doctor.png";

import "./App.css";

function App() {
    return (
    <>
      <div className = "hero">
        <div className = "hero-left">
          <nav className = "navbar">
            <div className = "navbar-left">
              <img src={logo} alt="VirTrend" className="logo"/>
            </div>
            <ul className = "navbar-links">
              <li><a href="#Features">Features</a></li>
              <li><a href="#Rules">Rules</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </nav>
          <div className="hero-content">
            <h1>AI-Powered Epidemic Prediction</h1>
            <p>
            Predict and prevent the spread of viruses with real-time data analysis.
            </p>
            <a href="https://virusspread-kb7fz87xnhhxtrt4dxcpwj.streamlit.app/"><button className="cta-button">Try it out</button></a>
          </div>
        </div>
        <div className="hero-image">
          <img src={doctor} alt="Doctor" />
        </div>
      </div>
      <Features />
      <Rules />
      <Footer />
    </>
  );
}

export default App
