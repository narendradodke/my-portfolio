import "./App.css";
import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isLoading, setIsLoading] = useState(true);
  useScrollAnimation(isLoading);

  // Prevent body scroll while loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {/* Premium Full-Screen Animated Loader */}
      <AnimatePresence>
        {isLoading && (
          <Loader key="portfolio-loader" onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Portfolio Content - Smooth Fade-In on Reveal */}
      <motion.div
        className="portfolio-app-root"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        <ScrollProgress />
        <Hero isLoaderDone={!isLoading} />
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
      </motion.div>
    </>
  );
}

export default App;