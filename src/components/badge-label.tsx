import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface BadgeLabelProps {
  bgColor: string;
  textColor: string;
  iconSrc: string;
  text: string;
  className?: string;
}

const BadgeLabel: React.FC<BadgeLabelProps> = ({
  bgColor,
  textColor,
  iconSrc,
  text,
  className,
}) => {
  return (
    <div
      className={clsx(
        "py-1.5 px-2 rounded-4xl flex gap-2 items-center w-fit",
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <Image src={iconSrc} alt="icon" width={12} height={12} priority />
      <h2 className="text-[10px] font-bold" style={{ color: textColor }}>
        {text}
      </h2>
    </div>
  );
};

export default BadgeLabel;
