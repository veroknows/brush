import React, { useState } from 'react';
import { ImageConfig } from '../config/images';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import ArtPopup from '../components/ArtPopup';
import { Artwork } from '../types';

interface MyArtsPageProps {
  images: ImageConfig;
}

const MyArtsPage: React.FC<MyArtsPageProps> = ({ images }) => {
  const { addItem } = useCart();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Track which artwork was just added for feedback
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleAddToCartWithEffect = (artwork: Artwork) => {
    addItem({
      id: artwork.id,
      type: 'artwork',
      name: artwork.title,
      quantity: 1,
      unitPrice: artwork.price,
      totalPrice: artwork.price,
    });
    setJustAddedId(artwork.id);
    setTimeout(() => setJustAddedId(null), 900);
  };

  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        className="text-3xl font-comic text-candy-purple mb-8 text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        My Arts Collection
        <span className="inline-block ml-2">
          {images.hero.emoji.gallery}
        </span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.artworks.items.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-comic text-candy-purple mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {artwork.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4 line-clamp-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  {artwork.description}
                </motion.p>
                
                <div className="flex justify-between items-center">
                  <motion.span 
                    className="text-2xl font-comic text-candy-pink"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.4 }}
                  >
                    ${artwork.price}
                  </motion.span>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCartWithEffect(artwork);
                    }}
                    className={`px-6 py-2 rounded-full font-comic transition-all duration-300
                      ${justAddedId === artwork.id
                        ? 'bg-green-500 scale-110 text-white'
                        : 'bg-candy-purple text-white hover:bg-candy-pink'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.4 }}
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
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ArtPopup
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onAddToCart={handleAddToCartWithEffect}
      />
    </div>
  );
};

export default MyArtsPage; 