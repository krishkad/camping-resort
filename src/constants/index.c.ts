
import { MdDashboard } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";



export type BookingStatus = "Confirmed" | "Pending" | "Cancelled";
export type PaymentStatus = "Paid" | "Unpaid" | "Partial";
export type CheckInStatus = "Checked-in" | "Not Checked-in" | "Checked-out";
export type RoomType = "Standard" | "Deluxe" | "Suite" | "Penthouse";

export interface Booking {
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


export const bookings: Booking[] = [
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
    roomNumber: null,
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
  },
  {
    id: "BKG123459",
    clientName: "Neha Kapoor",
    email: "neha.kapoor@example.com",
    phoneNumber: "+91-9988112233",
    foodPreference: "Non-Veg",
    checkInDate: "2025-05-04",
    checkOutDate: "2025-05-07",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 20000,
    roomType: "Suite",
    roomNumber: "S210",
    numberOfAdults: 2,
    numberOfKids: 1,
    specialRequests: "Birthday decoration",
    createdAt: "2025-04-21T11:10:00Z",
    updatedAt: "2025-04-21T11:10:00Z"
  },
  {
    id: "BKG123460",
    clientName: "Rakesh Mehta",
    email: "rakesh.mehta@example.com",
    phoneNumber: "+91-8877665544",
    foodPreference: "Veg",
    checkInDate: "2025-05-02",
    checkOutDate: "2025-05-04",
    checkInStatus: "Checked-out",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 10000,
    roomType: "Standard",
    roomNumber: "S102",
    numberOfAdults: 1,
    numberOfKids: 0,
    specialRequests: "Quiet room",
    createdAt: "2025-04-19T10:00:00Z",
    updatedAt: "2025-04-23T09:45:00Z"
  },
  {
    id: "BKG123461",
    clientName: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    phoneNumber: "+91-7766554433",
    foodPreference: "Veg",
    checkInDate: "2025-05-06",
    checkOutDate: "2025-05-10",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Partial",
    amount: 22000,
    roomType: "Deluxe",
    roomNumber: null,
    numberOfAdults: 3,
    numberOfKids: 0,
    specialRequests: "Airport pickup",
    createdAt: "2025-04-23T13:50:00Z",
    updatedAt: "2025-04-24T07:00:00Z"
  },
  {
    id: "BKG123462",
    clientName: "Kabir Khan",
    email: "kabir.khan@example.com",
    phoneNumber: "+91-6655443322",
    foodPreference: "Non-Veg",
    checkInDate: "2025-05-11",
    checkOutDate: "2025-05-13",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Pending",
    paymentStatus: "Unpaid",
    amount: 8000,
    roomType: "Standard",
    roomNumber: null,
    numberOfAdults: 2,
    numberOfKids: 0,
    specialRequests: "",
    createdAt: "2025-04-20T15:45:00Z",
    updatedAt: "2025-04-22T12:15:00Z"
  },
  {
    id: "BKG123463",
    clientName: "Divya Nair",
    email: "divya.nair@example.com",
    phoneNumber: "+91-7766442211",
    foodPreference: "Veg",
    checkInDate: "2025-05-08",
    checkOutDate: "2025-05-10",
    checkInStatus: "Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 14000,
    roomType: "Deluxe",
    roomNumber: "D203",
    numberOfAdults: 2,
    numberOfKids: 0,
    specialRequests: "Corner room",
    createdAt: "2025-04-19T16:30:00Z",
    updatedAt: "2025-04-21T09:00:00Z"
  },
  {
    id: "BKG123464",
    clientName: "Arjun Patil",
    email: "arjun.patil@example.com",
    phoneNumber: "+91-6677889900",
    foodPreference: "Non-Veg",
    checkInDate: "2025-05-07",
    checkOutDate: "2025-05-08",
    checkInStatus: "Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 7000,
    roomType: "Standard",
    roomNumber: "S110",
    numberOfAdults: 1,
    numberOfKids: 0,
    specialRequests: "",
    createdAt: "2025-04-22T08:00:00Z",
    updatedAt: "2025-04-23T10:00:00Z"
  },
  {
    id: "BKG123465",
    clientName: "Isha Singh",
    email: "isha.singh@example.com",
    phoneNumber: "+91-9988221133",
    foodPreference: "Veg",
    checkInDate: "2025-05-09",
    checkOutDate: "2025-05-11",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Pending",
    paymentStatus: "Partial",
    amount: 16000,
    roomType: "Deluxe",
    roomNumber: null,
    numberOfAdults: 2,
    numberOfKids: 1,
    specialRequests: "Extra towels",
    createdAt: "2025-04-25T14:20:00Z",
    updatedAt: "2025-04-25T14:20:00Z"
  },
  {
    id: "BKG123466",
    clientName: "Saurabh Jain",
    email: "saurabh.jain@example.com",
    phoneNumber: "+91-9900990099",
    foodPreference: "Veg",
    checkInDate: "2025-05-12",
    checkOutDate: "2025-05-14",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 17500,
    roomType: "Suite",
    roomNumber: "S302",
    numberOfAdults: 2,
    numberOfKids: 0,
    specialRequests: "",
    createdAt: "2025-04-23T12:00:00Z",
    updatedAt: "2025-04-23T13:00:00Z"
  },
  {
    id: "BKG123467",
    clientName: "Ankita Joshi",
    email: "ankita.joshi@example.com",
    phoneNumber: "+91-8877885566",
    foodPreference: "Non-Veg",
    checkInDate: "2025-05-10",
    checkOutDate: "2025-05-12",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Pending",
    paymentStatus: "Unpaid",
    amount: 13000,
    roomType: "Standard",
    roomNumber: null,
    numberOfAdults: 1,
    numberOfKids: 1,
    specialRequests: "Crib for baby",
    createdAt: "2025-04-24T09:45:00Z",
    updatedAt: "2025-04-24T10:15:00Z"
  },
  {
    id: "BKG123468",
    clientName: "Mohit Malhotra",
    email: "mohit.malhotra@example.com",
    phoneNumber: "+91-7766889944",
    foodPreference: "Veg",
    checkInDate: "2025-05-05",
    checkOutDate: "2025-05-09",
    checkInStatus: "Checked-out",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    amount: 19500,
    roomType: "Suite",
    roomNumber: "S301",
    numberOfAdults: 3,
    numberOfKids: 2,
    specialRequests: "Near the pool",
    createdAt: "2025-04-17T17:00:00Z",
    updatedAt: "2025-04-20T08:00:00Z"
  },
  {
    id: "BKG123469",
    clientName: "Tanya Batra",
    email: "tanya.batra@example.com",
    phoneNumber: "+91-9988998877",
    foodPreference: "Non-Veg",
    checkInDate: "2025-05-14",
    checkOutDate: "2025-05-16",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Confirmed",
    paymentStatus: "Partial",
    amount: 11000,
    roomType: "Deluxe",
    roomNumber: null,
    numberOfAdults: 2,
    numberOfKids: 0,
    specialRequests: "Anniversary cake",
    createdAt: "2025-04-25T16:40:00Z",
    updatedAt: "2025-04-25T17:00:00Z"
  },
  {
    id: "BKG123470",
    clientName: "Deepak Rathi",
    email: "deepak.rathi@example.com",
    phoneNumber: "+91-8844556677",
    foodPreference: "Veg",
    checkInDate: "2025-05-15",
    checkOutDate: "2025-05-17",
    checkInStatus: "Not Checked-in",
    bookingStatus: "Pending",
    paymentStatus: "Unpaid",
    amount: 9000,
    roomType: "Standard",
    roomNumber: null,
    numberOfAdults: 1,
    numberOfKids: 0,
    specialRequests: "",
    createdAt: "2025-04-25T18:30:00Z",
    updatedAt: "2025-04-25T18:30:00Z"
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





export type Employee = {
  employeeId: string;
  name: string;
  email: string;
  phoneNo: string;
  role: 'Receptionist' | 'Admin' | 'Manager' | 'Cleaner' | 'Security' | 'Maintenance';
  address: string;
  salary: number; // in USD or local currency
};

export const employees: Employee[] = [
  {
    employeeId: 'EMP001',
    name: 'Priya Sharma',
    email: 'priya.sharma@campresort.in',
    phoneNo: '+91-9876543210',
    role: 'Receptionist',
    address: '12 MG Road, Bengaluru, Karnataka',
    salary: 25000,
  },
  {
    employeeId: 'EMP002',
    name: 'Rahul Verma',
    email: 'rahul.verma@campresort.in',
    phoneNo: '+91-9988776655',
    role: 'Manager',
    address: '45 Connaught Place, New Delhi',
    salary: 60000,
  },
  {
    employeeId: 'EMP003',
    name: 'Sneha Iyer',
    email: 'sneha.iyer@campresort.in',
    phoneNo: '+91-9123456789',
    role: 'Admin',
    address: '23 Marina Beach Road, Chennai, Tamil Nadu',
    salary: 35000,
  },
  {
    employeeId: 'EMP004',
    name: 'Amit Deshmukh',
    email: 'amit.deshmukh@campresort.in',
    phoneNo: '+91-9345678901',
    role: 'Security',
    address: '78 FC Road, Pune, Maharashtra',
    salary: 20000,
  },
  {
    employeeId: 'EMP005',
    name: 'Pooja Patel',
    email: 'pooja.patel@campresort.in',
    phoneNo: '+91-9012345678',
    role: 'Cleaner',
    address: '56 SG Highway, Ahmedabad, Gujarat',
    salary: 18000,
  },
];;
