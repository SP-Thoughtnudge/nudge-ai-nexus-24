import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const metrics: PerformanceMetrics = {};

    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    // First Input Delay (FID) - now replaced by INP in Core Web Vitals
    const observeFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cls = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // First Contentful Paint (FCP)
    const observeFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
      }
    };

    // Time to First Byte (TTFB)
    const observeTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.responseStart > 0) {
              metrics.ttfb = entry.responseStart - entry.requestStart;
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    // Initialize observers
    observeLCP();
    observeFID();
    observeCLS();
    observeFCP();
    observeTTFB();

    // Log metrics after page load
    const logMetrics = () => {
      setTimeout(() => {
        console.log('Core Web Vitals:', metrics);
        
        // Send to analytics if needed
        if ((window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            custom_map: {
              metric_name: 'lcp',
              metric_value: metrics.lcp,
            },
          });
        }
      }, 3000);
    };

    if (document.readyState === 'complete') {
      logMetrics();
    } else {
      window.addEventListener('load', logMetrics);
    }

    return () => {
      window.removeEventListener('load', logMetrics);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;