import React from "react"

type Props = {
  children: React.ReactNode
  variant?: "center"
}

export const PageWrapper = ({ children, variant }: Props) => {
  if (variant === "center") {
    return <div className="flex justify-center items-center w-full h-screen">{children}</div>
  } else {
    return <div className="flex flex-col w-full h-screen">{children}</div>
  }
}
