import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight, Share2, Heart } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <Image 
                    src="/cultural.jpg" 
                    alt="Blog Hero" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Stories</h4>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 italic">Erica's Journal</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        Travel stories, cultural tips, and architectural insights from the heart of Qatar.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-20 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {blogPosts.map((post, index) => (
                        <article key={index} className="group cursor-pointer space-y-8">
                            <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-8 left-8">
                                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="absolute top-8 right-8 flex gap-3">
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all">
                                        <Heart size={16} />
                                    </div>
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all">
                                        <Share2 size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 px-4">
                                <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    <div className="flex items-center gap-2"><User size={12} className="text-orange-500" /> Erica Travels</div>
                                    <div className="flex items-center gap-2"><Clock size={12} className="text-orange-500" /> {post.readTime}</div>
                                    <div className="text-gray-300">|</div>
                                    <div>{post.date}</div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black italic tracking-tight leading-tight group-hover:text-orange-500 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4">
                                    <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] group-hover:text-orange-500 transition-all">
                                        READ ARTICLE <ArrowRight size={16} className="group-hover:translate-x-4 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Newsletter section integrated into blog page */}
            <section className="bg-gray-50 py-24 mb-24">
                <div className="container mx-auto px-6 md:px-20 text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tight">Stay Updated</h2>
                        <p className="text-gray-500 text-xl font-medium">Subscribe to receive the latest travel stories and guides directly in your inbox.</p>
                    </div>
                    <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 p-4 bg-white rounded-[40px] shadow-xl border border-gray-100">
                        <input type="email" placeholder="Email address" className="flex-1 bg-transparent border-none px-8 py-4 font-bold text-black focus:outline-none" />
                        <Button className="bg-black hover:bg-orange-500 text-white rounded-[30px] px-12 py-6 font-black italic shadow-xl transition-all">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

const blogPosts = [
    {
        title: "The Ultimate Guide to Lusail: Where Architecture Meets Passion",
        category: "Stadium Guide",
        date: "Dec 18, 2025",
        readTime: "8 min read",
        image: "/hero-bg.jpg",
        excerpt: "Standing in the middle of Lusail City, looking up at the golden bowl of the stadium, I finally understood why this place was chosen for the final. Here is everything you need to know about visiting Lusail.",
    },
    {
        title: "Culture Check: What to Wear and How to Act in Doha",
        category: "Travel Tips",
        date: "Dec 10, 2025",
        readTime: "5 min read",
        image: "/cultural.jpg",
        excerpt: "Respecting local customs is key to an amazing trip. I've compiled my top tips on dress codes, cultural etiquette, and how to navigate the beautiful traditions of Qatar.",
    },
    {
        title: "Top 5 Local Restaurants Near Al Janoub Stadium",
        category: "Food",
        date: "Nov 25, 2025",
        readTime: "6 min read",
        image: "/food-wine.jpg",
        excerpt: "Don't just watch the game—experience the flavors! Al Wakrah is home to some of the freshest seafood and most authentic Qatari cuisine. Here are my favorites.",
    },
    {
        title: "Photography Tips: Capturing the Desert Sunset",
        category: "Photography",
        date: "Nov 12, 2025",
        readTime: "4 min read",
        image: "/adventure.jpg",
        excerpt: "The golden hour in the Qatari desert is unlike anything else. I'm sharing my camera settings and best locations for that perfect sunset shot.",
    },
];
