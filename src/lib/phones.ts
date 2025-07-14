import type { Phone } from '@/lib/types';

const phones: Phone[] = [
  {
    id: 1,
    name: 'Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x801.png', 'https://placehold.co/800x802.png'],
    description: 'Le téléphone Pixel le plus avancé à ce jour, avec un système de caméra de niveau professionnel et la puissante puce Google Tensor G3.',
    features: ['IA de premier ordre', 'Appareil photo de niveau professionnel', 'Batterie pour toute la journée'],
    specs: {
      display: '6.7" Super Actua LTPO OLED',
      camera: '50MP Large, 48MP Ultra Large, 48MP Téléobjectif',
      processor: 'Google Tensor G3',
      battery: '5050 mAh',
      storage: '128Go / 256Go / 512Go',
      os: 'Android 14',
    },
    reviews: [
      { author: 'TechGuru', rating: 5, text: 'Système de caméra absolument phénoménal !' },
      { author: 'Utilisateur quotidien', rating: 4, text: 'Excellent téléphone, mais un peu cher.' },
    ],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999,
    originalPrice: 1099,
    images: ['https://placehold.co/800x803.png', 'https://placehold.co/800x804.png', 'https://placehold.co/800x805.png'],
    description: 'Forgé en titane et doté de la puce révolutionnaire A17 Pro, d\'un bouton Action personnalisable et du système de caméra pour iPhone le plus puissant jamais conçu.',
    features: ['Design en titane', 'Puce A17 Pro', 'Système de caméra Pro'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '48MP Principal, 12MP Ultra Large, 12MP Téléobjectif',
      processor: 'Puce A17 Pro',
      battery: 'Jusqu\'à 23 heures de lecture vidéo',
      storage: '128Go / 256Go / 512Go / 1To',
      os: 'iOS 17',
    },
    reviews: [
      { author: 'AppleFan', rating: 5, text: 'La construction en titane est incroyable.' },
    ],
  },
  {
    id: 3,
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    images: ['https://placehold.co/800x806.png', 'https://placehold.co/800x807.png', 'https://placehold.co/800x808.png'],
    description: 'Créez du contenu d\'une clarté cristalline avec l\'appareil photo 200MP et un S Pen intégré pour une édition de précision. Découvrez la nouvelle ère de Galaxy AI.',
    features: ['Galaxy AI', 'Appareil photo 200MP', 'S Pen intégré'],
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      camera: '200MP Large, 12MP Ultra Large, 10MP Téléobjectif (3x), 50MP Téléobjectif (5x)',
      processor: 'Snapdragon 8 Gen 3 pour Galaxy',
      battery: '5000 mAh',
      storage: '256Go / 512Go / 1To',
      os: 'Android 14',
    },
    reviews: [
      { author: 'PowerUser', rating: 5, text: 'Le S Pen et les fonctionnalités IA changent la donne.' },
      { author: 'Photographe', rating: 5, text: 'Les capacités de zoom sont démentielles !' },
    ],
  },
  {
    id: 4,
    name: 'Pixel 7a',
    brand: 'Google',
    price: 499,
    images: ['https://placehold.co/800x809.png', 'https://placehold.co/800x810.png'],
    description: 'Le téléphone Pixel essentiel. Appareil photo incroyable, excellentes performances et toute l\'utilité de Google à moindre coût.',
    features: ['Tensor G2', 'Sécurité de haut niveau', 'Chargement sans fil'],
    specs: {
      display: '6.1" OLED',
      camera: '64MP Large, 13MP Ultra Large',
      processor: 'Google Tensor G2',
      battery: '4385 mAh',
      storage: '128Go',
      os: 'Android 13',
    },
    reviews: [
        { author: 'BudgetShopper', rating: 5, text: 'Le meilleur téléphone que vous pouvez obtenir pour ce prix.' },
    ],
  },
  {
    id: 5,
    name: 'iPhone SE',
    brand: 'Apple',
    price: 429,
    originalPrice: 449,
    images: ['https://placehold.co/800x811.png', 'https://placehold.co/800x812.png'],
    description: 'Une puissance sérieuse dans un design compact. Doté de la puce A15 Bionic pour des performances ultra-rapides.',
    features: ['Puce A15 Bionic', 'Compatible 5G', 'Design durable'],
    specs: {
      display: '4.7" Retina HD',
      camera: '12MP Large',
      processor: 'Puce A15 Bionic',
      battery: 'Jusqu\'à 15 heures de lecture vidéo',
      storage: '64Go / 128Go / 256Go',
      os: 'iOS 17',
    },
    reviews: [
        { author: 'CompactLover', rating: 4, text: 'J\'adore sa petite taille, toujours aussi rapide.' },
    ],
  },
  {
    id: 6,
    name: 'Galaxy A54 5G',
    brand: 'Samsung',
    price: 449,
    images: ['https://placehold.co/800x813.png', 'https://placehold.co/800x814.png'],
    description: 'Un super appareil photo, une batterie longue durée et un design premium, le tout à un prix génial.',
    features: ['Appareil photo principal 50MP', 'Batterie 2 jours', 'Résistant à l\'eau IP67'],
    specs: {
      display: '6.4" Super AMOLED',
      camera: '50MP Principal, 12MP Ultra Large, 5MP Macro',
      processor: 'Exynos 1380',
      battery: '5000 mAh',
      storage: '128Go',
      os: 'Android 13',
    },
    reviews: [
        { author: 'ValueKing', rating: 5, text: 'A toutes les fonctionnalités dont j\'ai besoin et l\'écran est magnifique.' },
    ],
  },
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
