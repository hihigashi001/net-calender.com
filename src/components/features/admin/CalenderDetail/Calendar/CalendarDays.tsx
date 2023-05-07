import { format, isSameDay, isSameMonth } from "date-fns"
import { HiCheckCircle } from "react-icons/hi"

import { DayValues } from "@/types"

type Props = {
  days: (Date | null)[]
  startDate: Date
  values: DayValues[] | null
  addStaticAddDay: (day: Date) => void
  deleteStaticAddDay: (day: Date) => void
}

export const CalendarDays = ({
  days,
  startDate,
  values,
  addStaticAddDay,
  deleteStaticAddDay,
}: Props) => {
  const findValueForDay = (currentDay: Date): string | null => {
    const foundValue = values?.find((valueItem) => isSameDay(valueItem.day, currentDay))
    return foundValue ? foundValue.value : null
  }

  return (
    <div className="bg-white border grid grid-cols-7">
      {days.map((day, i) => {
        const valueForDay = day ? findValueForDay(day) : null
        return (
          <div
            className={`${
              valueForDay
                ? "bg-blue-50"
                : day && isSameMonth(day, startDate)
                ? "bg-white"
                : "bg-gray-100"
            } border p-1 cursor-pointer`}
            key={i}
            onClick={() => {
              if (day) {
                if (valueForDay) {
                  deleteStaticAddDay(day)
                } else {
                  addStaticAddDay(day)
                }
              }
            }}
          >
            <div>{day ? format(day, "d") : ""}</div>
            <div className="flex justify-center py-2">
              {valueForDay ? <HiCheckCircle color="blue" size={25} /> : ""}
            </div>
          </div>
        )
      })}
    </div>
  )
}
