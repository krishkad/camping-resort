"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Tent, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div
            className={`p-1.5 rounded-lg ${
              isScrolled ? "bg-[#dcf0e0]" : "bg-white/20"
            } transition-all duration-300`}
          >
            <Tent
              className={`${
                isScrolled || isMobileMenuOpen ? "text-[#377c48]" : "text-white"
              } h-6 w-6`}
            />
          </div>
          <h1
            className={`text-xl md:text-2xl font-bold ${
              isScrolled || isMobileMenuOpen ? "text-[#284f32]" : "text-white"
            }`}
          >
            Camp <span className="text-[#d68734] font-light">Resort</span>
          </h1>
        </a>

        <nav className="hidden md:flex space-x-1 items-center">
          {[
            { title: "Camps", href: "#camps" },
            { title: "Pricing", href: "#pricing" },
            { title: "Schedule", href: "#schedule" },
            { title: "Facilities", href: "#facilities" },
            { title: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`${
                isScrolled
                  ? "text-stone-700 hover:text-stone-500"
                  : "text-white hover:text-white/80"
              } transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10`}
            >
              {item.title}
            </a>
          ))}
          <Button className="btn-primary text-white ml-3">
            <span>Book Now</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={
                isScrolled || isMobileMenuOpen ? "text-[#284f32]" : "text-white"
              }
            />
          ) : (
            <Menu
              className={
                isScrolled || isMobileMenuOpen ? "text-[#284f32]" : "text-white"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-sm w-full py-4 px-6 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {[
              { title: "Camps", href: "#camps" },
              { title: "Pricing", href: "#pricing" },
              { title: "Schedule", href: "#schedule" },
              { title: "Facilities", href: "#facilities" },
              { title: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-stone-700 hover:text-stone-500 transition-colors duration-200 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Button className="bg-[#377c48] hover:bg-[#2d633b] text-white font-medium py-3 px-6 rounded-lg transition-all">
              Book Now
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
