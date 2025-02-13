export type VariantType = {
  name: string;
  color: string;
};

export type ProductType = {
  id: string;
  name: string;
  brand: {
    id: string;
    name: string;
  };
  images: string[];
  variants: VariantType[];
  sizes: { size: string; stock: number }[];
  description: string;
  productDetails: { name: string; description: string }[];
};
