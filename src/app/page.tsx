import { product } from "./_types";
import { ProductPageClient } from "./client";

export default async function ProductPage() {
  return <ProductPageClient product={product} />;
}
