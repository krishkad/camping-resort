
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
