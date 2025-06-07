"use client";

import * as React from "react";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function Calendar22({
  dateProp,
  label,
}: {
  dateProp: Date | string;
  label: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | string | undefined>(undefined);

  React.useEffect(() => {
    if (!dateProp) return;
    setDate(dateProp);
  }, [dateProp]);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal border-gray-200",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(new Date(date), "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0 pointer-events-auto"
          align="start"
          forceMount
        >
          <Calendar
            mode="single"
            selected={date ? new Date(date) : undefined}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
