export type Property = {
  id: number; name: string; short: string; location: string; image: string; rate: number;
  minRate: number; occupancy: number; status: string; cleaning: string; nextCheckIn: string;
  nextCheckOut: string; guests: number; beds: number; baths: number; wifi: string; wifiPassword: string;
  parking: string; checkIn: string; lock: string; rules: string; cleaningInstructions: string;
  amenities: string[]; description: string;
}
export type TaskStatus = 'Pending' | 'In Progress' | 'Completed' | 'Overdue'
export type CleaningTask = { id: number; propertyId: number; cleaner: string; checkout: string; deadline: string; instructions: string; status: TaskStatus }
export type Message = { id: number; from: 'guest' | 'host'; text: string; time: string }
export type Conversation = { id: number; guest: string; propertyId: number; unread: boolean; escalated: boolean; resolved: boolean; avatar: string; messages: Message[] }
