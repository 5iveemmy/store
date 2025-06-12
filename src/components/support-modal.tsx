"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@st/components/ui/dialog";
import { Button } from "@st/components/ui/button";
import Image from "next/image";
import { XIcon } from "lucide-react";
import ItemCard from "./item-card";
import { christmasItems, newProducts } from "@st/data";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import BadgeLabel from "./badge-label";
import CountBadge from "./count-badge";

const SupportModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeBadge, setActiveBadge] = useState<string>("");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="
          cursor-pointer
            fixed bottom-6 right-6 z-50 
            h-14 w-14 rounded-full shadow-lg 
            p-0 flex items-center justify-center
            bg-white hover:bg-white/90 
            transition-all duration-200 ease-in-out
            hover:scale-110 active:scale-95
          "
          aria-label="Open menu"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={28}
            height={28}
            priority
            className="object-contain"
          />
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="gap-0 bg-[#f2eeec] border-8 border-[#e0d6d0] max-w-[354px] sm:max-w-[425px]"
      >
        <div className="max-h-[542px] overflow-scroll scrollbar-hide">
          <DialogTitle asChild>
            <VisuallyHidden>Bing Chat Support</VisuallyHidden>
          </DialogTitle>

          <div className="flex items-center justify-between absolute  -top-13 w-full">
            <div className="flex gap-2.5 items-center">
              <Button
                style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
                size="lg"
                className="
            h-9 w-9 rounded-full 
            p-0 flex items-center justify-center
            bg-white border border-[#FF6813]"
                aria-label="Open menu"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={16}
                  height={16}
                  priority
                  className="object-contain"
                />
              </Button>{" "}
              <h1 className="text-white text-base font-bold">
                Bing Chat Support
              </h1>
            </div>

            <DialogClose
              className="
            h-5 w-5
            justify-center flex items-center
              hover:opacity-100 focus:outline-none
              disabled:pointer-events-none
              bg-[#c1c1c1]
              rounded-full
              text-white
            "
            >
              <XIcon className="size-3" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          <div>
            <BadgeLabel
              bgColor="#FFD7DF"
              textColor="#DF1B41"
              iconSrc="/red-star.svg"
              text="Christmas items"
            />
            <p className="text-sm pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et .
            </p>
          </div>

          <section className="overflow-x-scroll -mx-4 px-4 pb-2 scrollbar-hide">
            <div className="flex gap-3 w-max ">
              {christmasItems.map((item, idx) => (
                <ItemCard
                  key={idx}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  ratingCount={item.ratingCount}
                  nameFontClass="text-[12px] font-medium"
                  priceFontClass="text-[10px] font-semibold"
                  imageWrapperClass="relative w-[164px] h-[112px] mb-2"
                  imageSizes="164px"
                />
              ))}
            </div>
          </section>
          <button className="bg-white w-full p-2 flex justify-center gap-1 rounded-md">
            <Image
              src="/black-star.svg"
              alt="star"
              width={20}
              height={20}
              priority
            />
            <span> Buy Now</span>
          </button>

          <section className="mt-6">
            <BadgeLabel
              bgColor="#E1FFDF"
              textColor="#228403"
              iconSrc="/green-star.svg"
              text="Next Products"
            />
            <p className="text-sm pb-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="mb-2 flex gap-2 overflow-x-scroll scrollbar-hide">
              <CountBadge
                count={20}
                text="Recommended"
                active={activeBadge === "recommended"}
                onClick={() => setActiveBadge("recommended")}
              />
              <CountBadge
                count={4}
                text="Deals"
                active={activeBadge === "deals"}
                onClick={() => setActiveBadge("deals")}
              />
              <CountBadge
                count={5}
                text="Coupons"
                active={activeBadge === "coupon"}
                onClick={() => setActiveBadge("coupon")}
              />
            </div>

            <div className="overflow-x-scroll -mx-4 px-4 pb-2 scrollbar-hide">
              <div className="flex gap-3 w-max ">
                {newProducts.map((item, idx) => (
                  <ItemCard
                    key={idx}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    ratingCount={item.ratingCount}
                    nameFontClass="text-[12px] font-medium"
                    priceFontClass="text-[10px] font-semibold"
                    imageWrapperClass="relative w-[164px] h-[112px] mb-2"
                    imageSizes="164px"
                  />
                ))}
              </div>
            </div>

            <p className="text-sm pb-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <BadgeLabel
              bgColor="white"
              textColor="#FF5B00"
              iconSrc="/orange-star.svg"
              text="View more"
            />

            <div className="bg-[#D4DDE0] h-[1px] w-full my-6" />
            <BadgeLabel
              bgColor="#DFEEFF"
              textColor="#0570DE"
              iconSrc="/green-star.svg"
              text="Talk to me"
            />
            <p className="text-sm pb-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>
        </div>
        <DialogFooter>
          <p>accc</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
