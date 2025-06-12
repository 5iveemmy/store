"use client";
import { InputWithIcon } from "@st/components/inputWithIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@st/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const images = ["/banner.png", "/banner.png"];

const HeroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <div>
      <div className="mx-4 mb-3">
        <InputWithIcon
          className="rounded-full"
          icon={
            <Image
              priority
              width="24"
              height="24"
              src="/search.svg"
              alt="search icon"
            />
          }
          placeholder="Search"
        />
      </div>

      <div className="bg-[#EBF0F4] p-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full relative"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={`${image}-${index}`}>
                <Image
                  priority
                  width="344"
                  height="140"
                  className="rounded-xl"
                  src={image}
                  alt=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
