import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  height: number;
  width: number;
}

const CategoryCard = ({ image, title, height, width }: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-1 bg-white rounded-xl 
                 w-[100px] h-[80px] md:w-[120px] md:h-[100px] lg:w-[140px] lg:h-[120px]
                 hover:shadow-md transition-all"
      tabIndex={0}
      role="button"
      aria-label={`Browse ${title} category`}
    >
      <div className="flex items-center justify-center h-[48px] w-full md:h-[60px] lg:h-[72px]">
        <Image
          src={image}
          alt={`${title} category icon`}
          width={width}
          height={height}
          className="object-contain max-h-full max-w-full"
          sizes="(max-width: 768px) 48px, (max-width: 1024px) 60px, 72px"
        />
      </div>

      <h3
        className="text-[8px] md:text-[10px] lg:text-[12px] font-medium text-center 
                    h-[15px] md:h-[20px] lg:h-[24px] flex items-center px-1"
      >
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
