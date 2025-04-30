import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Booking } from "@/constants/index.c";
import { ScrollArea } from "../ui/scroll-area";

const BookingDeleteModel = ({
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
          <DialogTitle>Delete Booking</DialogTitle>
          <DialogDescription>
            Are you sure, about deleting this booking. Click delete when you&apos;re sure.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="w-full h-max">
          <div className="w-full h-max">
            <div className="w-full flex gap-4">
                <Label>Name</Label>
                <h2 className="text-base font-semibold">
                    {booking.clientName}
                </h2>
            </div>
            <div className="w-full flex gap-4 mt-4">
                <Label>Email</Label>
                <h2 className="text-base font-semibold">
                    {booking.email}
                </h2>
            </div>
            <div className="w-full flex gap-4 mt-4">
                <Label>Room Type</Label>
                <h2 className="text-base font-semibold">
                    {booking.roomType}
                </h2>
            </div>

            <DialogFooter className="w-full mt-4">
              <Button className="w-full" type="submit">
                Yes, Delete
              </Button>
            </DialogFooter>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDeleteModel;
