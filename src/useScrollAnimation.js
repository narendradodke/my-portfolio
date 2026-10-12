import { useEffect } from "react";

function useScrollAnimation(loading = false) {
  useEffect(() => {
    if (loading) return;

    // IntersectionObserver to reveal elements smoothly when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Unobserve so it stays visible after first reveal (smooth once-load)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-right, .scroll-reveal-left, .scroll-reveal-up, .skill-animate-right, .animate-on-scroll"
      );
      elements.forEach((el) => {
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });
    };

    // Initial observation
    const timer = setTimeout(observeElements, 50);

    // MutationObserver to automatically detect and observe lazy-loaded Suspense components
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [loading]);
}

export default useScrollAnimation;