import { Button } from "@/components/ui/button";
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
import { Booking } from "@/constants/index.c";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";

const BookingModel = ({
  open,
  onOpenChange,
  booking,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  booking: Booking | undefined;
}) => {
  if (booking === undefined) {
    return null;
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Update Booking</DialogTitle>
          <DialogDescription>
            Make changes to booking here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="w-full h-[calc(100vh-200px)]">
          <div className="w-full h-max">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full space-y-1">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={booking.clientName}
                  onChange={() => {}}
                  className="col-span-3"
                />
              </div>

              <div className="w-full space-y-1">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={booking.email}
                  onChange={() => {}}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone No.
                </Label>
                <Input
                  id="phoneNumber"
                  value={booking.phoneNumber}
                  onChange={() => {}}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomNumber" className="text-right">
                  Room Number
                </Label>
                <Input
                  id="roomNumber"
                  value={booking.roomNumber!}
                  onChange={() => {}}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomNumber" className="text-right">
                  Check-In
                </Label>
                <Input
                  id="roomNumber"
                  value={booking.roomNumber!}
                  onChange={() => {}}
                  className="col-span-3"
                />
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomNumber" className="text-right">
                  Check-Out
                </Label>
                <Input
                  id="roomNumber"
                  value={booking.roomNumber!}
                  onChange={() => {}}
                  className="col-span-3"
                />
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="w-full space-y-1">
                  <Label htmlFor="numberOfAdults" className="text-right">
                    No. of Guests
                  </Label>
                  <Input
                    id="numberOfAdults"
                    value={booking.numberOfAdults!}
                    onChange={() => {}}
                    className="col-span-3"
                  />
                </div>
                <div className="w-full space-y-1">
                  <Label htmlFor="numberOfKids" className="text-right">
                    No. of Kids
                  </Label>
                  <Input
                    id="numberOfKids"
                    value={booking.numberOfKids!}
                    onChange={() => {}}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="foodPreference" className="text-right">
                  Food Preference
                </Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue
                      placeholder="Select a fruit"
                      defaultValue={booking.foodPreference}
                    />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Food</SelectLabel>
                      <SelectItem value="Veg">Veg</SelectItem>
                      <SelectItem value="Non-Veg">Non-Veg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="checkInStatus" className="text-right">
                  Check-In Status
                </Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue
                      placeholder="Select a fruit"
                      defaultValue={booking.checkInStatus}
                    />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Checked-in">Checked-in</SelectItem>
                      <SelectItem value="Not Checked-in">
                        Not Checked-in
                      </SelectItem>
                      <SelectItem value="Checked-out">Checked-out</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="bookingStatus" className="text-right">
                  Booking Status
                </Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue
                      placeholder="Select a fruit"
                      defaultValue={booking.bookingStatus}
                    />
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
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue
                      placeholder="Select a fruit"
                      defaultValue={booking.paymentStatus}
                    />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Paid">Paid</SelectItem>
                      <SelectItem value="Partial">Partial</SelectItem>
                      <SelectItem value="Unpaid">Unpaid</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-1">
                <Label htmlFor="roomType" className="text-right">
                  Room Type
                </Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue
                      placeholder="Select a fruit"
                      defaultValue={booking.roomType}
                    />
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
                value={booking.amount!}
                onChange={() => {}}
                className="col-span-3"
              />
            </div>
            <div className="w-full space-y-1 mt-4">
              <Label htmlFor="specialRequests" className="text-right">
                Special Request
              </Label>
              <Textarea
                id="specialRequests"
                value={booking.specialRequests!}
                onChange={() => {}}
                className="col-span-3"
              />
            </div>

            <DialogFooter className="w-full mt-4">
              <Button className="w-full" type="submit">
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
