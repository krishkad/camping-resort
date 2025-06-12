"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  CheckCircle,
  Info,
  SquareDotIcon,
  User,
  Users
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";

const Booking = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    roomType: "Deluxe",
    CheckInDate: new Date(),
    CheckOutDate: new Date(),
    FoodPreference: "Veg",
    numberOfAdults: 2,
    numberOfKids: 0,
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Booking form submitted");
    console.log({ data });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/booking/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            clientName: data.name,
            phoneNumber: data.phoneNo,
            checkInDate: data.CheckInDate,
            checkOutDate: data.CheckOutDate,
            foodPreference: data.FoodPreference,
          }),
        }
      );

      const res = await response.json();

      if (!res.success) {
        console.log("failed to create booking: ", res.message);
        return;
      }

      localStorage.setItem("booking", JSON.stringify(res.data));
      router.push('/#booking')
    } catch (error: any) {
      console.log("failed to request a booking: ", error);
    }
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
          <h2 className="section-title text-center">
            Booking Request Received!
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Thank you for your booking request. Our team will review your
            request and get back to you within 24 hours to confirm your
            reservation.
          </p>
          <div className="bg-stone-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-stone-800 mb-4">
              Booking Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-stone-600">Name:</p>
                <p className="font-medium">{data.name}</p>
              </div>
              <div>
                <p className="text-stone-600">Dates:</p>
                <p className="font-medium">
                  {data.CheckInDate ? format(data.CheckInDate, "PPP") : "-"} to{" "}
                  {data.CheckOutDate ? format(data.CheckOutDate, "PPP") : "-"}
                </p>
              </div>
              <div>
                <p className="text-stone-600">Guests:</p>
                <p className="font-medium">
                  {data.numberOfAdults} Adults, {data.numberOfKids} Children
                </p>
              </div>
            </div>
          </div>
          <Button onClick={() => setIsSubmitted(false)} className="btn-outline">
            Make Another Booking
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="container-section bg-white">
      <h2 className="section-title text-center text-[#284f32]">
        Book Your Stay
      </h2>
      <p className="section-subtitle text-center">
        Ready for an unforgettable camping experience? Book your stay with us
        now and prepare for adventure.
      </p>

      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-[#377c48] p-6 text-white">
          <h3 className="text-2xl font-bold">Reservation Details</h3>
          <p>Fill out the form below to request a booking</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="guest_name" className="text-stone-700">
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                onChange={onChangeHandler}
                placeholder="arjun patil"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-stone-700">
                Your E-mail
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={onChangeHandler}
                placeholder="arjun@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneno" className="text-stone-700">
                Your Phone No. (WhatsApp)
              </Label>
              <Input
                id="phoneNo"
                type="phoneNo"
                name="phoneNo"
                onChange={onChangeHandler}
                placeholder="49783*****"
              />
            </div>
            <div className="w-full space-y-2">
              <Label htmlFor="roomType" className="text-right">
                Room Type
              </Label>
              <Select
                defaultValue={data.roomType}
                onValueChange={(value) => {
                  setData({ ...data, roomType: value });
                }}
              >
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="border-gray-300">
                  <SelectGroup>
                    <SelectLabel>Type</SelectLabel>
                    <SelectItem value="Deluxe">Deluxe</SelectItem>
                    <SelectItem value="Suite">Suite</SelectItem>
                    <SelectItem value="Standard">Standard</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkInDate" className="text-stone-700">
                Check-in Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border border-stone-200",
                      !data.CheckInDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {data.CheckInDate ? (
                      format(data.CheckInDate, "PPP")
                    ) : (
                      <span>Select check-in date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={data.CheckInDate}
                    onSelect={(value) =>
                      setData({
                        ...data,
                        CheckInDate: value ? value : new Date(),
                      })
                    }
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-stone-700">
                Check-out Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border border-stone-200",
                      !data.CheckOutDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {data.CheckOutDate ? (
                      format(data.CheckOutDate, "PPP")
                    ) : (
                      <span>Select check-out date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={data.CheckOutDate}
                    onSelect={(value) =>
                      setData({
                        ...data,
                        CheckOutDate: value ? value : new Date(),
                      })
                    }
                    initialFocus
                    disabled={(date) =>
                      date < (new Date() || date < (date || new Date()))
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="food" className="text-stone-700">
              Food
            </Label>
            <RadioGroup
              defaultValue={data.FoodPreference}
              className="flex items-center justify-start gap-4"
              onValueChange={(value) =>
                setData({ ...data, FoodPreference: value })
              }
            >
              <div className="w-40">
                <RadioGroupItem
                  value="Veg"
                  id="Veg"
                  className=" peer sr-only aspect-square"
                  aria-label="Veg"
                />
                <Label
                  htmlFor="Veg"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <SquareDotIcon className="mb-2 h-6 w-6 text-green-600" />
                  Veg
                </Label>
              </div>
              <div className="w-40">
                <RadioGroupItem
                  value="Non_Veg"
                  id="Non_Veg"
                  className="peer sr-only aspect-square"
                  aria-label="Non_Veg"
                />
                <Label
                  htmlFor="Non_Veg"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <SquareDotIcon className="mb-2 h-6 w-6 text-red-500" />
                  Non Veg
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="adults" className="text-stone-700">
                Adults
              </Label>
              <div className="flex items-center">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() =>
                    setData({
                      ...data,
                      numberOfAdults: Math.max(0, data.numberOfAdults - 1),
                    })
                  }
                >
                  -
                </Button>
                <Input
                  id="adults"
                  type="number"
                  value={data.numberOfAdults}
                  name="numberOfAdults"
                  onChange={(e) =>
                    setData({
                      ...data,
                      numberOfAdults: parseInt(e.target.value),
                    })
                  }
                  min="1"
                  className="h-9 text-center rounded-none w-20"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() =>
                    setData({
                      ...data,
                      numberOfAdults: Math.max(0, data.numberOfAdults + 1),
                    })
                  }
                >
                  +
                </Button>
                <User className="ml-4 text-stone-500" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="children" className="text-stone-700">
                Children
              </Label>
              <div className="flex items-center">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() =>
                    setData({
                      ...data,
                      numberOfKids: Math.max(0, data.numberOfKids - 1),
                    })
                  }
                >
                  -
                </Button>
                <Input
                  id="numberOfKids"
                  type="number"
                  value={data.numberOfKids}
                  name="numberOfKids"
                  onChange={(e) =>
                    setData({ ...data, numberOfKids: parseInt(e.target.value) })
                  }
                  min="0"
                  className="h-9 text-center rounded-none w-20"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() =>
                    setData({
                      ...data,
                      numberOfKids: Math.max(0, data.numberOfKids + 1),
                    })
                  }
                >
                  +
                </Button>
                <Users className="ml-4 text-stone-500" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="special" className="text-stone-700">
              Special Requests (if any )
            </Label>
            <Textarea
              id="special"
              name="specialRequests"
              onChange={(value) => {
                setData({
                  ...data,
                  specialRequests: value.target.value,
                });
              }}
              placeholder="Any special requests or requirements?"
              className="w-full p-3 border border-stone-200 rounded-lg min-h-[100px]"
            ></Textarea>
          </div>

          <div className="bg-[#f1f9f3] p-4 rounded-lg flex items-start space-x-3">
            <Info className="text-[#377c48] mt-1 flex-shrink-0" />
            <p className="text-sm text-[#377c48]">
              This is a booking request only. Our team will confirm availability
              and contact you for payment details. A 30% deposit is required to
              secure your booking.
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
