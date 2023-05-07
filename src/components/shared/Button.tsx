import cc from "classcat"

import { Icon } from "./Icon"

type Props = {
  className?: string
  icon?: "google-logo"
  onClick?: () => void
  text: string
  variant?: "link" | "primary" | "secondary" | "danger"
  type?: "submit"
}

export const Button = ({ text, variant, className, icon, onClick, type }: Props) => {
  const classNames = cc([
    className,
    {
      "py-2 px-4 bg-white hover:opacity-50 text-gray-800 font-semibold border border-gray-400 rounded shadow inline-flex justify-center items-center gap-2":
        variant === undefined,
      "text-blue-500 hover:text-blue-800": variant === "link",
      "bg-blue-500 hover:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline":
        variant === "primary",
      "bg-red-500 hover:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline":
        variant === "danger",
    },
  ])

  return (
    <button className={classNames} onClick={onClick} type={type}>
      {icon && <Icon type={icon} />} {text}
    </button>
  )
}
