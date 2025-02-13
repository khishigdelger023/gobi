/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import cn from "classnames";
import { SingleArticleProps } from "./_types";

export function SingleArticleList({
  title,
  image,
  preview,
  reverse,
  hasLearnMore,
  className,
}: SingleArticleProps) {
  return (
    <div className="lg:grid grid-cols-2 h-full items-center">
      <figure
        className={cn(
          "aspect-1 h-full w-full bg-white",
          reverse ? "lg:order-last" : ""
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
          "p-4 max-lg:pb-8 pr-20 lg:gap-8 flex flex-col justify-center h-full",
          reverse ? "lg:order-first" : "",
          className
        )}
      >
        <h3 className="line-clamp-2 truncate text-4xl max-lg:text-2xl text-base-content">
          {title}
        </h3>
        <p className="line-clamp-2 text-base lg:mb-3 lg:line-clamp-3 max-lg:text-sm">
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
