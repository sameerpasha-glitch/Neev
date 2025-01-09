import { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Hero1 } from './components/hero1';
import { Hero2 } from './components/Hero2';
import { Team } from './components/Team';
import { Footer } from './components/footer';
import Load from './components/Load'; // Import the loader component

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time (e.g., fetching data or waiting for an API)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Load /> // Show loader while loading
      ) : (
        <>
          <Navbar />
          <Hero />
          <Hero1 />
          <Hero2 />
          <Team />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
