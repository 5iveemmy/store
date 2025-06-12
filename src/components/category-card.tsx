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
      className="flex flex-col justify-center items-center gap-1 bg-white rounded-xl w-[100px] h-[80px]"
      tabIndex={0}
      aria-label={`Browse ${title} category`}
    >
      <div className="flex items-center justify-center h-[48px] w-full">
        <Image
          src={image}
          alt="Category Icon"
          width={width}
          height={height}
          className="object-contain max-h-full max-w-full"
        />
      </div>
      <h3 className="text-[8px] font-medium text-center h-[15px] flex items-center">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
