export interface Phone {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  features: string[];
  specs: {
    display: string;
    camera: string;
    processor: string;
    battery: string;
    storage: string;
    os: string;
  };
  reviews: {
    author: string;
    rating: number;
    text: string;
  }[];
}

export interface CartItem extends Phone {
  quantity: number;
}
