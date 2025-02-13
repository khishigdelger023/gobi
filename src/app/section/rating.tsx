import StarFilledIcon from "@/assets/icons/star-filled.svg";

export function RatingSection() {
  return (
    <ul className="flex gap-2 items-center text-xs flex-wrap">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <StarFilledIcon className="size-4" />
        </li>
      ))}
      <span>6 reviews</span>
    </ul>
  );
}
