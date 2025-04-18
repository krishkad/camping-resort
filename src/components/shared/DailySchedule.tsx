"use client";
import React, { useState } from "react";
import { dailySchedule } from "@/data/camps";
import {
  Sun,
  Utensils,
  Mountain,
  Droplet,
  TreeDeciduous,
  Flame,
  Clock,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const DailySchedule = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Map for icon selection
  const iconMap = {
    sun: Sun,
    utensils: Utensils,
    mountain: Mountain,
    droplet: Droplet,
    "tree-deciduous": TreeDeciduous,
    campfire: Flame, // Changed from Campfire to Flame which is available in lucide-react
  };

  const getIcon = (iconName: string) => {
    //  @ts-expect-error - This is a dynamic component selection
    const IconComponent = iconMap[iconName] || Sun;
    return <IconComponent className="text-white" />;
  };

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Forest background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#22422b]/90 via-[#284f32]/80 to-[#22422b]/90"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
            Daily Itinerary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            Your Perfect Day at WildHaven
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Experience a balanced blend of adventure, relaxation, and connection
            with stone throughout your stay.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 -ml-px h-full w-1 bg-gradient-to-b from-[#64b179]/30 via-[#64b179]/50 to-[#64b179]/30 rounded-full"></div>

          <div className="space-y-28 md:space-y-24">
            {dailySchedule.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* For desktop - alternate layout */}
                <div className="hidden md:flex items-center">
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-16 text-right" : "order-last pl-16"
                    }`}
                  >
                    <div
                      className={`transform transition-all duration-500 ${
                        activeItem === index ? "scale-105" : ""
                      }`}
                    >
                      <div className="inline-block px-3 py-1 bg-[#d68734]/20 backdrop-blur-sm text-green-100 rounded-full text-sm font-medium mb-3">
                        {item.time}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.activity}
                      </h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>

                  <HoverCard>
                    <HoverCardTrigger>
                      <div
                        className={`z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#dea253] to-[#c26a27] text-white shadow-lg transition-all duration-500 ${
                          activeItem === index
                            ? "scale-125 shadow-[#d68734]/50"
                            : "scale-100"
                        }`}
                      >
                        <div className="animate-bounce-subtle">
                          {getIcon(item.icon)}
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="glass-card bg-white/90 backdrop-blur-md border-[#f0dab3] shadow-xl">
                      <div className="text-center">
                        <h4 className="font-bold text-[#834223]">
                          {item.activity}
                        </h4>
                        <p className="text-sm text-[#c26a27]">{item.time}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "order-last pl-16" : "pr-16 text-right"
                    }`}
                  ></div>
                </div>

                {/* For mobile */}
                <div className="md:hidden flex">
                  <div className="flex-shrink-0 relative">
                    <div className="absolute h-full w-0.5 bg-gradient-to-b from-[#dea253]/30 via-[#dea253]/50 to-[#dea253]/30 left-6 z-0"></div>
                    <HoverCard>
                      <HoverCardTrigger>
                        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#dea253] to-[#c26a27] text-white shadow-lg relative">
                          {getIcon(item.icon)}
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="glass-card bg-white/90 backdrop-blur-md border-green-200">
                        <div className="text-center">
                          <h4 className="font-bold text-green-800">
                            {item.activity}
                          </h4>
                          <p className="text-sm text-[#c26a27]">{item.time}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <div className="ml-6 glass-card bg-white/10 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#d68734] w-full">
                    <span className="inline-block px-2 py-0.5 bg-[#d68734]/20 text-green-100 rounded-full text-xs font-medium mb-2">
                      {item.time}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.activity}
                    </h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block glass-card bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="text-[#e7c081] mr-2" />
              <p className="text-white/90 italic">
                <span className="text-[#e7c081] font-semibold">Note:</span> The
                schedule may vary based on weather conditions and seasonal
                activities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DailySchedule;
