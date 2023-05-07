import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { useStore } from "@/globalState/store"
import { getScheduleList } from "@/lib/apiClient"
import { FirebaseStoreWithId } from "@/types"

export const useCalenderList = () => {
  const [dataList, setDataList] = useState<FirebaseStoreWithId[]>([])
  const router = useRouter()
  const user = useStore((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return
      const res = await getScheduleList(user.uid)
      setDataList(res)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickCreate = () => {
    router.push("/admin/calender-setting")
  }

  const onClickCard = (id: string) => {
    router.push(`/admin/calender-detail/${id}`)
  }

  return {
    onClickCreate,
    onClickCard,
    dataList,
  }
}
