import React from "react";
import "./App.css";
import pic from './pic.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faThreads, faXTwitter, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (  
    <div>
        <img src={pic} alt="me" className="me" />
        <h1>Tariq Hutcherson</h1>
        <p>Jesus is Lord.</p>
        <p className="second">Tech - Orator - Writer</p>
        <div className="icons">
            <a href="https://m.facebook.com/p/Tariq-Hutcherson-100008723192654/">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tariqhutcherson/">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.threads.net/@tariqhutcherson">
            <FontAwesomeIcon icon={faThreads} />
            </a>
            <a href="https://twitter.com/tariqhutcherson">
            <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/donald-tariq-hutcherson-iii-3b56b917b">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    </div>
  )  
}

function Content() {
    const handleRedirect = (url) => {
        window.location.href = url;
      };

    return (
        <div>
            <form className="links">
        <button
          className="button"
          type="button"
          onClick={() =>
            handleRedirect(
              'https://docs.google.com/document/d/e/2PACX-1vQXrdNEprHzz3gQYd4JAi380V15SQXio58AXTPisrYcHbv49UTRpS-4qHEoi8IVfeDO-pwr3LMCtcHu/pub'
            )
          }
        >
          Here's Some Good News !!
        </button>
      </form>

      <form className="links">
        <button
          className="button"
          type="button"
          onClick={() =>
            handleRedirect('https://www.tiktok.com/@tariqhutcherson')
          }
        >
          Follow my TikTok
        </button>
      </form>

      <form className="links">
        <button
          className="button"
          type="button"
          onClick={() =>
            handleRedirect('https://www.youtube.com/@tariqhutcherson')
          }
        >
          Subscribe to my YouTube
        </button>
      </form>

      <form className="links">
        <button
          className="button"
          type="button"
          onClick={() =>
            handleRedirect('https://github.com/tariqhutcherson')
          }
        >
          Check out my Github
        </button>
      </form>
        </div>
    )
}

function Footer() {
    return (
      <footer>
        <p>Links.</p>
      </footer>
    );
}



export default App