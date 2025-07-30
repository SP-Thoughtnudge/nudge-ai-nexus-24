import { useEffect } from 'react';

export const useWebVitals = () => {
  useEffect(() => {
    // Simple performance monitoring without external dependencies
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor loading performance
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.duration}ms`);
        }
      });
      
      try {
        observer.observe({ entryTypes: ['navigation', 'resource'] });
      } catch (e) {
        // Fallback for older browsers
        console.log('Performance Observer not supported');
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);
};