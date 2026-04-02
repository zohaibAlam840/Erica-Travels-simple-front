"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // We are keeping the image's layout but updating the links and branding for Erica.
  const routes = [
    { name: "Stadiums", path: "/stadiums" },
    { name: "Qatar Guide", path: "/guide" },
    { name: "Blog", path: "/blog" },
    { name: "About Erica", path: "/about" },
  ];

  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "absolute top-0 bg-transparent text-white" : "sticky top-0 bg-white border-b shadow-sm"} w-full z-50 transition-colors duration-300`}>
      <div className="flex h-24 items-center justify-between px-6 md:px-20 container mx-auto">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-3xl font-black tracking-tighter ${isHome ? "text-white" : "text-black"}`}>
            Erica<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center bg-transparent">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-[16px] font-bold transition-all hover:text-orange-500 ${isHome ? "text-white/90" : "text-black/80"}`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search & Contact */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-400 group-hover:text-orange-500 transition-colors" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-3 rounded-full border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-48 transition-all"
            />
          </div>
          <Link href="/contact" className="ml-2">
            <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full px-8 py-6 text-[15px] font-bold shadow-lg transition-transform hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10 bg-white rounded-full shadow-sm text-black">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-12 px-5">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`text-xl font-bold transition-colors hover:text-blue-600 text-black`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <div className="relative mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-12 pr-4 py-4 rounded-full border shadow-sm w-full outline-none focus:border-blue-500"
                />
              </div>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-4 bg-[#3b5bdb] hover:bg-[#324ab2] text-white rounded-full py-6 text-lg font-bold">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
