import React from 'react';
import { useCart } from '../context/CartContext';
import { defaultImages } from '../config/images';

interface ServicesSectionProps {
  stickerImage: string;
}

const STICKER_SERVICE_ID = 'sticker-printing-service';

const ServicesSection: React.FC<ServicesSectionProps> = ({ stickerImage }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: STICKER_SERVICE_ID,
      type: 'sticker',
      name: 'Custom Sticker Printing',
      quantity: 1,
      unitPrice: 1.00,
      totalPrice: 1.00,
    });
  };

  return (
    <section className="bg-gradient-to-b from-candy-purple/5 to-transparent rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-comic text-candy-purple">
          My Services
          <span className="inline-block ml-2">{defaultImages.hero.emoji.service}</span>
        </h2>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:w-1/3">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img
                  src={stickerImage}
                  alt="Sticker Printing Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-comic text-candy-purple mb-2">Custom Sticker Printing</h3>
                  <p className="text-sm font-comic text-gray-600">
                    Upload your digital art and get high-quality stickers delivered to your door.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-comic text-gray-600">Price per sticker</p>
                    <p className="text-lg font-comic text-candy-pink">$1.00</p>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-candy-purple text-white text-sm font-comic py-2 px-6 rounded-full hover:bg-candy-pink transition-colors whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="text-sm font-comic text-gray-600">
                <p className="mb-2">✨ Shipping fee: $10 for delivery to your place</p>
                <p>📧 After adding to cart, please email your artwork to us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 