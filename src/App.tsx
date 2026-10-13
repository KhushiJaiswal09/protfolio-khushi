import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Experience,
  Profile,
 
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');

    const handleModeChange = () => {
        setMode((currentMode) => currentMode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Experience/>
            <Expertise/>
            <Project/>
            <Timeline/>
            <section className="personal-details-section" aria-label="Personal details">
                <div className="section-inner personal-details-grid">
                    <section className="personal-details-card" aria-labelledby="languages-heading">
                        <p className="section-eyebrow">COMMUNICATION</p>
                        <h2 id="languages-heading">Languages</h2>
                        <ul className="personal-detail-list">
                            <li>English</li>
                            <li>Hindi</li>
                        </ul>
                    </section>
                    <section className="personal-details-card" aria-labelledby="hobbies-heading">
                        <p className="section-eyebrow">OFF THE CLOCK</p>
                        <h2 id="hobbies-heading">Hobbies</h2>
                        <ul className="personal-detail-list">
                            <li>Travelling</li>
                            <li>Gardening</li>
                            <li>Running <span>(still working on it!)</span></li>
                        </ul>
                    </section>
                </div>
            </section>
            <Profile/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;