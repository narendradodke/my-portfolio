import "./App.css";
import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import useScrollAnimation from "./useScrollAnimation";

// Below-the-fold lazy loaded sections for bundle optimization
const MiniProjects = lazy(() => import("./components/MiniProjects/MiniProjects"));
const Timeline = lazy(() => import("./components/Timeline"));
const Stats = lazy(() => import("./components/Stats"));
const Certificates = lazy(() => import("./components/Certificates"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTop = lazy(() => import("./components/BackToTop"));

function App() {
  useScrollAnimation();
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

      <Suspense fallback={null}>
        <MiniProjects />
        <Timeline />
        <Stats />
        <Certificates />
        <Contact />
        <BackToTop />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;