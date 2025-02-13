import { ReactNode } from "react";

export type BreadcrumbItem = {
  title?: ReactNode;
  href?: string;
};
export interface BreadcrumbProps {
  className?: string;
  items: Array<BreadcrumbItem>;
}
