import { Footer } from "./Footer"
import { HeaderUser } from "./HeaderUser"
import { useUserLayout } from "./useUserLayout"

type Props = {
  children: React.ReactNode
}

export const UserLayout = ({ children }: Props) => {
  const { onClickHomePage } = useUserLayout()
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderUser onClickHomePage={onClickHomePage} />
      <main className="flex-grow my-4">
        <div className="container mx-auto p-2">{children}</div>
      </main>
      <Footer onClickHomePage={onClickHomePage} />
    </div>
  )
}
