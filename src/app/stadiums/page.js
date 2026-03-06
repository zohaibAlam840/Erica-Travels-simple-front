import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function StadiumsPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="px-4 md:px-10">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">Qatar World Cup Stadiums</h1>
                    <p className="text-xl text-gray-600 max-w-3xl text-center md:text-left">
                        Explore the 8 incredible venues that hosted the 2022 FIFA World Cup. Each stadium tells a unique story of culture and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stadiums.map((stadium, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={stadium.image}
                                    alt={stadium.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{stadium.name}</h2>
                                        <div className="flex items-center text-gray-500 mt-1">
                                            <MapPin className="h-4 w-4 mr-1 text-teal-600" />
                                            <span className="text-sm">{stadium.location}</span>
                                        </div>
                                    </div>
                                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        {stadium.capacity}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {stadium.description}
                                </p>
                                <Link href={`/stadiums/${stadium.id}`}>
                                    <Button className="w-full bg-teal-600 hover:bg-teal-700">View Stadium Guide</Button>
                                </Link>
                            </CardContent>
                        </Card>
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
        id: "education-city",
        name: "Education City Stadium",
        location: "Al Rayyan",
        capacity: "44,667",
        image: "/cultural.jpg",
        description: "Known as the 'Diamond in the Desert', its façade features triangles that form complex, diamond-like geometrical patterns which appear to change color as the sun moves across the sky.",
    },
];
