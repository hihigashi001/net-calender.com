import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"
import { useEffect, useState } from "react"

import { createValues } from "./createValues"

import { useStore } from "@/globalState/store"
import { DayValues } from "@/types"

export type UseCalendar = {
  start: Date
}

function replaceOutMonthDays(days: Date[], date: Date) {
  return days.map((d) => (isSameMonth(date, d) ? d : null))
}

export const useCalendar = ({ start = new Date() }: UseCalendar) => {
  const data = useStore((state) => state.data)
  const setData = useStore((state) => state.setData)
  const [date, setDate] = useState(start)
  const [values, setValues] = useState<DayValues[] | null>(null)

  useEffect(() => {
    if (!data) return
    setValues(createValues(data, date))
  }, [data, date])

  const addStaticAddDay = (day: Date) => {
    if (!data) return
    const updatedStaticAddDay = [...data.staticAddDay, day]
    const updatedDeleteDay = data.staticDeleteDay.filter((d) => d.getTime() !== day.getTime())
    setData({ ...data, staticAddDay: updatedStaticAddDay, staticDeleteDay: updatedDeleteDay })
  }
  const deleteStaticAddDay = (day: Date) => {
    if (!data) return
    const updatedStaticAddDay = data.staticAddDay.filter((d) => d.getTime() !== day.getTime())
    const updatedDeleteDay = [...data.staticDeleteDay, day]
    setData({ ...data, staticAddDay: updatedStaticAddDay, staticDeleteDay: updatedDeleteDay })
  }

  const nextMonth = () => {
    setDate(addMonths(date, 1))
  }
  const prevMonth = () => {
    setDate(subMonths(date, 1))
  }

  const startDateOfMonth = startOfMonth(date)
  const endDateOfMonth = endOfMonth(date)
  const startWeek = startOfWeek(startDateOfMonth)
  const endWeek = endOfWeek(endDateOfMonth)
  const days = eachDayOfInterval({ start: startWeek, end: endWeek })

  const dates = {
    startDateOfMonth,
    endDateOfMonth,
    startWeek,
    endWeek,
    days: replaceOutMonthDays(days, date),
    values,
  }

  return {
    startDate: date,
    value: data?.value,
    nextMonth,
    prevMonth,
    dates,
    addStaticAddDay,
    deleteStaticAddDay,
  }
}
