import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Loader.css";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds counter duration
    let animationFrameId;
    let timeoutId;
    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const currentVal = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentVal);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // After counter hits 100, wait 300ms then trigger exit
        timeoutId = setTimeout(() => {
          if (onFinish) onFinish();
        }, 300);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onFinish]);

  // Format with leading zero for single digits (00% -> 100%)
  const formattedProgress = String(progress).padStart(2, "0");

  const curtainTransition = {
    duration: 0.8,
    ease: [0.65, 0, 0.35, 1], // smooth ease-in-out split
  };

  return (
    <motion.div
      className="loader-root"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      {/* Top Half Split Screen */}
      <motion.div
        className="loader-curtain-top"
        initial={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={curtainTransition}
      />

      {/* Bottom Half Split Screen */}
      <motion.div
        className="loader-curtain-bottom"
        initial={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={curtainTransition}
      />

      {/* Foreground Content */}
      <motion.div
        className="loader-content"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
      >
        {/* Centered Spinner and Name */}
        <div className="loader-center">
          {/* Dual-ring Spinner + Glow */}
          <div className="loader-spinner-container">
            {/* Subtle Purple Glow Pulse */}
            <motion.div
              className="loader-spinner-glow"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.15, 0.28, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />

            {/* Outer Ring: semi-transparent white, border-t-transparent */}
            <motion.div
              className="loader-spinner-outer border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
              }}
            />

            {/* Inner Ring: solid #8b5cf6, reverse rotation */}
            <motion.div
              className="loader-spinner-inner"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />
          </div>

          {/* Name Reveal: "Narendra" slides up, then "Dodke" in #8b5cf6 with 0.3s stagger */}
          <div className="loader-name text-2xl md:text-4xl">
            <motion.span
              className="loader-name-first"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              Narendra
            </motion.span>

            <motion.span
              className="loader-name-last text-[#8b5cf6]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5, // 0.3s stagger after first name
              }}
            >
              Dodke
            </motion.span>
          </div>
        </div>

        {/* Bottom Bar: Bottom-Left Label & Bottom-Right Counter */}
        <div className="loader-bottom-bar">
          <span className="loader-label-portfolio text-slate-500 uppercase tracking-[0.3em]">
            PORTFOLIO
          </span>

          <span className="loader-counter font-mono text-slate-400">
            {formattedProgress}%
          </span>
        </div>

        {/* Thin Purple Progress Bar at Very Bottom */}
        <div className="loader-progress-track">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;