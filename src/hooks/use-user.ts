import { UserD } from "@/types";
import { useEffect, useState } from "react";

export function useUser() {
  const [userData, setUserData] = useState<UserD[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authtoken");
        const response = await fetch(`http://localhost:5000/api/user/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authtoken: `${token}`,
          },
        });

        const data = await response.json();

        if (!data.success) {
          setError(data.message);
        }

        setUserData(data.data);
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
