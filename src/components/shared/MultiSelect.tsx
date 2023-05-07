import { useState } from "react"

import { Icon } from "./Icon"

type Props = {
  onRemove: (value: string) => void
  onSelect: (value: string) => void
  options: string[]
  selectValues: string[]
}

export const MultiSelect = ({ onRemove, onSelect, options, selectValues }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectValuesObject = selectValues.map((value) => {
    return { value, label: value }
  })
  const optionsObject = options.map((value) => {
    return { value, label: value }
  })
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <div className="w-full flex flex-col items-center relative">
        <div className="w-full">
          <div
            className="my-2 p-1 flex border border-gray-200 bg-white rounded "
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(!isOpen)
            }}
          >
            <div className="flex flex-auto flex-wrap">
              {selectValuesObject.map((option, i) => (
                <div
                  className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 "
                  key={i}
                >
                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                    {option.label}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemove(option.value)
                    }}
                  >
                    <Icon type={"close"} />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
              <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                <Icon transform={isOpen ? "rotate(180deg)" : ""} type={"down"} />
              </button>
            </div>
          </div>
        </div>
        {options.length > 0 && isOpen && (
          <div className="absolute shadow top-full bg-white z-40 w-full lef-0 rounded max-h-96 overflow-y-auto">
            <div className="flex flex-col w-full">
              {optionsObject.map((option, i) => (
                <div
                  className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-blue-100"
                  key={i}
                  onClick={() => {
                    onSelect(option.value)
                  }}
                >
                  <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-blue-100">
                    <div className="w-full items-center flex">
                      <div className="mx-2 leading-6">{option.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
