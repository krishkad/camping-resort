
import { MdDashboard } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";



type BookingStatus = "Confirmed" | "Pending" | "Cancelled";
type PaymentStatus = "Paid" | "Unpaid" | "Partial";
type CheckInStatus = "Checked-in" | "Not Checked-in" | "Checked-out";
type RoomType = "Standard" | "Deluxe" | "Suite" | "Penthouse";

interface Booking {
  id: string;
  clientName: string;
  email: string;
  phoneNumber: string;
  foodPreference: "Veg" | "Non-Veg";
  checkInDate: string; // ISO date format (YYYY-MM-DD)
  checkOutDate: string;
  checkInStatus: CheckInStatus;
  bookingStatus: BookingStatus;
  paymentStatus: PaymentStatus;
  amount: number; // Total amount for the booking
  roomType: RoomType;
  roomNumber: string | null; // Room assigned, null if not assigned yet
  numberOfAdults: number;
  numberOfKids: number;
  specialRequests: string;
  createdAt: string; // Timestamp when booking was created
  updatedAt: string; // Timestamp when booking was last modified
}


const bookings: Booking[] = [
  {
    id: "BKG123456",
    clientName: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phoneNumber: "+91-9876543210",
    foodPreference: "Veg",
    checkInDate: "2025-05-01",
    checkOutDate: "2025-05-05",
    checkInStatus: "Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 15000,
    roomType: "Deluxe",
    roomNumber: "D101",
    numberOfAdults: 2,
    numberOfKids: 1,
    specialRequests: "Early check-in, extra pillows",
    createdAt: "2025-04-20T10:15:00Z",
    updatedAt: "2025-04-25T08:30:00Z"
  },
  {
    id: "BKG123457",
    clientName: "Priya Desai",
    email: "priya.desai@example.com",
    phoneNumber: "+91-9123456789",
    foodPreference: "Non-Veg",
    checkInDate: "2025-05-03",
    checkOutDate: "2025-05-06",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Pending",
    paymentStatus: "Partial",
    amount: 18000,
    roomType: "Suite",
    roomNumber: null, // Not assigned yet
    numberOfAdults: 2,
    numberOfKids: 2,
    specialRequests: "Sea-facing room, baby cot",
    createdAt: "2025-04-22T14:10:00Z",
    updatedAt: "2025-04-24T12:45:00Z"
  },
  {
    id: "BKG123458",
    clientName: "Amit Verma",
    email: "amit.verma@example.com",
    phoneNumber: "+91-9988776655",
    foodPreference: "Veg",
    checkInDate: "2025-05-10",
    checkOutDate: "2025-05-12",
    checkInStatus: "Checked-out",
    bookingStatus: "Cancelled",
    paymentStatus: "Unpaid",
    amount: 12000,
    roomType: "Standard",
    roomNumber: "S305",
    numberOfAdults: 1,
    numberOfKids: 0,
    specialRequests: "Late checkout",
    createdAt: "2025-04-15T09:20:00Z",
    updatedAt: "2025-04-18T11:30:00Z"
  }
];


export const ADMINROUTE = [
  {
    href: "/v1/dashboard",
    label: "Dashboard",
    value: "dashboard",
    icon: MdDashboard,
  },
  {
    href: "/v1/campsites",
    label: "Manage Campsites",
    value: "campsites",
    icon: GiCampingTent,
  },
  {
    href: "/v1/bookings",
    label: "Booking Management",
    value: "bookings",
    icon: FaCalendarAlt,
  },
  {
    href: "/v1/team",
    label: "Team",
    value: "users",
    icon: FaUsers,
  },
  {
    href: "/v1/settings",
    label: "Settings",
    value: "settings",
    icon: FiSettings,
  },
] as const;


