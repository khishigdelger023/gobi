import { product } from "@/components/_types";

export function ProductDetailSection() {
  return (
    <>
      <section className="col-span-2 space-y-4 lg:p-20 max-lg:p-6">
        <h6 className="uppercase text-xs">Description</h6>
        <p className="text-3xl max-lg:text-2xl">{product.description}</p>
      </section>
      <section className="space-y-4 lg:py-20 max-lg:p-6">
        <h6 className="uppercase text-xs">Details</h6>
        <ul>
          {product.productDetails.map((detail, idx) => (
            <li key={idx}>- {detail.description}</li>
          ))}
        </ul>

        <h6 className="uppercase text-xs">Organic cashmere</h6>
        <ul>
          <li className="flex gap-1">- Made with 100% organic cashmere</li>
          <li className="flex gap-1">- Certified by SFA GOBI</li>
          <li className="flex gap-1">
            <p>-</p> Organic collection uses 100% organic cashmere with no dyes
            and bleaches, keeping the 4 natural colors of cashmere fiber
          </li>
        </ul>

        <h6 className="uppercase text-xs">Shipping information</h6>
        <ul>
          <li className="flex gap-1">
            - Standard shipping rate: Starting from $7.90
          </li>
          <li className="flex gap-1">- Delivery time: 1 - 3 business days.</li>
          <li className="flex gap-1">
            <p>-</p> The shipping rate and delivery time apply for US only. For
            other information please see Shipping Policy
          </li>
        </ul>
      </section>
    </>
  );
}
