import { format } from "date-fns"
import { AiTwotoneCalendar } from "react-icons/ai"
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi"

type Props = {
  startDate: Date
  prevMonth: VoidFunction
  nextMonth: VoidFunction
}

export const CalendarHeader = ({ startDate, prevMonth, nextMonth }: Props) => {
  return (
    <div className="flex justify-center my-4">
      <button
        className="bg-white opacity-60 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
        onClick={prevMonth}
      >
        <HiChevronDoubleLeft />
      </button>
      <div className="text-center text-2xl flex gap-2 text-gray-700">
        <AiTwotoneCalendar color="gray" size={30} />
        {format(startDate, "yyyy年 MM 月")}
      </div>
      <button
        className="bg-white opacity-60 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
        onClick={nextMonth}
      >
        <HiChevronDoubleRight />
      </button>
    </div>
  )
}
