import { MultiSelect } from "@/components/shared/MultiSelect"

type Props = {
  label?: string
  selectAddDay: string[]
  selectDeleteDay: string[]
  options: string[]
  handleAddDayPlus: (value: string) => void
  handleAddDayMinus: (value: string) => void
  handleDeleteDayPlus: (value: string) => void
  handleDeleteDayMinus: (value: string) => void
}

export const CustomSelector: React.FC<Props> = ({
  label,
  selectAddDay,
  selectDeleteDay,
  options,
  handleAddDayPlus,
  handleAddDayMinus,
  handleDeleteDayPlus,
  handleDeleteDayMinus,
}) => {
  return (
    <div>
      {label && (
        <label className="block font-bold mb-2" htmlFor="schedule">
          {label}
        </label>
      )}
      <div>
        <div>毎月特定の日を追加</div>
        <MultiSelect
          onRemove={handleAddDayMinus}
          onSelect={handleAddDayPlus}
          options={options}
          selectValues={selectAddDay}
        />
        <div>毎月特定の日を削除</div>
        <MultiSelect
          onRemove={handleDeleteDayMinus}
          onSelect={handleDeleteDayPlus}
          options={options}
          selectValues={selectDeleteDay}
        />
      </div>
    </div>
  )
}
