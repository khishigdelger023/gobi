export interface SingleProductProps {
  id: string;
  title?: string;
  image?: {
    id?: string;
    attachment?: string;
  };
  price: number;
  variants: { name: string; color: string }[];
}
