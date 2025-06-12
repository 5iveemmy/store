import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  name: string;
  price: string;
}

const BestSellingCard = ({ image, name, price }: Props) => {
  return (
    <article
      className="sm:w-[160px] w-[calc(50%-4px)] md:w-[160px] lg:w-[180px] xl:w-[200px]
             bg-white rounded-xl p-2 "
      tabIndex={0}
      aria-label={`${name}, price ${price}`}
    >
      <div className="relative aspect-square mb-2">
        <Image
          src={image}
          fill
          alt={`${name} product image`}
          className="object-cover rounded-lg"
          sizes="(max-width: 639px) calc(50vw - 20px), 
          (max-width: 767px) 160px,
          (max-width: 1023px) 160px,
          (max-width: 1279px) 180px,
          200px"
          loading="lazy"
          quality={80}
        />
      </div>
      <h3 className="text-xs md:text-sm line-clamp-2 min-h-[2.5em]">{name}</h3>
      <p className="font-bold text-sm md:text-base text-brand mt-1">{price}</p>
    </article>
  );
};

export default BestSellingCard;
