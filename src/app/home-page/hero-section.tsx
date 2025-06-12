"use client";
import CategoryCard from "@st/components/category-card";
import { InputWithIcon } from "@st/components/inputWithIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@st/components/ui/carousel";
import { featuredCategory } from "@st/data";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const images = ["/banner.png", "/banner.png"];

const HeroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <main className="mb-8">
      <section aria-labelledby="search-section" className="mx-4 mb-3">
        <h2 id="search-section" className="sr-only">
          Search Products
        </h2>
        <InputWithIcon
          className="rounded-full"
          icon={
            <Image
              priority
              width="24"
              height="24"
              src="/search.svg"
              alt=""
              aria-hidden="true"
            />
          }
          placeholder="Search products"
          aria-label="Search through products"
        />
      </section>
      <section
        aria-labelledby="promotional-carousel"
        className="bg-[#EBF0F4] p-4"
      >
        <h2 id="promotional-carousel" className="sr-only">
          Promotional Offers
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full relative"
          aria-label="Promotional offers carousel"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={`${image}-${index}`}
                aria-label={`Promotional offer ${index + 1}`}
              >
                <Image
                  priority
                  width="344"
                  height="140"
                  className="rounded-xl"
                  src={image}
                  alt={`Promotional banner ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <section aria-labelledby="featured-categories" className="mt-8">
          <h2 id="featured-categories" className="text-base font-bold pb-2">
            Featured Category
          </h2>
          <div className="flex justify-between">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({ delay: 5000 }),
                AutoScroll({
                  playOnInit: true,
                  stopOnInteraction: false,
                  speed: 0.5,
                }),
              ]}
              className="w-full relative"
              aria-label="Featured categories carousel"
            >
              <CarouselContent>
                {featuredCategory.map((category) => (
                  <CarouselItem
                    key={category.title}
                    showDots={false}
                    style={{ flex: "0 0 120px" }}
                    aria-label={`Category: ${category.title}`}
                    tabIndex={0}
                  >
                    <CategoryCard {...category} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HeroSection;
