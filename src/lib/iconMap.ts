import {
  Wifi,
  Users,
  Coffee,
  Clock,
  Car,
  Phone,
  CalendarDays,
  Dumbbell,
  Bike,
  Sparkles,
  PartyPopper,
  ShowerHead,
  Gamepad2,
  DoorOpen,
  Building2,
  Briefcase,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "High-speed Wi-Fi": Wifi,
  "Meeting rooms": Users,
  "Private cabins": DoorOpen,
  Cafeteria: Coffee,
  "Coffee bar": Coffee,
  "Coffee bar / event space": Coffee,
  "24/7 access": Clock,
  Parking: Car,
  "Bike parking": Bike,
  "Phone booths": Phone,
  "Event space": PartyPopper,
  "Wellness room": Sparkles,
  "Shower rooms": ShowerHead,
  "Game zone": Gamepad2,
  Gym: Dumbbell,
  // kpi icons
  Users,
  Briefcase,
  CalendarCheck,
  CalendarDays,
  Clock,
  Building2,
};

export function amenityIcon(label: string): LucideIcon {
  return map[label] ?? Building2;
}
