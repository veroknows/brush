import React, { useState, useEffect } from 'react';
import { ImageConfig } from '../config/images';

interface LoadingScreenProps {
  images: ImageConfig;
  onLoadingComplete?: () => void;
  minDisplayTime?: number; // in milliseconds
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  images, 
  onLoadingComplete, 
  minDisplayTime = 4000 // Default to 4 seconds
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a minimum display time for the loading screen
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ 
      background: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Moon */}
          <div className="absolute inset-0 rounded-full bg-candy-yellow opacity-80 animate-pulse"></div>
          {/* Stars */}
          <div className="absolute top-0 left-0">
            <span className="text-2xl">{images.hero.emoji.sparkle}</span>
          </div>
          <div className="absolute top-0 right-0">
            <span className="text-2xl">{images.hero.emoji.sparkle}</span>
          </div>
          <div className="absolute bottom-0 left-0">
            <span className="text-2xl">{images.hero.emoji.sparkle}</span>
          </div>
          {/* Cat silhouette with elegant floating animation */}
          <div className="absolute inset-0 flex items-center justify-center animate-elegant-float">
            <img src={images.hero.moonCat} alt="Loading" className="w-24 h-24 object-contain" />
          </div>
        </div>
        <h2 className="text-white text-2xl font-comic mb-2 animate-bounce">Loading...</h2>
        <p className="text-candy-yellow text-sm font-comic animate-pulse">
          Setting up your magical art space! {images.hero.emoji.sparkle}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen; 