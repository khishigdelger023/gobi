import HeartIcon from "@/assets/icons/heart.svg";

export function WishlistBtn({ className }: { className?: string }) {
  return (
    <button type="button" className={className}>
      <HeartIcon className="size-6" />
    </button>
  );
}
