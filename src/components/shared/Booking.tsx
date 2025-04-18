"use client"
import React, { useState } from "react";
import { Calendar as CalendarIcon, User, Users, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedCamp, setSelectedCamp] = useState("Forest Haven");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Booking form submitted");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="container-section bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-stone-100 p-4">
              <CheckCircle className="text-stone-600 w-12 h-12" />
            </div>
          </div>
          <h2 className="section-title text-center">Booking Request Received!</h2>
          <p className="text-xl text-stone-600 mb-8">
            Thank you for your booking request. Our team will review your request and get back to you within 24 hours to confirm your reservation.
          </p>
          <div className="bg-stone-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Booking Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-stone-600">Camp:</p>
                <p className="font-medium">{selectedCamp}</p>
              </div>
              <div>
                <p className="text-stone-600">Dates:</p>
                <p className="font-medium">
                  {date ? format(date, "PPP") : "-"} to {endDate ? format(endDate, "PPP") : "-"}
                </p>
              </div>
              <div>
                <p className="text-stone-600">Guests:</p>
                <p className="font-medium">{adults} Adults, {children} Children</p>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            className="btn-outline"
          >
            Make Another Booking
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="container-section bg-white">
      <h2 className="section-title text-center text-[#284f32]">Book Your Stay</h2>
      <p className="section-subtitle text-center">
        Ready for an unforgettable camping experience? Book your stay with us now and prepare for adventure.
      </p>

      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-[#377c48] p-6 text-white">
          <h3 className="text-2xl font-bold">Reservation Details</h3>
          <p>Fill out the form below to request a booking</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="camp" className="text-stone-700">Select Camp</Label>
              <select
                id="camp"
                value={selectedCamp}
                onChange={(e) => setSelectedCamp(e.target.value)}
                className="w-full p-3 border border-stone-200 rounded-lg"
                required
              >
                <option value="Forest Haven">Forest Haven</option>
                <option value="Lakeside Retreat">Lakeside Retreat</option>
                <option value="Mountain Vista">Mountain Vista</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-stone-700">Check-in Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border border-stone-200",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select check-in date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-stone-700">Check-out Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border border-stone-200",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Select check-out date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    disabled={(date) => date < (new Date() || date < (date || new Date()))}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="adults" className="text-stone-700">Adults</Label>
              <div className="flex items-center">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                >
                  -
                </Button>
                <Input
                  id="adults"
                  type="number"
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  min="1"
                  className="h-9 text-center rounded-none w-20"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() => setAdults(adults + 1)}
                >
                  +
                </Button>
                <User className="ml-4 text-stone-500" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="children" className="text-stone-700">Children</Label>
              <div className="flex items-center">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                >
                  -
                </Button>
                <Input
                  id="children"
                  type="number"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  min="0"
                  className="h-9 text-center rounded-none w-20"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() => setChildren(children + 1)}
                >
                  +
                </Button>
                <Users className="ml-4 text-stone-500" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="special" className="text-stone-700">Special Requests</Label>
            <textarea
              id="special"
              placeholder="Any special requests or requirements?"
              className="w-full p-3 border border-stone-200 rounded-lg min-h-[100px]"
            ></textarea>
          </div>
          
          <div className="bg-[#f1f9f3] p-4 rounded-lg flex items-start space-x-3">
            <Info className="text-[#377c48] mt-1 flex-shrink-0" />
            <p className="text-sm text-[#377c48]">
              This is a booking request only. Our team will confirm availability and contact you for payment details. A 30% deposit is required to secure your booking.
            </p>
          </div>
          
          <Button type="submit" className="btn-primary w-full py-6">
            Request Booking
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
