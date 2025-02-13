import React from "react";
import cn from "classnames";
import { BreadcrumbProps } from "./_types";
import Link from "next/link";

export function Breadcrumb(props: BreadcrumbProps) {
  const { items, className } = props;

  return (
    <div
      className={cn("flex text-sm text-base-content max-lg:hidden", className)}
    >
      {items.map((item, idx) => {
        if (!item.title) return null;

        return (
          <Link
            key={idx}
            href={item.href ?? ""}
            className=" text-neutralContent flex"
          >
            {item.title}
            <p className={cn("px-3", { ["hidden"]: idx + 1 === items.length })}>
              /
            </p>
          </Link>
        );
      })}
    </div>
  );
}
