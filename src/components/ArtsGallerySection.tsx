import React, { useState } from 'react';
import { ImageConfig } from '../config/images';
import { Artwork } from '../types';
import fallbackImg from '../assets/images/artwork1.png'; // Use a real fallback image if you have one
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ArtsGallerySectionProps {
  images: ImageConfig;
  onAddToCart: (artwork: Artwork) => void;
}

const ArtsGallerySection: React.FC<ArtsGallerySectionProps> = ({ images, onAddToCart }) => {
  // Only show the first 4 artworks
  const displayArtworks = images.artworks.items.slice(0, 4);

  // Track which artwork was just added for feedback
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleAddToCartWithEffect = (artwork: Artwork) => {
    onAddToCart(artwork);
    setJustAddedId(artwork.id);
    setTimeout(() => setJustAddedId(null), 900);
  };

  return (
    <section className="bg-gradient-to-b from-candy-purple/5 to-transparent rounded-2xl p-6 relative overflow-hidden">
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-comic text-candy-purple">
          My Arts
          <span className="inline-block ml-2">
            {images.hero.emoji.gallery}
          </span>
        </h2>
        <div className="pr-2">
          <Link to="/arts" className="text-candy-purple hover:text-candy-pink font-comic transition-colors">
            View All →
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="relative group rounded-2xl overflow-hidden shadow-md bg-white/80 backdrop-blur-md transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-60 object-cover object-center"
                loading="lazy"
                onError={e => { e.currentTarget.src = fallbackImg; }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col gap-1 z-10">
                <span className="text-base font-comic text-white drop-shadow-lg">{artwork.title}</span>
                <span className="text-candy-yellow font-bold text-lg drop-shadow-lg">${artwork.price}</span>
                <button
                  className={`mt-1 px-3 py-1 rounded-full text-xs font-comic w-max transition-all duration-300
                    ${justAddedId === artwork.id
                      ? 'bg-green-500 scale-110 text-white'
                      : 'bg-candy-indigo text-white hover:bg-candy-teal'}`}
                  onClick={e => { e.stopPropagation(); handleAddToCartWithEffect(artwork); }}
                  disabled={justAddedId === artwork.id}
                >
                  {justAddedId === artwork.id ? (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      Added!
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ArtsGallerySection; 