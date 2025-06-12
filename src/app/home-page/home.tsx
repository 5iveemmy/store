"use client";
import BestSellingCard from "@st/components/best-selling-card";
import CategoryCard from "@st/components/category-card";
import { InputWithIcon } from "@st/components/input-with-Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@st/components/ui/carousel";
import { bestSellingProducts, featuredCategory } from "@st/data";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const images = ["/banner.png", "/banner.png"];

const Home = () => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <main className="mb-8 h-screen">
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
        className="bg-[#EBF0F4] px-4 pt-4 pb-24"
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
                <div className="relative w-full aspect-[344/140]">
                  <Image
                    priority
                    fill
                    className="rounded-xl object-cover"
                    src={image}
                    alt={`Promotional banner ${index + 1}`}
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <section aria-labelledby="featured-category" className="mt-8">
          <h2 id="featured-category" className="text-base font-bold pb-2">
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
              aria-label="Featured category carousel"
            >
              <CarouselContent className="md:gap-2">
                {featuredCategory.map((category) => (
                  <CarouselItem
                    key={category.title}
                    showDots={false}
                    className="basis-[120px] lg:basis-[160px] flex-shrink-0"
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

        <section aria-labelledby="best-selling" className="mt-8 px-4">
          <h2 id="best-selling" className="text-base md:text-lg font-bold pb-2">
            Best Selling Products
          </h2>
          <div
            className="flex flex-wrap justify-between items-center gap-2 md:gap-3"
            role="list"
            aria-label="List of best selling products"
          >
            {bestSellingProducts.map((product) => (
              <BestSellingCard
                key={`${product.image}-${product.name}`}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
