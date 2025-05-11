import React, { useState } from 'react';
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

  // Track which service was just added for feedback
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleAddToCartWithEffect = (service: Service) => {
    addItem({
      id: service.id,
      type: 'sticker', // For now, all services are stickers. Update as more types are added.
      name: service.name,
      quantity: 1,
      unitPrice: service.price,
      totalPrice: service.price,
    });
    setJustAddedId(service.id);
    setTimeout(() => setJustAddedId(null), 900);
  };

  return (
    <section className="bg-gradient-to-b from-candy-purple/5 to-transparent rounded-2xl p-6 relative overflow-hidden">
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
                    onClick={() => handleAddToCartWithEffect(service)}
                    className={`text-sm font-comic py-2 px-6 rounded-full whitespace-nowrap transition-all duration-300
                      ${justAddedId === service.id
                        ? 'bg-green-500 scale-110 text-white'
                        : 'bg-candy-purple text-white hover:bg-candy-pink'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    disabled={justAddedId === service.id}
                  >
                    {justAddedId === service.id ? (
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
    </section>
  );
};

export default ServicesSection; 