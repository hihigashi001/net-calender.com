import cc from "classcat"
import React from "react"

type Props = {
  children: React.ReactNode
  gap?: boolean
  className?: string
}

export const VStack = ({ children, gap = false, className }: Props) => {
  const classNames = cc([
    className,
    {
      "flex flex-col justify-center items-center": gap === false,
      "flex flex-col justify-center items-center gap-12": gap === true,
    },
  ])

  return <div className={classNames}>{children}</div>
}
