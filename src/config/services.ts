import { Service } from '../types';
import { defaultImages } from './images';

export const services: Service[] = [
  {
    id: 'sticker-printing',
    name: 'Custom Sticker Printing',
    price: 1.0,
    description: 'Upload your digital art and get high-quality stickers delivered to your door. Price per sticker.',
    image: defaultImages.services.stickers,
    emailInstructions: 'After adding to cart, please email your artwork to us.',
  },
]; 