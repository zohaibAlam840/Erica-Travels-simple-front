import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Map, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/travel-team-bg.avif"
            alt="Erica exploring Qatar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Meet Erica
          </h1>
          <p className="text-xl md:text-3xl text-white/90 max-w-2xl font-light italic">
            "Capturing the soul of modern architecture through the lens of a traveler."
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/user3.jpg"
                alt="Erica"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Beyond the Game
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Welcome! I&apos;m Erica, a storyteller and architecture enthusiast. My obsession with World Cup stadiums began long before the first whistle blew in Qatar. I was fascinated by how these structures blend futuristic engineering with thousands of years of nomadic history.
                </p>
                <p>
                  This website isn&apos;t a booking agency. It&apos;s my personal journal and a guide for fellow travelers who want to see these marvels for themselves. I spent months on the ground in Qatar, documenting every corner of the 8 stadiums, eating local food, and learning the rhythms of Doha.
                </p>
                <p>
                  Whether you&apos;re a football fan, a design nerd, or just looking for your next adventure, I hope my guides help you see Qatar in a whole new light.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 text-teal-600 font-bold">
                  <Camera className="w-6 h-6" />
                  <span>Vlogger</span>
                </div>
                <div className="flex items-center gap-3 text-teal-600 font-bold">
                  <Map className="w-6 h-6" />
                  <span>Travel Guide</span>
                </div>
                <div className="flex items-center gap-3 text-teal-600 font-bold">
                  <Globe className="w-6 h-6" />
                  <span>Culture Scout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How I Can Help You</h2>
            <p className="text-xl text-gray-600">I don&apos;t sell packages. I share knowledge.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Map className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Detailed Guides</h3>
              <p className="text-gray-600">Step-by-step instructions on how to reach each stadium, what to see nearby, and the best vantage points for photos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cultural Insights</h3>
              <p className="text-gray-600">Understanding the soul behind the steel. I dive into the heritage that inspired each stadium&apos;s unique design.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Camera className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vlogs & Media</h3>
              <p className="text-gray-600">Walk with me through the gates. My video tours give you a real sense of the atmosphere and scale of these venues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="px-4 md:px-10 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to explore Qatar?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Start with my most popular stadium guide or check out the latest blog posts for travel tips.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stadiums">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90 px-8">Explore Stadiums</Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">Read the Blog</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
