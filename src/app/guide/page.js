import Image from "next/image";
import { Compass, Calendar, Map, CheckCircle, Clock, Plane, Shield } from "lucide-react";

export default function GuidePage() {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <Image 
                    src="/doha-skyline.png" 
                    alt="Guide Hero" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Planning</h4>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 italic">Essential Guide</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        Everything you need to know about traveling to Qatar, getting around, and cultural etiquette.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 py-24 space-y-32">
                {/* 1. When to Go */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                            <Calendar size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic">When to Visit</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            The best time to visit Qatar is during the cooler months, from <span className="text-black font-bold">November to early April</span>. The weather is incredibly pleasant, perfect for outdoor activities and stadium exploration.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-4">
                            <Clock className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                            <p className="text-sm text-gray-400 font-bold leading-relaxed">
                                Avoid June to August unless you're prepared for 40°C+ heat.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                        <img src="/qatar-scenic.png" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* 2. Transportation */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl lg:order-last">
                        <img src="/travel-package.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-8">
                        <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                            <Map size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic">Getting Around</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Doha Metro", desc: "Fast, clean, and connects directly to major stadiums.", icon: Plane },
                                { title: "Uber & Karwa", desc: "Reliable and affordable taxis available 24/7.", icon: Shield },
                                { title: "Stadium Shuttles", desc: "Dedicated buses running on match days.", icon: Map }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-black">{item.title}</h4>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Cultural Sites */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                            <Compass size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic">What to See</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["Souq Waqif", "Museum of Islamic Art", "Katara Cultural Village", "The Pearl-Qatar"].map((site, i) => (
                                <li key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 font-black text-black italic hover:bg-orange-500 hover:text-white transition-all cursor-default">
                                    {site}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                        <img src="/cultural.jpg" className="w-full h-full object-cover" />
                    </div>
                </section>
            </div>
        </div>
    );
}
