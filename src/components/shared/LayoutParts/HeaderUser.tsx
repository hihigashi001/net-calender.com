type HeaderProps = {
  onClickHomePage: () => void
}

export const HeaderUser = ({ onClickHomePage }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-gray-700 py-4 px-8">
      <div className="flex items-center" onClick={onClickHomePage}>
        <h1 className="font-bold text-2xl text-white hover:opacity-50 cursor-pointer">
          ネットカレンダー
        </h1>
      </div>
    </header>
  )
}
