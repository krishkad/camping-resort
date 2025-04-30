import { BookingStatus, CheckInStatus, PaymentStatus } from "@/constants/index.c";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCheckInStatus = (status: CheckInStatus, property: "text" | "bg") => {
  switch (status) {
    case "Checked-in":
        switch (property) {
          case "text":
            return "text-[#065F46]"
        
          case "bg":
            return "bg-[#D1FAE5]"
        }  
    case "Checked-out":
        switch (property) {
          case "text":
            return "text-[#1E3A8A]"
        
          case "bg":
            return "bg-[#E0F2FE]"
        }  
    case "Not Checked-in":
        switch (property) {
          case "text":
            return "text-[#92400E]"
        
          case "bg":
            return "bg-[#FEF9C3]"
        }  
   
  }
};


export const getBookingStatus = (
  status: BookingStatus,
  property: "text" | "bg"
) => {
  switch (status) {
    case "Confirmed":
      switch (property) {
        case "text":
          return "text-[#006064]";
        case "bg":
          return "bg-[#E0F7FA]";
      }
    case "Pending":
      switch (property) {
        case "text":
          return "text-[#E65100]";
        case "bg":
          return "bg-[#FFF3E0]";
      }
    case "Cancelled":
      switch (property) {
        case "text":
          return "text-[#B71C1C]";
        case "bg":
          return "bg-[#FFEBEE]";
      }
  }
};


export const getPaymentStatus = (
  status: PaymentStatus,
  property: "text" | "bg"
) => {
  switch (status) {
    case "Paid":
      switch (property) {
        case "text":
          return "text-[#047857]";
        case "bg":
          return "bg-[#ECFDF5]";
      }
    case "Partial":
      switch (property) {
        case "text":
          return "text-[#92400E]";
        case "bg":
          return "bg-[#FEF3C7]";
      }
    case "Unpaid":
      switch (property) {
        case "text":
          return "text-[#B91C1C]";
        case "bg":
          return "bg-[#FFE4E6]";
      }
    case "Re-funded":
      switch (property) {
        case "text":
          return "text-orange-600";
        case "bg":
          return "bg-orange-200";
      }
  }
};