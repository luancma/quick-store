export interface ProductProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  sku: string;
  brand: string;
  availabilityStatus: string;
  discountPercentage: number;
  stock: number;
  rating: number;
  images: string[];
}