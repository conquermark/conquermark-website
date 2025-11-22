import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollToTop Component
 * 
 * CRITICAL BUG FIX: Ensures page scrolls to top on navigation
 * 
 * Problem: When user navigates from one page to another, the new page
 * opens at the same scroll position as the previous page, causing users
 * to miss the hero section and important content at the top.
 * 
 * Solution: This component listens to route changes and automatically
 * scrolls to the top of the page whenever the route changes.
 */
const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo(0, 0);
    
    // Also disable browser's scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, [location]); // Trigger on location change

  return null; // This component doesn't render anything
};

export default ScrollToTop;
