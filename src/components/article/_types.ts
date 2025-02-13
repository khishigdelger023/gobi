export interface SingleArticleProps {
  id: string;
  title?: string;
  image?: {
    id?: string;
    attachment?: string;
  };
  preview?: string;
  hasLearnMore?: boolean;
  reverse?: boolean;
  className?: string;
}
