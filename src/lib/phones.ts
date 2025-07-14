import type { Phone } from '@/lib/types';

const phones: Phone[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro 128Go',
    brand: 'Apple',
    price: 999,
    images: ['https://placehold.co/800x805.png', 'https://placehold.co/800x803.png', 'https://placehold.co/800x804.png'],
    description: 'Forgé en titane et doté de la puce révolutionnaire A17 Pro, d\'un bouton Action personnalisable et du système de caméra pour iPhone le plus puissant jamais conçu.',
    features: ['Design en titane', 'Puce A17 Pro', 'Système de caméra Pro'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '48MP Principal, 12MP Ultra Large, 12MP Téléobjectif',
      processor: 'Puce A17 Pro',
      battery: 'Jusqu\'à 23 heures de lecture vidéo',
      storage: '128Go',
      os: 'iOS 17',
    },
    reviews: [
      { author: 'AppleFan', rating: 5, text: 'La construction en titane est incroyable.' },
    ],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro 256Go',
    brand: 'Apple',
    price: 1099,
    images: ['https://placehold.co/800x805.png', 'https://placehold.co/800x803.png', 'https://placehold.co/800x804.png'],
    description: 'Forgé en titane et doté de la puce révolutionnaire A17 Pro, d\'un bouton Action personnalisable et du système de caméra pour iPhone le plus puissant jamais conçu.',
    features: ['Design en titane', 'Puce A17 Pro', 'Système de caméra Pro'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '48MP Principal, 12MP Ultra Large, 12MP Téléobjectif',
      processor: 'Puce A17 Pro',
      battery: 'Jusqu\'à 23 heures de lecture vidéo',
      storage: '256Go',
      os: 'iOS 17',
    },
    reviews: [
      { author: 'AppleFan', rating: 5, text: 'La construction en titane est incroyable.' },
    ],
  },
  {
    id: 3,
    name: 'iPhone 14 128Go',
    brand: 'Apple',
    price: 699,
    images: ['https://placehold.co/800x815.png', 'https://placehold.co/800x816.png'],
    description: 'Un système à double caméra amélioré, la détection des accidents, et une autonomie d\'une journée.',
    features: ['Puce A15 Bionic', 'Détection des accidents', 'Mode Cinématique'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '12MP Principal, 12MP Ultra Large',
      processor: 'Puce A15 Bionic',
      battery: 'Jusqu\'à 20 heures de lecture vidéo',
      storage: '128Go',
      os: 'iOS 17 compatible',
    },
    reviews: [
      { author: 'Utilisateur Heureux', rating: 5, text: 'Super appareil photo et autonomie !' },
    ],
  },
  {
    id: 4,
    name: 'iPhone 13 128Go',
    brand: 'Apple',
    price: 599,
    images: ['https://placehold.co/800x817.png', 'https://placehold.co/800x818.png'],
    description: 'La puce A15 Bionic ultra-rapide et un grand bond en avant dans l\'autonomie de la batterie.',
    features: ['Puce A15 Bionic', 'Écran Super Retina XDR', 'Bouclier en céramique'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '12MP Principal, 12MP Ultra Large',
      processor: 'Puce A15 Bionic',
      battery: 'Jusqu\'à 19 heures de lecture vidéo',
      storage: '128Go',
      os: 'iOS 17 compatible',
    },
    reviews: [
      { author: 'BonAchat', rating: 5, text: 'Une valeur sûre pour le prix.' },
    ],
  },
  {
    id: 5,
    name: 'iPhone 12 64Go',
    brand: 'Apple',
    price: 499,
    originalPrice: 599,
    images: ['https://placehold.co/800x819.png', 'https://placehold.co/800x820.png'],
    description: 'Passez à la 5G avec l\'iPhone 12. Puce A14 Bionic, la puce la plus rapide dans un smartphone.',
    features: ['5G', 'Puce A14 Bionic', 'Écran OLED bord à bord'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '12MP Principal, 12MP Ultra Large',
      processor: 'Puce A14 Bionic',
      battery: 'Jusqu\'à 17 heures de lecture vidéo',
      storage: '64Go',
      os: 'iOS 17 compatible',
    },
    reviews: [
      { author: 'Techie', rating: 4, text: 'La 5G est un plus appréciable.' },
    ],
  },
   {
    id: 6,
    name: 'iPhone 11 64Go',
    brand: 'Apple',
    price: 399,
    images: ['https://placehold.co/800x821.png', 'https://placehold.co/800x822.png'],
    description: 'Juste la bonne quantité de tout. Un nouveau système à double caméra qui capture plus de ce que vous voyez et aimez.',
    features: ['Puce A13 Bionic', 'Système à double caméra', 'Mode Nuit'],
    specs: {
      display: '6.1" Liquid Retina HD',
      camera: '12MP Principal, 12MP Ultra Large',
      processor: 'Puce A13 Bionic',
      battery: 'Jusqu\'à 17 heures de lecture vidéo',
      storage: '64Go',
      os: 'iOS 17 compatible',
    },
    reviews: [
      { author: 'PhotographeAmateur', rating: 5, text: 'Le mode Nuit est fantastique.' },
    ],
  },
  {
    id: 7,
    name: 'iPhone XR 64Go',
    brand: 'Apple',
    price: 299,
    originalPrice: 349,
    images: ['https://placehold.co/800x823.png', 'https://placehold.co/800x824.png'],
    description: 'Un écran Liquid Retina brillant. Face ID encore plus rapide. La puce la plus intelligente et la plus puissante dans un smartphone.',
    features: ['Face ID', 'Puce A12 Bionic', 'Design tout écran'],
    specs: {
      display: '6.1" Liquid Retina HD',
      camera: '12MP Large',
      processor: 'Puce A12 Bionic',
      battery: 'Jusqu\'à 16 heures de lecture vidéo',
      storage: '64Go',
      os: 'iOS 17 compatible',
    },
    reviews: [
      { author: 'Classique', rating: 4, text: 'Toujours un excellent téléphone pour les tâches quotidiennes.' },
    ],
  }
];

export function getPhones() {
  return phones;
}

export function getPhoneById(id: number) {
  return phones.find((phone) => phone.id === id);
}

export function getPhoneBrands() {
    const brands = phones.map(phone => phone.brand);
    return [...new Set(brands)];
}
