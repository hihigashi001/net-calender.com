import { FaMedapps } from "react-icons/fa"

import { Calendar } from "./Calendar"
import { useCalenderDetail } from "./useCalenderDetail"

import { Card } from "@/components/shared/Card"
import { UserLayout } from "@/components/shared/LayoutParts/UserLayout"
import { Loading } from "@/components/shared/Loading"
import { Title } from "@/components/shared/Title"

export const CalenderDetail = () => {
  const { data, loading } = useCalenderDetail()

  if (loading)
    return (
      <UserLayout>
        <Loading />
      </UserLayout>
    )

  return (
    <UserLayout>
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
    </UserLayout>
  )
}
