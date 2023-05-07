export const CalendarWeeks = () => {
  const weeks = ["日", "月", "火", "水", "木", "金", "土"]
  const classNameSunday = "border p-2 text-center bg-red-500 text-white"
  const classNameSaturday = "border p-2 text-center bg-blue-500 text-white"
  const className = "border p-2 text-center  bg-gray-700 text-white"

  return (
    <div className="bg-white border grid grid-cols-7 overflow-hidden">
      {weeks.map((week, i) => {
        if (week === "日") {
          return (
            <div className={classNameSunday} key={i}>
              {week}
            </div>
          )
        } else if (week === "土") {
          return (
            <div className={classNameSaturday} key={i}>
              {week}
            </div>
          )
        } else {
          return (
            <div className={className} key={i}>
              {week}
            </div>
          )
        }
      })}
    </div>
  )
}
