import { UserD } from "@/types";
import { useEffect, useState } from "react";

export function useUser() {
  const [userData, setUserData] = useState<UserD[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/all`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include"
          }
        );

        const data = await response.json();

        if (!data.success) {
          setError(data.message);
        }

        setUserData(data.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Failed to fetch bookings:", error);
        setError(error.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, loading, error };
}
