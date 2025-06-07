import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { BookingD } from "@/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

const BookingModel = ({
  open,
  onOpenChange,
  booking,
  upBooking,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  booking: BookingD | undefined;
  upBooking: (value: BookingD) => void;
}) => {
  const [bookingData, setBookingData] = useState<BookingD | undefined | null>(
    booking
  );

  useEffect(() => {
    setBookingData(booking ?? null);
  }, [booking]);

  if (!bookingData) return null;

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  function parseISOToLocalDate(isoString: string): Date {
    if (!isoString) return new Date();

    const date = new Date(isoString);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[600px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Update Booking</DialogTitle>
          <DialogDescription>
            Make changes to booking here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="w-full max-h-[600px]">
          <div className="w-full h-max">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full space-y-1">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="clientName"
                  value={bookingData.clientName}
                  onChange={onChangeHandler}
                  className="col-span-3"
                />
              </div>

              <div className="w-full space-y-1">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={bookingData.email}
                  onChange={onChangeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone No.
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={bookingData.phoneNumber}
                  onChange={onChangeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomNumber" className="text-right">
                  Room Number
                </Label>
                <Input
                  id="roomNumber"
                  name="roomNumber"
                  value={bookingData.roomNumber!}
                  onChange={onChangeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomNumber" className="text-right">
                  Check-In
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-200",
                        !bookingData.checkInDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {bookingData.checkInDate ? (
                        format(new Date(bookingData.checkInDate), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    forceMount
                    className=" w-auto p-0 border-gray-200 pointer-events-auto"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      className="z-[1000]"
                      selected={
                        bookingData.checkInDate
                          ? new Date(bookingData.checkInDate)
                          : undefined
                      }
                      defaultMonth={new Date(bookingData.checkInDate)}
                      onSelect={(date) => {
                        if (!date) return;
                        setBookingData((prev) => ({
                          ...prev!,
                          checkInDate: date.toISOString(), // store in ISO format
                        }));
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomNumber" className="text-right">
                  Check-Out
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-200",
                        !bookingData.checkOutDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {bookingData.checkOutDate ? (
                        format(new Date(bookingData.checkOutDate), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className=" w-auto p-0 border-gray-200 overflow-visible pointer-events-auto"
                    align="start"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    forceMount
                  >
                    <Calendar
                      mode="single"
                      className="z-50"
                      selected={
                        bookingData.checkOutDate
                          ? parseISOToLocalDate(bookingData.checkOutDate)
                          : new Date(2025, 8, 1) // September is month 8 (0-indexed)
                      }
                      defaultMonth={new Date(bookingData.checkOutDate)}
                      onSelect={(date) => {
                        if (!date) return;
                        setBookingData((prev) => ({
                          ...prev!,
                          checkOutDate: date.toISOString(), // store in ISO format
                        }));
                      }}
                      fromDate={new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="w-full space-y-1">
                  <Label htmlFor="numberOfAdults" className="text-right">
                    No. of Guests
                  </Label>
                  <Input
                    id="numberOfAdults"
                    name="numberOfAdults"
                    value={bookingData.numberOfAdults!}
                    onChange={onChangeHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="w-full space-y-1">
                  <Label htmlFor="numberOfKids" className="text-right">
                    No. of Kids
                  </Label>
                  <Input
                    id="numberOfKids"
                    name="numberOfKids"
                    value={bookingData.numberOfKids!}
                    onChange={onChangeHandler}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="foodPreference" className="text-right">
                  Food Preference
                </Label>
                <Select
                  defaultValue={bookingData.foodPreference}
                  onValueChange={(value) => {
                    setBookingData({
                      ...bookingData,
                      foodPreference: value,
                    } as BookingD);
                  }}
                >
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Food</SelectLabel>
                      <SelectItem value="Veg">Veg</SelectItem>
                      <SelectItem value="Non_Veg">Non-Veg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="checkInStatus" className="text-right">
                  Check-In Status
                </Label>
                <Select
                  defaultValue={bookingData.checkInStatus}
                  onValueChange={(value) =>
                    setBookingData(
                      (prev) =>
                        ({
                          ...prev,
                          checkInStatus: value,
                        } as BookingD)
                    )
                  }
                >
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="CheckedIn">Checked-in</SelectItem>
                      <SelectItem value="NotCheckedIn">
                        Not Checked-in
                      </SelectItem>
                      <SelectItem value="CheckedOut">Checked-out</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="bookingStatus" className="text-right">
                  Booking Status
                </Label>
                <Select
                  defaultValue={bookingData.bookingStatus}
                  onValueChange={(value) =>
                    setBookingData(
                      (prev) =>
                        ({
                          ...prev,
                          bookingStatus: value,
                        } as BookingD)
                    )
                  }
                >
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="paymentStatus" className="text-right">
                  Payment Status
                </Label>
                <Select
                  defaultValue={bookingData.paymentStatus}
                  onValueChange={(value) =>
                    setBookingData(
                      (prev) =>
                        ({
                          ...prev,
                          paymentStatus: value,
                        } as BookingD)
                    )
                  }
                >
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Paid">Paid</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Unpaid">Unpaid</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomType" className="text-right">
                  Room Type
                </Label>
                <Select
                  defaultValue={bookingData.roomType}
                  onValueChange={(value) =>
                    setBookingData(
                      (prev) =>
                        ({
                          ...prev,
                          roomType: value,
                        } as BookingD)
                    )
                  }
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
            </div>
            <div className="w-full space-y-1 mt-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                name="amount"
                value={bookingData.amount!}
                onChange={onChangeHandler}
                className="col-span-3"
              />
            </div>
            <div className="w-full space-y-1 mt-4">
              <Label htmlFor="specialRequests" className="text-right">
                Special Request
              </Label>
              <Textarea
                name="specialRequests"
                id="specialRequests"
                value={bookingData.specialRequests!}
                onChange={onChangeHandler}
                className="col-span-3"
              />
            </div>

            <DialogFooter className="w-full mt-4">
              <Button
                className="w-full"
                type="submit"
                onClick={() => {
                  onOpenChange(false);
                  console.log({ bookingData });
                  upBooking(bookingData!);
                }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModel;
