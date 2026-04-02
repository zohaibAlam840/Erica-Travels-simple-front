import Link from "next/link";
import { ArrowRight, Play, MapPin, Search, Calendar, Clock, Star, Heart, Shield, Plane, Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[900px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/qatar-scenic.png" 
            alt="Qatar Scenic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-20 text-center text-white">
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8">
            <div className="bg-orange-500/80 backdrop-blur-sm px-4 py-1 rounded-sm text-[12px] font-bold tracking-widest uppercase">
              Explore Qatar
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              No matter where you're going to, we'll take you there
            </h1>
            
            {/* Search Bar */}
            <div className="w-full max-w-5xl mt-12 bg-white/20 backdrop-blur-md p-2 rounded-xl flex flex-col md:flex-row items-center gap-2 shadow-2xl border border-white/30">
              <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-lg flex items-center gap-3 text-left cursor-pointer border border-white/10 group">
                  <MapPin className="text-orange-400 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Where to?</p>
                    <p className="text-sm font-bold">Doha, Qatar</p>
                  </div>
                </div>
                <div className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-lg flex items-center gap-3 text-left cursor-pointer border border-white/10 group">
                  <Plane className="text-orange-400 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Travel Type</p>
                    <p className="text-sm font-bold">Stadium Tour</p>
                  </div>
                </div>
                <div className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-lg flex items-center gap-3 text-left cursor-pointer border border-white/10 group">
                  <Calendar className="text-orange-400 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Duration</p>
                    <p className="text-sm font-bold">7 Days</p>
                  </div>
                </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold transition-all shadow-lg hover:shadow-orange-500/40">
                Submit
              </button>
            </div>

            {/* Social Indicator */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                <img src="/user1.jpg" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/user2.jpg" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="/user3.jpg" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[10px] font-bold">+</div>
              </div>
              <p className="text-sm font-medium text-white/90 underline decoration-orange-500 underline-offset-4">
                2,500+ people booked Stadium Tours in last 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="relative h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/doha-skyline.png" className="w-full h-full object-cover shadow-2xl" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter">Your Journey Starts Here<span className="text-orange-500">.</span></h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>
    </div>
  );
}
