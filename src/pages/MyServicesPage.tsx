import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { services } from '../config/services';
import { motion } from 'framer-motion';

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

const MyServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-3xl font-comic text-candy-purple mb-8 text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        My Services
        <span className="inline-block ml-2">💡</span>
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <ServicesSection services={services} />
      </motion.div>
    </div>
  );
};

export default MyServicesPage; 