import Image from "next/image";
import { Mail, Instagram, Youtube, Twitter, Send, MapPin, Compass, Globe, MessageSquare, Phone, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image src="/doha-skyline.png" alt="Contact Hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center text-white px-6">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
             <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Let's Connect</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic leading-none">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Have a question about my stadium guides? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tight leading-none">
                Let's Talk Travel<span className="text-orange-500">.</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
                While I'm often on the road (or walking incredible stadium concourses), I do my best to respond to every message from fellow travelers.
              </p>
            </div>

            <div className="space-y-10">
               {/* Contact Cards */}
               {[
                 { icon: Mail, label: "Email Me", val: "hi@ericatravels.com", color: "bg-orange-500" },
                 { icon: Globe, label: "Social", val: "@ericatravels", color: "bg-blue-500" },
                 { icon: MapPin, label: "Location", val: "Doha, Qatar", color: "bg-teal-500" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-8 group cursor-pointer">
                    <div className={`w-20 h-20 ${item.color} rounded-[30px] flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                       <item.icon size={32} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">{item.label}</p>
                       <h4 className="text-2xl font-black italic">{item.val}</h4>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-12 bg-[#111] text-white rounded-[60px] relative overflow-hidden group">
               <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-black italic text-orange-500">Collabs & Inquiries</h3>
                  <p className="text-gray-400 text-lg font-medium leading-relaxed">
                     For brand partnerships, media kits, or speaking engagements, please mention <span className="text-white font-bold italic">"Partnership"</span> in your subject.
                  </p>
                  <Button className="bg-white text-black hover:bg-orange-500 hover:text-white rounded-2xl px-10 py-6 font-black italic transition-all">
                     PARTNER WITH ME
                  </Button>
               </div>
               <Compass size={180} className="absolute -bottom-10 -right-10 text-white/5 rotate-12 transition-transform duration-1000 group-hover:rotate-45" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-12 md:p-20 border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full"></div>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Your Name</label>
                    <Input className="h-20 rounded-[30px] bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-all px-10 font-bold text-lg" placeholder="John Doe" />
                 </div>
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Email Address</label>
                    <Input type="email" className="h-20 rounded-[30px] bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-all px-10 font-bold text-lg" placeholder="john@example.com" />
                 </div>
              </div>
              <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Subject</label>
                  <Input className="h-20 rounded-[30px] bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-all px-10 font-bold text-lg" placeholder="Stadium Guide Question" />
              </div>
              <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Message</label>
                  <Textarea className="min-h-[250px] rounded-[40px] bg-gray-50 border-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-all p-10 font-bold text-lg resize-none" placeholder="Share your thoughts..." />
              </div>
              <Button className="w-full h-24 bg-orange-500 hover:bg-black text-white rounded-[40px] text-2xl font-black italic shadow-2xl shadow-orange-500/20 transition-all hover:-translate-y-2 flex items-center justify-center gap-6 group">
                 SEND MESSAGE 
                 <Send size={28} className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </Button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 md:px-20 pb-40">
         <div className="h-[600px] rounded-[80px] overflow-hidden border-[15px] border-gray-50 shadow-2xl relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.91572017282!2d51.42445104278272!3d25.286704175780524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce983%3A0x77722f3b8911c620!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1740920000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute top-12 left-12 p-10 bg-white rounded-[40px] shadow-2xl border border-gray-100 space-y-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 backdrop-blur-md bg-white/90">
               <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-4">
                  <MapPin size={24} />
               </div>
               <h4 className="text-3xl font-black italic">Based in Doha</h4>
               <p className="text-lg font-bold text-gray-400">Available for local tours, collabs,<br/>and photography sessions.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
