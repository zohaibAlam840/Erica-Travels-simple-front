import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Map, Globe, Heart, Compass, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image src="/qatar-scenic.png" alt="About Hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">The Journey</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 italic">Capturing Qatar's Soul</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Discover the visionary archive dedicated to the architectural wonders and cultural heritage of Qatar.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="relative z-10 rounded-[60px] border-[10px] border-gray-50 overflow-hidden aspect-[3/4] shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-1000">
             <Image src="/al-bayt.png" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" alt="Qatari Architecture" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#111] rounded-[40px] -z-10 flex items-center justify-center text-orange-500 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-1000">
            <Compass size={80} />
          </div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500 rounded-full -z-10 blur-3xl opacity-20"></div>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 italic leading-none tracking-tighter">
              The Architecture<br/>of <span className="text-orange-500">Passion.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-bold italic">Erica Travels: A Visionary Archive.</p>
          </div>
          <div className="space-y-8 text-xl text-gray-500 leading-relaxed font-medium">
            <p>
              Erica Travels was born from a fascination with the impossible. Not just the sport, but the monumental structures that rose from the sands of Qatar to redefine modern engineering.
            </p>
            <div className="p-10 bg-black text-white rounded-[50px] relative overflow-hidden group">
               <p className="relative z-10 italic text-2xl font-black leading-tight">
                 "This platform celebrates the interplay between futuristic design and ancient nomadic heritage."
               </p>
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full"></div>
            </div>
            <p>
              This isn't just a travel site; it's a digital gallery dedicated to the curves of Al Janoub, the grandeur of Lusail, and the cultural tapestry woven into every brick and beam of Doha.
            </p>
          </div>
          <div className="pt-10 flex gap-12 border-t border-gray-100">
            <div className="space-y-2">
              <p className="text-5xl font-black text-black">8+</p>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Landmarks</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-black">20K</p>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Masterpieces</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-black">15</p>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em]">Exhibitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Map, title: "Detailed Guides", desc: "Step-by-step instructions on how to reach each stadium and nearby spots." },
              { icon: Heart, title: "Cultural Insights", desc: "Understanding the soul and heritage behind the steel." },
              { icon: Star, title: "Vlogs & Media", desc: "Walk with me through the gates and experience the atmosphere." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-xl shadow-gray-200/50 space-y-6 hover:-translate-y-4 transition-all group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black italic">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
