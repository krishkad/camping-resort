"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UserPopover = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const router = useRouter();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({ name: parsedUser.name, email: parsedUser.email });
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
      }
    }
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleLogOut = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/log-out`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const res = await response.json();

      if (!res.success) {
        console.log("error while loging out: ", res.message);
        toast.warning(res.message || "Failed to log out");
        return;
      }

      toast.success("Logout successful");
      router.push("/auth/sign-in");
    } catch (error: any) {
      console.log("error while loging out", error);
      toast.warning("Failed to log out");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
          <AvatarFallback>
            {user?.name ? getInitials(user.name) : "?"}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mr-4 border-gray-300">
        <p className="text-base font-semibold">{user?.name || "Guest"}</p>
        <p className="text-sm font-medium text-gray-600">
          {user?.email || "guest@example.com"}
        </p>
        <Separator className="w-full my-2" />
        <Button
          variant="ghost"
          className="w-full flex justify-start"
          onClick={handleLogOut}
        >
          Log out
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
