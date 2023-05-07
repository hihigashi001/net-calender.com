import { useEffect, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"

import GoogleIcon from "@/assets/icons/google-logo.svg"

type Props = {
  type: "google-logo" | "close" | "down"
  height?: number
  width?: number
  transform?: string
}

export const Icon = ({ type, height = 20, width = 20, transform = "" }: Props) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (transform) {
      setStyle({ transform })
    }
  }, [transform])

  if (type === "google-logo") return <GoogleIcon height={height} width={width} />
  if (type === "down") return <AiOutlineDown height={height} style={style} width={width} />
  if (type === "close") return <GrFormClose height={height} width={width} />
  return <></>
}
