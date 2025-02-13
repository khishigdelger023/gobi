import { SingleArticleProps } from "@/components/article/_types";
import { SingleArticleList } from "@/components/article/list";
import { SingleArticlePhoto } from "@/components/article/photo";
import { SingleArticleCard } from "@/components/article/card";

export function ArticlesSection() {
  return (
    <>
      <ul>
        {listArticles.map((article, idx) => (
          <li key={article.id}>
            <SingleArticleList {...article} reverse={(idx + 1) % 2 === 0} />
          </li>
        ))}
      </ul>
      <h3 className="text-6xl py-12 px-16 max-lg:text-3xl max-lg:py-8 max-lg:px-6">
        Quality you can feel
      </h3>
      <ul className="lg:grid grid-cols-3">
        {cardArticles.map((article, idx) => (
          <li key={article.id}>
            <SingleArticlePhoto {...article} reverse={(idx + 1) % 2 === 0} />
          </li>
        ))}
      </ul>
      <SingleArticleCard
        id={"aaa "}
        image={{
          id: "a",
          attachment:
            "https://media.istockphoto.com/id/1324413691/photo/beautiful-sky-with-white-clouds.jpg?s=2048x2048&w=is&k=20&c=qyCqwwp5JfDp3uoIK5zxly6P8dmu_s2YvhtMK7UONbw=",
        }}
        title="Reborn Cashmere"
        preview="Our CashmeReborn Collection uses cashmere yarn manufactured from recycled yarn spinning waste to cut down on material waste and advance circularity. Compared to cashmere generated from raw fiber, reborn cashmere requires 31% less energy, 13% less water, and 16% less product dye to produce."
      />
    </>
  );
}

const listArticles: SingleArticleProps[] = [
  {
    id: "1",
    title: "Premium Look and Feel",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/9712a572af50db23c486b963755cd12f884011b0-1440x1080.jpg",
    },
    preview:
      "Good design goes with everything. From work to play, these sneakers are designed to seamlessly integrate into your everyday life.",
  },
  {
    id: "2",
    title: "Innovative Natural Materials",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/e7a54e84df8a883eca338285f3c1ea737da126a0-1440x1080.jpg",
    },
    preview: "Uppers made from finely spun and highly durable FELTON cashmere.",
  },
  {
    id: "3",
    title: "Tried-and-Tested Comfort",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/eea8d7a7989b5fef72316b8908178d2618b5cf68-1440x1080.jpg",
    },
    preview:
      "Mongolian cashmere is renowned for being lightweight, comfy and exceptionally soft. The insoles will adapt to your feet over time, making these sneakers so easy to wear.",
  },
  {
    id: "4",
    title: "Breathable, Warm and Moisture-Wicking",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/1970e646497f58388efeb3e6498313adf4283ea3-1440x1080.jpg",
    },
    preview:
      "Designed to take advantage of the natural temperature-regulating properties of its cashmere uppers and wool lining for a first-rate walking experience.",
  },
  {
    id: "5",
    title: "Better for the Environment and You",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/1552a3ae37f5641cb0f3102e09812195282e2fa4-1440x1080.jpg",
    },
    preview:
      "Thick polyurethane insoles and EVA outsoles containing 15% algae and 20% sugarcane to keep sustainability at the forefront of everything we do.",
  },
];

const cardArticles: SingleArticleProps[] = [
  {
    id: "01",
    title: "Premium Look and Feel",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/e947373a43f4fe33763d8bfc1948e91ec40bf478-720x951.jpg?fm=web",
    },
    preview:
      "Good design goes with everything. From work to play, these sneakers are designed to seamlessly integrate into your everyday life.",
  },
  {
    id: "02",
    title: "Innovative Natural Materials",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/14be07a8b815a15a16be7fcf5ad56e9e8e21ea5b-720x951.jpg?fm=webp",
    },
    preview: "Uppers made from finely spun and highly durable FELTON cashmere.",
  },
  {
    id: "03",
    title: "Tried-and-Tested Comfort",
    image: {
      id: "img1",
      attachment:
        "https://cdn.sanity.io/images/gl3cvgef/live/140f58baef5e8bd4e8c168878a79d425fac5d70e-720x951.jpg?fm=webp",
    },
    preview:
      "Mongolian cashmere is renowned for being lightweight, comfy and exceptionally soft. The insoles will adapt to your feet over time, making these sneakers so easy to wear.",
    hasLearnMore: true,
    className: "text-center !text-2xl",
  },
];
