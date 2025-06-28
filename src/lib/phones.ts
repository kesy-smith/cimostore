import type { Phone } from '@/lib/types';

const phones: Phone[] = [
  {
    id: 1,
    name: 'Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'The most advanced Pixel phone yet, with a pro-level camera system and the powerful Google Tensor G3 chip.',
    features: ['Best-in-class AI', 'Pro-level camera', 'All-day battery'],
    specs: {
      display: '6.7" Super Actua LTPO OLED',
      camera: '50MP Wide, 48MP Ultrawide, 48MP Telephoto',
      processor: 'Google Tensor G3',
      battery: '5050 mAh',
      storage: '128GB / 256GB / 512GB',
      os: 'Android 14',
    },
    reviews: [
      { author: 'TechGuru', rating: 5, text: 'Absolutely phenomenal camera system!' },
      { author: 'Everyday User', rating: 4, text: 'Great phone, but a bit pricey.' },
    ],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999,
    originalPrice: 1099,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    features: ['Titanium design', 'A17 Pro chip', 'Pro camera system'],
    specs: {
      display: '6.1" Super Retina XDR',
      camera: '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      processor: 'A17 Pro Chip',
      battery: 'Up to 23 hours video playback',
      storage: '128GB / 256GB / 512GB / 1TB',
      os: 'iOS 17',
    },
    reviews: [
      { author: 'AppleFan', rating: 5, text: 'The titanium build feels amazing.' },
    ],
  },
  {
    id: 3,
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Create crystal-clear content with the 200MP camera and a built-in S Pen for precision editing. Experience the new era of Galaxy AI.',
    features: ['Galaxy AI', '200MP Camera', 'Built-in S Pen'],
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      camera: '200MP Wide, 12MP Ultrawide, 10MP Telephoto (3x), 50MP Telephoto (5x)',
      processor: 'Snapdragon 8 Gen 3 for Galaxy',
      battery: '5000 mAh',
      storage: '256GB / 512GB / 1TB',
      os: 'Android 14',
    },
    reviews: [
      { author: 'PowerUser', rating: 5, text: 'The S Pen and AI features are a game changer.' },
      { author: 'Photographer', rating: 5, text: 'Zoom capabilities are insane!' },
    ],
  },
  {
    id: 4,
    name: 'Pixel 7a',
    brand: 'Google',
    price: 499,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'The essential Pixel phone. Incredible camera, great performance, and all the helpfulness of Google for less.',
    features: ['Tensor G2', 'High-rated security', 'Wireless charging'],
    specs: {
      display: '6.1" OLED',
      camera: '64MP Wide, 13MP Ultrawide',
      processor: 'Google Tensor G2',
      battery: '4385 mAh',
      storage: '128GB',
      os: 'Android 13',
    },
    reviews: [
        { author: 'BudgetShopper', rating: 5, text: 'Best phone you can get for this price.' },
    ],
  },
  {
    id: 5,
    name: 'iPhone SE',
    brand: 'Apple',
    price: 429,
    originalPrice: 449,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Serious power in a compact design. Features the A15 Bionic chip for lightning-fast performance.',
    features: ['A15 Bionic chip', '5G capable', 'Durable design'],
    specs: {
      display: '4.7" Retina HD',
      camera: '12MP Wide',
      processor: 'A15 Bionic Chip',
      battery: 'Up to 15 hours video playback',
      storage: '64GB / 128GB / 256GB',
      os: 'iOS 17',
    },
    reviews: [
        { author: 'CompactLover', rating: 4, text: 'Love the small size, still very fast.' },
    ],
  },
  {
    id: 6,
    name: 'Galaxy A54 5G',
    brand: 'Samsung',
    price: 449,
    images: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'An awesome camera, a long-lasting battery and a premium design, all at an awesome price.',
    features: ['50MP main camera', '2-day battery', 'IP67 water resistant'],
    specs: {
      display: '6.4" Super AMOLED',
      camera: '50MP Main, 12MP Ultrawide, 5MP Macro',
      processor: 'Exynos 1380',
      battery: '5000 mAh',
      storage: '128GB',
      os: 'Android 13',
    },
    reviews: [
        { author: 'ValueKing', rating: 5, text: 'Has all the features I need and the screen is beautiful.' },
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
