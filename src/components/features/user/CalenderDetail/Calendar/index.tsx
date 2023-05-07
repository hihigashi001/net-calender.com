import { HiCheckCircle } from "react-icons/hi"

import { CalendarDays } from "./CalendarDays"
import { CalendarHeader } from "./CalendarHeader"
import { CalendarWeeks } from "./CalendarWeeks"
import { useCalendar } from "./useCalendar"

export const Calendar = () => {
  const { startDate, value, nextMonth, prevMonth, dates } = useCalendar({
    start: new Date(),
  })

  return (
    <div>
      <CalendarHeader nextMonth={nextMonth} prevMonth={prevMonth} startDate={startDate} />
      <CalendarWeeks />
      <CalendarDays days={dates.days} startDate={startDate} values={dates.values} />
      <div className="flex gap-1 mt-2">
        <HiCheckCircle color="blue" size={25} />
        {value}
      </div>
    </div>
  )
}
