// Performance optimization utilities

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Prefetch next page resources
export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Critical resource loading
export const loadCriticalResources = () => {
  // Preload critical fonts
  preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', 'style');
  
  // Preload hero images
  preloadResource('/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png', 'image');
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Image optimization helpers
export const generateImageSrcSet = (src: string, sizes: number[] = [400, 800, 1200]) => {
  if (src.startsWith('http')) {
    // For external images, just return the original
    return src;
  }
  
  // For internal images, generate different sizes
  return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
};

// Resource hints
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const dnsPrefetch = (domain: string) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  };

  // Preconnect to critical domains
  const preconnect = (domain: string) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  };

  // Add hints for commonly used domains
  dnsPrefetch('//fonts.googleapis.com');
  dnsPrefetch('//images.unsplash.com');
  preconnect('https://fonts.gstatic.com');
};

// Priority route preloading
export const preloadRouteComponents = () => {
  const routes = [
    () => import('../pages/Product'),
    () => import('../pages/HowItWorks'),
    () => import('../pages/Solutions'),
    () => import('../pages/Pricing'),
  ];

  // Preload route components when browser is idle
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      routes.forEach(routeImport => {
        routeImport().catch(() => {
          // Silently handle preload failures
        });
      });
    });
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Load critical resources
  loadCriticalResources();
  
  // Add resource hints
  addResourceHints();
  
  // Preload route components
  preloadRouteComponents();
  
  // Prefetch likely next pages on hover (debounced)
  let hoverTimeout: number;
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href]') as HTMLAnchorElement;
    
    if (link && link.href.startsWith(window.location.origin)) {
      clearTimeout(hoverTimeout);
      hoverTimeout = window.setTimeout(() => {
        prefetchResource(link.href);
      }, 100); // Debounce hover events
    }
  }, { passive: true });

  // Clear timeout on mouse leave
  document.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
  }, { passive: true });
};