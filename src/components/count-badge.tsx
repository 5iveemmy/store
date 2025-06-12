import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface CountBadgeProps {
  count: number;
  text: string;
  active?: boolean;
  iconSrc?: string;
  onClick?: () => void;
}

const CountBadge: React.FC<CountBadgeProps> = ({
  count,
  text,
  active = false,
  iconSrc = "/hardDrive.png",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex gap-4 p-2.5 rounded-lg w-fit items-center transition-all",
        active ? "bg-[#FF6813] border border-white" : "bg-white"
      )}
    >
      <div>
        <div className="flex relative -space-x-0.5">
          <div className="cursor-pointer bg-white  z-10 flex justify-center items-center w-4 h-fit rounded-[3px] border text-[10px] font-semibold">
            {count}
          </div>
          <Image
            alt="icon"
            src={iconSrc}
            width={16}
            height={16}
            className="rounded-[3px] h-4"
          />
        </div>
      </div>
      <p className={clsx("font-bold text-xs", active && "text-white")}>
        {text}
      </p>
    </button>
  );
};

export default CountBadge;
