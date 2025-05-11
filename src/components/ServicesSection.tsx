import React from 'react';
import { useCart } from '../context/CartContext';
import { defaultImages } from '../config/images';
import { Service } from '../types';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  services: Service[];
  headerRight?: React.ReactNode;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, headerRight }) => {
  const { addItem } = useCart();

  const handleAddToCart = (service: Service) => {
    addItem({
      id: service.id,
      type: 'sticker', // For now, all services are stickers. Update as more types are added.
      name: service.name,
      quantity: 1,
      unitPrice: service.price,
      totalPrice: service.price,
    });
  };

  return (
    <section className="bg-gradient-to-b from-candy-purple/5 to-transparent rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-comic text-candy-purple">
          My Services
          <span className="inline-block ml-2">{defaultImages.hero.emoji.service}</span>
        </h2>
        {headerRight && (
          <div>{headerRight}</div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-comic text-candy-purple mb-2">{service.name}</h3>
                  <p className="text-sm font-comic text-gray-600">{service.description}</p>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="text-right">
                    <p className="text-sm font-comic text-gray-600">Price per item</p>
                    <motion.p
                      className="text-lg font-comic text-candy-pink"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      ${service.price.toFixed(2)}
                    </motion.p>
                  </div>
                  <motion.button
                    onClick={() => handleAddToCart(service)}
                    className="bg-candy-purple text-white text-sm font-comic py-2 px-6 rounded-full hover:bg-candy-pink transition-colors whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 