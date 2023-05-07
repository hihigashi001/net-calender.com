import React from "react"

import { Card } from "./Card"
import { useCalenderList } from "./useCalenderList"

import { Button } from "@/components/shared/Button"
import { AdminLayout } from "@/components/shared/LayoutParts/AdminLayout"
import { Title } from "@/components/shared/Title"
import { VStack } from "@/components/shared/VStack"

export const CalenderList = () => {
  const { dataList, onClickCreate, onClickCard } = useCalenderList()

  return (
    <AdminLayout>
      <VStack gap>
        <div className="flex justify-between w-full">
          <Title text="カレンダ一覧" />
          <Button onClick={onClickCreate} text="カレンダーを追加する" />
        </div>
        <div className="w-full">
          {dataList.map((data) => {
            return <Card data={data} key={data.id} onClickCard={onClickCard} />
          })}
          {dataList.length === 0 ? (
            <div>
              まだカレンダーが1つも作られていません。カレンダー作成ボタンをクリックして新規作成してください。
            </div>
          ) : (
            <div>
              URLを共有することで、カレンダーをオンラインで簡単に共有できます。営業日やイベント情報の周知にぜひご利用ください。共有ボタンをクリックすると、選択したSNSでURLが自動的に発信されます。
            </div>
          )}
        </div>
      </VStack>
    </AdminLayout>
  )
}
