"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./home-page/home"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
