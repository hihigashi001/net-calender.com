export type Schedule = {
  id: string
  name: string
  staticAddDay?: Date[]
  staticDeleteDay?: Date[]
  AddDayOfMonth?: string[]
  DeleteDayOfMonth?: string[]
  days?: number[]
}

export type CalendarValues = {
  start?: Date
  end?: Date
}

export type DayValues = {
  day: Date
  value: string
}

export type ScheduleValues = {
  value: string
  repeatDays: string[]
  CustomAddDay: string[]
  CustomDeleteDay: string[]
  staticAddDay: Date[]
  staticDeleteDay: Date[]
}

export type FirebaseStore = {
  user: string
  name: string
  note?: string
  value: string
  repeatDays: string[]
  CustomAddDay: string[]
  CustomDeleteDay: string[]
  staticAddDay: Date[]
  staticDeleteDay: Date[]
}

export type FirebaseStoreWithId = FirebaseStore & { id: string }