import React from 'react';
import { motion } from 'framer-motion';
import { defaultImages } from '../config/images';

const AboutPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

  const sectionVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl font-comic text-candy-purple mb-8 text-center"
        variants={itemVariants}
      >
        About Untitled Brush Studio
        <span className="inline-block ml-2">
          {defaultImages.hero.emoji.about}
        </span>
      </motion.h1>
      
      <motion.div 
        className="bg-white rounded-xl shadow-md p-8 space-y-6"
        variants={itemVariants}
      >
        <motion.section variants={sectionVariants}>
          <h2 
            className="text-2xl font-comic text-candy-purple mb-4"
          >
            Who Am I?
            <span className="inline-block ml-2">
              👋
            </span>
          </h2>
          <motion.p 
            className="text-gray-700 font-comic mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi there! I'm a 4th-grade artist who loves creating digital art and custom stickers. 
            I started this art studio to share my creations with the world and make some pocket money 
            for my art supplies.
          </motion.p>
          <motion.p 
            className="text-gray-700 font-comic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I believe that art should be fun, colorful, and accessible to everyone. 
            That's why I create vibrant digital artworks and offer custom sticker printing services 
            at affordable prices.
          </motion.p>
        </motion.section>
        
        <motion.section variants={sectionVariants}>
          <h2 
            className="text-2xl font-comic text-candy-purple mb-4"
          >
            My Process
            <span className="inline-block ml-2">
              ✨
            </span>
          </h2>
          <motion.p 
            className="text-gray-700 font-comic mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I create my digital artworks using a combination of drawing tablets and digital art software. 
            Each piece is carefully crafted with attention to detail and a focus on vibrant colors and 
            playful designs.
          </motion.p>
          <motion.p 
            className="text-gray-700 font-comic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            For custom stickers, I work with high-quality printing services to ensure that your 
            designs come to life with vibrant colors and durable materials. I can print your 
            designs on various sticker types, including vinyl, paper, and holographic materials.
          </motion.p>
        </motion.section>
        
        <motion.section variants={sectionVariants}>
          <h2 
            className="text-2xl font-comic text-candy-purple mb-4"
          >
            Contact Me
            <span className="inline-block ml-2">
              📧
            </span>
          </h2>
          <motion.p 
            className="text-gray-700 font-comic mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Have questions about my artwork or sticker printing services? Feel free to reach out!
          </motion.p>
          <motion.div 
            className="bg-candy-purple/10 p-4 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              className="text-candy-purple font-comic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Email: <motion.a 
                href="mailto:brush@veroknows.com" 
                className="underline"
                whileHover={{ scale: 1.05, color: "#9333ea" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                brush@veroknows.com
              </motion.a>
            </motion.p>
            <motion.p 
              className="text-candy-purple font-comic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              Instagram: <motion.a 
                href="https://instagram.com/untitledbrush" 
                className="underline"
                whileHover={{ scale: 1.05, color: "#9333ea" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                @untitledbrush
              </motion.a>
            </motion.p>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage; 