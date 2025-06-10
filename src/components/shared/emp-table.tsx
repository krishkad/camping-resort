"use client";

import { useUser } from "@/hooks/use-user";
import { deleteTeam, updateTeam } from "@/lib/utils";
import { UserD } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { toast } from "sonner";
import { Button } from "../ui/button";
import DataTable from "./data-table";
import UserDeleteModal from "./user-delete-modal";
import UserEditModel from "./user-edit-model";

const EmpTable = () => {
  const { userData } = useUser();
  const [data, setData] = useState<UserD[] | null>(userData);
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [updateUser, setUpdateUser] = useState<UserD | undefined>(undefined);
  const [deleteUser, setDeleteUser] = useState<UserD | undefined>(undefined);

  const columns: ColumnDef<UserD>[] = [
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
      accessorKey: "Role",
      header: "Role",
      cell: ({ row }) => (
        <div className="capitalize font-medium">{row.getValue("Role")}</div>
      ),
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
              setUpdateUser({
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
              setOpenDelete(true);
              setDeleteUser({
                ...row.original,
              });
            }}
          />
        );
      },
    },
  ];

  useEffect(() => {
    setData(userData);
  }, [userData]);

  const delUser = async (id: string) => {
    if (!id) {
      console.log("no id found");
    }

    const { user, error } = await deleteTeam(id);

    if (user && !error) {
      const filteredData = data?.filter((item) => item.id !== user!.id);
      setData(filteredData!);
      toast.success("team member deleted successfully");
    } else {
      toast.warning(error || "failed to delete team member");
    }
  };

  const upUser = async (userProp: UserD) => {
    if (!userProp) {
      console.log("no id found");
    }

    const { user, error } = await updateTeam(userProp);

    if (user && !error) {
      const filteredData = data?.filter((item) => item.id !== user!.id);
      filteredData?.push(user);
      setData(filteredData!);
      toast.success("team member updated successfully");
    } else {
      toast.warning(error || "failed to update team member");
    }
  };

  return (
    <>
      <DataTable
        key={JSON.stringify(data)}
        columns={columns}
        data={data !== null && data !== undefined ? data : []}
      />
      <UserEditModel
        open={open}
        onOpenChange={setOpen}
        user={updateUser}
        upUser={upUser}
      />
      <UserDeleteModal
        open={openDelete}
        onOpenChange={setOpenDelete}
        user={deleteUser}
        delUser={delUser}
      />
    </>
  );
};

export default EmpTable;
