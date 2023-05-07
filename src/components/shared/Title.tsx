import cc from "classcat"

type Props = {
  text: string
  variant?: "main" | "sub"
}

export const Title = ({ text, variant }: Props) => {
  const classNames = cc([
    {
      "text-lg font-bold text-center": variant === undefined,
      "text-2xl font-bold text-center": variant === "main",
      "text-2xl font-bold": variant === "sub",
    },
  ])
  return <h2 className={classNames}>{text}</h2>
}
