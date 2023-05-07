import cc from "classcat"

type Props = {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: Props) => {
  const classes = cc([className, "bg-white rounded-md shadow-md"])
  return <div className={classes}>{children}</div>
}
