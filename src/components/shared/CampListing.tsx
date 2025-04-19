"use client"
import React, { useState } from "react";
import { Star, Users, Tag, ArrowRight, MapPin } from "lucide-react";
import { camps } from "@/data/camps";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CampListing = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="camps" className="container-section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 bg-[#f8eed9] text-[#834223] rounded-full text-sm font-medium mb-4">
            Our Destinations
          </span>
          <h2 className="section-title text-[#284f32]">Extraordinary Camping Experiences</h2>
          <p className="section-subtitle">
            Each of our camps offers a unique way to connect with stone without sacrificing comfort.
            Discover your perfect wilderness retreat.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {camps.map((camp, index) => (
            <motion.div 
              key={camp.id} 
              className={`camp-card group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500`}
              variants={item}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-stone-800">
                    <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                    {camp.rating}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="flex items-center bg-stone-500/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    ${camp.price} <span className="text-xs ml-1">/ night</span>
                  </span>
                </div>
                <img
                  src={camp.image}
                  alt={camp.name}
                  className="camp-card-image h-80 overflow-hidden"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-10 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                
                <div className="mb-2 flex items-center">
                  <MapPin size={16} className="text-[#d68734] mr-1" />
                  <span className="text-[#c26a27] text-sm">Beautiful location</span>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">{camp.name}</h3>
                
                <div className="flex items-center text-stone-600 mb-3">
                  <Users size={16} className="mr-1 flex-shrink-0" />
                  <span>Up to {camp.capacity} guests</span>
                </div>
                
                <p className="text-stone-700 mb-4 line-clamp-2">{camp.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {camp.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="badge badge-earth">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                  {camp.tags.length > 3 && (
                    <span className="badge badge-stone">+{camp.tags.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <Button variant="link" className="p-0 text-stone-600 font-medium hover:text-stone-700 flex items-center">
                    View Details
                    <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button className="">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampListing;
