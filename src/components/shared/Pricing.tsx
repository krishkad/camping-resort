"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Weekend Getaway",
    price: 299,
    description: "Perfect for a quick retreat into stone",
    duration: "2 nights",
    features: [
      "Accommodation in standard tent",
      "Breakfast included",
      "Access to basic facilities",
      "Guided morning hike",
      "Campfire experience",
    ],
    popular: false,
  },
  {
    name: "stone Immersion",
    price: 599,
    description: "Our most popular package for the full experience",
    duration: "4 nights",
    features: [
      "Accommodation in premium tent",
      "All meals included",
      "Access to all facilities",
      "Daily guided activities",
      "Campfire experience",
      "Complimentary equipment rental",
      "Welcome gift basket",
    ],
    popular: true,
  },
  {
    name: "Extended Wilderness",
    price: 999,
    description: "For those seeking a deeper connection with stone",
    duration: "7 nights",
    features: [
      "Accommodation in luxury tent",
      "All meals included with special dinners",
      "Access to all facilities with priority",
      "Private guided tours",
      "Campfire experience",
      "Complimentary equipment rental",
      "Welcome gift basket",
      "Personalized itinerary",
      "Complimentary forest spa treatment",
    ],
    popular: false,
  },
];

const Pricing = () => {
  // const [annually, setAnnually] = useState(false);

  return (
    <section className="bg-[#f1f9f3]">
      <section id="pricing" className="container-section">
        <h2 className="section-title text-center text-[#284f32]">
          Simple, Transparent Pricing
        </h2>
        <p className="section-subtitle text-center">
          Choose a package that suits your needs. All packages include access to
          our beautiful camping grounds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 relative ${
                plan.popular ? "border-4 border-[#48995c]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#48995c] text-white px-4 py-1 rounded-bl-lg font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#284f32] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#377c48] mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-[#284f32] mb-1">
                  ${plan.price}
                </div>
                <p className="text-[#377c48] mb-6">
                  per person / {plan.duration}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className="text-[#48995c] shrink-0 mt-1 mr-2"
                        size={18}
                      />
                      <span className="text-[#2d633b]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Book This Package
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#284f32] mb-4">
            Need a custom package?
          </h3>
          <p className="text-[#377c48] mb-6 max-w-2xl mx-auto">
            If you have specific requirements or are planning a group retreat,
            our team can create a personalized package just for you.
          </p>
          <Button className="btn-secondary">Contact For Custom Pricing</Button>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
