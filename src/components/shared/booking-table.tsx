"use client";
import {
  BookingStatus,
  CheckInStatus,
  PaymentStatusD,
} from "@/constants/index.c";
import { useBookings } from "@/hooks/use-bookings";
import {
  cn,
  deleteBooking as delBookingFunc,
  getBookingStatus,
  getCheckInStatus,
  getPaymentStatus,
  updateBooking as updateBookingFunc,
} from "@/lib/utils";
import { BookingD } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Share2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { LuSquareDot } from "react-icons/lu";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import BookingDeleteModel from "./booking-delete-model";
import BookingModel from "./booking-model";
import DataTable from "./data-table";

const BookingTable = () => {
  const { bookingData, loading, error } = useBookings();
  const [open, setOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [deleteBooking, setDeleteBooking] = useState<BookingD | undefined>(
    undefined
  );
  const [updateBooking, setUpdateBooking] = useState<BookingD | undefined>(
    undefined
  );

  if (
    !bookingData &&
    bookingData !== null &&
    !loading &&
    bookingData === undefined &&
    error === "not authorized"
  ) {
    return <>ok</>;
  }

  const [data, setData] = useState<BookingD[] | null>(null);

  useEffect(() => {
    if (!bookingData) return;
    setData(bookingData);
  }, [bookingData]);

  const columns: ColumnDef<BookingD>[] = [
    {
      accessorKey: "clientName",
      header: "Guest Name",
      cell: ({ row }) => (
        <div className="capitalize font-medium">
          {row.getValue("clientName")}
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase font-medium">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "phoneNumber",
      header: () => <div className="text-right">Phone No.</div>,
      cell: ({ row }) => {
        const phoneno: string = row.getValue("phoneNumber");

        return <div className="text-right font-medium">{phoneno}</div>;
      },
    },
    {
      accessorKey: "checkInDate",
      header: () => <div className="text-right">Check In</div>,
      cell: ({ row }) => {
        const checkInDate = row.getValue("checkInDate");
        const date = new Date(checkInDate as string);

        const day = String(date.getUTCDate()).padStart(2, "0");
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const year = date.getUTCFullYear();

        const formatted = `${day}-${month}-${year}`;

        return (
          <div className="text-right font-medium ml-4">
            {formatted as string}
          </div>
        );
      },
    },
    {
      accessorKey: "checkOutDate",
      header: () => <div className="text-right">Check Out</div>,
      cell: ({ row }) => {
        const checkOutDate = row.getValue("checkOutDate");
        const date = new Date(checkOutDate as string);

        const day = String(date.getUTCDate()).padStart(2, "0");
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const year = date.getUTCFullYear();

        const formatted = `${day}-${month}-${year}`;

        return (
          <div className="text-right font-medium ml-4">
            {formatted as string}
          </div>
        );
      },
    },
    {
      accessorKey: "numberOfAdults",
      header: () => <div className="text-right">No. of Adults</div>,
      cell: ({ row }) => {
        const numberOfAdults = parseFloat(row.getValue("numberOfAdults"));

        return <div className="text-right font-medium">{numberOfAdults}</div>;
      },
    },
    {
      accessorKey: "numberOfKids",
      header: () => <div className="text-right">No. of Guest</div>,
      cell: ({ row }) => {
        const numberOfKids = parseFloat(row.getValue("numberOfKids"));

        return <div className="text-right font-medium">{numberOfKids}</div>;
      },
    },
    {
      accessorKey: "roomType",
      header: () => <div className="text-right">Room Type</div>,
      cell: ({ row }) => {
        const roomType: string = row.getValue("roomType");

        return (
          <div className="flex items-center space-x-3 ml-4">
            <div
              className={cn(
                "w-1 h-6 rounded-full",
                roomType === "Standard"
                  ? "bg-yellow-500"
                  : roomType === "Deluxe"
                  ? "bg-blue-600"
                  : roomType === "Suite"
                  ? "bg-purple-600"
                  : "bg-gray-500"
              )}
            ></div>
            <span className="text-sm font-medium text-gray-700">
              {roomType}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "foodPreference",
      header: () => <div className="text-right">Food</div>,
      cell: ({ row }) => {
        const foodPreference = row.getValue("foodPreference");

        return (
          <div className="flex items-center gap-1 text-right font-medium">
            <LuSquareDot
              className={
                foodPreference === "Veg" ? "text-green-600" : "text-red-500"
              }
            />
            {foodPreference === "Veg"
              ? "Veg"
              : foodPreference === "Non_Veg"
              ? "Non-Veg"
              : "default"}
          </div>
        );
      },
    },
    {
      accessorKey: "roomNumber",
      header: () => <div className="text-right">Room Number</div>,
      cell: ({ row }) => {
        const roomNumber = row.getValue("roomNumber");

        return (
          <div className="text-right font-medium">{roomNumber as string}</div>
        );
      },
    },
    {
      accessorKey: "checkInStatus",
      header: () => <div className="text-right">Check-In Status</div>,
      cell: ({ row }) => {
        const checkInStatus = row.getValue("checkInStatus");
        const checkStatus =
          checkInStatus === "NotCheckedIn"
            ? "Not Checked-in"
            : checkInStatus === "CheckedIn"
            ? "Checked-in"
            : "Checked-out";
        return (
          <div className="text-right font-medium">
            <Badge
              className={cn(
                getCheckInStatus(checkStatus as CheckInStatus, "text"),
                getCheckInStatus(checkStatus as CheckInStatus, "bg")
              )}
            >
              {checkStatus as string}
            </Badge>
          </div>
        );
      },
    },
    {
      accessorKey: "bookingStatus",
      header: () => <div className="text-right">Booking Status</div>,
      cell: ({ row }) => {
        const bookingStatus = row.getValue("bookingStatus");
        const bookStatus =
          bookingStatus === "Pending"
            ? "Pending"
            : bookingStatus === "Confirmed"
            ? "Confirmed"
            : "Cancelled";
        return (
          <div className="text-right font-medium">
            <Badge
              className={cn(
                getBookingStatus(bookStatus as BookingStatus, "text"),
                getBookingStatus(bookStatus as BookingStatus, "bg")
              )}
            >
              {bookStatus as string}
            </Badge>
          </div>
        );
      },
    },
    {
      accessorKey: "paymentStatus",
      header: () => <div className="text-right">Payment Status</div>,
      cell: ({ row }) => {
        const paymentStatus = row.getValue("paymentStatus");

        return (
          <div className="text-right font-medium">
            <Badge
              className={cn(
                getPaymentStatus(paymentStatus as PaymentStatusD, "text"),
                getPaymentStatus(paymentStatus as PaymentStatusD, "bg")
              )}
            >
              {paymentStatus as string}
            </Badge>
          </div>
        );
      },
    },
    {
      accessorKey: "specialRequests",
      header: () => <div className="text-right">Special Requests</div>,
      cell: ({ row }) => {
        const specialRequest = row.getValue("specialRequests");

        return (
          <div className="text-right font-medium">
            {specialRequest as string}
          </div>
        );
      },
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Total Amount</div>,
      cell: ({ row }) => {
        const amount = row.getValue("amount");

        return <div className="text-right font-medium">{amount as string}</div>;
      },
    },
    {
      id: "editActions",
      enableHiding: false,
      cell: ({ row }) => {
        // const payment = row.original;

        return (
          <FiEdit
            className="w-4 h-4 ml-3 text-yellow-500 cursor-pointer"
            onClick={() => {
              setOpen(true);
              setUpdateBooking({
                ...row.original,
              });
            }}
          />
        );
      },
    },

    {
      id: "share",
      enableHiding: false,
      cell: ({ row }) => {
        // const payment = row.original;

        return (
          <Share2Icon
            className="w-4 h-4  text-green-700 cursor-pointer"
            onClick={() => {
              setDeleteOpen(true);
              setDeleteBooking({
                ...row.original,
              });
            }}
          />
        );
      },
    },
    {
      id: "deleteActions",
      enableHiding: false,
      cell: ({ row }) => {
        // const payment = row.original;

        return (
          <IoMdTrash
            className="w-4 h-4 mr-3 text-red-500 cursor-pointer"
            onClick={() => {
              setDeleteOpen(true);
              setDeleteBooking({
                ...row.original,
              });
            }}
          />
        );
      },
    },
  ];

  useEffect(() => {
    setData(bookingData);
  }, [bookingData]);

  const delBooking = async (id: string) => {
    if (!id) {
      console.log("no id");
    }
    console.log({ id });
    const { booking, error } = await delBookingFunc(id);
    console.log({ booking });
    if (!error && booking) {
      const filteredData = data?.filter((item) => item.id !== booking!.id);
      console.log({ filteredData });
      setData(filteredData!);
      toast.success("Deletion successful");
      // toast.success("Deletion successul");
    } else {
      toast.warning("Deletion unsuccessful");
    }
  };
  const upBooking = async (bookingProps: BookingD) => {
    if (!bookingProps) {
      console.log("no id");
    }
    console.log({ bookingProps });
    const { booking, error } = await updateBookingFunc(bookingProps);

    if (!error && booking) {
      const filteredData = data?.filter((item) => item.id !== booking!.id);
      filteredData?.push(booking);
      setData(filteredData!);
      toast.success("Update successfully");
      // toast.success("Deletion successul");
    } else {
      console.log({ error, booking });
      toast.warning("Update unsuccessful");
    }
  };

  return (
    <>
      <DataTable
        key={JSON.stringify(data)}
        columns={columns}
        data={data !== null && data !== undefined ? data : []}
      />
      ;
      <BookingModel
        open={open}
        onOpenChange={setOpen}
        booking={updateBooking}
        upBooking={upBooking}
      />
      <BookingDeleteModel
        delBooking={delBooking}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        booking={deleteBooking}
      />
    </>
  );
};

export default BookingTable;
