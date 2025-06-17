
import { Camp, ScheduleItem, Facility } from "../types";

export const camps: Camp[] = [
  {
    id: 1,
    name: "Forest Haven",
    description: "A serene camping experience in the heart of the forest with spacious tents and breathtaking views.",
    price: 1200,
    capacity: 4,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    facilities: ["Electricity", "Fire Pit", "Picnic Table", "Shower", "Restroom"],
    rating: 4.8,
    tags: ["Family-friendly", "Peaceful", "Forest"]
  },
  {
    id: 2,
    name: "Lakeside Retreat",
    description: "Wake up to stunning lake views in our premium tents equipped with all modern amenities.",
    price: 1500,
    capacity: 6,
    image: "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    facilities: ["Electricity", "Fire Pit", "Picnic Table", "Shower", "Restroom", "BBQ Grill", "Boat Access"],
    rating: 4.9,
    tags: ["Waterfront", "Scenic", "Premium"]
  },
  {
    id: 3,
    name: "Mountain Vista",
    description: "Elevated camping experience with panoramic mountain views and luxury camping facilities.",
    price: 1800,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    facilities: ["Electricity", "Fire Pit", "Picnic Table", "Shower", "Restroom", "WiFi", "Heater"],
    rating: 4.7,
    tags: ["Romantic", "Scenic", "Luxury"]
  }
];

export const dailySchedule: ScheduleItem[] = [
  {
    time: "7:00 AM",
    activity: "Sunrise Yoga",
    description: "Start your day with a refreshing yoga session surrounded by stone.",
    icon: "sun"
  },
  {
    time: "8:30 AM",
    activity: "Breakfast",
    description: "Enjoy a delicious breakfast with local ingredients at our dining pavilion.",
    icon: "utensils"
  },
  {
    time: "10:00 AM",
    activity: "Guided Hike",
    description: "Explore the surrounding trails with our experienced guides.",
    icon: "mountain"
  },
  {
    time: "12:30 PM",
    activity: "Lunch",
    description: "Refuel with a nutritious lunch prepared by our chefs.",
    icon: "utensils"
  },
  {
    time: "2:00 PM",
    activity: "Water Activities",
    description: "Choose from kayaking, swimming, or fishing in our pristine lake.",
    icon: "droplet"
  },
  {
    time: "4:30 PM",
    activity: "Stone Workshop",
    description: "Learn about local flora and fauna in an interactive session.",
    icon: "tree-deciduous"
  },
  {
    time: "6:30 PM",
    activity: "Dinner",
    description: "Savor a gourmet dinner with farm-to-table ingredients.",
    icon: "utensils"
  },
  {
    time: "8:00 PM",
    activity: "Campfire",
    description: "Gather around the campfire for stories, music, and stargazing.",
    icon: "campfire"
  }
];

export const facilities: Facility[] = [
  {
    id: 1,
    name: "Modern Restrooms",
    description: "Clean, well-maintained restroom facilities with hot showers available 24/7.",
    icon: "shower-head"
  },
  {
    id: 2,
    name: "Dining Pavilion",
    description: "Covered dining area with communal tables and breathtaking views.",
    icon: "utensils"
  },
  {
    id: 3,
    name: "WiFi Zones",
    description: "Stay connected with designated WiFi zones throughout the campsite.",
    icon: "wifi"
  },
  {
    id: 4,
    name: "Equipment Rental",
    description: "Rent camping gear, fishing equipment, and recreational items.",
    icon: "backpack"
  },
  {
    id: 5,
    name: "First Aid Station",
    description: "Staffed first aid station with trained personnel for emergencies.",
    icon: "first-aid"
  },
  {
    id: 6,
    name: "General Store",
    description: "Convenience store with essentials, local products, and souvenirs.",
    icon: "shopping-cart"
  }
];
