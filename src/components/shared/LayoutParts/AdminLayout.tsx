import { Footer } from "./Footer"
import { Header } from "./Header"
import { useAdminLayout } from "./useAdminLayout"

type Props = {
  children: React.ReactNode
}

export const AdminLayout = ({ children }: Props) => {
  const { user, onClickLoginPage, onClickHomePage } = useAdminLayout()

  return (
    <div className="flex flex-col min-h-screen">
      <Header onClickHomePage={onClickHomePage} onClickLoginPage={onClickLoginPage} user={user} />
      <main className="flex-grow my-4">
        <div className="container mx-auto p-2">{children}</div>
      </main>
      <Footer onClickHomePage={onClickHomePage} />
    </div>
  )
}
