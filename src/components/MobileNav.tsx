"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "inicio",
    path: "/",
  },
  {
    name: "acerca",
    path: "/acerca",
  },
  {
    name: "experiencia",
    path: "/experiencia",
  },
  {
    name: "habilidades",
    path: "/habilidades",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-4 mb-6 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Jesus <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* header with title */}
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold"></SheetTitle>
        </SheetHeader>
        {/* nav */}
        <nav className="flex flex-col justify-start items-center gap-8 mt-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
