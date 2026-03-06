"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, Calendar, Camera, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StadiumDetailPage() {
    const params = useParams();
    const id = params.id;

    // Find stadium data (mock)
    const stadium = stadiumsData.find(s => s.id === id) || stadiumsData[0];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] w-full">
                <Image src={stadium.image} fill className="object-cover" alt={stadium.name} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-12 left-4 md:left-10 right-4 text-white">
                    <Link href="/stadiums" className="flex items-center gap-2 text-teal-400 font-bold mb-6 hover:translate-x-1 transition-transform w-fit">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Stadiums
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{stadium.name}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-lg text-white/80">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-teal-500" />
                            {stadium.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-6 h-6 text-teal-500" />
                            {stadium.capacity} Capacity
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Story of {stadium.name}</h2>
                            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                <p>{stadium.longDescription}</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Architectural Design</h3>
                                <p>{stadium.architecture}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <Camera className="w-10 h-10 text-teal-600 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Erica&apos;s Photo Tip</h4>
                                <p className="text-gray-600">{stadium.photoTip}</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <Info className="w-10 h-10 text-teal-600 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Visitor Info</h4>
                                <p className="text-gray-600">{stadium.visitorInfo}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 bg-teal-600 rounded-3xl text-white shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Plan Your Visit</h3>
                            <p className="mb-8 text-white/80">Need help getting here or finding the best time to tour? Download my free guide for this stadium.</p>
                            <Button className="w-full bg-white text-teal-600 hover:bg-white/90 font-bold h-12">
                                Download PDF Guide
                            </Button>
                        </div>

                        <div className="border border-gray-100 rounded-3xl p-8 space-y-6">
                            <h4 className="text-xl font-bold">Key Facts</h4>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b pb-2 transition-colors hover:bg-gray-50">
                                    <span className="text-gray-500">Opened</span>
                                    <span className="font-bold text-gray-900">{stadium.opened}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2 transition-colors hover:bg-gray-50">
                                    <span className="text-gray-500">Architect</span>
                                    <span className="font-bold text-gray-900 text-right">{stadium.architect}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2 transition-colors hover:bg-gray-50">
                                    <span className="text-gray-500">Major Event</span>
                                    <span className="font-bold text-gray-900">{stadium.event}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const stadiumsData = [
    {
        id: "lusail",
        name: "Lusail Stadium",
        location: "Lusail City",
        capacity: "88,966",
        image: "/hero-bg.jpg",
        longDescription: "Lusail Stadium hosted the final of the FIFA World Cup Qatar 2022™ – a match that went down in history as one of the greatest games ever played. The stadium is located about 20km north of central Doha. Its scale and grandeur were designed to match the ambition of Lusail City itself, a sustainable urban development that rose from the desert sands.",
        architecture: "The design is inspired by the interplay of light and shadow that characterizes the fanar lantern. Its shape and golden façade echo the intricate decorative motifs found on bowls and other vessels from across the Arab world during the rise of civilization in the region.",
        photoTip: "Head to the East side of the stadium at sunset for the best 'golden hour' glow from the facade. If you have a wide-angle lens, stand near the Lusail Marina for a full silhouette.",
        visitorInfo: "The Lusail Metro Station (Red Line) is within walking distance. Most tours run from 10 AM to 4 PM, but check local schedules as they vary by season.",
        opened: "November 2021",
        architect: "Foster + Partners",
        event: "World Cup Final 2022",
    },
    {
        id: "al-bayt",
        name: "Al Bayt Stadium",
        location: "Al Khor",
        capacity: "68,895",
        image: "/al-bayt.png",
        longDescription: "Al Bayt Stadium is a stunning venue that pays tribute to Qatar's rich cultural heritage. Inspired by the traditional nomadic tents (bayt al-sha'ar) of the Gulf region, its massive structure looms over the desert landscape as a symbol of hospitality and welcome. It served as the spectacular backdrop for the opening match of the FIFA World Cup Qatar 2022™.",
        architecture: "The stadium's exterior is covered in a massive black and white fabric, mimicking the traditional tents of the Bedouin people. Inside, the red 'Al Sadu' patterns create a warm, inviting atmosphere that reflects the heart of Qatari hospitality.",
        photoTip: "Capture the vastness of the stadium from the surrounding park trails. The contrast between the black tent structure and the lush green gardens provides a perfect shot, especially during the blue hour.",
        visitorInfo: "Located about 35km north of Doha, the stadium is best reached by shuttle or car. The surrounding Al Bayt Park is a popular spot for Qatari families and is open even on non-match days.",
        opened: "November 2021",
        architect: "Dar Al-Handasah",
        event: "World Cup Opening Match",
    },
];
