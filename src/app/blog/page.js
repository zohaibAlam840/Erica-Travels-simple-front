import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="px-4 md:px-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Erica&apos;s Qatar Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Travel stories, cultural tips, and stadium guides. Everything you need to know before your trip to the heart of the Middle East.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {blogPosts.map((post, index) => (
                        <article key={index} className="flex flex-col group cursor-pointer">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                <span className="font-semibold text-teal-600">Erica Travels</span>
                                <span>•</span>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <Button variant="outline" className="w-fit border-teal-600 text-teal-600 hover:bg-teal-50">
                                Read Full Story
                            </Button>
                        </article>
                    ))}
                </div>
            </div>
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
