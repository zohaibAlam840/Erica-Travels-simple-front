import { Mail, Instagram, Youtube, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="px-4 md:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a question about my stadium guides? Want to collaborate or just say hi? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect with Erica</h2>
                <p className="text-lg text-gray-600 mb-8">
                  While I&apos;m often on the road (or in a stadium), I do my best to respond to every message from fellow travelers.
                </p>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <Mail className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Me</p>
                    <p className="text-lg font-bold text-gray-900 leading-none">hi@ericatravels.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-sans">Social Channels</h3>
                <div className="grid grid-cols-2 gap-6">
                  <LinkItem icon={Instagram} label="Instagram" handle="@ericatravels" color="text-pink-600" />
                  <LinkItem icon={Youtube} label="YouTube" handle="Erica's Tours" color="text-red-600" />
                  <LinkItem icon={Twitter} label="Twitter" handle="@ericatours" color="text-blue-400" />
                  <LinkItem icon={Mail} label="Newsletter" handle="Weekly Updates" color="text-teal-600" />
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Collabs & Inquiries</h3>
                <p className="text-gray-600">
                  For brand partnerships, media kits, or speaking engagements, please mention "Partnership" in your email subject.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl shadow-teal-900/5 p-8 md:p-12 border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Your Name</label>
                    <Input placeholder="John Doe" className="h-12 bg-gray-50 border-transparent focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="h-12 bg-gray-50 border-transparent focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                  <Input placeholder="Question about Lusail Guide" className="h-12 bg-gray-50 border-transparent focus:bg-white focus:border-teal-600 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                  <Textarea placeholder="Type your message here..." rows={6} className="bg-gray-50 border-transparent focus:bg-white focus:border-teal-600 transition-all resize-none" />
                </div>
                <Button className="w-full h-14 bg-teal-600 hover:bg-teal-700 text-lg font-bold rounded-xl shadow-lg shadow-teal-600/20">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed - Now pointing to Qatar */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Location Showcase</h2>
            <p className="text-gray-600">Where you can find my stadium tours happening.</p>
          </div>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-inner bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.91572017282!2d51.42445104278272!3d25.286704175780524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce983%3A0x77722f3b8911c620!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1740920000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale contrast-125 opacity-80"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

function LinkItem({ icon: Icon, label, handle, color }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer group">
      <Icon className={`w-6 h-6 ${color}`} />
      <div>
        <p className="text-sm font-bold text-gray-900 leading-none mb-1">{label}</p>
        <p className="text-xs text-gray-500">{handle}</p>
      </div>
    </div>
  );
}
