import { useLocation } from "wouter";
import { useEffect } from "react";

export function useNavigation() {
  const [, setLocation] = useLocation();

  // Handle hash-based navigation on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && window.location.pathname === '/') {
      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const navigateToSection = (sectionId: string) => {
    // If we're on the home page, just scroll to the section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash, then scroll after navigation
      setLocation(`/#${sectionId}`);
      
      // Use a small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
  };

  return {
    navigateToSection,
    navigateToPage
  };
} 