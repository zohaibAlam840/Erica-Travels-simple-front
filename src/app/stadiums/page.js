import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, ArrowRight, Star } from "lucide-react";

export default function StadiumsPage() {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <Image 
                    src="/hero-bg.jpg" 
                    alt="Stadiums Hero" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Architecture</h4>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 italic">Qatar's World Cup Stadiums</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        Explore the 8 incredible venues that hosted the 2022 FIFA World Cup. Each stadium tells a unique story of culture and innovation.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {stadiums.map((stadium, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4">
                                <Image
                                    src={stadium.image}
                                    alt={stadium.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-white flex items-center gap-2">
                                        <Star size={16} className="text-orange-500 fill-orange-500" />
                                        <span className="text-xs font-black">TOP RATED</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10 text-white space-y-4">
                                    <div className="flex items-center gap-2 text-orange-500 text-[10px] font-black uppercase tracking-widest">
                                        <MapPin size={12} /> {stadium.location}
                                    </div>
                                    <h2 className="text-3xl font-black italic tracking-tight leading-none group-hover:text-orange-500 transition-colors">
                                        {stadium.name}
                                    </h2>
                                    
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-4 text-xs font-bold text-white/60">
                                            <div className="flex items-center gap-1.5"><Users size={14} /> {stadium.capacity}</div>
                                        </div>
                                        <Link href={`/stadiums`}>
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:rotate-45">
                                                <ArrowRight size={20} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 px-6">
                                <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3">
                                    {stadium.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const stadiums = [
    {
        id: "lusail",
        name: "Lusail Stadium",
        location: "Lusail City",
        capacity: "88,966",
        image: "/hero-bg.jpg",
        description: "The crown jewel of the tournament, this stadium hosted the historic final. Its design draws inspiration from the fanar lantern and intricate decorative motifs on bowls and other vessels found across the Arab world.",
    },
    {
        id: "al-bayt",
        name: "Al Bayt Stadium",
        location: "Al Khor",
        capacity: "68,895",
        image: "/al-bayt.png",
        description: "The host of the opening match, Al Bayt is unmistakably Qatari. Its design resembles the traditional 'bayt al sha'ar' tents used by nomadic people in the region for centuries.",
    },
    {
        id: "al-janoub",
        name: "Al Janoub Stadium",
        location: "Al Wakrah",
        capacity: "44,325",
        image: "/beach.jpg",
        description: "Designed by the late Zaha Hadid, this stadium's futuristic look is inspired by the sails of traditional dhow boats, paying tribute to Al Wakrah's seafaring past.",
    },
    {
        id: "ahmad-bin-ali",
        name: "Ahmad Bin Ali Stadium",
        location: "Umm Al Afaei",
        capacity: "45,032",
        image: "/adventure.jpg",
        description: "Located on the edge of the desert, its glowing façade features patterns that represent different aspects of Qatar: the importance of family, the beauty of the desert, native flora and fauna, and local and international trade.",
    },
    {
        id: "khalifa-international",
        name: "Khalifa International Stadium",
        location: "Al Rayyan",
        capacity: "45,857",
        image: "/tokyo.jpg",
        description: "Qatar's most historic stadium, built in 1976 and extensively renovated for the World Cup. It's famous for its magnificent dual arches and legacy of hosting major sporting events.",
    },
    {
        id: "stadium-974",
        name: "Stadium 974",
        location: "Ras Abu Aboud, Doha",
        capacity: "44,089",
        image: "/cultural.jpg",
        description: "A completely dismountable stadium made of 974 shipping containers, paying tribute to the country's maritime history and international dialing code.",
    },
];
