import {
  BookingStatus,
  CheckInStatus,
  PaymentStatusD
} from "@/constants/index.c";
import { BookingD, UserD } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCheckInStatus = (
  status: CheckInStatus,
  property: "text" | "bg"
) => {
  switch (status) {
    case "Checked-in":
      switch (property) {
        case "text":
          return "text-[#065F46]";

        case "bg":
          return "bg-[#D1FAE5]";
      }
    case "Checked-out":
      switch (property) {
        case "text":
          return "text-[#1E3A8A]";

        case "bg":
          return "bg-[#E0F2FE]";
      }
    case "Not Checked-in":
      switch (property) {
        case "text":
          return "text-[#92400E]";

        case "bg":
          return "bg-[#FEF9C3]";
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
  status: PaymentStatusD,
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
    case "Pending":
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

export const updateBooking = async (
  booking: BookingD
): Promise<{
  booking: BookingD | null;
  error: string | null;
}> => {
  const token = localStorage.getItem("authtoken");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/booking/update/${booking.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authtoken: token || "",
        },
        body: JSON.stringify(booking)
      }
    );

    const res = await response.json();

    if (!res.success) {
      return {
        booking: null,
        error: res.message || "Failed to update booking.",
      };
    }
    console.log({ res });

    return { booking: res.data, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { booking: null, error: err.message || "Something went wrong." };
  }
};
export const deleteBooking = async (
  id: string
): Promise<{
  booking: BookingD | null;
  error: string | null;
}> => {
  const token = localStorage.getItem("authtoken");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/booking/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authtoken: token || "",
        },
      }
    );

    const res = await response.json();

    if (!res.success) {
      return {
        booking: null,
        error: res.message || "Failed to delete booking.",
      };
    }
    console.log({ res });

    return { booking: res.booking, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { booking: null, error: err.message || "Something went wrong." };
  }
};


export const updateTeam = async (
  user: UserD
): Promise<{
  user: UserD | null;
  error: string | null;
}> => {
  const token = localStorage.getItem("authtoken");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/update/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authtoken: token || "",
        },
        body: JSON.stringify(user)
      }
    );

    const res = await response.json();

    if (!res.success) {
      return {
        user: null,
        error: res.message || "Failed to update user.",
      };
    }

    return { user: res.data, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { user: null, error: err.message || "Something went wrong." };
  }
};
export const deleteTeam = async (
  id: string
): Promise<{
  user: UserD | null;
  error: string | null;
}> => {
  const token = localStorage.getItem("authtoken");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authtoken: token || "",
        },
      }
    );

    const res = await response.json();

    if (!res.success) {
      return {
        user: null,
        error: res.message || "Failed to delete user.",
      };
    }

    return { user: res.data, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { user: null, error: err.message || "Something went wrong." };
  }
};