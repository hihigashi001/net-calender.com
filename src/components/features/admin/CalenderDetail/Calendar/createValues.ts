import { FirebaseStore, DayValues } from "@/types"

export const createValues = (inputValue: FirebaseStore, today: Date): DayValues[] => {
  const year = today.getFullYear()
  const month = today.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const schedule: DayValues[] = []

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDay = new Date(year, month, i)
    const dayOfWeek = currentDay.getDay()

    const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek]

    let value = ""
    if (inputValue.repeatDays.includes(dayOfWeekStr)) {
      value = inputValue.value
    }
    if (inputValue.CustomAddDay.includes(i.toString())) {
      value = inputValue.value
    }
    if (inputValue.CustomDeleteDay.includes(i.toString())) {
      value = ""
    }

    // Check for staticAddDay and staticDeleteDay
    for (const addDate of inputValue.staticAddDay) {
      if (currentDay.getTime() === addDate.getTime()) {
        value = inputValue.value
      }
    }
    for (const deleteDate of inputValue.staticDeleteDay) {
      if (currentDay.getTime() === deleteDate.getTime()) {
        value = ""
      }
    }

    schedule.push({ day: currentDay, value })
  }

  return schedule
}
