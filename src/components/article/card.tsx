/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SingleArticleProps } from "./_types";

export function SingleArticleCard({
  title,
  image,
  preview,
}: SingleArticleProps) {
  return (
    <article className="group/article relative aspect-[3/2] w-full overflow-hidden">
      <figure className="size-full object-contain">
        <img
          alt={title}
          className="size-full object-cover"
          src={image.attachment}
        />
      </figure>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-baseContent/40 opacity-100 transition-opacity duration-500 ease-in-out lg:opacity-70"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 max-lg:p-2 max-w-[40svw] text-white">
        <h2 className="line-clamp-4 text-6xl">{title}</h2>
        <div className="space-y-4 max-lg:space-y-2 md:block">
          {preview && (
            <p className="line-clamp-2 text-lg font-light mt-4 mb-6 opacity-90 lg:line-clamp-3 lg:text-base">
              {preview}
            </p>
          )}
          <Link href={`/articles`} className="underline text-white">
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}
