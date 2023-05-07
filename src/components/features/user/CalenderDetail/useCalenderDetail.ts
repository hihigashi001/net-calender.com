import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { useStore } from "@/globalState/store"
import { getSchedule } from "@/lib/apiClient"

export const useCalenderDetail = () => {
  const router = useRouter()
  const pageId = router.query.id as string
  const [loading, setLoading] = useState(true)
  const setData = useStore((state) => state.setData)
  const data = useStore((state) => state.data)

  useEffect(() => {
    if (!pageId) return
    setLoading(true)
    getSchedule(pageId).then((data) => {
      setData(data)
    })
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId])

  return {
    data,
    loading,
  }
}
