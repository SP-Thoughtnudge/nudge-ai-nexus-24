import { useEffect, useState } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

const ImagePreloader = ({ images, priority = false }: ImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = images.map((src) => {
        return new Promise<string>((resolve, reject) => {
          if (loadedImages.has(src)) {
            resolve(src);
            return;
          }

          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, src]));
            resolve(src);
          };
          img.onerror = reject;
          img.src = src;
          
          if (priority) {
            img.loading = 'eager';
          }
        });
      });

      try {
        await Promise.allSettled(loadPromises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    if (images.length > 0) {
      preloadImages();
    }
  }, [images, priority, loadedImages]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;