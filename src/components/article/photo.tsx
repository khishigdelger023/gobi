/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import cn from "classnames";
import { SingleArticleProps } from "./_types";

export function SingleArticlePhoto({
  title,
  image,
  preview,
  reverse,
  hasLearnMore,
  className,
}: SingleArticleProps) {
  return (
    <div className="grid grid-cols-2 h-full items-center bg-[#CBC9BC]">
      <figure
        className={cn(
          "aspect-1 h-full w-full bg-white",
          reverse ? "max-lg:order-last" : ""
        )}
      >
        <img
          className="h-full w-full object-cover"
          src={image?.attachment}
          alt={title}
        />
      </figure>
      <div
        className={cn(
          "p-4 pr-20 gap-8 flex flex-col justify-center h-full text-center",
          reverse ? "max-lg:order-first" : "",
          className
        )}
      >
        <h3 className="line-clamp-2 truncate text-sm text-base-content">
          {title}
        </h3>
        <p className="line-clamp-2 text-2xl lg:mb-3 lg:line-clamp-3">
          {preview}
        </p>
        {hasLearnMore && (
          <Link href={`/articles`} className="underline text-sm">
            Learn more
          </Link>
        )}
      </div>
    </div>
  );
}
