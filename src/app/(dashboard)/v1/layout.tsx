import React, { ReactNode } from "react";
import AppSidebar from "@/components/shared/app-sidebar";

import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Toaster } from "@/components/ui/sonner";

import DashboardName from "@/components/shared/dashboard-name";
import UserPopover from "@/components/shared/user-popover";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("authtoken");

  if (!token) return redirect("/auth/sign-in");
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
                  <UserPopover />
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
