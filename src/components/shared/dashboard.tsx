"use client";
import React from "react";
import { GiMoneyStack } from "react-icons/gi";
import { MdAddHome } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { BookingDynamics } from "./booking-dynamics";
import RecentBooking from "./recent-booking";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      {/* CARDS  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="w-full h-32 rounded-md border border-gray-200 hover:shadow-md transition-all duration-300 p-4 flex flex-col justify-between bg-white">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-lg font-bold">Revenue</h1>
              <p className="text-sm">Current Month</p>
            </div>
            <GiMoneyStack className="w-10 h-10 shrink-0 text-green-700" />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">
              3432.<span className="text-base font-bold text-gray-500">34</span>{" "}
              ₹
            </h1>
          </div>
        </div>
        <div className="w-full h-32 rounded-md border border-gray-200 hover:shadow-md transition-all duration-300 p-4 flex flex-col justify-between bg-white">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-lg font-bold">Total Bookings</h1>
              <p className="text-sm">This Month</p>
            </div>
            <CiCalendarDate className="w-10 h-10 shrink-0 text-[#FE7743]" />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">112</h1>
          </div>
        </div>
        <div className="w-full h-32 rounded-md border border-gray-200 hover:shadow-md transition-all duration-300 p-4 flex flex-col justify-between bg-white">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-lg font-bold">Occupancy</h1>
              <p className="text-sm">Camps empty this month</p>
            </div>
            <MdAddHome className="w-10 h-10 shrink-0 text-yellow-500" />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">3</h1>
          </div>
        </div>
        <div className="w-full h-32 rounded-md border border-gray-200 hover:shadow-md transition-all duration-300 p-4 flex flex-col justify-between bg-white">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-lg font-bold">Guest Satisfaction</h1>
              <p className="text-sm">Overall</p>
            </div>
            <FaHeartCirclePlus className="w-10 h-10 shrink-0 text-blue-300" />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">4.9</h1>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="w-full border border-gray-200 hover:shadow-md transition-all duration-200 rounded-md p-4 bg-white">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-base font-bold">Upcoming Check-ins & Check-outs</h3>
            <Button
              variant={"outline"}
              size={"icon"}
              className="border-gray-200"
              onClick={() => router.push("/v1/bookings")}
            >
              <ArrowRight />
            </Button>
          </div>

          <div className="w-full mt-4">
            <RecentBooking />
          </div>
        </div>
        <div className="w-full border border-gray-200 hover:shadow-md transition-all duration-200 rounded-md p-4 bg-white">
          <h3 className="text-base font-bold">Daily Revenue (This Week)</h3>

          <div className="w-full mt-4">
            <BookingDynamics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
