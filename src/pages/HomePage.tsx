import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageConfig } from '../config/images';
import { useCart } from '../context/CartContext';
import ServicesSection from '../components/ServicesSection';
import InformationSection from '../components/InformationSection';
import ArtPopup from '../components/ArtPopup';
import { Artwork } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface HomePageProps {
  images: ImageConfig;
}

const HomePage: React.FC<HomePageProps> = ({ images }) => {
  const { addItem } = useCart();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleAddToCart = (artwork: Artwork) => {
    addItem({
      id: artwork.id,
      type: 'artwork',
      name: artwork.title,
      quantity: 1,
      unitPrice: artwork.price,
      totalPrice: artwork.price,
    });
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-candy-purple to-candy-indigo text-white py-32 min-h-[500px] text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${images.hero.background})`, 
            opacity: 0.1 
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${images.hero.moonCat})`,
            opacity: 0.8,
            backgroundSize: '50% auto'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl font-comic mb-3 text-candy-yellow"
              animate={{ 
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 10px rgba(255,255,255,0.5)",
                  "0px 0px 0px rgba(255,255,255,0)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Welcome to Untitled Brush Studio
              <span className="inline-block ml-2">
                {images.hero.emoji.title}
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg font-comic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover unique digital artworks and custom sticker printing services
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ServicesSection stickerImage={images.services.stickers} />
        </motion.div>
        
        {/* My Arts Section */}
        <motion.section 
          className="bg-gradient-to-b from-candy-purple/5 to-transparent rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <motion.h2 
              className="text-2xl font-comic text-candy-purple"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Arts
              <motion.span 
                className="inline-block ml-2"
                animate={{ 
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {images.hero.emoji.gallery}
              </motion.span>
            </motion.h2>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="pr-2"
            >
              <Link
                to="/my-arts"
                className="text-candy-purple hover:text-candy-pink font-comic transition-colors"
              >
                View All →
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Art (First Art) */}
            {images.artworks.items.slice(0, 1).map((artwork, index) => (
              <motion.div
                key={artwork.id}
                className="md:col-span-2 bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col md:flex-row"
                onClick={() => setSelectedArtwork(artwork)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <motion.img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-contain bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <motion.h3 
                      className="text-2xl font-comic text-candy-purple mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {artwork.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {artwork.description}
                    </motion.p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <motion.span 
                      className="text-2xl font-comic text-candy-pink"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.4 }}
                    >
                      ${artwork.price}
                    </motion.span>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(artwork);
                      }}
                      className="bg-candy-indigo text-white px-4 py-1.5 rounded-full text-sm font-comic hover:bg-candy-teal transition-colors whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Other 4 Arts */}
            {images.artworks.items.slice(1, 5).map((artwork, index) => (
              <motion.div
                key={artwork.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedArtwork(artwork)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="relative h-48 bg-gray-50 flex items-center justify-center">
                  <motion.img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-contain p-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <motion.h3 
                    className="text-lg font-comic text-candy-purple mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (index + 1) * 0.2 }}
                  >
                    {artwork.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (index + 1) * 0.3 }}
                  >
                    {artwork.description}
                  </motion.p>
                  <div className="flex justify-between items-center mt-auto">
                    <motion.span 
                      className="text-candy-pink font-comic"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 1) * 0.4 }}
                    >
                      ${artwork.price}
                    </motion.span>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(artwork);
                      }}
                      className="bg-candy-indigo text-white px-4 py-1.5 rounded-full text-sm font-comic hover:bg-candy-teal transition-colors whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <InformationSection />
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedArtwork && (
          <ArtPopup
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage; 