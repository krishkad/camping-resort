import { BookingD } from "@/types";
import { useEffect, useState } from "react";

export const useBookings = () => {
  const [bookingData, setBookingData] = useState<BookingD[] | null>(null);
  const [loading, setLoading] = useState(true); // optional, for UI state
  const [error, setError] = useState(null); // optional, for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authtoken") || ''; // move inside useEffect
        const res = await fetch("http://localhost:5000/api/booking/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authtoken: token ?? "", // handle null safely
          },
        });

        const data = await res.json();
        console.log(data)

        if (!data.success) {
          setError(data.message);
        }

        setBookingData(data.data);
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
