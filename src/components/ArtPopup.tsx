import React from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '../types';
import Modal from './Modal';

interface ArtPopupProps {
  artwork: Artwork | null;
  onClose: () => void;
  onAddToCart: (artwork: Artwork) => void;
}

const ArtPopup: React.FC<ArtPopupProps> = ({ artwork, onClose, onAddToCart }) => {
  if (!artwork) return null;

  return (
    <Modal
      isOpen={!!artwork}
      onClose={onClose}
      size="lg"
      showCloseButton={false}
    >
      <div className="relative">
        <motion.button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6 text-candy-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="relative aspect-square rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-comic text-candy-indigo">{artwork.title}</h2>
            <p className="text-gray-600 font-comic">{artwork.description}</p>
            <div className="flex items-center justify-between pt-4">
              <span className="text-2xl font-comic text-candy-rose">${artwork.price}</span>
              <motion.button
                onClick={() => onAddToCart(artwork)}
                className="bg-candy-indigo text-white px-6 py-2 rounded-full font-comic hover:bg-candy-teal transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </Modal>
  );
};

export default ArtPopup; 