import { useState } from "react"

type Props = {
  label?: string
  selectedDays: string[]
  toggleDay: (day: string) => void
}

export const WeekdaySelector = ({ label, selectedDays, toggleDay }: Props) => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"]

  return (
    <div>
      {label && (
        <label className="block font-bold mb-2" htmlFor="schedule">
          {label}
        </label>
      )}
      <div className="flex items-center">
        {weekdays.map((day, index) => (
          <button
            className={`m-2 p-2 rounded-full ${
              selectedDays.includes(day) ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            key={index}
            onClick={(e) => {
              e.preventDefault()
              toggleDay(day)
            }}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}
