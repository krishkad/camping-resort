
export interface Camp {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  facilities: string[];
  rating: number;
  tags: string[];
}

export interface ScheduleItem {
  time: string;
  activity: string;
  description: string;
  icon: string;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  icon: string;
}


export enum FoodPreference {
  Veg = "Veg",
  Non_Veg = "Non_Veg",
}

export enum CheckInStatus {
  NotCheckedIn = "NotCheckedIn",
  CheckedIn = "CheckedIn",
  CheckedOut = "CheckedOut",
}

export enum BookingStatus {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Cancelled = "Cancelled",
}

export enum PaymentStatus {
  Pending = "Pending",
  Paid = "Paid",
  Failed = "Failed",
}

export enum RoomType {
  Standard = "Standard",
  Deluxe = "Deluxe",
  Suite = "Suite",
}

export interface BookingD {
  id: string;
  clientName: string;
  email: string;
  phoneNumber: string;
  foodPreference: FoodPreference;
  checkInDate: string; // or Date if parsed
  checkOutDate: string;
  checkInStatus?: CheckInStatus;
  bookingStatus?: BookingStatus;
  paymentStatus?: PaymentStatus;
  advanceAmount?: number;
  amount?: number;
  roomType: RoomType;
  roomNumber?: string;
  numberOfAdults: number;
  numberOfKids: number;
  specialRequests: string;
  createdAt: string;
  updatedAt: string;
}


// Enum for role types
export enum RoleType {
  Guest = 'Guest',
  Receptionist = 'Receptionist',
  Manager = 'Manager',
  Admin = 'Admin',
}

// Interface for the User model
export interface UserD {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNo: string;
  address: string;
  salary: string;
  Role: RoleType;
  createdAt: Date;
  updatedAt: Date;
}

// Interface for the Holiday model
export interface Holiday {
  id: string;
  holidayName: string;
  holidayDescription?: string | null;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
