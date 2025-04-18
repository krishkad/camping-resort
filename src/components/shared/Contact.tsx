"use client"
import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="container-section">
      <h2 className="section-title text-center text-[#284f32]">Get In Touch</h2>
      <p className="section-subtitle text-center">
        Have questions about our camps or want to make a booking? Reach out to us and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl font-bold text-[#284f32] mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#dcf0e0] p-3 rounded-full mr-4">
                <Phone className="text-[#377c48]" />
              </div>
              <div>
                <h4 className="font-bold text-[#284f32]">Phone</h4>
                <p className="text-[#377c48]">+1 (555) 123-4567</p>
                <p className="text-[#377c48]">Available 9AM-5PM, Monday-Friday</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#dcf0e0] p-3 rounded-full mr-4">
                <Mail className="text-[#377c48]" />
              </div>
              <div>
                <h4 className="font-bold text-[#284f32]">Email</h4>
                <p className="text-[#377c48]">info@wildhavencamps.com</p>
                <p className="text-[#377c48]">bookings@wildhavencamps.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#dcf0e0] p-3 rounded-full mr-4">
                <MapPin className="text-[#377c48]" />
              </div>
              <div>
                <h4 className="font-bold text-[#284f32]">Location</h4>
                <p className="text-[#377c48]">123 Forest Road, Wilderness Valley</p>
                <p className="text-[#377c48]">Pine Ridge, CA 98765, USA</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#dcf0e0] p-3 rounded-full mr-4">
                <Clock className="text-[#377c48]" />
              </div>
              <div>
                <h4 className="font-bold text-[#284f32]">Office Hours</h4>
                <p className="text-[#377c48]">Monday - Friday: 9AM - 5PM</p>
                <p className="text-[#377c48]">Saturday: 10AM - 2PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#284f32] mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#dcf0e0] p-3 rounded-full hover:bg-[#bde0c5] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#377c48]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-[#dcf0e0] p-3 rounded-full hover:bg-[#bde0c5] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#377c48]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-[#dcf0e0] p-3 rounded-full hover:bg-[#bde0c5] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#377c48]">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-[#284f32] mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-stone-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-[#bde0c5] rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-stone-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 border border-[#bde0c5] rounded-lg"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-stone-700 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                className="w-full p-3 border border-[#bde0c5] rounded-lg"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-stone-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="w-full p-3 border border-[#bde0c5] rounded-lg min-h-[150px]"
                required
              />
            </div>
            
            <Button type="submit" className="btn-primary flex items-center gap-2">
              Send Message <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
