import { HiCheckCircle } from "react-icons/hi"

import { CalendarDays } from "./CalendarDays"
import { CalendarHeader } from "./CalendarHeader"
import { CalendarWeeks } from "./CalendarWeeks"
import { useCalendar } from "./useCalendar"

export const Calendar = () => {
  const { startDate, value, nextMonth, prevMonth, dates, addStaticAddDay, deleteStaticAddDay } =
    useCalendar({
      start: new Date(),
    })

  return (
    <div>
      <CalendarHeader nextMonth={nextMonth} prevMonth={prevMonth} startDate={startDate} />
      <CalendarWeeks />
      <CalendarDays
        addStaticAddDay={addStaticAddDay}
        days={dates.days}
        deleteStaticAddDay={deleteStaticAddDay}
        startDate={startDate}
        values={dates.values}
      />
      <div className="flex gap-1 mt-2">
        <HiCheckCircle color="blue" size={25} />
        {value}
      </div>
    </div>
  )
}
