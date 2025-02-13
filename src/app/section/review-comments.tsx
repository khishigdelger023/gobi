import { SingleReview } from "@/components/review";
import StarFilledIcon from "@/assets/icons/star-filled.svg";

export function ReviewAndCommentsSection() {
  return (
    <ul className="flex flex-col mt-8 items-center col-span-3 max-lg:p-6 space-y-4 lg:space-y-8">
      <div className="flex flex-col items-start lg:max-w-[30svw] w-full text-sm space-y-4 border-b border-neutralContent pb-8">
        <div className="flex justify-between items-center w-full text-3xl max-lg:text-2xl flex-wrap">
          Customer Reviews
          <button className="underline lg:hidden text-sm">
            Write a Review
          </button>
        </div>
        <div className="lg:flex w-full justify-between">
          <div className="flex gap-4">
            <ul className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>
                  <StarFilledIcon className="size-4" />
                </li>
              ))}
            </ul>
            Based on 6 reviews
          </div>

          <button className="underline max-lg:hidden">Write a Review</button>
        </div>
      </div>
      {reviews.map((review) => (
        <SingleReview key={review.title} {...review} />
      ))}
      <button className="bg-secondary p-4 rounded text-white mt-4">
        Load More
      </button>
    </ul>
  );
}

const reviews = [
  {
    author: "John Doe",
    createdAt: "14/02/25",
    rating: 5,
    title: "Great Product!",
    description:
      "I've been using this product for a week now, and it works perfectly. Highly recommend it to others.",
  },
  {
    author: "Jane Smith",
    createdAt: "14/02/25",
    rating: 4,
    title: "Decent, but has flaws",
    description:
      "The product is okay overall, but there are some issues with durability that I hope the manufacturer addresses.",
  },
  {
    author: "Alice Johnson",
    createdAt: "14/02/25",
    rating: 3,
    title: "Exceeded Expectations",
    description:
      "This is one of the best purchases I've ever made. The quality is fantastic, and it performs beyond what I expected.",
  },
  {
    author: "Bob Williams",
    createdAt: "14/02/25",
    rating: 5,
    title: "Not worth the price",
    description:
      "The product did not meet my expectations given its cost. It's functional but doesn't feel premium.",
  },
  {
    author: "Chris Evans",
    createdAt: "14/02/25",
    rating: 1,
    title: "Good value for money",
    description:
      "For the price, this product is a great deal. It has minor flaws, but nothing that affects overall usability.",
  },
];

console.log(reviews);
