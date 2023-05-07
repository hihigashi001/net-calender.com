import { useRouter } from "next/router"
import React, { FormEvent, useState } from "react"

import { useStore } from "@/globalState/store"
import { addSchedule, updateSchedule } from "@/lib/apiClient"

interface FormInputs {
  name: string
  note: string
  schedule: string
}

export const useCalenderSetting = () => {
  const data = useStore((state) => state.data)
  const user = useStore((state) => state.user)
  const router = useRouter()
  const pageId = router.query.id as string
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())
  const daysFilterCustomAddDay = days.filter((day) => !data?.CustomAddDay.includes(day))
  const daysFilter = daysFilterCustomAddDay.filter((day) => !data?.CustomDeleteDay.includes(day))
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: data?.name || "",
    note: data?.note || "",
    schedule: data?.value || "",
  })
  const [selectedDays, setSelectedDays] = useState<string[]>(data?.repeatDays || [])
  const [selectAddDay, setSelectAddDay] = useState<string[]>(data?.CustomAddDay || [])
  const [selectDeleteDay, setSelectDeleteDay] = useState<string[]>(data?.CustomDeleteDay || [])
  const [options, setOptions] = useState<string[]>(daysFilter)

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }))
  }

  const handleAddDayPlus = (value: string) => {
    // optionsからvalueを削除して、昇順に並び替え
    const newSelectedOptions = options.filter((option) => option !== value)
    newSelectedOptions.sort((a, b) => parseInt(a) - parseInt(b))
    setOptions(newSelectedOptions)
    // selectAddDayにvalueを追加して、newSelectAddDayを昇順に並び替え
    const newSelectAddDay = [...selectAddDay, value]
    newSelectAddDay.sort((a, b) => parseInt(a) - parseInt(b))
    setSelectAddDay(newSelectAddDay)
  }

  const handleAddDayMinus = (value: string) => {
    // optionsにvalueを追加して、昇順に並び替え
    const newSelectedOptions = [...options, value]
    newSelectedOptions.sort((a, b) => parseInt(a) - parseInt(b))
    setOptions(newSelectedOptions)
    // selectAddDayからvalueを削除して、newSelectAddDayを昇順に並び替え
    const newSelectAddDay = selectAddDay.filter((day) => day !== value)
    newSelectAddDay.sort((a, b) => parseInt(a) - parseInt(b))
    setSelectAddDay(newSelectAddDay)
  }

  const handleDeleteDayPlus = (value: string) => {
    // optionsからvalueを削除して、昇順に並び替え
    const newSelectedOptions = options.filter((option) => option !== value)
    newSelectedOptions.sort((a, b) => parseInt(a) - parseInt(b))
    setOptions(newSelectedOptions)
    // selectDeleteDayにvalueを追加して、newSelectDeleteDayを昇順に並び替え
    const newSelectDeleteDay = [...selectDeleteDay, value]
    newSelectDeleteDay.sort((a, b) => parseInt(a) - parseInt(b))
    setSelectDeleteDay(newSelectDeleteDay)
  }

  const handleDeleteDayMinus = (value: string) => {
    // optionsにvalueを追加して、昇順に並び替え
    const newSelectedOptions = [...options, value]
    newSelectedOptions.sort((a, b) => parseInt(a) - parseInt(b))
    setOptions(newSelectedOptions)
    // selectDeleteDayからvalueを削除して、newSelectDeleteDayを昇順に並び替え
    const newSelectDeleteDay = selectDeleteDay.filter((day) => day !== value)
    newSelectDeleteDay.sort((a, b) => parseInt(a) - parseInt(b))
    setSelectDeleteDay(newSelectDeleteDay)
  }

  const onClickSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      user: user?.uid || "",
      name: formInputs.name,
      note: formInputs.note,
      value: formInputs.schedule,
      repeatDays: selectedDays,
      CustomAddDay: selectAddDay,
      CustomDeleteDay: selectDeleteDay,
      staticAddDay: [],
      staticDeleteDay: [],
    }
    const responseId = await addSchedule(data)
    responseId ? router.push(`/admin/calender-detail/${responseId}`) : alert("登録に失敗しました")
  }

  const onClickUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newData = {
      user: data?.user || "",
      name: formInputs.name,
      note: formInputs.note,
      value: formInputs.schedule,
      repeatDays: selectedDays,
      CustomAddDay: selectAddDay,
      CustomDeleteDay: selectDeleteDay,
      staticAddDay: [],
      staticDeleteDay: [],
    }
    await updateSchedule(pageId, newData)
    router.push(`/admin/calender-detail/${pageId}`)
  }

  return {
    formInputs,
    handleAddDayMinus,
    handleAddDayPlus,
    handleDeleteDayMinus,
    handleDeleteDayPlus,
    handleInputChange,
    onClickSubmit,
    options,
    selectAddDay,
    selectDeleteDay,
    selectedDays,
    toggleDay,
    onClickUpdate,
    pageId,
  }
}
