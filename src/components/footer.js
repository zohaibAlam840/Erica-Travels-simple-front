"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const pathname = usePathname();


  return (
    <footer className="bg-[#111111] text-gray-400 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-20 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          
          {/* 1. Logo & Socials */}
          <div className="space-y-10">
            <Link href="/" className="inline-block">
              <span className="text-4xl font-black tracking-tighter text-white">
                Erica<span className="text-orange-500">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
              Erica's Qatar Tour: Exploring the architectural wonders and cultural heritage of Qatar, one stadium at a time.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="text-white/40 hover:text-orange-500 transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-orange-500 transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-orange-500 transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 2. Concepts */}
          <div className="space-y-10">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Concepts</h3>
            <ul className="space-y-5">
              <li><Link href="/" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">About Erica</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">Travel Blog</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* 3. Destinations */}
          <div className="space-y-10">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Destinations</h3>
            <ul className="space-y-5">
              <li><Link href="/stadiums" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">Qatar Stadiums</Link></li>
              <li><Link href="/guide" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">Doha City Guide</Link></li>
              <li><Link href="/guide" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">Cultural Sites</Link></li>
              <li><Link href="/stadiums" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">FIFA Wonders</Link></li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="space-y-10">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Newsletter</h3>
            <div className="flex bg-white/5 rounded-2xl overflow-hidden p-2 border border-white/10">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none text-white placeholder:text-gray-600 focus-visible:ring-0 px-4 py-6"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-6 font-bold shadow-xl shadow-orange-500/20">
                Submit
              </Button>
            </div>
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              * Weekly updates for your tour packages.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Erica Travels. Website Designer: <span className="text-white">Hamad Almannai</span>
          </p>
          <div className="flex gap-10 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
