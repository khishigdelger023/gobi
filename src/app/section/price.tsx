import { Badge } from "@/components/badge";

export function PriceSection() {
  return (
    <div className="text-2xl flex gap-2.5">
      $ 173.40
      <p className="text-neutralContent line-through">$289.00</p>
      <Badge text="-40%" />
    </div>
  );
}
