import { SingleProductProps } from "@/components/product/_types";
import { SingleProduct } from "@/components/product";

export function ProductsSection() {
  return (
    <>
      <h3 className="text-6xl py-12 px-16 max-lg:text-3xl max-lg:py-8 max-lg:px-6">
        We recommend
      </h3>
      <ul className="grid grid-cols-products_lg max-lg:grid-cols-products_sm">
        {products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </ul>
    </>
  );
}

export const products: SingleProductProps[] = [
  {
    id: "1",
    title: "Classic Cashmere Sweater",
    image: {
      id: "img1",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 150.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "2",
    title: "V-Neck Cashmere Cardigan",
    image: {
      id: "img2",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 175.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "3",
    title: "Cashmere Scarf",
    image: {
      id: "img3",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 75.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "4",
    title: "Classic Cashmere Sweater",
    image: {
      id: "img1",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 150.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "5",
    title: "V-Neck Cashmere Cardigan",
    image: {
      id: "img2",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 175.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
];
