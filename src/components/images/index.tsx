"use client";

import { useEffect, useState } from "react";
import Image from "rc-image";

export function Images({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (index > 0 && !images.at(index)) setIndex(0);
  }, [images, index]);

  return (
    <section aria-label="images">
      <div className="lg:grid grid-cols-2 lg:overflow-visible max-lg:hidden">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className="group w-full overflow-hidden object-contain object-center md:aspect-1"
          >
            <Image
              preview={{
                visible: open,
                onVisibleChange: (visible) => setOpen(visible),
              }}
              itemProp="image"
              className="w-full bg-white object-contain object-center sm:rounded-lg md:h-full"
              src={img}
              alt={alt}
            />
          </button>
        ))}
      </div>
      <Image
        preview={{
          visible: open,
          onVisibleChange: (visible) => setOpen(visible),
        }}
        itemProp="image"
        className="w-full bg-white object-contain object-center sm:rounded-lg lg:hidden"
        src={images[0]}
        alt={alt}
      />
    </section>
  );
}
