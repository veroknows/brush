import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info';
}

const AlertPopup: React.FC<AlertPopupProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = 'info' 
}) => {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'error':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'info':
      default:
        return 'bg-candy-purple/10 text-candy-purple border-candy-purple/20';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`max-w-md w-full rounded-2xl overflow-hidden border ${getTypeStyles()}`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-2xl">
                  {getIcon()}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-comic font-medium mb-1">{title}</h3>
                  <p className="text-sm font-comic">{message}</p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={onClose}
                  className={`px-4 py-2 rounded-full font-comic text-sm ${
                    type === 'success' 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : type === 'error'
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-candy-purple text-white hover:bg-candy-pink'
                  } transition-colors`}
                >
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertPopup; 