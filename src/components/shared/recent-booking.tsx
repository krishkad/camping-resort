import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RecentBooking = () => {
  return (
    <Table>
      <TableCaption>A list of your recent camp bookings.</TableCaption>
      <TableHeader>
        <TableRow className="border-gray-300">
          <TableHead className="w-[120px]">Booking ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Camp</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-gray-300">
          <TableCell className="font-medium">CB001</TableCell>
          <TableCell>Aarav Mehta</TableCell>
          <TableCell>Mountain Trek</TableCell>
          <TableCell>2025-05-10</TableCell>
          <TableCell className="text-right">Confirmed</TableCell>
        </TableRow>
        <TableRow className="border-gray-300">
          <TableCell className="font-medium">CB002</TableCell>
          <TableCell>Riya Sharma</TableCell>
          <TableCell>Beach Escape</TableCell>
          <TableCell>2025-06-12</TableCell>
          <TableCell className="text-right">Pending</TableCell>
        </TableRow>
        <TableRow className="border-gray-300">
          <TableCell className="font-medium">CB003</TableCell>
          <TableCell>Karan Desai</TableCell>
          <TableCell>Forest Adventure</TableCell>
          <TableCell>2025-04-29</TableCell>
          <TableCell className="text-right">Cancelled</TableCell>
        </TableRow>
        <TableRow className="border-gray-300">
          <TableCell className="font-medium">CB004</TableCell>
          <TableCell>Simran Kaur</TableCell>
          <TableCell>Desert Safari</TableCell>
          <TableCell>2025-05-20</TableCell>
          <TableCell className="text-right">Confirmed</TableCell>
        </TableRow>
        <TableRow className="border-gray-300">
          <TableCell className="font-medium">CB005</TableCell>
          <TableCell>Vikram Jain</TableCell>
          <TableCell>Jungle Expedition</TableCell>
          <TableCell>2025-05-15</TableCell>
          <TableCell className="text-right">Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default RecentBooking;
