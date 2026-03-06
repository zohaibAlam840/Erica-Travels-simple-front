import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="World Cup Stadium"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className=" relative z-20 h-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-12 space-y-6 text-white">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Erica&apos;s Qatar Stadium Tour
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Follow my journey through the architectural marvels of the 2022 World Cup stadiums and find the best travel tips for your next visit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/stadiums">
              <Button
                size="lg"
                className="bg-teal-600 text-base cursor-pointer hover:bg-teal-700 group px-8"
              >
                Explore Stadiums
                <ArrowRight className="group-hover:translate-x-1 transition-all h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white text-base cursor-pointer hover:bg-white/20"
            >
              Watch My Vlog
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Stadiums */}
      <section className="py-20 bg-white">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Stadiums
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              From the golden bowl of Lusail to the tent-inspired Al Bayt, discover the unique stories behind Qatar&apos;s iconic venues.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {stadiums.map((stadium, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={stadium.image}
                    alt={stadium.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-bold text-2xl mb-1">{stadium.name}</h3>
                    <div className="flex items-center text-white/80">
                      <MapPin className="h-4 w-4 mr-1 text-teal-400" />
                      <span className="text-sm font-medium">{stadium.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {stadium.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">{stadium.capacity} Capacity</span>
                    <Link href={`/stadiums/${stadium.id}`}>
                      <Button
                        variant="ghost"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0"
                      >
                        View Details &rarr;
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Life of a Traveler</span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Get the Latest Travel Insights from Erica&apos;s Blog
              </h2>
              <p className="text-xl text-gray-600">
                Beyond the stadiums, I share my personal experiences navigating Qatar, from the best local eats to cultural etiquette and hidden gems.
              </p>
              <div className="space-y-4">
                {blogPreviews.map((post, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-24 h-24 relative flex-shrink-0 rounded-md overflow-hidden">
                      <Image src={post.image} fill className="object-cover" alt="" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{post.title}</h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/blog">
                <Button size="lg" className="bg-teal-600 text-white px-8">Read All Posts</Button>
              </Link>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center group cursor-pointer">
              <div className="text-center text-white p-8 z-20">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors shadow-xl">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Vlog: Lusail Architecture</h3>
                <p className="text-white/70 italic">Click to watch on YouTube</p>
              </div>
              <Image
                src="/hero-bg.jpg"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 z-10"
                alt="Watch vlog"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 bg-white border-t">
        <div className="px-4 md:px-10 text-center">
          <h2 className="text-3xl font-bold mb-10">Follow the Journey</h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-bold">
            <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors">Instagram</Link>
            <Link href="#" className="text-gray-400 hover:text-black transition-colors">TikTok</Link>
            <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">YouTube</Link>
            <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Twitter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data for Stadiums
const stadiums = [
  {
    id: "lusail",
    name: "Lusail Stadium",
    location: "Lusail City",
    image: "/hero-bg.jpg",
    capacity: "88,966",
    description: "The venue for the 2022 World Cup Final, inspired by the play of light and shadow that characterizes the fanar lantern.",
  },
  {
    id: "al-bayt",
    name: "Al Bayt Stadium",
    location: "Al Khor",
    image: "/african-safari.jpg",
    capacity: "68,895",
    description: "Modeled after the tents traditionally used by nomadic peoples in Qatar and the Gulf region.",
  },
  {
    id: "al-janoub",
    name: "Al Janoub Stadium",
    location: "Al Wakrah",
    image: "/beach.jpg",
    capacity: "44,325",
    description: "Designed by the late Zaha Hadid, its flowing lines reflect the sails of traditional dhow boats.",
  },
];

const blogPreviews = [
  {
    title: "5 Things I Wish I Knew Before Visiting Doha",
    date: "Oct 12, 2025",
    image: "/cultural.jpg",
  },
  {
    title: "Best Spots for Sunset Photography in Lusail",
    date: "Sep 28, 2025",
    image: "/adventure.jpg",
  },
];
