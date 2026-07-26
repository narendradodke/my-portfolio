import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import MiniProjects from "./components/MiniProjects/MiniProjects";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import Stats from "./components/Stats";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      
      <ScrollProgress />
      
      <Hero />

      <About />

      <Skills />

      <Projects />

      <MiniProjects />

      <Timeline />

      <Stats />

      <Certificates />

      <Contact />

      <BackToTop />

      <Footer />
    </>
  );
}

export default App;