import React from "react";
import { facilities } from "@/data/camps";
import {
  ShowerHead,
  Utensils,
  Wifi,
  Backpack,
  Heart,
  ShoppingCart,
} from "lucide-react";

const Facilities = () => {
  // Map for icon selection
  const iconMap = {
    "shower-head": ShowerHead,
    utensils: Utensils,
    wifi: Wifi,
    backpack: Backpack,
    "first-aid": Heart,
    "shopping-cart": ShoppingCart,
  };

  const getIcon = (iconName: string) => {
    // @ts-ignore - This is a dynamic component selection
    const IconComponent = iconMap[iconName] || ShowerHead;
    return <IconComponent size={36} className="text-stone-500" />;
  };

  return (
    <section className="bg-[#f1f9f3]">
      <section id="facilities" className="container-section">
        <h2 className="section-title text-center text-[#284f32]">Our Facilities</h2>
        <p className="section-subtitle text-center">
          Enjoy the perfect blend of wilderness and comfort with our modern
          amenities and facilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-[#dcf0e0] p-3 mr-4">
                  {getIcon(facility.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#284f32]">
                  {facility.name}
                </h3>
              </div>
              <p className="text-[#377c48]">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                Sustainable Facilities
              </h3>
              <p className="text-stone-600 mb-6">
                All our facilities are designed with sustainability in mind. We
                use solar power, rainwater harvesting, and eco-friendly products
                throughout our campsite.
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-stone-500 rounded-full mr-2"></span>
                  <span>Solar-powered electricity and heating</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-stone-500 rounded-full mr-2"></span>
                  <span>Rainwater collection and filtration system</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-stone-500 rounded-full mr-2"></span>
                  <span>Biodegradable toiletries and cleaning products</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-stone-500 rounded-full mr-2"></span>
                  <span>Waste composting and recycling program</span>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Sustainable camping facilities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Facilities;
