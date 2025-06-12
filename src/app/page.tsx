"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./home-page/hero-section"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
