import { ReviewProps } from "./_types";
import StarFilledIcon from "@/assets/icons/star-filled.svg";

export function SingleReview(props: ReviewProps) {
  const { title, author, createdAt, rating, description } = props;
  return (
    <div className="flex flex-col items-start lg:max-w-[30svw] w-full text-sm space-y-4 border-b border-neutralContent pb-8">
      <div className="flex justify-between items-center w-full">
        <p>{author}</p>
        <p>{createdAt}</p>
      </div>
      <ul className="flex gap-2">
        {Array.from({ length: rating }).map((_, i) => (
          <li key={i}>
            <StarFilledIcon className="size-4" />
          </li>
        ))}
      </ul>
      <h4 className="text-center lg:text-3xl">{title}</h4>
      <p className="text-sm w-full">{description}</p>
    </div>
  );
}
