"use client";
import React from "react";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-dvh overflow-hidden">
      {/* Hero Background Image with Video Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Serene luxury camping in stone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-6 space-x-2"
          >
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white/90 text-sm font-medium flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
              <span>4.9/5 from over 200+ reviews</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Luxurious <span className="text-[#dea253]">Wilderness</span>
            <br />
            <span className="relative">
              Retreats
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 358 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 17C36.8 8.2 175.5 -4.5 355 12.5"
                  stroke="#D68734"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
          >
            Experience the perfect blend of luxury and stone in our exclusive
            glamping destinations. Unplug, unwind, reconnect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
            href={"#"}
              className={cn("group", buttonVariants({variant: "default"}), "py-6")}
              onClick={() => scrollToSection("camps")}
            >
              <div className="flex items-center gap-2 text-lg px-8">
                Explore Camps
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </div>
            </Link>
            <Button
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/40 text-lg px-8 py-6"
              onClick={() => scrollToSection("pricing")}
            >
              View Pricing
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/80 flex flex-col items-center"
        >
          <span className="text-sm font-light mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 z-0 opacity-30 hidden lg:block">
        <div className="w-64 h-64 rounded-full border-2 border-white/20 animate-pulse-slow"></div>
      </div>
      <div className="absolute bottom-20 left-20 z-0 opacity-30 hidden lg:block">
        <div
          className="w-40 h-40 rounded-full border-2 border-white/20 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
