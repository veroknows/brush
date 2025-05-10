import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import AlertPopup from '../components/AlertPopup';
import ConfirmDialog from '../components/ConfirmDialog';

const CartPage: React.FC = () => {
  const { items, totalPrice, updateQuantity, removeItem } = useCart();
  const [alert, setAlert] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'info'
  });
  
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    itemId: string | null;
    itemName: string;
  }>({
    isOpen: false,
    itemId: null,
    itemName: ''
  });

  const handleCopyOrder = () => {
    const orderText = `Order Details:
${items.map(item => `- ${item.name} x${item.quantity} @ $${item.unitPrice.toFixed(2)} each = $${item.totalPrice.toFixed(2)}`).join('\n')}
Total: $${totalPrice.toFixed(2)}

Please send this order to orders@artstudio.com
Don't forget to attach your photo(s) if you're ordering sticker printing!`;

    navigator.clipboard.writeText(orderText)
      .then(() => {
        setAlert({
          isOpen: true,
          title: 'Success!',
          message: 'Order details copied to clipboard!',
          type: 'success'
        });
      })
      .catch(() => {
        setAlert({
          isOpen: true,
          title: 'Error',
          message: 'Failed to copy order details. Please try again.',
          type: 'error'
        });
      });
  };
  
  const handleRemoveItem = (id: string, name: string) => {
    setConfirmDialog({
      isOpen: true,
      itemId: id,
      itemName: name
    });
  };
  
  const confirmRemoveItem = () => {
    if (confirmDialog.itemId) {
      removeItem(confirmDialog.itemId);
      setConfirmDialog({
        isOpen: false,
        itemId: null,
        itemName: ''
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-comic text-candy-purple mb-8">
          Shopping Cart
          <span className="inline-block ml-2">🛒</span>
        </h1>
        <p className="text-gray-500 font-comic">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-comic text-candy-purple mb-8">
        Shopping Cart
        <span className="inline-block ml-2">🛒</span>
      </h1>
      
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border-2 border-candy-purple/10">
        <ul className="divide-y divide-candy-purple/10">
          {items.map((item) => (
            <li key={item.id} className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-comic text-candy-purple">{item.name}</h3>
                  <p className="mt-1 text-sm font-comic text-gray-500">
                    ${item.unitPrice.toFixed(2)} each
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-candy-purple hover:text-candy-pink font-comic text-xl"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="w-16 text-center border-2 border-candy-purple/20 rounded-lg mx-2 font-comic"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-candy-purple hover:text-candy-pink font-comic text-xl"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-comic text-candy-pink">
                      ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="text-candy-pink hover:text-red-500 font-comic transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center border-t-2 border-candy-purple/10 pt-4">
          <span className="text-lg font-comic text-candy-purple">Total</span>
          <span className="text-2xl font-comic text-candy-pink">${totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="mt-8">
          <button
            onClick={handleCopyOrder}
            className="w-full bg-candy-purple text-white px-6 py-3 rounded-full font-comic hover:bg-candy-pink transition-colors"
          >
            Copy Order Details
          </button>
          
          <p className="mt-4 text-sm font-comic text-gray-500">
            Please copy the order details and send them to{' '}
            <a
              href="mailto:orders@artstudio.com"
              className="text-candy-purple hover:text-candy-pink"
            >
              orders@artstudio.com
            </a>
            {' '}along with any photos for sticker printing.
          </p>
        </div>
      </div>

      <AlertPopup
        isOpen={alert.isOpen}
        onClose={() => setAlert({ ...alert, isOpen: false })}
        title={alert.title}
        message={alert.message}
        type={alert.type}
      />
      
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        onConfirm={confirmRemoveItem}
        title="Remove Item"
        message={`Are you sure you want to remove "${confirmDialog.itemName}" from your cart?`}
        confirmText="Remove"
        cancelText="Cancel"
        confirmButtonClass="bg-candy-pink hover:bg-red-500"
      />
    </div>
  );
};

export default CartPage; 