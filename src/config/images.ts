import moonCatPng from '../assets/images/moon-cat.png';
import patternSvg from '../assets/images/pattern.svg';
import artwork1 from '../assets/images/artwork1.png';
import artwork2 from '../assets/images/artwork2.png';
import artwork3 from '../assets/images/artwork3.png';
import artwork4 from '../assets/images/artwork4.png';
import artwork5 from '../assets/images/artwork5.png';
import stickers from '../assets/images/stickers.jpeg';

export interface ImageConfig {
  hero: {
    background: string;
    moonCat: string;
    emoji: {
      title: string;
      sparkle: string;
      wave: string;
      art: string;
      gallery: string;
      about: string;
      printing: string;
      service: string;
    };
  };
  services: {
    stickers: string;
  };
  artworks: {
    items: Array<{
      id: string;
      imageUrl: string;
      title: string;
      description: string;
      price: number;
    }>;
  };
}

export const defaultImages: ImageConfig = {
  hero: {
    background: patternSvg,
    moonCat: moonCatPng,
    emoji: {
      title: '🎨',
      sparkle: '✨',
      wave: '👋',
      art: '🖌️',
      gallery: '🖼️',
      about: '👩‍🎨',
      printing: '🖨️',
      service: '💡',
    },
  },
  services: {
    stickers: stickers,
  },
  artworks: {
    items: [
      {
        id: '1',
        imageUrl: artwork1,
        title: 'Abstract Dreams',
        description: 'A vibrant digital painting exploring the intersection of imagination and reality through bold colors and fluid shapes.',
        price: 25.00,
      },
      {
        id: '2',
        imageUrl: artwork2,
        title: 'Digital Landscape',
        description: 'An ethereal landscape created with digital brushstrokes, capturing the essence of a dreamy sunset.',
        price: 30.00,
      },
      {
        id: '3',
        imageUrl: artwork3,
        title: 'Cyber Portrait',
        description: 'A modern take on portraiture with a cyberpunk twist, featuring neon accents and geometric patterns.',
        price: 35.00,
      },
      {
        id: '4',
        imageUrl: artwork4,
        title: 'Candy Panda',
        description: 'A cute and playful panda character wearing a pink dress with a bow, perfect for kids room decor.',
        price: 20.00,
      },
      {
        id: '5',
        imageUrl: artwork5,
        title: 'Cookie Artist',
        description: 'An adorable cookie character in an artist apron, bringing sweetness and creativity together.',
        price: 20.00,
      },
    ],
  },
}; 