import type { User } from "firebase/auth"

type HeaderProps = {
  onClickLoginPage: () => void
  onClickHomePage: () => void
  user: User | null
}

export const Header = ({ onClickLoginPage, onClickHomePage, user }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-gray-700 py-4 px-8">
      <div className="flex items-center" onClick={onClickHomePage}>
        <h1 className="font-bold text-2xl text-white hover:opacity-50 cursor-pointer">
          ネットカレンダー
        </h1>
      </div>
      {user ? (
        <div className="flex items-center" onClick={onClickLoginPage}>
          <div className="text-white hover:opacity-50 cursor-pointer">ログアウト</div>
        </div>
      ) : (
        <div className="flex items-center" onClick={onClickLoginPage}>
          <div className="text-white hover:opacity-50 cursor-pointer">ログイン</div>
        </div>
      )}
    </header>
  )
}
