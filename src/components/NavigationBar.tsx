import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { defaultImages } from '../config/images';

const NavigationBar: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <nav className="text-white shadow-lg" style={{ 
      background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-lg font-comic">Untitled Brush Studio</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-comic hover:text-candy-yellow transition-colors hover:animate-bounce"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-sm font-comic hover:text-candy-yellow transition-colors hover:animate-bounce"
            >
              My Services
            </Link>
            <Link
              to="/arts"
              className="text-sm font-comic hover:text-candy-yellow transition-colors hover:animate-bounce"
            >
              My Arts
            </Link>
            <Link
              to="/about"
              className="text-sm font-comic hover:text-candy-yellow transition-colors hover:animate-bounce"
            >
              About Me
            </Link>
            <Link to="/cart" className="relative group">
              <ShoppingCartIcon className="h-6 w-6 hover:text-candy-yellow transition-colors group-hover:animate-wiggle" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-candy-rose text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-comic animate-bounce">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar; 