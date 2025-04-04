import { useState, useEffect } from 'react';

/**
 * Hook to check if a media query matches
 * @param query - Media query to check
 * @returns boolean - Whether the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Prevent SSR issues
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Set initial value
      setMatches(media.matches);
      
      // Define callback for media query change
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      
      // Add listener
      media.addEventListener('change', listener);
      
      // Clean up
      return () => {
        media.removeEventListener('change', listener);
      };
    }
  }, [query]);

  return matches;
}

export default useMediaQuery;
