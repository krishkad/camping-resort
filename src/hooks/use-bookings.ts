import { BookingD } from "@/types";
import { useEffect, useState } from "react";

export const useBookings = () => {
  const [bookingData, setBookingData] = useState<BookingD[] | null>(null);
  const [loading, setLoading] = useState(true); // optional, for UI state
  const [error, setError] = useState(null); // optional, for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/booking/all`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include"
          }
        );

        const data = await res.json();

        if (!data.success) {
          setError(data.message);
        }

        setBookingData(data.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("Failed to fetch bookings:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { bookingData, loading, error }; // better structure for consuming component
};
