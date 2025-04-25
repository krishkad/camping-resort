"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Booking,
  BookingStatus,
  CheckInStatus,
  bookings as data,
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

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "clientName",
    header: "Guest Name",
    cell: ({ row }) => (
      <div className="capitalize font-medium">{row.getValue("clientName")}</div>
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
    cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("email")}</div>,
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
        <div className="text-right font-medium">{checkInDate as string}</div>
      );
    },
  },
  {
    accessorKey: "checkOutDate",
    header: () => <div className="text-right">Check In</div>,
    cell: ({ row }) => {
      const checkOutDate = row.getValue("checkOutDate");

      return (
        <div className="text-right font-medium">{checkOutDate as string}</div>
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
        <div className="flex items-center space-x-3">
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
          <span className="text-sm font-medium text-gray-700">{roomType}</span>
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
        <div className="text-right font-medium">{foodPreference as string}</div>
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
        <div className="text-right font-medium">{specialRequest as string}</div>
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
    cell: ({}) => {
      // const payment = row.original;

      return <FiEdit className="w-4 h-4 ml-3 text-yellow-500" />;
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

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full p-4  border border-gray-200 rounded-md hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4 py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border-gray-200 border">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-gray-200">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-gray-200"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
