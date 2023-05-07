import cc from "classcat"

type Props = {
  className?: string
  label?: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  type?: "text" | "textarea"
  value?: string
  required?: boolean
}

export const Input = ({
  className,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
  required,
}: Props) => {
  const classNames = cc([
    className,
    "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline",
  ])
  return (
    <div>
      <div className="flex gap-2">
        {label && (
          <label className="block font-bold mb-2" htmlFor="schedule">
            {label}
          </label>
        )}
        {required && (
          <label className="block font-bold mb-2 text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded-lg">必須</label>
        )}
      </div>
      {type === "textarea" && (
        <textarea
          className={classNames}
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          value={value}
        />
      )}
      {type === "text" && (
        <input
          className={classNames}
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
      )}
    </div>
  )
}
