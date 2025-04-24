"use client";
import { Tent } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ADMINROUTE } from "@/constants/index.c";
import Link from "next/link";
// import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SheetClose } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  return (
    <Sidebar className="border-none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pt-5">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className={`p-1.5 rounded-lg ${"bg-[#dcf0e0]"} transition-all duration-300`}
              >
                <Tent className={`${"text-[#377c48]"} h-6 w-6`} />
              </div>
              <h1
                className={`text-xl md:text-2xl font-bold ${"text-[#284f32]"}`}
              >
                Camp <span className="text-[#d68734] font-light">Resort</span>
              </h1>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pt-10">
              {ADMINROUTE.map((item, i) => (
                <SidebarMenuItem key={i} className="h-14 border-none">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "h-full border-none focus:border-none focus-visible:ring-0",
                      pathname === item.href && "bg-[#f1f9f3]"
                    )}
                  >
                    {!isMobile ? (
                      <Link href={item.href} className="size-full">
                        <item.icon
                          className={cn(
                            "w-5 h-6 ",
                            pathname === item.href && "text-[#284f32]"
                          )}
                        />
                        <span
                          className={cn(
                            "text-base font-medium",
                            pathname === item.href
                              ? "text-[#284f32]"
                              : "text-gray-600"
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "size-full",
                            pathname === item.href && "bg-[#f1f9f3]"
                          )}
                        >
                          <item.icon className={cn("w-5 h-6 ")} />
                          <span
                            className={cn(
                              "text-base  font-medium",
                              pathname === item.href
                                ? "text-[#284f32]"
                                : "text-gray-600"
                            )}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
