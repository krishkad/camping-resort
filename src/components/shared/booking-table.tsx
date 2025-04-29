"use client";
import React, { useState } from "react";
import DataTable from "./data-table";
import {
  Booking,
  BookingStatus,
  CheckInStatus,
  bookings,
  PaymentStatus,
} from "@/constants/index.c";
import { Badge } from "../ui/badge";
import {
  cn,
  getBookingStatus,
  getCheckInStatus,
  getPaymentStatus,
} from "@/lib/utils";
import { FiEdit } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { LuSquareDot } from "react-icons/lu";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import BookingModel from "./booking-model";

const BookingTable = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [updateBooking, setUpdateBooking] = useState<Booking | undefined>(
    undefined
  );

  const columns: ColumnDef<Booking>[] = [
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

        return (
          <div className="text-right font-medium ml-4">
            {checkInDate as string}
          </div>
        );
      },
    },
    {
      accessorKey: "checkOutDate",
      header: () => <div className="text-right">Check In</div>,
      cell: ({ row }) => {
        const checkOutDate = row.getValue("checkOutDate");

        return (
          <div className="text-right font-medium ml-4">
            {checkOutDate as string}
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
            {foodPreference as string}
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

        return (
          <div className="text-right font-medium">
            <Badge
              className={cn(
                getCheckInStatus(checkInStatus as CheckInStatus, "text"),
                getCheckInStatus(checkInStatus as CheckInStatus, "bg")
              )}
            >
              {checkInStatus as string}
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

        return (
          <div className="text-right font-medium">
            <Badge
              className={cn(
                getBookingStatus(bookingStatus as BookingStatus, "text"),
                getBookingStatus(bookingStatus as BookingStatus, "bg")
              )}
            >
              {bookingStatus as string}
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
                getPaymentStatus(paymentStatus as PaymentStatus, "text"),
                getPaymentStatus(paymentStatus as PaymentStatus, "bg")
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
      id: "deleteActions",
      enableHiding: false,
      cell: ({}) => {
        // const payment = row.original;

        return <IoMdTrash className="w-4 h-4 mx-3 text-red-500" />;
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={bookings} />;
      <BookingModel open={open} onOpenChange={setOpen} booking={updateBooking} />
    </>
  );
};

export default BookingTable;
