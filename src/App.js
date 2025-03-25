import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VideoPlayer from './VideoPlayer';  // Import VideoPlayer
import MarkdownEditor from './MarkdownEditor';
import CharacterCreator from "./CharacterCreator";
import CharacterSheet from "./CharacterSheet";



// Component for Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the homepage!</p>
    </div>
  );
}

// Component for About Page
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page with some cool info.</p>
    </div>
  );
}

// Component for Services Page
function Services() {
  return (
    <div>
      <h2>Services Page</h2>
      <p>Here are some cool services we offer.</p>
      <MarkdownEditor/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/video">Video</Link> {/* Link to video player */}
              </li>
              <li>
                <Link to="/create">Create</Link> {/* Link to video player */}
              </li>
              <li>
                <Link to="/character">Character</Link> {/* Link to video player */}
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/video" element={<VideoPlayer videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" />} /> {/* Replace with your video link */}
            <Route path="/create" element={<CharacterCreator />} />
            <Route path="/character" element={<CharacterSheet />} />  
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
