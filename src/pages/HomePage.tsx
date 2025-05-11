import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageConfig } from '../config/images';
import { useCart } from '../context/CartContext';
import ServicesSection from '../components/ServicesSection';
import InformationSection from '../components/InformationSection';
import { Artwork } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../config/services';
import ArtsGallerySection from '../components/ArtsGallerySection';

interface HomePageProps {
  images: ImageConfig;
}

const HomePage: React.FC<HomePageProps> = ({ images }) => {
  const { addItem } = useCart();

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
        {/* No background image, just gradient and animated circles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <motion.div
            className="absolute top-0 left-1/2 w-96 h-96 rounded-full blur-sm -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'radial-gradient(circle, #ec4899 0%, #a21caf 100%)', opacity: 0.22 }}
            animate={{
              scale: [1, 1.15, 0.95, 1],
              x: [0, 30, -20, 0],
              y: [0, -20, 10, 0],
              filter: [
                'blur(16px) brightness(1)',
                'blur(20px) brightness(1.1)',
                'blur(12px) brightness(0.95)',
                'blur(16px) brightness(1)'
              ],
              background: [
                'radial-gradient(circle, #ec4899 0%, #a21caf 100%)',
                'radial-gradient(circle, #f472b6 0%, #7c3aed 100%)',
                'radial-gradient(circle, #a5b4fc 0%, #f472b6 100%)',
                'radial-gradient(circle, #ec4899 0%, #a21caf 100%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-sm translate-x-1/3 translate-y-1/3"
            style={{ background: 'radial-gradient(circle, #2dd4bf 0%, #818cf8 100%)', opacity: 0.18 }}
            animate={{
              scale: [1, 0.9, 1.1, 1],
              x: [0, -25, 15, 0],
              y: [0, 15, -10, 0],
              filter: [
                'blur(12px) brightness(1)',
                'blur(18px) brightness(1.1)',
                'blur(8px) brightness(0.95)',
                'blur(12px) brightness(1)'
              ],
              background: [
                'radial-gradient(circle, #2dd4bf 0%, #818cf8 100%)',
                'radial-gradient(circle, #f472b6 0%, #2dd4bf 100%)',
                'radial-gradient(circle, #818cf8 0%, #f472b6 100%)',
                'radial-gradient(circle, #2dd4bf 0%, #818cf8 100%)'
              ]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        </div>
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${images.hero.moonCat})`,
            opacity: 0.8,
            backgroundSize: '50% auto'
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <ServicesSection
            services={services.slice(0, 1)}
            headerRight={
              <Link
                to="/services"
                className="text-candy-purple hover:text-candy-pink font-comic transition-colors pr-2"
              >
                View All →
              </Link>
            }
          />
        </motion.div>
        
        {/* My Arts Section */}
        <ArtsGallerySection images={images} onAddToCart={handleAddToCart} />

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <InformationSection />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage; 