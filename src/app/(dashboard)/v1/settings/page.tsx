"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import CampsiteForm from "@/components/shared/campsites-form";

const SettingsPage = () => {
  return (
    <div className="w-full space-y-5">
      <CampsiteForm />

      {/* HOLIDAY SECTION  */}
      <div className="max-w-4xl mx-auto bg-white">
        <div className="w-full p-4 rounded-md border border-gray-200 hover:shadow-md transition-all duration-300">
          <div className="w-full">
            <h2 className="text-base font-medium">Holiday Declaration</h2>
          </div>
          <div className="w-full mt-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="w-full">
                <Label>Holiday Name</Label>
                <Input placeholder="eg. maintance" className="mt-1" />
              </div>
              <div className="w-full">
                <Label>Holiday Description</Label>
                <Input placeholder="eg. We'll open soon" className="mt-1" />
              </div>
              <div className="w-full">
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal mt-1",
                        !false && "text-muted-foreground"
                      )}
                    >
                      {false ? (
                        // format(field.value, "PPP")
                        <span>Pick a date</span>
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 border-gray-200"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={new Date()}
                      onSelect={() => {}}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full">
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal mt-1",
                        !false && "text-muted-foreground"
                      )}
                    >
                      {false ? (
                        // format(field.value, "PPP")
                        <span>Pick a date</span>
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 border-gray-200"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={new Date()}
                      onSelect={() => {}}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="w-full mt-4">
              <Button className="w-full">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
