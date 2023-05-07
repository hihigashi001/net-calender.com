import { FaMedapps } from "react-icons/fa"

import { Calendar } from "./Calendar"
import { useCalenderDetail } from "./useCalenderDetail"

import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { AdminLayout } from "@/components/shared/LayoutParts/AdminLayout"
import { Loading } from "@/components/shared/Loading"
import { Title } from "@/components/shared/Title"

export const CalenderDetail = () => {
  const { data, loading, onClickDelete, onClickSetting, onClickSubmit } = useCalenderDetail()

  if (loading)
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )

  return (
    <AdminLayout>
      <Card className="p-2 my-2">
        <Title text={data?.name || ""} variant="sub" />
        <Calendar />
        <div className="flex gap-1 mt-2">
          {data?.note && <FaMedapps color="gray" size={20} />}
          <pre className="text-gray-700 font-thin text-sm">
            {data?.note}
          </pre>
        </div>
      </Card>
      <div className="flex justify-end gap-2">
        <Button onClick={onClickDelete} text="削除" variant="danger" />
        <Button onClick={onClickSetting} text="初期化する" />
        <Button onClick={onClickSubmit} text="決定する" variant="primary" />
      </div>
    </AdminLayout>
  )
}
