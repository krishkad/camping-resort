"use client"
import React from "react";
import { MapPin, Phone, Mail, ArrowUp, Send } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#284f32] to-[#22422b] text-white pt-20 pb-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d633b]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d633b]/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-1.5 rounded-lg bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m2 22 10-10M16 12l-2-2M5 8l5-5 5 5a7.1 7.1 0 0 1 0 10 7.1 7.1 0 0 1-10 0"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">
                WildHaven <span className="text-[#dea253] font-light">Camps</span>
              </h3>
            </div>
            <p className="mb-6 text-stone-200 leading-relaxed">
              Experience premium camping in stone&apos;s most beautiful locations. Disconnect from everyday life and reconnect with what truly matters.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-stone-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#dea253] rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#camps" className="text-stone-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#dea253] rounded-full mr-2"></span>
                  Our Camps
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-stone-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#dea253] rounded-full mr-2"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-stone-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#dea253] rounded-full mr-2"></span>
                  Daily Schedule
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-stone-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#dea253] rounded-full mr-2"></span>
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#dea253] rounded-full mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="mr-3 text-[#dea253] flex-shrink-0 mt-1" size={18} />
                <span className="text-stone-200">123 Forest Road, Wilderness Valley, Pine Ridge, CA 98765, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#dea253] flex-shrink-0" size={18} />
                <span className="text-stone-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#dea253] flex-shrink-0" size={18} />
                <span className="text-stone-200">info@wildhavencamps.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-stone-200 mb-4 leading-relaxed">
              Subscribe to receive updates about new camps, seasonal offers, and outdoor adventure tips.
            </p>
            <form className="flex mb-4 relative">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white w-full focus:outline-none focus:ring-1 focus:ring-[#dea253] placeholder:text-white/50"
              />
              <button
                type="submit"
                className="bg-[#d68734] hover:bg-[#c26a27] px-4 py-3 rounded-r-lg transition-colors flex items-center"
              >
                <Send size={18} />
              </button>
            </form>
            <p className="text-stone-400 text-sm">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#2d633b]/50 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} WildHaven Camps. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-stone-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        {/* <div className="text-center mt-8 text-sm text-stone-400">
          <p className="flex items-center justify-center">
            Crafted with <Heart size={14} className="mx-1 text-[#dea253]" /> by WildHaven Team
          </p>
        </div> */}
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#d68734] hover:bg-[#c26a27] p-3 rounded-full shadow-lg transition-all hover:shadow-[#c26a27]/20 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
