import { CustomSelector } from "./CustomSelector"
import { useCalenderSetting } from "./useCalenderSetting"

import { Button } from "@/components/shared/Button"
import { Input } from "@/components/shared/Input"
import { AdminLayout } from "@/components/shared/LayoutParts/AdminLayout"
import { Title } from "@/components/shared/Title"
import { WeekdaySelector } from "@/components/shared/WeekdaySelector"

export const CalenderSetting = () => {
  const {
    formInputs,
    handleAddDayMinus,
    handleAddDayPlus,
    handleDeleteDayMinus,
    handleDeleteDayPlus,
    handleInputChange,
    options,
    selectAddDay,
    selectDeleteDay,
    selectedDays,
    toggleDay,
    onClickSubmit,
    onClickUpdate,
    pageId,
  } = useCalenderSetting()

  return (
    <AdminLayout>
      <form
        className="container mx-auto my-8 flex flex-col gap-8 bg-white p-4 rounded-md"
        onSubmit={pageId ? onClickUpdate : onClickSubmit}
      >
        <Title text="基本情報の設定" />
        <Input
          label="名前"
          name="name"
          onChange={handleInputChange}
          placeholder="名前を入力（例：店名○○など画面の上に表示されます。）"
          required
          value={formInputs.name}
        />
        <Input
          label="日程名"
          name="schedule"
          onChange={handleInputChange}
          placeholder="日程名を入力（例：営業日など画面の下に表示されます。）"
          required
          value={formInputs.schedule}
        />
        <Input
          label="備考"
          name="note"
          onChange={handleInputChange}
          placeholder={`表示したい内容を入力\n（例：営業時間：9：00〜18：00）\n画面の下に表示されます。`}
          type="textarea"
          value={formInputs.note}
        />
        <WeekdaySelector label="曜日" selectedDays={selectedDays} toggleDay={toggleDay} />
        <CustomSelector
          handleAddDayMinus={handleAddDayMinus}
          handleAddDayPlus={handleAddDayPlus}
          handleDeleteDayMinus={handleDeleteDayMinus}
          handleDeleteDayPlus={handleDeleteDayPlus}
          label="カスタム"
          options={options}
          selectAddDay={selectAddDay}
          selectDeleteDay={selectDeleteDay}
        />
        <p>
          上記の条件で設定できない日を追加・変更する場合は作成後にカレンダー上で変更してください。
        </p>
        <Button text="作成" type="submit" variant="primary" />
      </form>
    </AdminLayout>
  )
}
