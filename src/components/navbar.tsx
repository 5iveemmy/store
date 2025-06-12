"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="pt-10 px-4 mb-4" role="banner">
      <nav
        className="flex items-center justify-between"
        aria-label="Main Navigation"
      >
        <div className="flex gap-7 items-center">
          <button
            type="button"
            aria-label="Open menu"
            className="focus:outline-none focus-visible:ring-2 rounded"
          >
            <Image
              priority
              width={24}
              height={24}
              src="/hamburger.svg"
              alt=""
            />
          </button>

          <Link href="/" aria-label="Homepage">
            <Image
              priority
              width={90}
              height={24}
              src="/logo.svg"
              alt="Company Logo"
            />
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          <button
            type="button"
            aria-label="Notifications"
            className="focus:outline-none focus-visible:ring-2 rounded"
          >
            <Image
              priority
              width={24}
              height={24}
              src="/notification.svg"
              alt=""
            />
          </button>

          <button
            type="button"
            aria-label="User account"
            className="focus:outline-none focus-visible:ring-2 rounded"
          >
            <Image
              priority
              width={24}
              height={24}
              src="/avatar.svg"
              alt="User avatar"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
