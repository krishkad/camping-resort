import React, { ReactNode } from "react";
import AppSidebar from "@/components/shared/app-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/sonner";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DashboardName from "@/components/shared/dashboard-name";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <div className={cn("w-full flex")}>
          {/* <div className="hidden md:block w-[260px]"> */}
          <AppSidebar />
          {/* </div> */}
          <main className="w-full h-svh overflow-y-scroll bg-secondary/50">
            <div className="sticky top-0 w-full bg-white">
              <div className="max-w-7xl h-16 mx-auto  border-b border-gray-200 flex items-center justify-between gap-5 px-5">
                <div className="flex items-center justify-center gap-3 ">
                  <SidebarTrigger />
                  {/* {title ? title.label : "Dashboard"} */}
                  <DashboardName />
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="mr-4 border-gray-300">
                      <p className="text-base font-semibold">Emma White</p>
                      <p className="text-sm font-medium">emmawhite@gmail.com</p>
                      <Separator className={"w-full my-2"} />
                      <Button
                        variant={"ghost"}
                        className="w-full flex justify-start"
                      >
                        Log out
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="w-full  p-5">
              <div className="max-w-7xl mx-auto">{children}</div>
            </div>
          </main>
        </div>
      </SidebarProvider>
      <Toaster position="top-center" richColors />
    </>
  );
};

export default DashboardLayout;
