"use client";
import { UserD } from "@/types";
import React, { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "../ui/scroll-area";

const UserEditModel = ({
  open,
  onOpenChange,
  user,
  upUser,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  user: UserD | undefined;
  upUser: (value: UserD) => void;
}) => {
  const [userData, setUserData] = useState<UserD | null>(null);

  useEffect(() => {
    setUserData(user ?? null);
  }, [user]);

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (!userData) return;
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (!userData) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[600px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>
            Make changes to user here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="w-full h-max">
          <div className="w-full h-max">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="w-full space-y-1">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Email */}
              <div className="w-full space-y-1">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Phone No. */}
              <div className="w-full space-y-1">
                <Label htmlFor="phoneNo" className="text-right">
                  Phone No.
                </Label>
                <Input
                  id="phoneNo"
                  name="phoneNo"
                  value={userData.phoneNo}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Address */}
              <div className="w-full space-y-1">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={userData.address ?? ""}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Salary */}
              <div className="w-full space-y-1">
                <Label htmlFor="salary" className="text-right">
                  Salary
                </Label>
                <Input
                  id="salary"
                  name="salary"
                  value={userData.salary ?? ""}
                  onChange={onChangeHandler}
                />
              </div>

              {/* Role */}
              <div className="w-full space-y-1">
                <Label htmlFor="Role" className="text-right">
                  Role
                </Label>
                <Select
                  value={userData.Role}
                  onValueChange={(value) =>
                    setUserData({ ...userData, Role: value } as UserD)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-300">
                    <SelectGroup>
                      <SelectLabel>Role</SelectLabel>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Guest">Guest</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="Receptionist">Receptionist</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter className="w-full mt-4">
              <Button
                className="w-full"
                type="submit"
                onClick={() => {
                  if (userData) {
                    upUser(userData);
                    onOpenChange(false);
                  }
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

export default UserEditModel;
