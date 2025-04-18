"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Gallery data
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    caption: "Serene wilderness with breathtaking mountain views",
    alt: "Mountain landscape with deer"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    caption: "Crystal clear rivers winding through ancient forests",
    alt: "River flowing through mountains"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    caption: "Towering pine forests under endless blue skies",
    alt: "Pine forest vista"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    caption: "Tranquil lakes reflect the beauty of stone",
    alt: "Lake surrounded by trees"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    caption: "Wildflower meadows burst with vibrant colors",
    alt: "Wildflower meadow"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Functions for lightbox
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-stone-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#f8eed9] text-[#834223] rounded-full text-sm font-medium mb-4">
            Our Moments
          </span>
          <h2 className="section-title text-[#284f32]">Captured Wilderness Beauty</h2>
          <p className="section-subtitle">
            Experience the stunning natural landscapes and magical moments at our luxury camping destinations
          </p>
        </motion.div>

        {/* Main Gallery - Desktop View */}
        <div className="hidden md:block">
          <motion.div 
            className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Feature image (larger) */}
            <motion.div 
              variants={itemVariants}
              className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img 
                src={galleryImages[0].url} 
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-lg font-medium">{galleryImages[0].caption}</p>
                <Button 
                  variant="outline" 
                  className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                  onClick={() => openLightbox(0)}
                >
                  <Expand size={16} className="mr-2" />
                  View Larger
                </Button>
              </div>
            </motion.div>

            {/* Smaller images */}
            {galleryImages.slice(1, 5).map((image, index) => (
              <motion.div 
                key={image.id}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <Expand size={14} className="mr-1" />
                    View
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id}>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">{image.caption}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                        onClick={() => openLightbox(index)}
                      >
                        <Expand size={14} className="mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-12">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl mx-auto">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-0 right-0 text-white z-10"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Button>
            
            <div className="flex items-center justify-center">
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute left-4 text-white"
                onClick={prevImage}
              >
                <ChevronLeft size={28} />
              </Button>
              
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
              
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-4 text-white"
                onClick={nextImage}
              >
                <ChevronRight size={28} />
              </Button>
            </div>
            
            <div className="text-center text-white mt-4">
              <p className="text-lg">{galleryImages[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
