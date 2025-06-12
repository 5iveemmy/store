import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface Props {
  image: string;
  name: string;
  price: string;
  nameFontClass?: string;
  priceFontClass?: string;
  imageWrapperClass?: string;
  imageSizes?: string;
  rating?: number;
  ratingCount?: number;
}

const ItemCard = ({
  image,
  name,
  price,
  nameFontClass = "text-xs md:text-sm",
  priceFontClass = "text-sm md:text-base font-bold text-brand",
  imageWrapperClass = "relative aspect-square mb-2",
  imageSizes = `
    (max-width: 639px) calc(50vw - 20px), 
    (max-width: 767px) 160px,
    (max-width: 1023px) 160px,
    (max-width: 1279px) 180px,
    200px`,
  rating,
  ratingCount,
}: Props) => {
  return (
    <article
      className="sm:w-[160px] w-[calc(50%-4px)] md:w-[160px] lg:w-[180px] xl:w-[200px]
             bg-white rounded-xl p-2"
      tabIndex={0}
      aria-label={`${name}, price ${price}`}
    >
      <div className={imageWrapperClass}>
        <Image
          src={image}
          fill
          alt={`${name} product image`}
          className="object-cover rounded-lg"
          sizes={imageSizes}
          loading="lazy"
          quality={80}
        />
      </div>

      <h3 className={clsx(nameFontClass, "line-clamp-2 min-h-[2.5em]")}>
        {name}
      </h3>
      <p className={priceFontClass}>{price}</p>
      {rating && ratingCount && (
        <div className="flex items-center gap-1 mt-0.5">
          <Image src="/star.svg" alt="star" width={10} height={10} />
          <span className="text-[10px] text-[#6A7383] font-semibold">
            {rating}
          </span>
          <span className="text-[10px] text-[#6A7383] font-semibold opacity-55">
            ({ratingCount})
          </span>
        </div>
      )}
    </article>
  );
};

export default ItemCard;
