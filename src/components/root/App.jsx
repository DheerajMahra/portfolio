import React, { useState, useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../navigation/Navigation'
import Hero from '../hero/Hero'
import About from '../about/About'
import Skills from '../skills/Skills'
import Work from '../work/Work'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'

function App() {  

  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    ReactGA.initialize('UA-190287965-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      { !isClosed &&
          <div className="Alert">
            <a
            className="Alert__link"
              href="https://www.youtube.com/channel/UCKtmVQUUX7gRDpdhicUGJhA?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="Alert__text">
                <FontAwesomeIcon className="Alert__goto" icon={faExternalLinkAlt} />
                I have started a YouTube channel
              </span>
            </a>
            <span className="Alert__close-wrap" onClick={() => setIsClosed(true)}>
              <FontAwesomeIcon
                className="Alert__close"
                icon={faTimes}
              />  
            </span>
          </div>
      }
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
