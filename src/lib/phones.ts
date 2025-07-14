import type { Phone } from '@/lib/types';

const phones: Phone[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro 128Go',
    brand: 'Apple',
    price: 1150,
    originalPrice: 1250,
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
      { author: 'Client de Bukavu', rating: 5, text: 'La construction en titane est incroyable et le prix est correct.' },
    ],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro 256Go',
    brand: 'Apple',
    price: 1280,
    originalPrice: 1400,
    images: ['https://placehold.co/800x805.png', 'https://placehold.co/800x803.png', 'https://placehold.co/800x804.png'],
    description: 'Plus d\'espace pour vos photos et vidéos. Forgé en titane et doté de la puce révolutionnaire A17 Pro.',
    features: ['Design en titane', 'Puce A17 Pro', '256Go de stockage'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '48MP Principal, 12MP Ultra Large, 12MP Téléobjectif',
      processor: 'Puce A17 Pro',
      battery: 'Jusqu\'à 23 heures de lecture vidéo',
      storage: '256Go',
      os: 'iOS 17',
    },
    reviews: [
      { author: 'AppleFan RDC', rating: 5, text: 'Enfin assez d\'espace ! Super téléphone.' },
    ],
  },
  {
    id: 3,
    name: 'iPhone 14 128Go',
    brand: 'Apple',
    price: 800,
    originalPrice: 850,
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
    price: 650,
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
    price: 480,
    originalPrice: 550,
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
    price: 350,
    originalPrice: 400,
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
    price: 250,
    originalPrice: 300,
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
  },
  {
    id: 8,
    name: 'iPad Pro 11-inch 128Go',
    brand: 'Apple',
    price: 850,
    originalPrice: 900,
    images: ['https://placehold.co/800x830.png', 'https://placehold.co/800x831.png'],
    description: 'L\'expérience iPad ultime. Avec les performances époustouflantes de la puce Apple M2.',
    features: ['Puce Apple M2', 'Écran Liquid Retina', 'Compatible avec Apple Pencil (2e gén)'],
    specs: {
      display: '11" Liquid Retina',
      camera: '12MP Large, 10MP Ultra Large',
      processor: 'Puce Apple M2',
      battery: 'Jusqu\'à 10 heures d\'autonomie',
      storage: '128Go',
      os: 'iPadOS',
    },
    reviews: [
      { author: 'Artiste Numérique', rating: 5, text: 'Parfait pour le dessin et la productivité.' },
    ],
  },
  {
    id: 9,
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    price: 420,
    images: ['https://placehold.co/800x832.png', 'https://placehold.co/800x833.png'],
    description: 'Plus intelligente, plus brillante, plus puissante. Un nouveau geste magique pour interagir avec votre Apple Watch.',
    features: ['Geste toucher deux fois', 'App Oxygène sanguin', 'App ECG'],
    specs: {
      display: 'Écran Retina toujours activé',
      camera: 'N/A',
      processor: 'SiP S9',
      battery: 'Jusqu\'à 18 heures',
      storage: '64Go',
      os: 'watchOS',
    },
    reviews: [
      { author: 'Sportif', rating: 5, text: 'Le suivi de la santé est de premier ordre.' },
    ],
  },
  {
    id: 10,
    name: 'MacBook Air 13-inch M2',
    brand: 'Apple',
    price: 1050,
    originalPrice: 1150,
    images: ['https://placehold.co/800x834.png', 'https://placehold.co/800x835.png'],
    description: 'Repensé autour de la puce M2 de nouvelle génération, le MacBook Air est d\'une finesse déconcertante et offre une vitesse et une efficacité énergétique exceptionnelles.',
    features: ['Puce Apple M2', 'Écran Liquid Retina de 13.6 pouces', 'Jusqu\'à 18 heures d\'autonomie'],
    specs: {
      display: '13.6" Liquid Retina',
      camera: 'Caméra FaceTime HD 1080p',
      processor: 'Puce Apple M2',
      battery: 'Jusqu\'à 18 heures',
      storage: '256Go SSD',
      os: 'macOS',
    },
    reviews: [
      { author: 'Étudiant', rating: 5, text: 'Incroyablement léger et puissant pour les cours.' },
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
