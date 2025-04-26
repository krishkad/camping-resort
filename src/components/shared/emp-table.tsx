"use client";

import React from "react";
import DataTable from "./data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Employee, employees } from "@/constants/index.c";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

const EmpTable = () => {
  const columns: ColumnDef<Employee>[] = [
    {
      accessorKey: "employeeId",
      header: "Emp Id",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("employeeId")}</div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("name")}</div>
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
      accessorKey: "phoneNo",
      header: "Phone No.",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("phoneNo")}</div>
      ),
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("address")}</div>
      ),
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("salary")}</div>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("role")}</div>
      ),
    },
  ];
  return <DataTable columns={columns} data={employees} />;
};

export default EmpTable;
